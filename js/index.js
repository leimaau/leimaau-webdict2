// 回車事件
function searchPress(e, valueInput, queryType, dictType) {
	let keyCode = null;
	if (e.which)
		keyCode = e.which;
	else if (e.keyCode)
		keyCode = e.keyCode;
	if (keyCode == 13) {
		querySubmit(valueInput, queryType, dictType);
		return false;
	}
	return true;
}

// 搜索按鈕
function querySubmit(inputValue, queryType, dictType) {
	outputAlert.innerHTML = '';
	document.getElementsByClassName('classHighcharts').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTabTitle').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTable').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('webLinkDiv').forEach((obj)=>{obj.innerHTML = ''});
	$('#nav-home-tab,#nav-home-tab-bw,#nav-home,#nav-home-bw').addClass('active show'); // 選回第一個tab和內容
	$('#nav-profile-tab,#nav-profile-tab-bw,#nav-profile,#nav-profile-bw').removeClass('active show');
	$('.rowtabDiv').addClass('d-none');
	$('#nav-tab,#nav-tab-bw').addClass('d-none');  // 隱藏tab
	
	
	let selVal = [];
	if(dictType == 'dicWord'){
		document.getElementsByClassName("book").forEach((item)=>{ if(item.checked == true) selVal.push(item.value)});
	} else if(dictType == 'dicPhrase') {
		document.getElementsByClassName("book_phrase").forEach((item)=>{ if(item.checked == true) selVal.push(item.value)});
	} else if(dictType == 'dicGrammar') {
		document.getElementsByClassName("book_grammar").forEach((item)=>{ if(item.checked == true) selVal.push(item.value)});
	}
	
	if (!inputValue) { //判斷選擇
		displayAlert('請輸入查詢關鍵字!', outputAlert, 'alert-danger');
		return false;
	} else if (!queryType) {
		displayAlert('請選擇查詢類型!', outputAlert, 'alert-danger');
		return false;
	} else if (selVal.length == 0) {
		displayAlert('請選擇查詢資料!', outputAlert, 'alert-danger');
		return false;
	} else if (!DictDb.hasDb()) {
		displayAlert('數據庫未加載，請刷新!', outputAlert, 'alert-danger');
		return false;
	};
	
	let judgeFlag = 0; // 0無結果 非0有結果
	// 開始顯示
	if(dictType == 'dicWord'){
		judgeFlag = queryChar(inputValue, queryType, selVal);
	} else if(dictType == 'dicPhrase') {
		judgeFlag = queryPhrase(inputValue, queryType, selVal);
	} else if(dictType == 'dicGrammar') {
		judgeFlag = queryGrammar(inputValue, queryType, selVal);
	}
	
	if (judgeFlag == 0) {
		document.getElementsByClassName("classHighcharts").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
		$('.rowtabDiv').addClass('d-none');
		$('#nav-tab,#nav-tab-bw').addClass('d-none');
		return false;
	}
}

const allTitle = '南寧白話', allTitle_bw = '南寧平話';

// 【單字】查詢模塊
function queryChar(inputValue, queryType, selVal){
	/*let res_triungkox = [];
	if (selVal.some(item => item.indexOf('1008_g') > -1)) {
		$('.rowtabDiv-triungkox').removeClass('d-none');
		res_triungkox = MainQuery.queryTableOne_triungkox(inputValue, ['tab_1008'], queryType);
		showTable(res_triungkox, 'outTab_triungkox', '《廣韻》<small>網絡版</small>', outTabTitle_triungkox, colData_triungkox);
	}*/
	
	let res_triungkox_tung = [];
	if (selVal.some(item => item.indexOf('1008_d') > -1)) {
		$('.rowtabDiv-triungkox_tung').removeClass('d-none');
		res_triungkox_tung = MainQuery.queryTableOne_triungkox_tung(inputValue, ['tab_1008_d'], queryType);
		showTable(res_triungkox_tung, 'outTab_triungkox_tung', '《廣韻》', outTabTitle_triungkox_tung, colData_triungkox_tung);
	}
	
	let res_triungkoxghuh = [];
	if (selVal.some(item => item.indexOf('1039') > -1)) {
		$('.rowtabDiv-triungkoxghuh').removeClass('d-none');
		res_triungkoxghuh = MainQuery.queryTableOne_triungkox_tung(inputValue, ['tab_1039'], queryType);
		showTable(res_triungkoxghuh, 'outTab_triungkoxghuh', '《集韻》', outTabTitle_triungkoxghuh, colData_triungkoxghuh);
	}
	
	let res_gw = [];
	if (selVal.some(item => item.indexOf('1838') > -1)) {
		$('.rowtabDiv-gw').removeClass('d-none');
		res_gw = MainQuery.queryTableOne_gw(inputValue, ['tab_1838'], queryType);
		showTable(res_gw, 'outTab_gw', '《江湖尺牘分韻撮要合集》', outTabTitle_gw, colData_gw);
	}
	
	let res_jw = [];
	if (selVal.some(item => item.indexOf('1856') > -1)) {
		$('.rowtabDiv-jw').removeClass('d-none');
		res_jw = MainQuery.queryTableOne_jw(inputValue, ['tab_1856'], queryType);
		showTable(res_jw, 'outTab_jw', '《英華分韻撮要》', outTabTitle_jw, colData_jw);
	}
	
	let res_jj = [];
	if (selVal.some(item => item.indexOf('1941') > -1)) {
		$('.rowtabDiv-jj').removeClass('d-none');
		res_jj = MainQuery.queryTableOne_jj(inputValue, ['tab_1941'], queryType);
		showTable(res_jj, 'outTab_jj', '《粵音韻彙》', outTabTitle_jj, colData_jj);
	}
	
	let res = [];
	let dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_g') == -1).filter(item => item.indexOf('_zb') == -1);
	if (dataList.length != 0) {
		$('.rowtabDiv-b').removeClass('d-none');
		if (queryType != 'expl' && queryType != 'note'){ $('.nav-tab-b').removeClass('d-none'); }
		res = MainQuery.queryTable(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle+'<small>市區</small>', outTabTitle, colData);  // 顯示白話表格
		showPie(res, inputValue, 'outPie', allTitle, queryType, res_triungkox_tung);  // 顯示白話餅圖
		//showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'JYUTPING'); // 顯示白話詞雲圖
		showBasicBar(res, inputValue, 'outWordCloud', allTitle, queryType);
	}
	
	let res_bw = [];
	if (selVal.some(item => item.indexOf('_bw') > -1)) {
		$('.rowtabDiv-bw').removeClass('d-none');
		if (queryType != 'expl' && queryType != 'note'){ $('.nav-tab-bw').removeClass('d-none'); }
		res_bw = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('_bw') > -1), queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw+'<small>亭子</small>', outTabTitle_bw, colData);  // 顯示平話表格
		showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType, res_triungkox_tung);  // 顯示平話餅圖
		//showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'JYUTPING'); // 顯示平話詞雲圖
		showBasicBar(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType);
	}
	
	let res_zb_dg = [];
	if (selVal.some(item => item.indexOf('zb_dg') > -1)) {
		$('.rowtabDiv-zb_dg').removeClass('d-none');
		res_zb_dg = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_dg') > -1), queryType);
		showTable(res_zb_dg, 'outTab_zb_dg', '南寧疍家話', outTabTitle_zb_dg, colData);
		//showPie(res_zb_dg, inputValue, 'outPie_zb_dg', allTitle_zb_dg, queryType);
		//showWordCloud(res_zb_dg, inputValue, 'outWordCloud_zb_dg', '南寧疍家話', queryType, 'JYUTPING');
	}
	
	let res_zb_sz = [];
	if (selVal.some(item => item.indexOf('zb_sz') > -1)) {
		$('.rowtabDiv-zb_sz').removeClass('d-none');
		res_zb_sz = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_sz') > -1), queryType);
		showTable(res_zb_sz, 'outTab_zb_sz', '沙井平話', outTabTitle_zb_sz, colData);
		//showPie(res_zb_sz, inputValue, 'outPie_zb_sz', allTitle_zb_sz, queryType);
		//showWordCloud(res_zb_sz, inputValue, 'outWordCloud_zb_sz', '沙井平話', queryType, 'JYUTPING');
	}
	
	let res_zb_b_wj = [];
	if (selVal.some(item => item.indexOf('zb_b_wj') > -1)) {
		$('.rowtabDiv-zb_b_wj').removeClass('d-none');
		res_zb_b_wj = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_b_wj') > -1), queryType);
		showTable(res_zb_b_wj, 'outTab_zb_b_wj', '橫縣白話', outTabTitle_zb_b_wj, colData);
		//showPie(res_zb_b_wj, inputValue, 'outPie_zb_b_wj', allTitle_zb_b_wj, queryType);
		//showWordCloud(res_zb_b_wj, inputValue, 'outWordCloud_zb_b_wj', '橫縣白話', queryType, 'JYUTPING');
	}
	
	let res_zb_wj = [];
	if (selVal.some(item => item.indexOf('zb_wj') > -1)) {
		$('.rowtabDiv-zb_wj').removeClass('d-none');
		res_zb_wj = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_wj') > -1), queryType);
		showTable(res_zb_wj, 'outTab_zb_wj', '橫縣平話', outTabTitle_zb_wj, colData);
		//showPie(res_zb_wj, inputValue, 'outPie_zb_wj', allTitle_zb_wj, queryType);
		//showWordCloud(res_zb_wj, inputValue, 'outWordCloud_zb_wj', '橫縣平話', queryType, 'JYUTPING');
	}
	
	let res_zb_bjlu = [];
	if (selVal.some(item => item.indexOf('zb_bjlu') > -1)) {
		$('.rowtabDiv-zb_bjlu').removeClass('d-none');
		res_zb_bjlu = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_bjlu') > -1), queryType);
		showTable(res_zb_bjlu, 'outTab_zb_bjlu', '賓陽話<small>蘆墟</small>', outTabTitle_zb_bjlu, colData);
		//showPie(res_zb_bjlu, inputValue, 'outPie_zb_bjlu', allTitle_zb_bjlu, queryType);
		//showWordCloud(res_zb_bjlu, inputValue, 'outWordCloud_zb_bjlu', '賓陽話(蘆墟)', queryType, 'JYUTPING');
	}
	
	let res_zb_ms = [];
	if (selVal.some(item => item.indexOf('zb_ms') > -1)) {
		$('.rowtabDiv-zb_ms').removeClass('d-none');
		res_zb_ms = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_ms') > -1), queryType);
		showTable(res_zb_ms, 'outTab_zb_ms', '馬山喬利平話', outTabTitle_zb_ms, colData);
		//showPie(res_zb_ms, inputValue, 'outPie_zb_ms', allTitle_zb_ms, queryType);
		//showWordCloud(res_zb_ms, inputValue, 'outWordCloud_zb_ms', '馬山喬利平話', queryType, 'JYUTPING');
	}
	
	if(queryType == 'char' || queryType == 'char_simp') showLink(inputValue);
	
	let isShow = res_triungkox_tung.length + res_triungkoxghuh.length + res_gw.length + res_jw.length + res_jj.length + res.length + res_bw.length + res_zb_dg.length + res_zb_sz.length + res_zb_b_wj.length + res_zb_wj.length + res_zb_bjlu.length + res_zb_ms.length;
	if (isShow != 0) {
		let tradRes = tradData.filter(item => item['simp'] == inputValue), tradLink = [];
		if (tradRes.length != 0) {
			for (let v of tradRes[0].trad) {
				tradLink.push(`<a href="javascript:querySubmit('${v}', 'char', 'dicWord')">${v}</a>`);
			}
			displayAlert('可能與之相關的繁體字：「' + tradLink.join('」,「') + '」', outputAlert, 'alert-primary');
		}
	} else {
		let tradRes = tradData.filter(item => item['simp'] == inputValue), tradLink = [];
		if (tradRes.length != 0) {
			for (let v of tradRes[0].trad) {
				tradLink.push(`<a href="javascript:querySubmit('${v}', 'char', 'dicWord')">${v}</a>`);
			}
			displayAlert('未查詢到結果! 可能與之相關的繁體字：「' + tradLink.join('」,「') + '」', outputAlert, 'alert-primary');
		} else {
			displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
		}
	}
	
	return isShow;
}


