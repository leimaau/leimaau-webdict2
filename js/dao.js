/*
 dao層
*/
MainQuery = (() => {
  let tempObj = {};
  
  // 查詢繁體 
  tempObj.queryTrad = (searchValue, selval) => {
	if(selval.length == 0) return []; // 資料無選擇則返回空數組
	let querySQL = "";
	for (i in selval) {
	  querySQL += "select '" + selval[i] + "' year,* from tab_" + selval[i] + " union ";  // 拼接查詢
	};
    querySQL = "select * from(" + querySQL.replace(/ union $/gi,"") + ") where trad = ? order by year";
    return DictDb.execParam(querySQL, [searchValue]);
  };
  
  // 查詢簡體
  tempObj.querySimp = (searchValue, selval) => {
	if(selval.length == 0) return []; // 資料無選擇則返回空數組
	let querySQL = "";
	for (i in selval) {
	  querySQL += "select '" + selval[i] + "' year,* from tab_" + selval[i] + " union ";  // 拼接查詢
	};
    querySQL = "select * from(" + querySQL.replace(/ union $/gi,"") + ") where simp = ? order by year";
    return DictDb.execParam(querySQL, [searchValue]);
  };
  
  // 查詢無調粵拼
  tempObj.queryJyutping = (searchValue, selval) => {
	if(selval.length == 0) return []; // 資料無選擇則返回空數組
	let querySQL = "";
	for (i in selval) {
	  querySQL += "select '" + selval[i] + "' year,* from tab_" + selval[i] + " union ";  // 拼接查詢
	};
    querySQL = "select * from(" + querySQL.replace(/ union $/gi,"") + `) where jyutping = '${searchValue}1' or jyutping = '${searchValue}2' or jyutping = '${searchValue}3' or jyutping = '${searchValue}4' or jyutping = '${searchValue}5' or jyutping = '${searchValue}6' order by year`;
	return DictDb.execParam(querySQL);
  };
  
  // 查詢有調粵拼
  tempObj.queryJyut6ping3 = (searchValue, selval) => {
	if(selval.length == 0) return []; // 資料無選擇則返回空數組
	let querySQL = "";
	for (i in selval) {
	  querySQL += "select '" + selval[i] + "' year,* from tab_" + selval[i] + " union ";  // 拼接查詢
	};
    querySQL = "select * from(" + querySQL.replace(/ union $/gi,"") + ") where jyutping = ? order by year";
    return DictDb.execParam(querySQL, [searchValue]);
  };
  
  return tempObj;
})();
