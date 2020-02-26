/*
 dao層
*/
MainQuery = (() => {
	let tempObj = {};
	
	// (單字)查詢多個表
	tempObj.queryTable = (searchValue, selVal, queryType) => {
		let querySQL = "";
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' YEAR,* from ${selVal[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'char') { // 查詢繁體
			querySQL += ") where trad = ? order by YEAR";
		} else if (queryType == 'char_simp') { // 查詢簡體
			querySQL += ") where simp = ? order by YEAR";
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += `) where jyutping GLOB '${searchValue}[1-6]' order by YEAR`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ") where jyutping = ? order by YEAR";
		} else if (queryType == 'expl') { // 詞例反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《廣韻》和《分韻撮要》
	tempObj.queryTableOne = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += " where word = ? order by ID";
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-8]' order by ID`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += " where jyutping = ? order by ID";
		} else if (queryType == 'expl') { // 詞例反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by ID`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl') ? [] : [searchValue] );
	};
	
	// (詞彙)查詢多個表
	tempObj.queryTablePhrase = (searchValue, selVal, queryType) => {
		let querySQL = "";
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' YEAR,* from ${selVal[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'phrase') { // 查詢繁體
			querySQL += `) where trad GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_simp') { // 查詢簡體
			querySQL += `) where simp GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_jyutping') { // 查詢無調粵拼
			querySQL += `) where replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '${searchValue}' order by YEAR`;
		} else if (queryType == 'phrase_jyut6ping3') { // 查詢有調粵拼
			querySQL += `) where jyutping GLOB '${searchValue}' order by YEAR`;
		} else if (queryType == 'phrase_expl') { // 詞例反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	// (詞彙)查詢單個表，用於《南寧城市信息》
	tempObj.queryTableOne_nncity = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'phrase') { // 查詢繁體
			querySQL += ` where trad GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_simp') { // 查詢簡體
			querySQL += ` where simp GLOB '*${searchValue}*' order by YEAR`;
		}else if (queryType == 'phrase_jyutping') { // 查詢無調粵拼
			querySQL += ' where 1=2';
		} else if (queryType == 'phrase_jyut6ping3') { // 查詢有調粵拼
			querySQL += ' where 1=2';
		} else if (queryType == 'phrase_expl') { // 詞例反查
			querySQL += ` where trad GLOB '*${searchValue}*' or simp GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	
	return tempObj;
})();
