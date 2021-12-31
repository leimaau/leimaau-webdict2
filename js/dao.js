/*
 dao層
*/
MainQuery = (() => {
	let tempObj = {};
	
	// (單字)查詢多個表
	tempObj.queryTable = (searchValue, selVal, queryType) => {
		let querySQL = '';
		for (let i in selVal) {
			if (/2021/.test(selVal[i])) {
				querySQL += `select '${selVal[i]}'||'_'||substr(sour,1,4) YEAR,* from ${selVal[i]} union `;  // 拼接查詢
			} else {
				querySQL += `select '${selVal[i]}' YEAR,* from ${selVal[i]} union `;  // 拼接查詢
			}
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
		} else if (queryType == 'note') { // 附註反查
			querySQL += `) where note GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl' || queryType == 'note') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《廣韻》韻典版
	/*tempObj.queryTableOne_triungkox = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word1 = '${searchValue}' or word2 = '${searchValue}' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調拼音
			querySQL += ` where pinyin = '${searchValue}' or pinyin GLOB '${searchValue}[xh]' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調拼音
			querySQL += ' where pinyin = ? order by CAST(ID as INTEGER)';
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'note') { // 附註反查
			querySQL += ` where 1=2`;
		};
		return DictDb.execParam( querySQL, (queryType != 'jyut6ping3') ? [] : [searchValue] );
	};*/
	
	// (單字)查詢單個表，用於東方版《廣韻》《集韻》
	tempObj.queryTableOne_triungkox_tung = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word = '${searchValue}' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調拼音
			querySQL += ` where jp GLOB '${searchValue}[1-6]' or bwjp GLOB '${searchValue}[1-6]' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調拼音
			querySQL += ` where jp = ? or bwjp = ? order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'note') { // 附註反查
			querySQL += ` where 1=2`;
		} else if (queryType == 'fanqie') { // 反切反查
			querySQL += ` where fanqie = '${searchValue}'`;
		};
		return DictDb.execParam( querySQL, (queryType != 'jyut6ping3') ? [] : [searchValue, searchValue] );
	};
	
	// (單字)查詢單個表，用於《江湖尺牘分韻撮要》
	tempObj.queryTableOne_gw = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ' where word = ? order by CAST(ID as INTEGER)';
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-8]' or jyutping = '${searchValue}7°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ` where jyutping = ? or jyutping = '${searchValue}°' or jyutping = replace(replace(replace('${searchValue}','1','7'),'3','7°'),'6','8') order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'note') { // 附註反查
			querySQL += ` where 1=2`;
		};
		return DictDb.execParam( querySQL, (queryType == 'jyutping' || queryType == 'expl' || queryType == 'note') ? [] : [searchValue] );
	};
	
	// (單字)查詢單個表，用於《英華分韻撮要》
	tempObj.queryTableOne_jw = (searchValue, selVal, queryType) => {
		let querySQL = `select '${selVal[0]}' YEAR,* from ${selVal[0]}`;
		if (queryType == 'char' || queryType == 'char_simp') { // 查詢繁簡體
			querySQL += ` where word GLOB '*${searchValue}*' or word_comp GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyutping') { // 查詢無調粵拼
			querySQL += ` where jyutping GLOB '${searchValue}[1-8]' or jyutping = '${searchValue}7°' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'jyut6ping3') { // 查詢有調粵拼
			querySQL += ` where jyutping = ? or jyutping = '${searchValue}°' or jyutping = replace(replace(replace('${searchValue}','1','7'),'3','7°'),'6','8') order by CAST(ID as INTEGER)`;
		} else if (queryType == 'expl') { // 釋義反查
			querySQL += ` where expl GLOB '*${searchValue}*' order by CAST(ID as INTEGER)`;
		} else if (queryType == 'note') { // 附註反查
			querySQL += ` where 1=2`;
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
		} else if (queryType == 'note') { // 附註反查
			querySQL += ` where 1=2`;
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
			if (/2021/.test(selVal[i])) {
				querySQL += `select '${selVal[i]}'||'_'||substr(sour,1,4) YEAR,TRAD||'|'||SIMP TRADSIMP,JYUTPING||'|'||IPA_T||'|'||IPA_S JYUTPING_IPA_TS,* from ${selVal[i]} union `;  // 拼接查詢
			} else {
				querySQL += `select '${selVal[i]}' YEAR,TRAD||'|'||SIMP TRADSIMP,JYUTPING||'|'||IPA_T||'|'||IPA_S JYUTPING_IPA_TS,* from ${selVal[i]} union `;  // 拼接查詢
			}
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'phrase') { // 查詢繁體
			querySQL += `) where trad GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_simp') { // 查詢簡體
			querySQL += `) where simp GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_jyutping') { // 查詢無調粵拼
			querySQL += `) where replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '${searchValue}' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '* ${searchValue} *' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '${searchValue} *' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '* ${searchValue}' order by YEAR`;
		} else if (queryType == 'phrase_jyut6ping3') { // 查詢有調粵拼
			querySQL += `) where jyutping GLOB '${searchValue}' or jyutping GLOB '* ${searchValue} *' or jyutping GLOB '${searchValue} *' or jyutping GLOB '* ${searchValue}' order by YEAR`;
		} else if (queryType == 'phrase_expl') { // 釋義反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'phrase_note') { // 附註反查
			querySQL += `) where note GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	// (詞彙)查詢多個表，用於《南寧社會概況》、《邕寧縣誌》和《南寧童謠整理》
	tempObj.queryTable_proverb = (searchValue, selVal, queryType) => {
		let querySQL = '';
		for (let i in selVal) {
			querySQL += `select '${selVal[i]}' YEAR,TRAD||'<br/>'||SIMP TRADSIMP,* from ${selVal[i]} union `;  // 拼接查詢
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'phrase') { // 查詢繁體
			querySQL += `) where trad GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		} else if (queryType == 'phrase_simp') { // 查詢簡體
			querySQL += `) where simp GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		}else if (queryType == 'phrase_jyutping' || queryType == 'phrase_jyut6ping3') { // 查詢粵拼
			querySQL += ') where 1=2';
		} else if (queryType == 'phrase_expl') { // 釋義反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		} else if (queryType == 'phrase_note') { // 附註反查
			querySQL += `) where note GLOB '*${searchValue}*' order by YEAR,CAST(ID as INTEGER)`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	// (語法)查詢多個表
	tempObj.queryTableGrammar = (searchValue, selVal, queryType) => {
		let querySQL = '';
		for (let i in selVal) {		
			if (/2021/.test(selVal[i])) {
				querySQL += `select '${selVal[i]}'||'_'||substr(sour,1,4) YEAR,TRAD||'<br/>'||SIMP TRADSIMP,JYUTPING||'<br/>'||IPA_T||'<br/>'||IPA_S JYUTPING_IPA_TS,* from ${selVal[i]} union `;  // 拼接查詢
			} else {
				querySQL += `select '${selVal[i]}' YEAR,TRAD||'<br/>'||SIMP TRADSIMP,JYUTPING||'<br/>'||IPA_T||'<br/>'||IPA_S JYUTPING_IPA_TS,* from ${selVal[i]} union `;  // 拼接查詢
			}
		};
		querySQL = "select * from(" + querySQL.replace(/ union $/gi,"");
		if (queryType == 'grammar') { // 查詢繁體
			querySQL += `) where trad GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'grammar_simp') { // 查詢簡體
			querySQL += `) where simp GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'grammar_jyutping') { // 查詢無調粵拼
			querySQL += `) where replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '${searchValue}' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '* ${searchValue} *' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '${searchValue} *' or replace(replace(replace(replace(replace(replace(jyutping,'1',''),'2',''),'3',''),'4',''),'5',''),'6','') GLOB '* ${searchValue}' order by YEAR`;
		} else if (queryType == 'grammar_jyut6ping3') { // 查詢有調粵拼
			querySQL += `) where jyutping GLOB '${searchValue}' or jyutping GLOB '* ${searchValue} *' or jyutping GLOB '${searchValue} *' or jyutping GLOB '* ${searchValue}' order by YEAR`;
		} else if (queryType == 'grammar_expl') { // 釋義反查
			querySQL += `) where expl GLOB '*${searchValue}*' order by YEAR`;
		} else if (queryType == 'grammar_note') { // 附註反查
			querySQL += `) where note GLOB '*${searchValue}*' order by YEAR`;
		};
		return DictDb.execParam( querySQL, [] );
	};
	
	// (多字)查詢單個表，用於《廣韻》韻典版
	tempObj.queryTable_triungkox = (Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl) => {
		let querySQL = `select '1008' YEAR,* from tab_1008 where 1=1`;
		querySQL += ` and niu in ('${Niu}')`;
		querySQL += ` and yunbu1 in ('${Yun}')`;
		querySQL += ` and hu in ('${Hu}')`;
		querySQL += ` and deng in ('${Deng}')`;
		querySQL += ` and tone in ('${Tone}')`;
		if (Chong.length==0) { querySQL += ` and 1=2`; } else { querySQL += ` and (yunbu2 GLOB '*${Chong.replace(/','/g,"*' or yunbu2 GLOB '*")}*')`; querySQL = querySQL.replace("yunbu2 GLOB '*O*'","(yunbu2 not GLOB '*A*' and yunbu2 not GLOB '*B*')"); querySQL = querySQL.replace("yunbu2 GLOB '*X*'","yunbu2 GLOB '*A*' or yunbu2 GLOB '*B*'"); }
		if (isFanqie) { querySQL += ` and (fanqie1 GLOB '*${fanqie}*' or fanqie2 GLOB '*${fanqie}*')`; }
		if (isExpl) { querySQL += ` and expl GLOB '*${expl}*'`; }
		querySQL += ` order by CAST(ID as INTEGER)`;
		return DictDb.execParam( querySQL, [] );
	};
	
	// (多字)查詢單個表，用於《廣韻》東方版
	tempObj.queryTable_triungkox_tung = (Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl) => {
		let querySQL = `select '1008' YEAR,* from tab_1008_d where 1=1`;
		querySQL += ` and niu in ('${Niu}')`;
		querySQL += ` and yunbu in ('${Yun}')`;
		querySQL += ` and hu in ('${Hu}')`;
		querySQL += ` and deng in ('${Deng}')`;
		querySQL += ` and tone in ('${Tone}')`;
		querySQL += ` and chong in ('${Chong}')`;
		if (isFanqie) { querySQL += ` and fanqie GLOB '*${fanqie}*'`; }
		if (isExpl) { querySQL += ` and expl GLOB '*${expl}*'`; }
		querySQL += ` order by CAST(ID as INTEGER)`;
		return DictDb.execParam( querySQL, [] );
	};
	
	// (多字)查詢單個表，用於《集韻》
	tempObj.queryTable_triungkoxghuh = (Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl) => {
		let querySQL = `select '1039' YEAR,* from tab_1039 where 1=1`;
		querySQL += ` and niu in ('${Niu}')`;
		querySQL += ` and yunbu in ('${Yun}')`;
		querySQL += ` and hu in ('${Hu}')`;
		querySQL += ` and deng in ('${Deng}')`;
		querySQL += ` and tone in ('${Tone}')`;
		if (Chong.length==0) { querySQL += ` and 1=2`; }
		if (isFanqie) { querySQL += ` and fanqie GLOB '*${fanqie}*'`; }
		if (isExpl) { querySQL += ` and expl GLOB '*${expl}*'`; }
		querySQL += ` order by CAST(ID as INTEGER)`;
		return DictDb.execParam( querySQL, [] );
	};
	
	// (多字)查詢單個表，用於《江湖尺牘分韻撮要》
	tempObj.queryTable_gw = (Niu, Yun, Tone, fanqie, isFanqie, expl, isExpl) => {
		let querySQL = `select '1838' YEAR,* from tab_1838 where 1=1`;
		querySQL += ` and first_old in ('${Niu}')`;
		querySQL += ` and final_old in ('${Yun}')`;
		querySQL += ` and tone in ('${Tone}')`;
		if (isFanqie) { querySQL += ` and fanqie GLOB '*${fanqie}*'`; }
		if (isExpl) { querySQL += ` and expl GLOB '*${expl}*'`; }
		return DictDb.execParam( querySQL, [] );
	};
	
	return tempObj;
})();
