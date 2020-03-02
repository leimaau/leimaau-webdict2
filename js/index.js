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
	$('#nav-home-tab,#nav-home-tab-bw,#nav-home,#nav-home-bw').addClass('active show'); // 選回第一個tab和內容
	$('#nav-profile-tab,#nav-profile-tab-bw,#nav-profile,#nav-profile-bw').removeClass('active show');
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
	
	var judgeFlag = 0; // 0 全無結果 非0有結果 
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
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
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
	
	var res = [];
	var dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('1008') == -1).filter(item => item.indexOf('1838') == -1).filter(item => item.indexOf('1856') == -1);
	if (dataList.length != 0) {
		res = MainQuery.queryTable(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle, outTabTitle, colData);  // 顯示白話表格
		if(queryType == 'char' || queryType == 'char_simp') showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		//showWordCloud(res, inputValue, 'outWordCloud', allTitle_bw, queryType, 'JYUTPING'); // 顯示白話詞雲圖
		
	};
	
	var res_bw = [];
	if (selVal.some(item => item.indexOf('_bw') > -1)) {
		res_bw = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('_bw') > -1), queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw, outTabTitle_bw, colData);  // 顯示平話表格
		if(queryType == 'char' || queryType == 'char_simp') showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		//showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'JYUTPING'); // 顯示平話詞雲圖
	};
	
	var isShow = res_triungkox.length + res_gw.length + res_jw.length + res.length + res_bw.length;
	//if (isShow != 0) { $('#nav-tab,#nav-tab-bw').removeClass('d-none'); }// 顯示tab
	
	return isShow;
}


// 【詞彙】查詢模塊
function queryPhrase(inputValue, queryType, selVal){
	var res = [];
	var dataList = [];
	var dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_nncity') == -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList.length != 0) {
		res = MainQuery.queryTablePhrase(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle, outTabTitle, colData_phrase);  // 顯示白話表格
		showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'TRAD'); // 顯示白話詞雲圖
	};
	
	var res_bw = [];
	var dataList_bw = selVal.filter(item => item.indexOf('_bw') > -1).filter(item => item.indexOf('_nncity') == -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList_bw.length != 0) {
		res_bw = MainQuery.queryTablePhrase(inputValue, dataList_bw, queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw, outTabTitle_bw, colData_phrase);  // 顯示平話表格
		showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'TRAD'); // 顯示平話詞雲圖
	};
	
	var res_nncity = [];
	var dataList_nncity = selVal.filter(item => item.indexOf('_nncity') > -1);
	if (dataList_nncity.length != 0) {
		res_nncity = MainQuery.queryTableOne_nncity(inputValue, dataList_nncity, queryType);
		showTable(res_nncity, 'outTab_nncity', '南寧城市信息', outTabTitle_nncity, colData_nncity);
	};
	
	var isShow = res.length + res_bw.length + res_nncity.length;
	if (isShow != 0) { $('#nav-tab,#nav-tab-bw').removeClass('d-none'); }// 顯示tab
	
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
	$("[data-toggle='tooltip']").tooltip(); // 綁定tips
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
		text: `${pieTitle}【${inputValue}】`
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
	var color = ['#065279', // 靛藍
		'#057748', // 松花綠
		'#b35c44', // 茶色
		'#96ce54', // 豆青
		'#b0a4e3', // 雪青
		'#1bd1a5', // 碧色
		'#896c39', // 秋色
		'#725e82', // 烏色
		'#622a1d'];// 玄色
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
		document.getElementById('nav-tab').style.display = 'none'; // 隱藏tab
		document.getElementById('nav-tab-bw').style.display = 'none';
		return false;
	}

	var text = '';
	for (let line of res) {
		text += line[colName] + ',';
	};
	text = text.replace(/,$/gi, "");
	var data = text.split(/[,\. ]+/g)
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
		text: `${wordCloudTitle}【${inputValue}】`
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
function signArticle(inputText, signText_type, signResult_type, signResult_format, signResult_way) {
	
	var txtArr = inputText.split('\n'), outputText = '';
	
	for (let lines of txtArr) {
		if (signResult_format == 'updown') {
			let lineChar = lines.split(''), outputLine = '';
			for (let txtChar of lineChar) {
				if (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') {
					outputLine += `<ruby>${txtChar}<rp>(</rp><rt>` + queryJyutping(txtChar, signText_type, signResult_type, 'jyutping', false) + `</rt><rp>)</rp></ruby>`;
				} else if (signResult_way == 'ipa' || signResult_way == 'ipa_jyutping') {
					outputLine += `<ruby>${txtChar}<rp>(</rp><rt>` + queryJyutping(txtChar, signText_type, signResult_type, 'ipa', false) + `</rt><rp>)</rp></ruby>`;
				}
			}
			outputText += outputLine + '<br>';
		} else if (signResult_format == 'twolines') {
			let lineChar = lines.split(''), outputLine1 = '', outputLine2 = '', outputLine3 = '';
			for (let txtChar of lineChar) {
				if (signResult_way == 'jyutping') {
					outputLine1 += queryJyutping(txtChar, signText_type, signResult_type, 'jyutping') + ' ';
					outputLine3 += txtChar;
				} else if (signResult_way == 'ipa') {
					outputLine1 += queryJyutping(txtChar, signText_type, signResult_type, 'ipa') + ' ';
					outputLine3 += txtChar;
				} else if (signResult_way == 'jyutping_ipa') {
					outputLine1 += queryJyutping(txtChar, signText_type, signResult_type, 'jyutping') + ' ';
					outputLine2 += queryJyutping(txtChar, signText_type, signResult_type, 'ipa') + ' ';
					outputLine3 += txtChar;
				} else if (signResult_way == 'ipa_jyutping') {
					outputLine1 += queryJyutping(txtChar, signText_type, signResult_type, 'ipa') + ' ';
					outputLine2 += queryJyutping(txtChar, signText_type, signResult_type, 'jyutping') + ' ';
					outputLine3 += txtChar;
				}
			}
			if (outputLine2 == ''){
				outputText += outputLine1.replace(/ $/gi, "") + '<br>' + outputLine3 + '<br>';
			} else {
				outputText += outputLine1.replace(/ $/gi, "") + '<br>' + outputLine2.replace(/ $/gi, "") + '<br>' + outputLine3 + '<br>';
			}
		}
	}
	
	$('#signResult').html(outputText);
}

// 單字查詢粵拼函數
function queryJyutping(txtChar, trad_simp, tabName, jyutping_ipa, keep_symbol = true){
	let res = [];
	if (!(/[^\u4e00-\u9fa5]/.test(txtChar))) {
		res = MainQuery.queryJyutping(txtChar, trad_simp, tabName);
		if(res.length != 0){
			return (jyutping_ipa == 'jyutping') ? res[0]['jyutping'] : res[0]['ipa'];
		} else {
			return '';
		}
	} else {
		if(keep_symbol) {
			return txtChar;
		} else {
			return '';
		}
	}
}


// 入口文件
$(() => {
	DictDb.factory(DictConfig.dir);
	
	$('#outTab_oldbook').bootstrapTable({ // 輸出模態框表格
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

	// 初始化選擇資料
	dataButt.innerHTML = getDataText(); 
	// 綁定模態框關閉時候，更新選擇資料顯示text
	$('#dataModal').on('hide.bs.modal', function (event) {
		dataButt.innerHTML = getDataText();
	})
})
