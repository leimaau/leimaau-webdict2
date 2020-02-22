/*
 dao層
*/
MainQuery = (() => {
	let tempObj = {};
	
	// 查詢多個表
	tempObj.queryTable = (searchValue, selVal, queryType) => {
		let querySQL = "";
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' year,* from tab_${selVal[i]} union `;  // 拼接查詢
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
	
	// 查詢單個表 用於《廣韻》和《分韻撮要》
	tempObj.queryTableOne = (searchValue, selVal, queryType) => {
		let querySQL = `select * from tab_${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += " where word = ? order by ID";
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping = '${searchValue}1' or jyutping = '${searchValue}2' or jyutping = '${searchValue}3' or jyutping = '${searchValue}4' or jyutping = '${searchValue}5' or jyutping = '${searchValue}6' order by ID`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += " where jyutping = ? order by ID";
		};
		return DictDb.execParam( querySQL, queryType == 'jyutping' ? [] : [searchValue] );
	};
	
	return tempObj;
})();