// 【詞彙】查詢模塊
function queryPhrase(inputValue, queryType, selVal){
	let res_proverb = [];
	let dataList_oldProverb = selVal.filter(item => item.indexOf('_proverb') > -1);
	if (dataList_oldProverb.length != 0) {
		$('.rowtabDiv-triungkox_tung').removeClass('d-none');  // 使用顯示《廣韻》的位置
		res_proverb = MainQuery.queryTable_proverb(inputValue, dataList_oldProverb, queryType);
		showTable(res_proverb, 'outTab_triungkox_tung', '童謠和熟語', outTabTitle_triungkox_tung, colData_proverb);
		if (res_proverb.length != 0) showWordCloud(res_proverb, inputValue, 'outWordCloud_triungkox_tung', '童謠和熟語', queryType, 'TRAD');
	}
	
	let res = [];
	let dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList.length != 0) {
		$('.rowtabDiv-b').removeClass('d-none');
		if (queryType != 'phrase_expl' && queryType != 'phrase_note'){ $('.nav-tab-b').removeClass('d-none'); }
		res = MainQuery.queryTablePhrase(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle+'(市區)', outTabTitle, colData_phrase);  // 顯示白話表格
		showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'TRAD'); // 顯示白話詞雲圖
	}
	
	let res_bw = [];
	let dataList_bw = selVal.filter(item => item.indexOf('_bw') > -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList_bw.length != 0) {
		$('.rowtabDiv-bw').removeClass('d-none');
		if (queryType != 'phrase_expl' && queryType != 'phrase_note'){ $('.nav-tab-bw').removeClass('d-none'); }
		res_bw = MainQuery.queryTablePhrase(inputValue, dataList_bw, queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw+'(亭子)', outTabTitle_bw, colData_phrase);  // 顯示平話表格
		showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'TRAD'); // 顯示平話詞雲圖
	}
	
	let isShow = res_proverb.length + res.length + res_bw.length;
	if (isShow == 0) {
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
	}
	
	return isShow;
}

// 【語法】查詢模塊
function queryGrammar(inputValue, queryType, selVal){
	let res = [];
	let dataList = selVal.filter(item => item.indexOf('_bw') == -1);
	if (dataList.length != 0) {
		$('.rowtabDiv-triungkox_tung').removeClass('d-none');  // 使用顯示《廣韻》的位置
		res = MainQuery.queryTableGrammar(inputValue, dataList, queryType);
		showTable(res, 'outTab_triungkox_tung', allTitle+'(市區)', outTabTitle_triungkox_tung, colData_grammar);
	}
	
	let res_bw = [];
	let dataList_bw = selVal.filter(item => item.indexOf('_bw') > -1);
	if (dataList_bw.length != 0) {
		$('.rowtabDiv-triungkoxghuh').removeClass('d-none'); // 使用顯示《集韻》的位置
		res_bw = MainQuery.queryTableGrammar(inputValue, dataList_bw, queryType);
		showTable(res_bw, 'outTab_triungkoxghuh', allTitle_bw+'(亭子)', outTabTitle_triungkoxghuh, colData_grammar);
	}
	
	let isShow = res.length + res_bw.length;
	if (isShow == 0) {
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
	}
	
	return isShow;
}


// 表格顯示函數
function showTable(res, outputDiv, tabTitle, tabTitleDiv, colData) {
	//if (res.length == 0) return false;
	$('#'+outputDiv).bootstrapTable('destroy'); // 銷毀舊表
	tabTitleDiv.innerHTML = `<h5>${tabTitle}</h5>`;  // 標題
	$('#'+outputDiv).bootstrapTable({ // 顯示表格
		columns: colData,
		data: res
	});
	$('[data-toggle="tooltip"]').tooltip(); // 綁定tips
}

// 計算資料權重的幾何平均值
function calcYear(data){
	let dataValue = 0;
	for (let item of data.values()){
		if (item == '2018') {
			dataValue += Math.log(9);
		} else if (item == '1998' || item == '2008' || item == '2009') {
			dataValue += Math.log(7);
		} else if (item == '1997' || item == '2003' || /2021/.test(item)){
			dataValue += Math.log(5);
		} else if (item == '1994' || item == '2000' || item == '2007' || item == '201703' || item == '201705'){
			dataValue += Math.log(3);
		} else if (item == '201806' || item == '2022'){
			dataValue += Math.log(1.5);
		} else {
			dataValue += Math.log(1);
		}
	}
	return Math.exp(dataValue/data.size);
}

