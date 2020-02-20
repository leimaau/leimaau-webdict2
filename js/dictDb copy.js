DictDb = (() => {
  let dbTemp = {}
  let db = null

  dbTemp.factory = (dbDir) => {
    // 读取数据库数据
    console.log(dbDir);
    axios.get(dbDir, { responseType: 'arraybuffer' })
      .then(function (response) {
        db = new window.SQL.Database(new Uint8Array(response.data));
        console.info("数据库初始化完成");
      })
      .catch(function (error) {
        console.info("数据库初始化失败", error);
      });
  }

  dbTemp.getDb = () => {
    return db;
  }

  dbTemp.hasDb = () => {
    return db === null ? false : true
  }

  /**
  sql:sql语句
  origin:是否使用原生返回结果
  */
  dbTemp.exec = (sql, origin=false) => {
    if (dbTemp.hasDb() === false){
      return false;
    }
    return origin ? dbTemp.getDb().exec(sql) : DbUtils.dbToObj(dbTemp.getDb().exec(sql));
  }

  /**
  sql: 传入sql语句，可以用“:id1”或“?”做占位符
  param:传入参数，可以用数组“[1,2]”或者对象“{id1:1,id2:2}”
  resType:返回类型，对象或者数组
  */
  dbTemp.execParam = (sql, param={}, resType='obj') => {
    let res = [];
    let stmt = db.prepare(sql);
    stmt.bind(param);
    while(stmt.step()){
      if (resType === 'obj'){
        res.push(stmt.getAsObject()); // {col1: "4", col2: "DDD"}
      } else {
        res.push(stmt.get()); // ["4", "DDD"]
      }
    }
    stmt.free(); // 释放结果集
    return res;
  }

  return dbTemp;
})(window);


(function () {
  var utilsTemp = {}

  // 转驼峰表示：func.camel('USER_ROLE',true) => UserRole
  // 转驼峰表示：func.camel('USER_ROLE',false) => userRole
  utilsTemp.camel = (str, firstUpper = false) => {
    let ret = str.toLowerCase();
    ret = ret.replace(/_([\w+])/g, function (all, letter) {
      return letter.toUpperCase();
    });
    if (firstUpper) {
      ret = ret.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2;
      });
    }
    return ret;
  };

  // 方法传入两个数组，第一个数组为key，第二个数组对应位置为value，此方法在Python中为zip()函数。
  utilsTemp.ArraytoObj = (keys = [], values = []) => {
    if (keys.length === 0 || values.length === 0) return {};
    const len = keys.length > values.length ? values.length : keys.length;
    const obj = {};
    for (let i = 0; i < len; ++i) {
      obj[keys[i]] = values[i]
    }
    return obj;
  };

  // 把数组里面的所有转化为驼峰命名
  utilsTemp.camelArr = (arrs = []) => {
    let _arrs = [];
    arrs.map(function (item) {
      _arrs.push(utilsTemp.camel(item));
    });
    return _arrs;
  };

  // 读取数据库
  // 1.把columns转化为驼峰；
  // 2.把columns和values进行组合；
  utilsTemp.dbToObj = (_data = {}) => {
    let _res = [];
    _data.map(function (item) {
      let _columns = utilsTemp.camelArr(item.columns);
      item.values.map(function (values) {
        _res.push(utilsTemp.ArraytoObj(_columns, values));
      });
    });
    return _res;
  };

  window.DbUtils = utilsTemp;
})();