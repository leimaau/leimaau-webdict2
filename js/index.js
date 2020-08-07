// 回車事件
function searchPress(e, valueInput, queryType, dictType) {
	var keyCode = null;
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
	$('.rowtabDiv').removeClass('d-none');
	$('#nav-tab,#nav-tab-bw').addClass('d-none');  // 隱藏tab
	
	
	var selVal = [];
	if(dictType == 'dicWord'){
		document.getElementsByClassName("book").forEach((item)=>{ if(item.checked == true) selVal.push(item.value)});
	} else {
		document.getElementsByClassName("book_phrase").forEach((item)=>{ if(item.checked == true) selVal.push(item.value)});
	};
	
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
	
	var judgeFlag = 0; // 0無結果 非0有結果
	// 開始顯示
	if(dictType == 'dicWord'){
		judgeFlag = queryChar(inputValue, queryType, selVal);
	} else {
		judgeFlag = queryPhrase(inputValue, queryType, selVal);
	};
	
	if (judgeFlag == 0) {
		document.getElementsByClassName("classHighcharts").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
		$('.rowtabDiv').addClass('d-none');
		return false;
	};
}

const allTitle = '南寧白話', allTitle_bw = '南寧平話';

// 【單字】查詢模塊
function queryChar(inputValue, queryType, selVal){
	
	var res_triungkox = [];
	if (selVal.some(item => item.indexOf('1008') > -1)) {
		res_triungkox = MainQuery.queryTableOne_triungkox(inputValue, ['tab_1008'], queryType);
		showTable(res_triungkox, 'outTab_triungkox', "《廣韻》", outTabTitle_triungkox, colData_triungkox);
	};
	
	
	var res_gw = [];
	if (selVal.some(item => item.indexOf('1838') > -1)) {
		res_gw = MainQuery.queryTableOne_gw(inputValue, ['tab_1838'], queryType);
		showTable(res_gw, 'outTab_gw', "《江湖尺牘分韻撮要合集》", outTabTitle_gw, colData_gw);
	};
	
	var res_jw = [];
	if (selVal.some(item => item.indexOf('1856') > -1)) {
		res_jw = MainQuery.queryTableOne_jw(inputValue, ['tab_1856'], queryType);
		showTable(res_jw, 'outTab_jw', "《英華分韻撮要》", outTabTitle_jw, colData_jw);
	};
	
	var res_jj = [];
	if (selVal.some(item => item.indexOf('1941') > -1)) {
		res_jj = MainQuery.queryTableOne_jj(inputValue, ['tab_1941'], queryType);
		showTable(res_jj, 'outTab_jj', "《粵音韻彙》", outTabTitle_jj, colData_jj);
	};
	
	var res = [];
	var dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_g') == -1).filter(item => item.indexOf('_zb') == -1);
	if (dataList.length != 0) {
		res = MainQuery.queryTable(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle+'(市區)', outTabTitle, colData);  // 顯示白話表格
		if(queryType == 'char' || queryType == 'char_simp') showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		//showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'JYUTPING'); // 顯示白話詞雲圖
		
	};
	
	var res_bw = [];
	if (selVal.some(item => item.indexOf('_bw') > -1)) {
		res_bw = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('_bw') > -1), queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw+'(亭子)', outTabTitle_bw, colData);  // 顯示平話表格
		if(queryType == 'char' || queryType == 'char_simp') showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		//showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'JYUTPING'); // 顯示平話詞雲圖
	};
	
	var res_zb_sz = [];
	if (selVal.some(item => item.indexOf('zb_sz') > -1)) {
		res_zb_sz = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_sz') > -1), queryType);
		showTable(res_zb_sz, 'outTab_zb_sz', '沙井平話', outTabTitle_zb_sz, colData);
		//if(queryType == 'char' || queryType == 'char_simp') showPie(res_zb_sz, inputValue, 'outPie_zb_sz', allTitle_zb_sz, queryType);
		//showWordCloud(res_zb_sz, inputValue, 'outWordCloud_zb_sz', '沙井平話', queryType, 'JYUTPING');
	};
	
	var res_zb_b_wj = [];
	if (selVal.some(item => item.indexOf('zb_b_wj') > -1)) {
		res_zb_b_wj = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_b_wj') > -1), queryType);
		showTable(res_zb_b_wj, 'outTab_zb_b_wj', '橫縣白話', outTabTitle_zb_b_wj, colData);
		//if(queryType == 'char' || queryType == 'char_simp') showPie(res_zb_b_wj, inputValue, 'outPie_zb_b_wj', allTitle_zb_b_wj, queryType);
		//showWordCloud(res_zb_b_wj, inputValue, 'outWordCloud_zb_b_wj', '橫縣白話', queryType, 'JYUTPING');
	};
	
	var res_zb_wj = [];
	if (selVal.some(item => item.indexOf('zb_wj') > -1)) {
		res_zb_wj = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('zb_wj') > -1), queryType);
		showTable(res_zb_wj, 'outTab_zb_wj', '橫縣平話', outTabTitle_zb_wj, colData);
		//if(queryType == 'char' || queryType == 'char_simp') showPie(res_zb_wj, inputValue, 'outPie_zb_wj', allTitle_zb_wj, queryType);
		//showWordCloud(res_zb_wj, inputValue, 'outWordCloud_zb_wj', '橫縣平話', queryType, 'JYUTPING');
	};
	
	if(queryType == 'char' || queryType == 'char_simp') showLink(inputValue);
	
	var isShow = res_triungkox.length + res_gw.length + res_jw.length + res_jj.length + res.length + res_bw.length + res_zb_sz.length + res_zb_b_wj.length + res_zb_wj.length;
	if (isShow != 0) {
		//if(res.length != 0) $('#nav-tab').removeClass('d-none'); // 顯示tab
		//if(res_bw.length != 0) $('#nav-tab-bw').removeClass('d-none'); // 顯示tab
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
	
	var res_proverb = [];
	var dataList_oldProverb = selVal.filter(item => item.indexOf('_proverb') > -1);
	if (dataList_oldProverb.length != 0) {
		res_proverb = MainQuery.queryTable_proverb(inputValue, dataList_oldProverb, queryType);
		showTable(res_proverb, 'outTab_triungkox', '童謠和熟語', outTabTitle_triungkox, colData_proverb);  // 使用顯示《廣韻》的位置
		if (res_proverb.length != 0) showWordCloud(res_proverb, inputValue, 'outWordCloud_triungkox', '童謠和熟語', queryType, 'TRAD');
	};
	
	var res = [];
	var dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList.length != 0) {
		res = MainQuery.queryTablePhrase(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle+'(市區)', outTabTitle, colData_phrase);  // 顯示白話表格
		showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'TRAD'); // 顯示白話詞雲圖
	};
	
	var res_bw = [];
	var dataList_bw = selVal.filter(item => item.indexOf('_bw') > -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList_bw.length != 0) {
		res_bw = MainQuery.queryTablePhrase(inputValue, dataList_bw, queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw+'(亭子)', outTabTitle_bw, colData_phrase);  // 顯示平話表格
		showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'TRAD'); // 顯示平話詞雲圖
	};
	
	var isShow = res_proverb.length + res.length + res_bw.length;
	if (isShow != 0) {
		if(res.length != 0) $('#nav-tab').removeClass('d-none'); // 顯示tab
		if(res_bw.length != 0) $('#nav-tab-bw').removeClass('d-none'); // 顯示tab
	} else {
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

// 餅圖顯示函數
function showPie(res, inputValue, pieDiv, pieTitle, queryType) {
	//if (res.length == 0) return false;
	if (queryType == 'expl' || queryType == 'phrase_expl') return false; // 詞例和解釋反查時不顯示餅圖
	// 餅圖數據處理
	const pie_data = {};  // 對象：{粵拼 -> [多份數據年份]}
	for (let line of res) { // 循環每一對象存入數據 pie_data
		var JYUTPING = line['JYUTPING'], YEAR = line['YEAR'];
		YEAR = YEAR.replace('_bw', '').replace('_phrase', '').replace('tab_', ''); // 餅圖顯示tab_1998_bw -> 1998、tab_2008_phrase -> 2008
		if (typeof (pie_data[JYUTPING]) == "undefined") { pie_data[JYUTPING] = []; pie_data[JYUTPING].push(YEAR); } else { pie_data[JYUTPING].push(YEAR); };
	};
	// 開始顯示
	var show_data = [];
	for (let i in pie_data) { pie_data[i] = new Set(pie_data[i]) }; //去重
	for (let i in pie_data) { show_data.push({ name: i, y: pie_data[i].size, x: Array.from(pie_data[i]).toString() }) }; //name 數據名 y 數據值 x 附帶值

	var chart = {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	};
	var title = {
		text: `<span class="user-font-title">${pieTitle}【${inputValue}】</span>`
	};
	var tooltip = {
		headerFormat: '{series.name}({point.y})<br/>',
		pointFormat: '<b>{point.x}</b>'
	};
	var plotOptions = {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b><br/><span style="color: {point.color}">資料數：{point.y}</span><br/><span style="color: {point.color}">佔比：{point.percentage:.1f} %</span>',
				style: {
					color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				}
			},
			showInLegend: true
		}
	};
	var series = [{
		type: 'pie',
		name: '資料',
		data: show_data
	}];
	var color = ['#2775b6', // 景泰藍
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
		'#5bae23']; // 鸚鵡綠
	var json = {};
	json.credits = { enabled: false };
	json.chart = chart;
	json.title = title;
	json.tooltip = tooltip;
	json.series = series;
	json.plotOptions = plotOptions;
	json.colors = color;
	$('#' + pieDiv).highcharts(json);
}