// 餅圖顯示函數
function showPie(res, inputValue, pieDiv, pieTitle, queryType, res_triungkox_tung = []) {
	//if (res.length == 0) return false;
	let piePara = 'JYUTPING';
	if (queryType == 'expl' || queryType == 'phrase_expl' || queryType == 'note' || queryType == 'phrase_note') {
		return false; // 釋義和附註反查時不顯示餅圖
	} else if (queryType == 'jyutping' || queryType == 'jyut6ping3' || queryType == 'phrase_jyutping' || queryType == 'phrase_jyut6ping3'){
		piePara = 'TRAD';
	}
	
	// 餅圖數據處理
	const pie_data = {}, pie_data2 = {}, pie_data3 = {};  // 對象：{粵拼 -> [多份數據年份]}、對象：{粵拼 -> [多份數據解釋]}
	for (let line of res) { // 循環每一對象存入數據 pie_data
		let JYUTPING = line[piePara], YEAR = line['YEAR'], EXPL = line['EXPL'], NOTE = line['NOTE'];
		YEAR = YEAR.replace('_bw', '').replace('_phrase', '').replace('tab_', ''); // 餅圖顯示tab_1998_bw -> 1998、tab_2008_phrase -> 2008
		if (typeof (pie_data[JYUTPING]) == "undefined") { pie_data[JYUTPING] = []; pie_data[JYUTPING].push(YEAR); } else { pie_data[JYUTPING].push(YEAR); };
		if (typeof (pie_data2[JYUTPING]) == "undefined") { pie_data2[JYUTPING] = []; if(EXPL!=''){pie_data2[JYUTPING].push(EXPL)}; } else { if(EXPL!=''){pie_data2[JYUTPING].push(EXPL)}; };
		if (typeof (pie_data3[JYUTPING]) == "undefined") { pie_data3[JYUTPING] = []; if(NOTE!=''){pie_data3[JYUTPING].push(NOTE)}; } else { if(NOTE!=''){pie_data3[JYUTPING].push(NOTE)}; };
	};
	// 開始顯示
	const show_data = [];
	for (let i in pie_data) { pie_data[i] = new Set(pie_data[i]) }; //去重
	for (let i in pie_data2) { pie_data2[i] = new Set(pie_data2[i]) }; //去重
	for (let i in pie_data3) { pie_data3[i] = new Set(pie_data3[i]) }; //去重
	for (let i in pie_data) { show_data.push({ name: i, y: pie_data[i].size, x: Array.from(pie_data[i]).toString(), z: calcYear(pie_data[i]), u: Array.from(pie_data2[i]).join('|'), v: /※/.test(Array.from(pie_data3[i]).join('|')) && /char/.test(queryType) ? '〖標準音經驗回歸值〗' : '' }) }; //name 數據名 y 數據值 x 附帶值 z 資料權重的幾何平均值 u 釋義 v 附註
	
	let dataSum = 0, perValue = 0, dungNum = (typeof (res_triungkox_tung[0]) == "undefined") ? 2 : res_triungkox_tung[0].FLAG;
	for (let line of show_data) { dataSum += line.y };
	if(dungNum <= 2) {
		perValue = 40;
	} else {
		perValue = 100 / dungNum;
	}
	for (let i in pie_data) { show_data.find(item => (item.name == i)).w = ((pie_data[i].size/dataSum)*100>=perValue) && /char/.test(queryType) ? '〖標準音統計回歸值〗' : '' };
	
	let chart = {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	};
	let title = {
		text: `<span class="user-font-title">${pieTitle}【${inputValue}】</span>`
	};
	let subtitle = {
		text: '扇形面積表示資料數，扇形半徑表示資料權重的幾何平均值'  
	};
	let tooltip = {
		/*headerFormat: '{series.name}({point.y})<br/>',
		pointFormat: '<b>{point.x}</b>'*/
		headerFormat: '',
		pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
		'資料數: <b>{point.y}</b><br/>' +
		'佔比: <b>{point.percentage:.2f} %</b><br/>' +
		'資料權重的幾何平均值: <b>{point.z:.2f}</b><br/>' +
		'資料: <b>{point.x}</b><br/>' +
		'釋義: <b>{point.u}</b><br/>' 
	};
	let plotOptions = {
		variablepie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b><br/><span style="color: #bf3553">{point.v}</span><br/><span style="color: #1e9eb3">{point.w}</span><br/>',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			showInLegend: true
		}
	};
	let series = [{
		type: 'variablepie',
		minPointSize: 10,
		innerSize: '20%',
		zMin: 0,
		name: '資料',
		data: show_data
	}];
	let color = ['#2775b6', // 景泰藍
		'#2c9678', // 青礬綠
		'#c06f98', // 櫻草紫
		'#fca104', // 橙皮黃
		'#1bd1a5', // 碧色
		'#35333c', // 鯊魚灰
		'#b0a4e3', // 雪青
		'#813c85', // 桔梗紫
		'#eb3c70', // 松葉牡丹紅
		'#986524', // 山雞褐
		'#fcd337', // 檸檬黃
		'#5bae23'  // 鸚鵡綠
	];
	let json = {};
	json.credits = { enabled: false };
	json.chart = chart;
	json.title = title;
	json.subtitle = subtitle;
	json.tooltip = tooltip;
	json.series = series;
	json.plotOptions = plotOptions;
	json.colors = color;
	$('#' + pieDiv).highcharts(json);
}

// 詞雲圖顯示函數
function showWordCloud(res, inputValue, wordCloudDiv, wordCloudTitle, queryType, colName) {
	document.getElementById('nav-profile-tab').innerHTML = '詞雲圖';
	document.getElementById('nav-profile-tab-bw').innerHTML = '詞雲圖';
	//if (res.length == 0) return false;
	if (queryType == 'expl' || queryType == 'phrase_expl' || queryType == 'note' || queryType == 'phrase_note') { // 釋義和附註反查時不顯示詞雲圖
		return false;
	}
	let text = [];
	for (let line of res) {
		text.push(line[colName]);
	};
	let data = text.join(',').split(/[（）《》？：，。,\. ]+/g)
	.reduce(function (arr, word) {
		let obj = arr.find(function (obj) {
			return obj.name === word;
		});
		if (obj) {
			obj.weight += 1;
		} else {
			obj = {
				name: word,
				weight: 1
			};
			arr.push(obj);
		}
		return arr;
	}, []);
	let series= [{
		name: '計數',
		type: 'wordcloud',
		data: data
	}];
	let title= {
		text: `<span class="user-font-title">${wordCloudTitle}【${inputValue}】</span>`
	};
	let json = {};
	json.credits = { enabled: false };
	json.series = series;
	json.title = title;
	$('#' + wordCloudDiv).highcharts(json);
}

