/*
 dao層
*/
MainQuery = (() => {
	let tempObj = {};
	
	// (單字)查詢多個表
	tempObj.queryTable = (searchValue, selVal, queryType) => {
		let querySQL = '';
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' YEAR,* from ${selVal[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'char') { // 查詢繁體
			querySQL += ') where trad = ? order by YEAR';
		} else if (queryType == 'char_simp') { // 查詢簡體
			querySQL += ') where simp = ? order by YEAR';
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += `) where jyutping GLOB '${searchValue}[1-6]' order by YEAR`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ') where jyutping = ? order by YEAR';
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《廣韻》
	tempObj.queryTableOne_triungkox = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word1 = '${searchValue}' or word2 = '${searchValue}' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調拼音
			querySQL += ` where pinyin = '${searchValue}' or pinyin GLOB '${searchValue}[xh]' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調拼音
			querySQL += ' where pinyin = ? order by CAST(ID as INTEGER)';
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, (queryType != 'jyut6ping3') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《江湖尺牘分韻撮要》
	tempObj.queryTableOne_gw = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ' where word = ? order by CAST(ID as INTEGER)';
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-8]' or jyutping = '${searchValue}7°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ` where jyutping = ? or jyutping = '${searchValue}°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《英華分韻撮要》
	tempObj.queryTableOne_jw = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word GLOB '*${searchValue}*' or word_comp GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-8]' or jyutping = '${searchValue}7°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ` where jyutping = ? or jyutping = '${searchValue}°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, (queryType != 'jyut6ping3') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《粵音韻彙》
	tempObj.queryTableOne_jj = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-6]' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ` where jyutping = ? order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, (queryType != 'jyut6ping3') ? [] : [searchValue] );
	};
	
	
	// 查詢單個表，用於在線分詞的基礎表，目前是從segDict.js獲取，tab_segdict停用，需要時導入數據使用
	/*
	tempObj.queryTableOne_segdict = () => {
		let querySQL = 'select * from tab_segdict';
		return DictDb.execParam( querySQL, [], false );
	};
	*/
	
	
	// 查詢粵拼或IPA，用於在線標註，目前是從segDict.js獲取，tab_nn_review、tab_nnt_review、tab_gz_review停用，需要時導入數據使用
	/*
	tempObj.queryJyutping = (inputChar, signText_type, signResult_type) => {
		let querySQL = `select ${signText_type}, group_concat(jyutping, '/') jyutping, group_concat(ipa, '/') ipa from ${signResult_type} where ${signText_type}='${inputChar}' group by ${signText_type}`;
		return DictDb.execParam( querySQL, [] );
	};
	*/
	
	
	// (詞彙)查詢多個表
	tempObj.queryTablePhrase = (searchValue, selVal, queryType) => {
		let querySQL = '';
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
		} else if (queryType == 'phrase_expl') { // 釋義反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	// (詞彙)查詢多個表，用於《南寧社會概況》、《邕寧縣誌》和《南寧童謠整理》
	tempObj.queryTable_proverb = (searchValue, selVal, queryType) => {
		let querySQL = '';
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' YEAR,* from ${selVal[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'phrase') { // 查詢繁體
			querySQL += `) where trad GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		} else if (queryType == 'phrase_simp') { // 查詢簡體
			querySQL += `) where simp GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		}else if (queryType == 'phrase_jyutping' || queryType == 'phrase_jyut6ping3') { // 查詢粵拼
			querySQL += ') where 1=2';
		} else if (queryType == 'phrase_expl') { // 釋義反查
			querySQL += `) where note GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	
	return tempObj;
})();
