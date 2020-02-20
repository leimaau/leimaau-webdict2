function testDbInsert(){
  // 读取数据库数据
  axios.get("./db/test.db3", {responseType: 'arraybuffer'})
  .then(function (response) {
      let db = new window.SQL.Database(new Uint8Array(response.data));
      // 执行查询
      sqlstr = "INSERT INTO test VALUES (2, 'CCC');"
      db.run(sqlstr);
      console.info("ok");

      let r = db.exec("SELECT * from test;");
      // 解析数据
      let obj = dbToObj(r);
      console.info(obj);
  })
  .catch(function (error) {
      console.info(error);
  });
}

function testDb(){
   // 读取数据库数据
   axios.get("./db/test.db3", {responseType: 'arraybuffer'})
   .then(function (response) {
       let db = new window.SQL.Database(new Uint8Array(response.data));
       // 执行查询
       let s = new Date().getTime();
       let r = db.exec("SELECT * from test;");
       let e = new Date().getTime();
       console.info("查询数据耗时：" + (e - s) + "ms");
       // 解析数据
       let obj = dbToObj(r);
       console.info(obj);
   })
   .catch(function (error) {
       console.info(error);
   });
}

 // 转驼峰表示：func.camel('USER_ROLE',true) => UserRole
    // 转驼峰表示：func.camel('USER_ROLE',false) => userRole
    const camel = (str, firstUpper = false) => {
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
   const ArraytoObj = (keys = [], values = []) => {
    if (keys.length === 0 || values.length === 0) return {};
    const len = keys.length > values.length ? values.length : keys.length;
    const obj = {};
    for (let i = 0; i < len; ++i) {
        obj[keys[i]] = values[i]
    }
    return obj;
  };

  // 把数组里面的所有转化为驼峰命名
  const camelArr = (arrs = []) => {
      let _arrs = [];
      arrs.map(function (item) {
          _arrs.push(camel(item));
      });
      return _arrs;
  };

  // 读取数据库
  // 1.把columns转化为驼峰；
  // 2.把columns和values进行组合；
  const dbToObj = (_data = {}) => {
      let _res = [];
      _data.map(function (item) {
          let _columns = camelArr(item.columns);
          item.values.map(function (values) {
              _res.push(ArraytoObj(_columns, values));
          });
      });
      return _res;
  };

// 入口
// (async () => {
// 	await Promise.all([testDb()]);
// })()