// 條形圖顯示函數
function showBasicBar(res, inputValue, barDiv, barTitle, queryType) {
	document.getElementById('nav-profile-tab').innerHTML = '條形圖';
	document.getElementById('nav-profile-tab-bw').innerHTML = '條形圖';
	//if (res.length == 0) return false;
	let barPara = 'JYUTPING';
	if (queryType == 'expl' || queryType == 'phrase_expl' || queryType == 'note' || queryType == 'phrase_note') {
		return false; // 釋義和附註反查時不顯示條形圖
	} else if (queryType == 'jyutping' || queryType == 'jyut6ping3' || queryType == 'phrase_jyutping' || queryType == 'phrase_jyut6ping3'){
		barPara = 'TRAD';
	}
	
	// 條形圖數據處理
	const bar_data = {}, bar_data2 = {};  // 對象：{粵拼 -> [多份數據年份]}、對象：{粵拼 -> [多份數據釋義]}
	for (let line of res) { // 循環每一對象存入數據 bar_data
		let JYUTPING = line[barPara], YEAR = line['YEAR'], EXPL = line['EXPL'];
		YEAR = YEAR.replace('_bw', '').replace('_phrase', '').replace('tab_', ''); // 條形圖顯示tab_1998_bw -> 1998、tab_2008_phrase -> 2008
		if (typeof (bar_data[JYUTPING]) == "undefined") { bar_data[JYUTPING] = []; bar_data[JYUTPING].push(YEAR); } else { bar_data[JYUTPING].push(YEAR); };
		if (typeof (bar_data2[JYUTPING]) == "undefined") { bar_data2[JYUTPING] = []; if(EXPL!=''){bar_data2[JYUTPING].push(EXPL)}; } else { if(EXPL!=''){bar_data2[JYUTPING].push(EXPL)}; };
	};
	// 開始顯示
	const show_data = [];
	for (let i in bar_data) { bar_data[i] = new Set(bar_data[i]) }; //去重
	for (let i in bar_data2) { bar_data2[i] = new Set(bar_data2[i]) }; //去重
	for (let i in bar_data) { show_data.push({ name: i, y: bar_data[i].size, x: Array.from(bar_data[i]).toString(), u: Array.from(bar_data2[i]).join('|') }) }; //name 數據名 y 數據值 x 附帶值 u 釋義
	
	const xAxis_data = [], yAxis_data = [], zAxis_data = [], uAxis_data = [];
	let dataSum = 0;
	for (let line of show_data) { xAxis_data.push(line.name); yAxis_data.push(line.y); zAxis_data.push(line.x); uAxis_data.push(line.u); dataSum += line.y; };
	let chart = {
		type: 'bar'
	};
	let title = {
		text: `<span class="user-font-title">${barTitle}【${inputValue}】</span>`
	};
	let xAxis = {
		categories: xAxis_data,
		title: {
			text: null
		}
	};
	let yAxis = {
		min: 0,
		title: {
			text: '資料數',
			align: 'high'
		},
		labels: {
			overflow: 'justify'
		}
	};
	let tooltip = {
		/*headerFormat: '{series.name}({point.y})<br/>',
		pointFormatter: function(){
			return '<b>' + zAxis_data[this.x] + '</b>';
		}*/
		headerFormat: '',
		pointFormatter: function() {
			let pcnt = (this.y / dataSum) * 100;
			return '<span style="color:' + this.color + '">\u25CF</span><b>'+ xAxis_data[this.x] + '</b><br/>' +
			'資料數：<b>' + this.y + '</b><br/>' +
			'佔比：<b>' + Highcharts.numberFormat(pcnt, 2) + '%</b><br/>' +
			'資料：<b>' + zAxis_data[this.x] + '</b><br/>' +
			'釋義：<b>' + uAxis_data[this.x] + '</b>';
		}
	};
	let plotOptions = {
		bar: {
			dataLabels: {
				enabled: true,
				allowOverlap: true
			}
		}
	};
	let legend = {
		enabled: false
	};
	let series = [{
		name: '資料',
		//colorByPoint: true,
		data: yAxis_data
	}];
	let color = ['#2775b6'];
	let json = {};
	json.credits = { enabled: false };
	json.chart = chart;
	json.xAxis = xAxis;
	json.yAxis = yAxis;
	json.title = title;
	json.tooltip = tooltip;
	json.legend = legend;
	json.series = series;
	json.plotOptions = plotOptions;
	json.colors = color;
	$('#' + barDiv).highcharts(json);
}


/*選擇字典類型：字典、詞典*/
function selectDictionary(_this) {
	// 刪除選擇的樣式
	let dicItem = document.getElementsByClassName("dict-type-item");
	for (item of dicItem){
		item.classList.remove("dict-type-checked");
	}
	// 設置被選，增加樣式，修改保存數據
	_this.classList.add("dict-type-checked");
	dictType.dataset.dic = _this.id; // 把數據存到dictType的data-dic中
	// 替換查詢radio
	if ('dicWord' === _this.id){
		document.getElementById('char').checked = true; // 默認選擇第一個
		$('#queryRadio-dicPhrase,#modal-table-phrase,#btn-allselect-phrase,#btn-cancel-phrase').addClass('d-none'); // radio按鈕、模態框表格、全選取消按鈕
		$('#queryRadio-dicWord,#modal-table,#btn-allselect,#btn-cancel').removeClass('d-none');
		$('#queryRadio-dicGrammar,#modal-table-grammar,#btn-allselect-grammar,#btn-cancel-grammar').addClass('d-none');
	} else if ('dicPhrase' === _this.id){
		document.getElementById('phrase').checked = true; // 默認選擇第一個
		$('#queryRadio-dicPhrase,#modal-table-phrase,#btn-allselect-phrase,#btn-cancel-phrase').removeClass('d-none');
		$('#queryRadio-dicWord,#modal-table,#btn-allselect,#btn-cancel').addClass('d-none');
		$('#queryRadio-dicGrammar,#modal-table-grammar,#btn-allselect-grammar,#btn-cancel-grammar').addClass('d-none');
	} else if ('dicGrammar' === _this.id){
		document.getElementById('grammar').checked = true; // 默認選擇第一個
		$('#queryRadio-dicPhrase,#modal-table-phrase,#btn-allselect-phrase,#btn-cancel-phrase').addClass('d-none');
		$('#queryRadio-dicWord,#modal-table,#btn-allselect,#btn-cancel').addClass('d-none');
		$('#queryRadio-dicGrammar,#modal-table-grammar,#btn-allselect-grammar,#btn-cancel-grammar').removeClass('d-none');
	}
	dataButt.innerHTML = getDataText(); // 更新選擇資料顯示text
}

/*
加載完畢，傳入需要完成加載的元素
	刪除disabled
	獲取completedName屬性的值顯示在按鈕上
	刪除加載中的樣式
*/
function dicLoaded(obj){
	obj.disabled = false;
	obj.innerHTML = obj.getAttribute('completedName');
	for (child of obj.childNodes){
		if (child && child.tagName == "SPAN" && child.getAttribute('role') == 'status'){
			obj.removeChild(child); 
		}
	}
}

/*
顯示錯誤提示
*/
function displayAlert(text, obj, colorType, close = true){
	let html = `<div class="alert ${colorType} alert-dismissible fade show" role="alert"><strong>${text}</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`;
	if (!close){
		html = `<div class="alert ${colorType}"><strong>${text}</strong></div>`;
	}
	obj.innerHTML = html;
}

function getDataText(){
	// 判斷當前是字典、詞典還是語法
	let currentTable = "";
	if (dictType.dataset.dic == 'dicWord'){
		currentTable = "#modal-table ";
	} else if(dictType.dataset.dic == 'dicPhrase') {
		currentTable = "#modal-table-phrase ";
	} else if(dictType.dataset.dic == 'dicGrammar') {
		currentTable = "#modal-table-grammar ";
	}
	let model = $("#dataModal");
	let count = model.find(currentTable + "input[name='dataCheck']").length;
	let countChecked = model.find(currentTable + "input[name='dataCheck']:checked").length;
	return `選擇資料 | 已選 ${count} 項中的 ${countChecked} 項`;
}

// 在線標註函數
function signArticle(textCont, signText_type, signResult_type, signResult_format, signResult_way, signResult_IPA, signIPA_version) {
	if (textCont.length > 30000){
		toastrFunc('toast-top-center');
		toastr.error('禁止超過三萬字！');
		return false;
	}
	
	if (!cutModule.initFlag){ // 初始化分詞模塊，衹執行一次
		//const segDict = MainQuery.queryTableOne_segdict(); // 目前是從segDict.js獲取，tab_segdict爲空，需要時導入數據使用
		cutModule.initFlag = true;
		segMain(segDict.concat(segDictPlus));
	}
	
	const outputText = [];
	
	for (let lines of textCont.split('\n')) {
		if (signResult_format == 'updown') { // 按字內嵌
			let outputLine = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				outputLine.push(`<ruby>${queryJyutpingPhrase(txtStr, signText_type, signResult_type, (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') ? 'jyutping' : 'ipa', signResult_format, signResult_IPA, signIPA_version, false)}</ruby>`);
			}
			outputText.push(`${outputLine.join('')}<br>`);
		} else if (signResult_format == 'lineupdown') { // 按行內嵌
			let outputLine1 = [], outputLine3 = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') ? 'jyutping' : 'ipa', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
				outputLine3.push(txtStr);
			}
			outputText.push(`<ruby>${outputLine3.join('')}<rp>(</rp><rt>${outputLine1.join(' ')}</rt><rp>)</rp></ruby><br>`);
		} else if (signResult_format == 'twolines' || signResult_format == 'parallel') { // 分行或平行
			let outputLine1 = [], outputLine2 = [], outputLine3 = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				if (signResult_way == 'jyutping') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'ipa') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'jyutping_ipa') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine2.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'ipa_jyutping') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine2.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
					outputLine3.push(txtStr);
				}
			}
			if (signResult_way == 'jyutping' || signResult_way == 'ipa'){
				if (signResult_format == 'twolines') {  // 分行
					outputText.push(`${outputLine1.join(' ')}<br>${outputLine3.join('')}<br>`);
				} else {  // 平行
					outputText.push(`${outputLine3.join('')} || ${outputLine1.join(' ')}<br>`);
				}
			} else {
				if (signResult_format == 'twolines') {  // 分行
					outputText.push(`${outputLine1.join(' ')}<br>${outputLine2.join(' ')}<br>${outputLine3.join('')}<br>`);
				} else {  // 平行
					outputText.push(`${outputLine3.join('')} || ${outputLine1.join(' ')} || ${outputLine2.join(' ')}<br>`);
				}
			}
		} else if (signResult_format == 'replace') { // 直接替換
			let outputLine = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				outputLine.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') ? 'jyutping' : 'ipa', signResult_format, signResult_IPA, signIPA_version).split(',').join(' '));
			}
			outputText.push(`${outputLine.join(' ')}<br>`);
		}
	}
	
	$('#signResult').html(outputText.join(''));
}