// 詞雲圖顯示函數
function showWordCloud(res, inputValue, wordCloudDiv, wordCloudTitle, queryType, colName) {
	//if (res.length == 0) return false;
	if (queryType == 'expl' || queryType == 'phrase_expl') { // 詞例和解釋反查時不顯示詞雲圖
		$('#nav-tab,#nav-tab-bw').addClass('d-none');  // 隱藏tab
		return false;
	}
	var text = [];
	for (let line of res) {
		text.push(line[colName]);
	};
	var data = text.join(',').split(/[（）《》？：，。,\. ]+/g)
	.reduce(function (arr, word) {
		var obj = arr.find(function (obj) {
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
	var series= [{
		name: '計數',
		type: 'wordcloud',
		data: data
	}];
	var title= {
		text: `<span class="user-font-title">${wordCloudTitle}【${inputValue}】</span>`
	};
	var json = {};
	json.credits = { enabled: false };
	json.series = series;
	json.title = title;
	$('#' + wordCloudDiv).highcharts(json);
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
	} else if ('dicPhrase' === _this.id){
		document.getElementById('phrase').checked = true; // 默認選擇第一個
		$('#queryRadio-dicPhrase,#modal-table-phrase,#btn-allselect-phrase,#btn-cancel-phrase').removeClass('d-none');
		$('#queryRadio-dicWord,#modal-table,#btn-allselect,#btn-cancel').addClass('d-none');
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
	var html = `<div class="alert ${colorType} alert-dismissible fade show" role="alert"><strong>${text}</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`;
	if (!close){
		html = `<div class="alert ${colorType}"><strong>${text}</strong></div>`;
	}
	obj.innerHTML = html;
}

function getDataText(){
	// 判斷當前是字典還是詞典
	let currentTable = ""
	if (dictType.dataset.dic == 'dicWord'){
		currentTable = "#modal-table ";
	}
	else {
		currentTable = "#modal-table-phrase ";
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
	IPA = ($("#checkbox_isw").is(":checked") == true) ? IPA : IPA.replace(/kʷ(ʰ|)ɔ(k|ŋ|\d{2}|[¹²³⁴⁵]*|[˩˨˧˦˥]*)/g,'k$1ɔ$2').replace(/kʷ(ʰ|)ek/g,'k$1ek').replace(/kʷ(ʰ|)o(k|ŋ|\d{2})/g,'k$1o$2');
	
	return IPA;
}

// 粵拼格式處理
function jpFormat(jyutping){
	jyutping = ($("#checkbox_isw").is(":checked") == true) ? jyutping : jyutping.replace(/(g|k)wo(k|ng|\d)/g,'$1o$2').replace(/(g|k)wik/g,'$1ik');
	
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
	
	
	let res_koxqim = MainQuery.queryTableOne_triungkox(textChar, ['tab_1008'], 'char');
	if (res_koxqim.length == 0) {
		outputText.push(`未查詢到《廣韻》數據，請檢查是否輸入一個傳統漢字！`);
	} else {
		for (let line of res_koxqim) {
			outputText.push(`【中古音】` + line['FIRST'] + line['SHE'] + line['HU'] + line['DENG'] + line['YUNBU1'] + line['TONE'] + ` ` + line['PINYIN'] + `<br/>` + `【反切】` + line['FANQIE1'] + `<br/>`);
			
			let res_char = MainQuery.queryTableOne_triungkox(line['PINYIN'], ['tab_1008'], 'jyut6ping3');
			let char_jp = sameWordFunc(res_char, 'tab_2018', 'n', textChar, line);
			let char_jp2 = sameWordFunc(res_char, 'tab_2018_bw', 't', textChar, line);
			
			let char_same = [];
			for (let line_char of res_char) {
				if (line_char['WORD1'] == line_char['WORD2']){
					char_same.push(line_char['WORD1']);
				} else {
					char_same.push(line_char['WORD1']);
					char_same.push(line_char['WORD2']);
				}
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
	let firstRes = window[tabName].filter(item => item['first'] == line['FIRST'].replace('常','禪').replace('娘','泥').replace('俟','崇'));
	if (/幫|滂|並|明/.test(line['FIRST']) && line['DENG'] == '三' && line['HU'] == '合') {
		firstRes = window[tabName].filter(item => item['first'] == line['FIRST'].replace('幫','非').replace('滂','敷').replace('並','奉').replace('明','微'));
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
	let toneRes2 = window[tabName].filter(item => item['first'] == judgeFirst(line['FIRST'], 0) + line['TONE']);
	if (toneRes2.length != 0) {
		koxqim_gujam_res.push(toneRes2[0].first + `　` + toneRes2[0].word.replace(/　　/g,'　　　') + `<br>`);
	}
	let toneRes3 = window[tabName].filter(item => item['first'] == judgeFirst(line['FIRST'], 1) + line['TONE']);
	if (toneRes3.length != 0) {
		koxqim_gujam_res.push(toneRes3[0].first + `　` + toneRes3[0].word.replace(/　　/g,'　　　　') + `<br>`);
	}
	
	return koxqim_gujam_res.join('');
}

// 判斷清濁
function judgeFirst(first, num){
	if (num == 1){
		if (/並|奉|定|澄|从|邪|崇|俟|船|禅|常|群|匣/.test(first)){
			return '全濁';
		} else if (/明|泥|来|娘|日|疑|以|云/.test(first)){
			return '次濁';
		} else if (/滂|透|彻|清|初|昌|溪/.test(first)){
			return '次清'
		} else {
			return '全清';
		}
	} else {
		if (/並|奉|定|澄|从|邪|崇|俟|船|禅|群|匣|明|泥|来|娘|日|疑|以|云/.test(first)){
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
		let tempjp = MainQuery.queryTable(line_char['WORD1'], [tabName], 'char');
		if (tempjp.length == 0) {
			char_jp.push('-');
		} else {
			let jpdata = [];
			for (let line_char of tempjp) {
				if(judgeJP(textChar, line_char['JYUTPING'], n_t, line['TONE'], line['SHE'], line['FIRST'])){
					jpdata.push(line_char['JYUTPING']);
				}
			}
			if (jpdata.length == 0){
				char_jp.push('-');
			} else {
				char_jp.push(jpdata.join('/'));	
			}
		}
		if (line_char['WORD1'] != line_char['WORD2']){
			let tempjp2 = MainQuery.queryTable(line_char['WORD2'], [tabName], 'char');
			if (tempjp2.length == 0) {
				char_jp.push('-');
			} else {
				let jpdata = [];
				for (let line_char of tempjp2) {
					if(judgeJP(textChar, line_char['JYUTPING'], n_t, line['TONE'], line['SHE'], line['FIRST'])){
						jpdata.push(line_char['JYUTPING']);
					}
				}
				if (jpdata.length == 0){
					char_jp.push('-');
				} else {
					char_jp.push(jpdata.join('/'));	
				}
			}
		}
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
	
	if(((/幫|滂|並|非|敷|奉/.test(first)) && (/^[^bpf]/.test(jyutping))) || ((/明|微/.test(first)) && (/^[^mwf]/.test(jyutping))) || ((/端|透|定/.test(first)) && (/^[^dtn]/.test(jyutping))) || ((/泥/.test(first)) && (/^[^n]/.test(jyutping))) || ((/來/.test(first)) && (/^([^ln]|ng)/.test(jyutping))) || ((/知|徹|澄|精|清|從/.test(first)) && (/^[^zcd]/.test(jyutping))) || ((/娘/.test(first)) && (/^(?!([nj]|nj))/.test(jyutping))) || ((/心/.test(first)) && (/^(?!([sc]|sl))/.test(jyutping))) || ((/邪|生|俟|常|禪|書|船/.test(first)) && (/^(?!([zcsjh]|sl))/.test(jyutping))) || ((/莊|章/.test(first)) && (/^(?!([zj]|nj))/.test(jyutping))) || ((/初|昌/.test(first)) && (/^(?!([csj]|nj))/.test(jyutping))) || ((/崇/.test(first)) && (/^[^zcs]/.test(jyutping))) || ((/見|溪|群|疑|曉|匣/.test(first)) && (/^(?!([gkhfjwnmdl]|ng|nj))/.test(jyutping))) || ((/日|云|以/.test(first)) && (/^(?!([hjwgn]|ng|nj))/.test(jyutping))) || ((/影/.test(first)) && (/^(?!([aeioujw]|ng|nj))/.test(jyutping))) || ((/疑/.test(first)) && (/^l/.test(jyutping))) || ((/書/.test(first)) && (/^z/.test(jyutping)))){
		return false;
	} else {
		if(/並|奉|微|俟|定|澄|從|邪|崇|船|常|禪|群|匣|明|泥|來|娘|日|疑|以|云/.test(first)){
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

// 設置䈎面底部年份信息
function setWebYear() {
	const myDate = new Date();
	const myYear = myDate.getFullYear();
	if(myYear == '2020'){
		document.getElementById("year").innerHTML =  myYear;	
	} else {
		document.getElementById("year").innerHTML = '2020-' + myYear;	
	}
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
	$('#outTab_book_phrase').bootstrapTable({
		columns: colData_book_phrase,
		data: rowData_book_phrase
	});
	$('#outTab_oldbook_proverb').bootstrapTable({
		columns: colData_oldbook_proverb,
		data: rowData_oldbook_proverb
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
	// 設置䈎面底部年份信息
	setWebYear();
	// 固定輸入框
	setSticky();
	// 返回頂部插件
	$('body').materialScrollTop();
})
