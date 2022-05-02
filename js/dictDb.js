DictDb = (() => {
  let dbTemp = {};

  dbTemp.db = null;
  dbTemp.db2 = null;

  dbTemp.factory = (dbDir, dbDir2) => {
    // 讀取數據庫數據
    //console.log(dbDir);
    Promise.all([axios.get(dbDir, { responseType: 'arraybuffer' }), axios.get(dbDir2, { responseType: 'arraybuffer' })])
      .then(function (response) {
        dbTemp.db = new window.SQL.Database(new Uint8Array(response[0].data));
		dbTemp.db2 = new window.SQL.Database(new Uint8Array(response[1].data));
        console.info("數據庫初始化完成");
        dicLoaded(queryButt); // 修改查詢按鈕
      })
      .catch(function (error) {
        console.info("數據庫初始化失敗", error);
        displayAlert('數據庫加載失敗，請刷新或聯繫站長!', outputAlert, 'alert-danger', false);
      });
  }

  dbTemp.hasDb = () => {
    return dbTemp.db === null ? false : true
  }
  
  dbTemp.hasDb2 = () => {
    return dbTemp.db2 === null ? false : true
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

  return dbTemp;
})();