// 【詞彙】查詢粵拼或IPA函數
function queryJyutpingPhrase(txtStr, trad_simp, tabName, jyutping_ipa, signResult_format, signResult_IPA, signIPA_version, keep_symbol = true){
	//let res = MainQuery.queryJyutping(txtStr, trad_simp, tabName); // 目前是從segDict.js獲取，tab_nn_review、tab_nnt_review、tab_gz_review停用，需要時導入數據使用
	let res = window[tabName].filter(item => item[trad_simp] == txtStr), resJ =[];
	if (res.length == 1 && txtStr.length > 1 && ($("#output_useWordSeg").is(":checked") == true)) { // 詞典有一個數據並且爲詞彙
		for(let i in txtStr.split('')){
			let charJp = res[0]['jyutping'].split(' ')[i];
			if (signResult_format == 'updown') { // 按字內嵌時 中文字後帶 '</rt><rp>)</rp>'，拼音或ipa後帶 '</rt><rp>)</rp>'，return時合併起來
				resJ.push(txtStr.split('')[i] + '<rp>(</rp><rt>');
				resJ.push((jyutping_ipa == 'jyutping') ? jpFormat(charJp) + '</rt><rp>)</rp>' : ipaFormat(jyutping_to_ipa(charJp, signIPA_version, signResult_IPA, "output_addSymbol")) + '</rt><rp>)</rp>');
			} else {
				resJ.push((jyutping_ipa == 'jyutping') ? jpFormat(charJp) : ipaFormat(jyutping_to_ipa(charJp, signIPA_version, signResult_IPA, "output_addSymbol")));
			}
		}
	} else if (res.length > 1 && txtStr.length > 1 && ($("#output_useWordSeg").is(":checked") == true)) { // 詞典有多個數據並且爲詞彙
		for(let i in txtStr.split('')){
			let tempJp = [], tempIPA = [];
			for (let j of res) {
				 tempJp.push(jpFormat(j.jyutping).split(' ')[i]);
				 tempIPA.push(ipaFormat(jyutping_to_ipa(j.jyutping, signIPA_version, signResult_IPA, "output_addSymbol").split(' ')[i]));
			}
			if (signResult_format == 'updown') { // 按字內嵌時 中文字後帶 '</rt><rp>)</rp>'，拼音或ipa後帶 '</rt><rp>)</rp>'，return時合併起來
				resJ.push(txtStr.split('')[i] + '<rp>(</rp><rt>');
				resJ.push((jyutping_ipa == 'jyutping') ? [...new Set(tempJp)].join('/') + '</rt><rp>)</rp>' : [...new Set(tempIPA)].join('/') + '</rt><rp>)</rp>');
			} else {
				resJ.push((jyutping_ipa == 'jyutping') ? [...new Set(tempJp)].join('/') : [...new Set(tempIPA)].join('/'));
			}
		}
	} else { // 詞典無數據或有多個讀音或爲單字
		for(let i of txtStr.split('')){
			if (signResult_format == 'updown') {
				resJ.push(i + '<rp>(</rp><rt>');
				resJ.push(queryJyutping(i, trad_simp, tabName, jyutping_ipa, signResult_IPA, signIPA_version, keep_symbol) + '</rt><rp>)</rp>');
			} else {
				resJ.push(queryJyutping(i, trad_simp, tabName, jyutping_ipa, signResult_IPA, signIPA_version, keep_symbol));
			}
		}
	}
	return resJ.join((signResult_format == 'updown') ? '' : ',');
}

// 【單字】查詢粵拼或IPA函數
function queryJyutping(txtStr, trad_simp, tabName, jyutping_ipa, signResult_IPA, signIPA_version, keep_symbol = true){
	//let res = MainQuery.queryJyutping(txtStr, trad_simp, tabName); // 目前是從segDict.js獲取，tab_nn_review、tab_nnt_review、tab_gz_review爲空，需要時導入數據使用
	let res = ($("#output_useFilter").is(":checked") == true) ? window[tabName].filter(item => item[trad_simp] == txtStr && item['flag'] == '0') : window[tabName].filter(item => item[trad_simp] == txtStr);
	if ( !(/[^\u4e00-\u9fa5]/.test(txtStr)) || (res.length > 0) ) { // 判斷是否中文或字典有數據
		if(res.length != 0){
			if (res.length == 1){ // 只有一種讀音
				return (jyutping_ipa == 'jyutping') ? jpFormat(res[0]['jyutping']) : ipaFormat(jyutping_to_ipa(res[0]['jyutping'], signIPA_version, signResult_IPA, "output_addSymbol"));
			} else {
				let char_jyutping = [], char_ipa = [];
				for (let i of res){
					char_jyutping.push(jpFormat(i.jyutping));
					char_ipa.push(ipaFormat(jyutping_to_ipa(i.jyutping, signIPA_version, signResult_IPA, "output_addSymbol")));
				}
				return (jyutping_ipa == 'jyutping') ? [...new Set(char_jyutping)].join('/') : [...new Set(char_ipa)].join('/');
			}
		} else { // 無讀音
			return '　';　// 全角空格，會被當成一個中文
		}
	} else { // 非中文字符
		if(keep_symbol) {
			return txtStr;
		} else {
			return '';
		}
	}
}

// IPA格式處理
function ipaFormat(IPA){
	//IPA = ($("#checkbox_isw").is(":checked") == true) ? IPA : IPA.replace(/kʷ(ʰ|)ɔ(k|ŋ|\d{2}|[¹²³⁴⁵]*|[˩˨˧˦˥]*)/g,'k$1ɔ$2').replace(/kʷ(ʰ|)o(k|ŋ|\d{2})/g,'k$1o$2');
	return IPA;
}

// 粵拼格式處理
function jpFormat(jyutping){
	//jyutping = ($("#checkbox_isw").is(":checked") == true) ? jyutping : jyutping.replace(/(g|k)wo(k|ng|\d)/g,'$1o$2');
	return jyutping;
}

// 音標轉換
function Func_JP_IPA(inputSymbol, transform_type, IPA_version, output_IPAformat){
	if (inputSymbol.length > 30000){
		toastrFunc('toast-top-center');
		toastr.error('禁止超過三萬字！');
		return false;
	}
	const outputText = [];
	if (transform_type == '0'){
		for (let lines of inputSymbol.split('\n')) {
			outputText.push(jyutping_to_ipa(lines, IPA_version, output_IPAformat, "output_symbolFormat") + '<br>');
		}
	} else {
		for (let lines of inputSymbol.split('\n')) {
			outputText.push(ipa_to_jyutping(lines, IPA_version) + '<br>');
		}
	}
	
	$('#outputSymbol').html(outputText.join(''));
}

// 在線分詞函數
function wordSeg(textCont, HMM = false) {
	if (textCont.length > 30000){
		toastrFunc('toast-top-center');
		toastr.error('禁止超過三萬字！');
		return false;
	}
	
	if (!cutModule.initFlag){ // 初始化分詞模塊，衹執行一次
		//const segDict = MainQuery.queryTableOne_segdict(); // 目前是從segDict.js獲取，tab_segdict停用，需要時導入數據使用
		cutModule.initFlag = true;
		segMain(segDict.concat(segDictPlus));
	}
	
	const outputText = [];
	for (let lines of textCont.split('\n')) {
		outputText.push(cutModule.cut(lines, JSON.parse(HMM)).join(' ') + '<br>');
	}
	$('#segResult').html(outputText.join(''));
}

