DictDb = (() => {
  let dbTemp = {};

  dbTemp.db = null;
  dbTemp.db2 = null;
  dbTemp.db3 = null;
  
  // sql.js 1.x 全局 SQL 实例（避免重复初始化）
  let sqlInstance = null;
  
  // 初始化 sql.js（仅初始化一次）
  const initSQL = async () => {
    if (!sqlInstance) {
      console.info('初始化 sql.js WebAssembly...');
      sqlInstance = await initSqlJs({
        locateFile: file => `https://fastly.jsdelivr.net/npm/sql.js@1.10.3/dist/${file}`
      });
      console.info('sql.js 初始化完成');
    }
    return sqlInstance;
  };
  
  // IndexedDB管理类
  const DBManager = {
    dbName: 'DictCache',
    version: 2, // 增加版本号以支持新的存储结构
    db: null,
    
    init: function() {
      return new Promise((resolve, reject) => {
        try {
          const request = indexedDB.open(this.dbName, this.version);
          
          request.onerror = (event) => {
            console.warn('IndexedDB打开失败，将禁用缓存功能:', event);
            // IndexedDB失败时仍然resolve，只是禁用缓存功能
            this.db = null;
            resolve();
          };
          
          request.onsuccess = (event) => {
            this.db = event.target.result;
            resolve();
          };
          
          request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('databases')) {
              db.createObjectStore('databases');
            }
            if (!db.objectStoreNames.contains('etags')) {
              db.createObjectStore('etags');
            }
          };
        } catch (error) {
          console.warn('IndexedDB初始化异常，将禁用缓存功能:', error);
          // 任何异常都resolve，只是禁用缓存功能
          this.db = null;
          resolve();
        }
      });
    },
    
    // 保存数据库数据
    saveDatabase: function(key, data) {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['databases'], 'readwrite');
          const store = transaction.objectStore('databases');
          const request = store.put(data, key);
          
          request.onsuccess = () => resolve();
          request.onerror = (event) => {
            console.warn(`IndexedDB保存失败，但不影响程序运行: ${event}`);
            // 保存失败时仍然resolve，不阻止程序继续运行
            resolve();
          };
        } catch (error) {
          console.warn(`IndexedDB保存操作异常，但不影响程序运行: ${error}`);
          // 任何异常都resolve，不阻止程序继续运行
          resolve();
        }
      });
    },
    
    // 获取数据库数据
    getDatabase: function(key) {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['databases'], 'readonly');
          const store = transaction.objectStore('databases');
          const request = store.get(key);
          
          request.onsuccess = () => {
            // 如果没有找到数据，返回null而不是抛出错误
            resolve(request.result || null);
          };
          
          request.onerror = (event) => {
            console.warn(`IndexedDB读取失败，将尝试从网络加载: ${event}`);
            // 读取失败时返回null，让程序继续从网络加载
            resolve(null);
          };
        } catch (error) {
          console.warn(`IndexedDB操作异常，将尝试从网络加载: ${error}`);
          // 任何异常都返回null，让程序继续从网络加载
          resolve(null);
        }
      });
    },
    
    // 保存ETag信息
    saveETag: function(key, etag) {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['etags'], 'readwrite');
          const store = transaction.objectStore('etags');
          const request = store.put(etag, key);
          
          request.onsuccess = () => resolve();
          request.onerror = (event) => {
            console.warn(`ETag保存失败: ${event}`);
            resolve();
          };
        } catch (error) {
          console.warn(`ETag保存异常: ${error}`);
          resolve();
        }
      });
    },
    
    // 获取ETag信息
    getETag: function(key) {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['etags'], 'readonly');
          const store = transaction.objectStore('etags');
          const request = store.get(key);
          
          request.onsuccess = () => {
            resolve(request.result || null);
          };
          
          request.onerror = (event) => {
            console.warn(`ETag读取失败: ${event}`);
            resolve(null);
          };
        } catch (error) {
          console.warn(`ETag读取异常: ${error}`);
          resolve(null);
        }
      });
    },
    
    // 清除特定数据库的缓存
    clearDatabaseCache: function(key) {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['databases', 'etags'], 'readwrite');
          const dbStore = transaction.objectStore('databases');
          const etagStore = transaction.objectStore('etags');
          
          dbStore.delete(key);
          etagStore.delete(key);
          
          transaction.oncomplete = () => {
            console.info(`已清除数据库 ${key} 的缓存`);
            resolve();
          };
          
          transaction.onerror = (event) => {
            console.warn(`清除缓存失败: ${event}`);
            resolve();
          };
        } catch (error) {
          console.warn(`清除缓存异常: ${error}`);
          resolve();
        }
      });
    },
    
    // 清除所有缓存
    clearAllCache: function() {
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db.transaction(['databases', 'etags'], 'readwrite');
          const dbStore = transaction.objectStore('databases');
          const etagStore = transaction.objectStore('etags');
          
          dbStore.clear();
          etagStore.clear();
          
          transaction.oncomplete = () => {
            console.info('已清除所有缓存');
            resolve();
          };
          
          transaction.onerror = (event) => {
            console.warn(`清除所有缓存失败: ${event}`);
            resolve();
          };
        } catch (error) {
          console.warn(`清除所有缓存异常: ${error}`);
          resolve();
        }
      });
    }
  };

  // 加载单个数据库
  const loadDatabase = async (dbDir, dbKey) => {
    try {
      console.info(`开始加载数据库: ${dbKey}`);
      
      // 确保 sql.js 已初始化
      const SQL = await initSQL();
      
      // 先尝试从IndexedDB获取（如果IndexedDB可用）
      if (DBManager.db) {
        console.info(`尝试从IndexedDB加载数据库 ${dbKey}...`);
        
        // 获取缓存的ETag
        const cachedETag = await DBManager.getETag(dbKey);
        console.info(`缓存的ETag: ${cachedETag || '无'}`);
        
        // 发起HEAD请求检查文件是否更新
        try {
          const headResponse = await axios.head(dbDir);
          const serverETag = headResponse.headers.etag;
          const lastModified = headResponse.headers['last-modified'];
          
          console.info(`服务器ETag: ${serverETag || '无'}`);
          console.info(`服务器Last-Modified: ${lastModified || '无'}`);
          
          // 如果ETag不匹配，清除缓存
          if (cachedETag && serverETag && cachedETag !== serverETag) {
            console.info('ETag不匹配，文件已更新，清除缓存');
            await DBManager.clearDatabaseCache(dbKey);
          } else if (cachedETag && serverETag && cachedETag === serverETag) {
            // ETag匹配，尝试使用缓存
            const cachedData = await DBManager.getDatabase(dbKey);
            if (cachedData) {
              console.info(`从IndexedDB加载数据库 ${dbKey} 成功（ETag匹配）。`);
              return new SQL.Database(new Uint8Array(cachedData));
            }
          }
        } catch (headError) {
          console.warn('HEAD请求失败，继续使用GET请求:', headError);
          // HEAD请求失败时，尝试使用现有缓存
          const cachedData = await DBManager.getDatabase(dbKey);
          if (cachedData) {
            console.info(`从IndexedDB加载数据库 ${dbKey} 成功（HEAD请求失败，使用缓存）。`);
            return new SQL.Database(new Uint8Array(cachedData));
          }
        }
      } else {
        console.info('IndexedDB不可用，跳过缓存步骤');
      }

      // 如果缓存中没有或已过期，则从服务器加载
      console.info('发起网络请求...');
      const response = await axios.get(dbDir, { 
        responseType: 'arraybuffer'
      });
      console.info(`网络请求完成，数据大小: ${response.data.byteLength}`);
      
      // 获取服务器的ETag和Last-Modified
      const serverETag = response.headers.etag;
      const lastModified = response.headers['last-modified'];
      console.info(`获取到服务器ETag: ${serverETag || '无'}`);
      console.info(`获取到服务器Last-Modified: ${lastModified || '无'}`);
      
      let data = response.data;
      
      // 根据文件扩展名判断压缩类型
      const isGzip = dbDir.endsWith('.gz');
      const isBrotli = dbDir.endsWith('.br');
      
      if (isGzip) {
        console.info('处理gzip数据...');
        data = await decompressGzip(data);
      } else if (isBrotli) {
        console.info('处理brotli数据...');
        data = await decompressBrotli(data);
      }
      
      console.info('创建SQLite数据库实例...');
      const db = new SQL.Database(new Uint8Array(data));
      console.info('SQLite数据库实例创建成功');
      
      // 如果IndexedDB可用，保存数据和ETag到缓存
      if (DBManager.db) {
        console.info('保存到IndexedDB...');
        await DBManager.saveDatabase(dbKey, data);
        if (serverETag) {
          await DBManager.saveETag(dbKey, serverETag);
        }
        console.info('保存到IndexedDB完成');
      }
      
      return db;
    } catch (error) {
      console.error(`加载数据库 ${dbKey} 失败:`, error.message || error);
      displayAlert('數據庫加載失敗，請刷新或聯繫站長!', outputAlert, 'alert-danger', false);
      throw error;
    }
  };

  // Gzip解压函数
  // 注意: 鉴于服务器已自动解压 .gz 文件，此函数主要用于确认数据格式并避免不必要的解压尝试
  const decompressGzip = async (data) => {
    const uint8Array = new Uint8Array(data);

    // 检查数据头部，判断是否为标准gzip格式 (0x1f 0x8b)
    if (uint8Array[0] === 0x1f && uint8Array[1] === 0x8b) {
      console.info('检测到标准gzip格式，尝试解压...');
      try {
        const decompressed = pako.inflate(uint8Array);
        console.info('Gzip解压成功，解压后大小:', decompressed.length);
        return decompressed.buffer;
      } catch (e) {
        console.warn('pako.inflate失败，尝试pako.inflateRaw...', e);
        try {
          const decompressedRaw = pako.inflateRaw(uint8Array);
          console.info('pako.inflateRaw解压成功，解压后大小:', decompressedRaw.length);
          return decompressedRaw.buffer;
        } catch (e2) {
          console.error('Gzip解压彻底失败，返回原始数据。错误:', e2);
          return data; // 解压失败，返回原始数据
        }
      }
    } else {
      // 如果不是标准gzip格式（例如，服务器已自动解压），则直接返回原始数据
      console.info('数据非标准gzip格式（可能已由服务器预解压），直接使用原始数据。');
      return data;
    }
  };

  // Brotli解压函数
  const decompressBrotli = async (data) => {
    const ds = new DecompressionStream('br');
    const writer = ds.writable.getWriter();
    const reader = ds.readable.getReader();
    
    // 写入压缩数据
    await writer.write(new Uint8Array(data));
    await writer.close();
    
    // 读取解压后的数据
    const chunks = [];
    while (true) {
      const {value, done} = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    
    // 合并数据块
    const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    
    return result.buffer;
  };

  dbTemp.factory = async (dbDir, dbDir2, dbDir3) => {
    try {
      // 初始化IndexedDB
      await DBManager.init();
      
      // 加载第一个数据库（基础数据库，必须立即加载）
      dbTemp.db = await loadDatabase(dbDir, 'db1');
      console.info("基础数据库加载完成");
      
      // 其他数据库延迟加载
      setTimeout(async () => {
        try {
          dbTemp.db2 = await loadDatabase(dbDir2, 'db2');
          console.info("数据库2加载完成");
        } catch (error) {
          console.error("数据库2加载失败:", error);
        }
      }, 1000);
      
      setTimeout(async () => {
        try {
          dbTemp.db3 = await loadDatabase(dbDir3, 'db3');
          console.info("数据库3加载完成");
		  dicLoaded(queryButt);
        } catch (error) {
          console.error("数据库3加载失败:", error);
        }
      }, 2000);
      
    } catch (error) {
      console.error("数据库初始化失败:", error);
      displayAlert('數據庫加載失敗，請刷新或聯繫站長!', outputAlert, 'alert-danger', false);
    }
  }

  dbTemp.hasDb = () => {
    return dbTemp.db === null ? false : true
  }
  
  dbTemp.hasDb2 = () => {
    return dbTemp.db2 === null ? false : true
  }
  
  dbTemp.hasDb3 = () => {
    return dbTemp.db3 === null ? false : true
  }

  /*
  原生查詢
  */
  dbTemp.exec = (sql) => {
    if (dbTemp.hasDb() === false) {
      return false;
    }
    return dbTemp.db.exec(sql);
  }
  
  dbTemp.exec2 = (sql) => {
    if (dbTemp.hasDb2() === false) {
      return false;
    }
    return dbTemp.db2.exec(sql);
  }
  
  dbTemp.exec3 = (sql) => {
    if (dbTemp.hasDb3() === false) {
      return false;
    }
    return dbTemp.db3.exec(sql);
  }

  /**
  帶參數的查詢
  sql: 傳入 sql 語句，可以用 :id1 或 ? 做佔位符，例子 "SELECT * FROM hello WHERE a=:aval AND b=:bval"
  param: 傳入參數，可以用數組 [1, 2] 或者對象 {id1:1,id2:2}，例子 {':aval' : 1, ':bval' : 'world'}
  resObj: 返回對象，對象或數組
  */
  dbTemp.execParam = (sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    return result;
  }
  
  dbTemp.execParam2 = (sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db2.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    return result;
  }
  
  dbTemp.execParam3 = (sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db3.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    return result;
  }

  /*
  帶回調函數的查詢
  把結果返回給傳進來的回調函數
  */
  dbTemp.execCallback = (callback, sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    callback(result); // 把結果返回給回調函數的參數
  }
  
  dbTemp.execCallback2 = (callback, sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db2.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    callback(result); // 把結果返回給回調函數的參數
  }
  
  dbTemp.execCallback3 = (callback, sql, param = {}, resObj = true) => {
    let result = [];
    let stmt = dbTemp.db3.prepare(sql);
    stmt.bind(param);
    while (stmt.step()) {
      if (resObj) {
        result.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        result.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 釋放結果集
    callback(result); // 把結果返回給回調函數的參數
  }

  // 缓存管理功能
  dbTemp.clearCache = async (dbKey) => {
    if (DBManager.db) {
      await DBManager.clearDatabaseCache(dbKey);
      console.info(`已清除数据库 ${dbKey} 的缓存`);
    } else {
      console.warn('IndexedDB不可用，无法清除缓存');
    }
  };

  dbTemp.clearAllCache = async () => {
    if (DBManager.db) {
      await DBManager.clearAllCache();
      console.info('已清除所有缓存');
    } else {
      console.warn('IndexedDB不可用，无法清除缓存');
    }
  };

  dbTemp.getCacheInfo = async (dbKey) => {
    if (DBManager.db) {
      const etag = await DBManager.getETag(dbKey);
      const hasData = await DBManager.getDatabase(dbKey);
      return {
        hasData: !!hasData,
        etag: etag,
        dataSize: hasData ? hasData.byteLength : 0
      };
    } else {
      return { hasData: false, etag: null, dataSize: 0 };
    }
  };

  dbTemp.forceReload = async (dbDir, dbKey) => {
    console.info(`强制重新加载数据库 ${dbKey}...`);
    if (DBManager.db) {
      await DBManager.clearDatabaseCache(dbKey);
    }
    return await loadDatabase(dbDir, dbKey);
  };
  
  // 导出 SQL 实例供外部使用（如果需要）
  dbTemp.getSQL = async () => {
    return await initSQL();
  };

  return dbTemp;
})();