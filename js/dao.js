/*
 dao層
*/
MainQuery = (() => {
	let tempObj = {};
	
	// 查詢表格 
	tempObj.queryTable = (searchValue, selval, queryType) => {
		if(selval.length == 0) return []; // 資料無選擇則返回空數組
		let querySQL = "";
		for (let i in selval) {
			querySQL += `select '${selval[i]}' year,* from tab_${selval[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'char') { // 查詢繁體
			querySQL += ") where trad = ? order by year";
		} else if (queryType == 'char_simp') { // 查詢簡體
			querySQL += ") where simp = ? order by year";
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += `) where jyutping = '${searchValue}1' or jyutping = '${searchValue}2' or jyutping = '${searchValue}3' or jyutping = '${searchValue}4' or jyutping = '${searchValue}5' or jyutping = '${searchValue}6' order by year`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ") where jyutping = ? order by year";
		};
		return DictDb.execParam( querySQL, queryType == 'jyutping' ? [] : [searchValue] );
	};
	
	return tempObj;
})();