// 在線推導函數
function derivationFun(textChar) {
	if (textChar.length == 0){
		toastrFunc('toast-top-center');
		toastr.warning('請輸入查詢關鍵字！');
		return false;
	} else if(textChar.length > 2) {
		toastrFunc('toast-top-center');
		toastr.warning('請輸入一個漢字！');
		return false;
	}
	
	let char_zing = [], char_zing_bw = [];
	let res_zing = MainQuery.queryTable(textChar, ['tab_2018'], 'char');
	if (res_zing.length == 0) {
		char_zing.push('無數據');
	} else {
		for (let line_char of res_zing) {
			char_zing.push(line_char['JYUTPING']);
		}
	}
	let res_zing_bw = MainQuery.queryTable(textChar, ['tab_2018_bw'], 'char');
	if (res_zing_bw.length == 0) {
		char_zing_bw.push('無數據');
	} else {
		for (let line_char of res_zing_bw) {
			char_zing_bw.push(line_char['JYUTPING']);
		}
	}
	
	const outputText = [];
	outputText.push(`〖審音表〗白：` + char_zing.join('/') + ` || 平：` + char_zing_bw.join('/') + `<br/><br/>`);
	
	let res_koxqim = MainQuery.queryTableOne_triungkox_tung(textChar, ['tab_1008_d'], 'char');
	
	if (res_koxqim.length == 0) {
		outputText.push(`未查詢到《廣韻》數據！<br/><br/>`);
	} else {
		for (let line of res_koxqim) {
			outputText.push(`【中古音】《廣韻》` + line['NIU'] + line['SHE'] + line['HU'] + line['DENG'] + line['YUNBU'] + line['TONE'] + `<br/>【反切】` + line['FANQIE'] + `<br/>`);
			
			let res_char = MainQuery.queryTableOne_triungkox_tung(line['FANQIE'], ['tab_1008_d'], 'fanqie');
			let char_jp = sameWordFunc(res_char, 'tab_2018', 'n', textChar, line);
			let char_jp2 = sameWordFunc(res_char, 'tab_2018_bw', 't', textChar, line);
			
			let char_same = [];
			for (let line_char of res_char) {
				char_same.push(line_char['WORD']);
				/*if (line_char['WORD1'] == line_char['WORD2']){
					char_same.push(line_char['WORD1']);
				} else {
					char_same.push(line_char['WORD1']);
					char_same.push(line_char['WORD2']);
				}*/
			}
			outputText.push(`【同一音韻地位】` + char_same.join(' ') + `<br/>`);
			outputText.push(`【上述常用字標註】白：` + char_jp.join(' ') + ` || 平：` + char_jp2.join(' ') + `<br/>`);
			
			let result_char_jp = [...new Set(char_jp.filter(item => item.indexOf('-') == -1).join('/').split('/'))].join('/');
			let result_char_jp2 = [...new Set(char_jp2.filter(item => item.indexOf('-') == -1).join('/').split('/'))].join('/');
			let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
			let total_char_jp = char_jp.filter(item => item.indexOf('-') == -1).join('/').split('/').length;
			let total_char_jp2 = char_jp2.filter(item => item.indexOf('-') == -1).join('/').split('/').length;
			
			let res_char_jp =[], res_char_jp2 =[];
			if(result_char_jp != ''){
				for (let i of result_char_jp.split('/')){
					res_char_jp.push(i + '(' + Math.round(counts(char_jp.join('/').split('/'),i) / total_char_jp * 10000) / 100.00 + '%' + ')');
				}
			}
			if(result_char_jp2 != ''){
				for (let i of result_char_jp2.split('/')){
					res_char_jp2.push(i + '(' + Math.round(counts(char_jp2.join('/').split('/'),i) / total_char_jp2 * 10000) / 100.00 + '%' + ')');
				}
			}
			outputText.push(`【推導可能的結果】白：` + res_char_jp.join('/') + ` || 平：` + res_char_jp2.join('/') + `<br/>`);
			outputText.push(`【演變規律參攷（IPA-簡體）】<br/><pre>〔白〕<br/>` + koxqim_gujam('evolveData', line) + `<br/>`);
			outputText.push(`〔平〕<br/>` + koxqim_gujam('evolveData2', line) + `</pre><br/>`);
		}
	}
	
	let res_koxqim2 = MainQuery.queryTableOne_triungkox_tung(textChar, ['tab_1039'], 'char');
	
	if (res_koxqim2.length == 0) {
		outputText.push(`未查詢到《集韻》數據！<br/><br/>`);
	} else {
		for (let line of res_koxqim2) {
			outputText.push(`【中古音】《集韻》` + line['NIU'] + line['SHE'] + line['HU'] + line['DENG'] + line['YUNBU'] + line['TONE'] + `<br/>【反切】` + line['FANQIE'] + `<br/>`);
			
			let res_char = MainQuery.queryTableOne_triungkox_tung(line['FANQIE'], ['tab_1039'], 'fanqie');
			let char_jp = sameWordFunc(res_char, 'tab_2018', 'n', textChar, line);
			let char_jp2 = sameWordFunc(res_char, 'tab_2018_bw', 't', textChar, line);
			
			let char_same = [];
			for (let line_char of res_char) {
				char_same.push(line_char['WORD']);
				/*if (line_char['WORD1'] == line_char['WORD2']){
					char_same.push(line_char['WORD1']);
				} else {
					char_same.push(line_char['WORD1']);
					char_same.push(line_char['WORD2']);
				}*/
			}
			outputText.push(`【同一音韻地位】` + char_same.join(' ') + `<br/>`);
			outputText.push(`【上述常用字標註】白：` + char_jp.join(' ') + ` || 平：` + char_jp2.join(' ') + `<br/>`);
			
			let result_char_jp = [...new Set(char_jp.filter(item => item.indexOf('-') == -1).join('/').split('/'))].join('/');
			let result_char_jp2 = [...new Set(char_jp2.filter(item => item.indexOf('-') == -1).join('/').split('/'))].join('/');
			let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
			let total_char_jp = char_jp.filter(item => item.indexOf('-') == -1).join('/').split('/').length;
			let total_char_jp2 = char_jp2.filter(item => item.indexOf('-') == -1).join('/').split('/').length;
			
			let res_char_jp =[], res_char_jp2 =[];
			if(result_char_jp != ''){
				for (let i of result_char_jp.split('/')){
					res_char_jp.push(i + '(' + Math.round(counts(char_jp.join('/').split('/'),i) / total_char_jp * 10000) / 100.00 + '%' + ')');
				}
			}
			if(result_char_jp2 != ''){
				for (let i of result_char_jp2.split('/')){
					res_char_jp2.push(i + '(' + Math.round(counts(char_jp2.join('/').split('/'),i) / total_char_jp2 * 10000) / 100.00 + '%' + ')');
				}
			}
			outputText.push(`【推導可能的結果】白：` + res_char_jp.join('/') + ` || 平：` + res_char_jp2.join('/') + `<br/>`);
			outputText.push(`【演變規律參攷（IPA-簡體）】<br/><pre>〔白〕<br/>` + koxqim_gujam('evolveData', line) + `<br/>`);
			outputText.push(`〔平〕<br/>` + koxqim_gujam('evolveData2', line) + `</pre><br/>`);
		}
	}
	
	$('#derivationResult').html(outputText.join(''));
	
}

// 返回演變規律
function koxqim_gujam(tabName, line){
	let koxqim_gujam_res = [];
	let firstRes = window[tabName].filter(item => item['first'] == line['NIU'].replace('常','禪').replace('娘','泥').replace('俟','崇'));
	if (/幫|滂|並|明/.test(line['NIU']) && line['DENG'] == '三' && line['HU'] == '合') {
		firstRes = window[tabName].filter(item => item['first'] == line['NIU'].replace('幫','非').replace('滂','敷').replace('並','奉').replace('明','微'));
	}
	if (firstRes.length != 0) {
		koxqim_gujam_res.push(firstRes[0].first + `　` + firstRes[0].word + `<br>`);
	}
	
	let finalRes = window[tabName].filter(item => item['first'].replace('開','').replace('合','').match(/^[\u4E00-\u9FA5]{2}/) == line['SHE'] + line['DENG']);
	if (line['SHE'] == '止' && line['DENG'] == '三') {
		finalRes = window[tabName].filter(item => item['first'].match(/^[\u4E00-\u9FA5]{3}/) == line['SHE'] + line['HU'] + line['DENG']);
	}
	if (finalRes.length != 0) {
		for (let i of finalRes) {
			koxqim_gujam_res.push(i.first + `　` + i.word.replace(/　　/g,'　　　　　') + `<br>`);
		}
	}
	
	let toneRes1 = window[tabName].filter(item => item['first'] == line['TONE']);
	if (toneRes1.length != 0) {
		koxqim_gujam_res.push(toneRes1[0].first + `　` + toneRes1[0].word + `<br>`);
	}
	let toneRes2 = window[tabName].filter(item => item['first'] == judgeFirst(line['NIU'], 0) + line['TONE']);
	if (toneRes2.length != 0) {
		koxqim_gujam_res.push(toneRes2[0].first + `　` + toneRes2[0].word.replace(/　　/g,'　　　') + `<br>`);
	}
	let toneRes3 = window[tabName].filter(item => item['first'] == judgeFirst(line['NIU'], 1) + line['TONE']);
	if (toneRes3.length != 0) {
		koxqim_gujam_res.push(toneRes3[0].first + `　` + toneRes3[0].word.replace(/　　/g,'　　　　') + `<br>`);
	}
	
	return koxqim_gujam_res.join('');
}

// 判斷清濁
function judgeFirst(first, num){
	if (num == 1){
		if (/並|奉|定|澄|從|邪|崇|俟|船|禪|常|群|匣/.test(first)){
			return '全濁';
		} else if (/明|泥|來|娘|孃|日|疑|以|云/.test(first)){
			return '次濁';
		} else if (/滂|透|徹|清|初|昌|溪/.test(first)){
			return '次清'
		} else {
			return '全清';
		}
	} else {
		if (/並|奉|定|澄|從|邪|崇|俟|船|禪|群|匣|明|泥|來|娘|孃|日|疑|以|云/.test(first)){
			return '濁';
		} else {
			return '清';
		}
	}
}

// 獲取同一音韻地位字的函數
function sameWordFunc(res_char, tabName, n_t, textChar, line){
	let char_jp = [];
	for (let line_char of res_char) {
		let tempjp = MainQuery.queryTable(line_char['WORD'], [tabName], 'char');
		if (tempjp.length == 0) {
			char_jp.push('-');
		} else {
			let jpdata = [];
			for (let line_char of tempjp) {
				if(judgeJP(textChar, line_char['JYUTPING'], n_t, line['TONE'], line['SHE'], line['NIU'])){
					jpdata.push(line_char['JYUTPING']);
				}
			}
			if (jpdata.length == 0){
				char_jp.push('-');
			} else {
				char_jp.push(jpdata.join('/'));	
			}
		}
		/*if (line_char['WORD1'] != line_char['WORD2']){
			let tempjp2 = MainQuery.queryTable(line_char['WORD2'], [tabName], 'char');
			if (tempjp2.length == 0) {
				char_jp.push('-');
			} else {
				let jpdata = [];
				for (let line_char of tempjp2) {
					if(judgeJP(textChar, line_char['JYUTPING'], n_t, line['TONE'], line['SHE'], line['NIU'])){
						jpdata.push(line_char['JYUTPING']);
					}
				}
				if (jpdata.length == 0){
					char_jp.push('-');
				} else {
					char_jp.push(jpdata.join('/'));	
				}
			}
		}*/
	}
	return char_jp;
}

// 粵拼與中古音適配判斷函數
function judgeJP(textChar, jyutping, n_t, tone, she, first){
	
	if ((tone == '平' && /1|4/.test(jyutping))||(tone == '上' && /2|5|6|3/.test(jyutping))||(tone == '去' && /3|6|5/.test(jyutping)) && /[^ptk][1-6]$/.test(jyutping)) {
		if (((/通|江|宕|梗|曾/.test(she)) && (/(ng|k)\d$/.test(jyutping))) || ((/臻|山|深|咸/.test(she)) && (/(n|t)\d$/.test(jyutping))) || ((/山/.test(she)) && first == '常' && (/m\d$/.test(jyutping))) || ((/深|咸/.test(she)) && (/(m|p)\d$/.test(jyutping)))){
			
		} else if (((/效|流/.test(she)) && (/u\d$/.test(jyutping))) || ((/止/.test(she)) && (/(i|e|yu|y)\d$/.test(jyutping))) || ((/蟹/.test(she)) && (/(i|a|o|u)\d$/.test(jyutping))) || ((/果/.test(she)) && (/(a|e|i|o|u|oe)\d$/.test(jyutping))) || ((/假/.test(she)) && (/(a|e|i)\d$/.test(jyutping))) || ((/遇/.test(she)) && (/(u|ng|yu|o)\d$/.test(jyutping)))) {
			
		} else {
			return false;
		}
	} else if (tone == '入') {
		if ((n_t=='n' && /1|3|6/.test(jyutping) && /[ptk]\d$/.test(jyutping)) || (n_t=='t' && /3|2|5|6/.test(jyutping) && /[ptk]\d$/.test(jyutping))) {
			
		} else {
			return false;
		}
		if (((/通|江|宕|梗|曾/.test(she)) && (/(ng|k)\d$/.test(jyutping))) || ((/臻|山|深|咸/.test(she)) && (/(n|t)\d$/.test(jyutping))) || ((/深|咸/.test(she)) && (/(m|p)\d$/.test(jyutping)))){
			
		} else {
			return false;
		}
	} else {
		return false;
	}
	
	if(((/幫|滂|並|非|敷|奉/.test(first)) && (/^[^bpf]/.test(jyutping))) || ((/明|微/.test(first)) && (/^[^mwf]/.test(jyutping))) || ((/端|透|定/.test(first)) && (/^[^dtn]/.test(jyutping))) || ((/泥/.test(first)) && (/^[^n]/.test(jyutping))) || ((/來/.test(first)) && (/^([^ln]|ng)/.test(jyutping))) || ((/知|徹|澄|精|清|從/.test(first)) && (/^[^zcd]/.test(jyutping))) || ((/娘|孃/.test(first)) && (/^(?!([nj]|nj))/.test(jyutping))) || ((/心/.test(first)) && (/^(?!([sc]|sl))/.test(jyutping))) || ((/邪|生|俟|常|禪|書|船/.test(first)) && (/^(?!([zcsjh]|sl))/.test(jyutping))) || ((/莊|章/.test(first)) && (/^(?!([zj]|nj))/.test(jyutping))) || ((/初|昌/.test(first)) && (/^(?!([csj]|nj))/.test(jyutping))) || ((/崇/.test(first)) && (/^[^zcs]/.test(jyutping))) || ((/見|溪|群|疑|曉|匣/.test(first)) && (/^(?!([gkhfjwnmdl]|ng|nj))/.test(jyutping))) || ((/日|云|以/.test(first)) && (/^(?!([hjwgn]|ng|nj))/.test(jyutping))) || ((/影/.test(first)) && (/^(?!([aeioujw]|ng|nj))/.test(jyutping))) || ((/疑/.test(first)) && (/^l/.test(jyutping))) || ((/書/.test(first)) && (/^z/.test(jyutping)))){
		return false;
	} else {
		if(/並|奉|微|俟|定|澄|從|邪|崇|船|常|禪|群|匣|明|泥|來|娘|孃|日|疑|以|云/.test(first)){
			if ((tone == '平' && /[^41]$/.test(jyutping))||(tone == '上' && /[^2563]$/.test(jyutping))||(tone == '去' && textChar != '那' && first != '云' && first != '以' && /[^63]$/.test(jyutping))||(tone == '去' && (first == '云' || first == '以') && /[^65]$/.test(jyutping))){
				return false;
			}
			if ((n_t == 'n' && tone == '入' && first != '來' && /[^61]$/.test(jyutping))||(n_t == 'n' && tone == '入' && first == '來' && /[^361]$/.test(jyutping))||(n_t == 't' && tone == '入' && /[^3256]$/.test(jyutping))) {
				return false;	
			}
			if ((n_t == 'n' && (tone == '平'||tone == '上') && first != '匣' && first != '以' && /^[bdgz]/.test(jyutping) && /[^6]$/.test(jyutping))||(n_t == 'n' && (tone == '平'||tone == '上') && (first == '匣'||first == '以') && /^[bdz]/.test(jyutping) && /[^6]$/.test(jyutping))||(n_t == 'n' && (tone == '去'||tone == '入') && first != '邪' && /^[ptkc]/.test(jyutping))||(n_t == 'n' && (tone == '去'||tone == '入') && first == '邪' && /^[ptk]/.test(jyutping))) {
				return false;	
			}
			if (n_t == 't' && tone == '上' && /[^256]$/.test(jyutping)){
				return false;
			}
		} else {
			if ((tone == '平' && /[^1]$/.test(jyutping))||(tone == '上' && /[^25]$/.test(jyutping))||(tone == '去' && /[^36]$/.test(jyutping))){
				return false;
			}
			if ((n_t == 'n' && tone == '入' && textChar != '酷' && /[^13]$/.test(jyutping))||(n_t == 't' && tone == '入' && /[^32]$/.test(jyutping))) {
				return false;	
			}
		}
	}
	
	
	return true;
}


// 複製按鈕
function handleCopy() {
    const clipboard  = new ClipboardJS('.copyBtn');  // 設置複製按鈕
	toastrFunc('toast-top-center'); // 設置提示按鈕
	clipboard.on('success', function(e) {
		toastr.success('複製成功！');
	});
	clipboard.on('error', function(e) {
		toastr.error('複製失敗，請刷新後重試！');
	});
}

//  提示信息
function toastrFunc(pos){
	toastr.options.positionClass = pos; // 設置提示框位置
	toastr.options.timeOut = 1000; // 無操作時提示框保留時間
	toastr.options.extendedTimeOut = 1000;  // 鼠標懸停過後提示框保留時間
	toastr.options.preventDuplicates = true; // 防止重複
}

// 固定輸入框
function setSticky(){
	const sticky = document.querySelector('.mySticky');
	const origOffsetY = sticky.offsetTop;
	function onScroll(e) {
		window.scrollY >= origOffsetY ? sticky.classList.add('div-sticky') : sticky.classList.remove('div-sticky');
	}
	document.addEventListener('scroll', onScroll);
}

// 中古音查詢
function triungkoxFun(){
	outputAlert.innerHTML = '';
	document.getElementsByClassName('classHighcharts').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTabTitle').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTable').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('webLinkDiv').forEach((obj)=>{obj.innerHTML = ''});
	$('#nav-home-tab,#nav-home-tab-bw,#nav-home,#nav-home-bw').addClass('active show'); // 選回第一個tab和內容
	$('#nav-profile-tab,#nav-profile-tab-bw,#nav-profile,#nav-profile-bw').removeClass('active show');
	$('.rowtabDiv').addClass('d-none');
	$('#nav-tab,#nav-tab-bw').addClass('d-none');  // 隱藏tab
	
	let selListNiu = [], selListYun = [], selListHu = [], selListDeng = [], selListTone = [], selListChong = [];
	document.getElementsByClassName("triungkox-item-0").forEach((item)=>{ if(item.checked == true) selListNiu.push(shengniu[item.value].join("','"))});
	document.getElementsByClassName("triungkox-item-1").forEach((item)=>{ if(item.checked == true) selListYun.push(yunmu[item.value].join("','"))});
	document.getElementsByClassName("checkbox-2").forEach((item)=>{ if(item.checked == true) selListHu.push(item.value)});
	document.getElementsByClassName("checkbox-3").forEach((item)=>{ if(item.checked == true) selListDeng.push(item.value)});
	document.getElementsByClassName("checkbox-4").forEach((item)=>{ if(item.checked == true) selListTone.push(item.value)});
	document.getElementsByClassName("checkbox-5").forEach((item)=>{ if(item.checked == true) selListChong.push(item.value)});
	
	// 開始顯示
	let judgeFlag = queryTriungKox(selListNiu.join("','"),selListYun.join("','"),selListHu.join("','").replace(/口/g,""),selListDeng.join("','").replace(/等/g,""),selListTone.join("','").replace(/聲/g,""),selListChong.join("','"),text_fanqie.value,document.getElementById("checkbox-fanqie").checked,text_expl.value,document.getElementById("checkbox-expl").checked);
	
	if (judgeFlag == 0) {
		document.getElementsByClassName("classHighcharts").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
		$('.rowtabDiv').addClass('d-none');
		$('#nav-tab,#nav-tab-bw').addClass('d-none');
		return false;
	};
}

// 查詢中古音
function queryTriungKox(Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl){
	//let res_triungkox = MainQuery.queryTable_triungkox(Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl);
	let res_triungkox_tung = MainQuery.queryTable_triungkox_tung(Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl);
	let res_triungkoxghuh = MainQuery.queryTable_triungkoxghuh(Niu, Yun, Hu, Deng, Tone, Chong, fanqie, isFanqie, expl, isExpl);
	let isShow = res_triungkox_tung.length + res_triungkoxghuh.length;
	if (isShow == 0) { 
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
	} else if (isShow > 1000){
		displayAlert('數據量超過1000，請縮小查詢範圍!', outputAlert, 'alert-danger');
	} else {
		//$('.rowtabDiv-triungkox').removeClass('d-none');
		//showTable(res_triungkox, 'outTab_triungkox', '《廣韻》<small>韻典版</small>', outTabTitle_triungkox, colData_triungkox);
		$('.rowtabDiv-triungkox_tung').removeClass('d-none');
		showTable(res_triungkox_tung, 'outTab_triungkox_tung', '《廣韻》', outTabTitle_triungkox_tung, colData_triungkox_tung);
		$('.rowtabDiv-triungkoxghuh').removeClass('d-none');
		showTable(res_triungkoxghuh, 'outTab_triungkoxghuh', '《集韻》', outTabTitle_triungkoxghuh, colData_triungkoxghuh);
	}
	return isShow;
}


// 早期粵音查詢
function oldJyutFun(){
	outputAlert.innerHTML = '';
	document.getElementsByClassName('classHighcharts').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTabTitle').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('classTable').forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName('webLinkDiv').forEach((obj)=>{obj.innerHTML = ''});
	$('#nav-home-tab,#nav-home-tab-bw,#nav-home,#nav-home-bw').addClass('active show'); // 選回第一個tab和內容
	$('#nav-profile-tab,#nav-profile-tab-bw,#nav-profile,#nav-profile-bw').removeClass('active show');
	$('.rowtabDiv').addClass('d-none');
	$('#nav-tab,#nav-tab-bw').addClass('d-none');  // 隱藏tab
	
	let selListNiu = [], selListYun = [], selListTone = [];
	document.getElementsByClassName("jyut-item-0").forEach((item)=>{ if(item.checked == true) selListNiu.push(item.value)});
	document.getElementsByClassName("jyut-item-1").forEach((item)=>{ if(item.checked == true) selListYun.push(item.value)});
	document.getElementsByClassName("checkbox-jyut-2").forEach((item)=>{ if(item.checked == true) selListTone.push(item.value)});
	
	// 開始顯示
	let judgeFlag = queryOldJyut(selListNiu.join("','"),selListYun.join("','"),selListTone.join("','"),text_jyutfanqie.value,document.getElementById("checkbox-jyut-fanqie").checked,text_jyutexpl.value,document.getElementById("checkbox-jyut-expl").checked);
	
	if (judgeFlag == 0) {
		document.getElementsByClassName("classHighcharts").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
		$('.rowtabDiv').addClass('d-none');
		$('#nav-tab,#nav-tab-bw').addClass('d-none');
		return false;
	};
}

// 查詢早期粵音
function queryOldJyut(Niu, Yun, Tone, fanqie, isFanqie, expl, isExpl){
	let res_gw = MainQuery.queryTable_gw(Niu, Yun, Tone, fanqie, isFanqie, expl, isExpl);
	if (res_gw.length == 0) { 
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
	} else if (res_gw.length > 1000){
		displayAlert('數據量超過1000，請縮小查詢範圍!', outputAlert, 'alert-danger');
	} else {
		$('.rowtabDiv-gw').removeClass('d-none');
		showTable(res_gw, 'outTab_gw', '《江湖尺牘分韻撮要合集》', outTabTitle_gw, colData_gw);
	}
	return res_gw.length;
}



// 入口文件
$(() => {
	DictDb.factory(DictConfig.dir);
	
	// 輸出模態框表格數據
	$('#outTab_oldbook').bootstrapTable({
		columns: colData_oldbook,
		data: rowData_oldbook
	});
	$('#outTab_book').bootstrapTable({
		columns: colData_book,
		data: rowData_book
	});
	$('#outTab_oldbook_proverb').bootstrapTable({
		columns: colData_oldbook_proverb,
		data: rowData_oldbook_proverb
	});
	$('#outTab_book_phrase').bootstrapTable({
		columns: colData_book_phrase,
		data: rowData_book_phrase
	});
	$('#outTab_book_grammar').bootstrapTable({
		columns: colData_book_grammar,
		data: rowData_book_grammar
	});
	$('#outTab_select').bootstrapTable({
		columns: colData_select,
		data: rowData_select
	});
	$('#outTab_selectY').bootstrapTable({
		columns: colData_selectY,
		data: rowData_selectY
	});
	/*
	$('#outTab_sponsor').bootstrapTable({
		columns: colData_sponsor,
		data: rowData_sponsor
	});
	*/

	// 初始化選擇資料
	dataButt.innerHTML = getDataText(); 
	// 綁定模態框關閉時候，更新選擇資料顯示text
	$('#dataModal').on('hide.bs.modal', function (event) {
		dataButt.innerHTML = getDataText();
	});
	// 固定輸入框
	setSticky();
	// 返回頂部插件
	$('body').materialScrollTop();
	
})
