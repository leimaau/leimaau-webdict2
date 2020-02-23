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
	document.getElementsByClassName("classPie").forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
	
	var selVal = $('.selectpicker').selectpicker('val'); // 複選下拉框的選值數組
	
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
		document.getElementsByClassName("classPie").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
		document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
		displayAlert('未查詢到結果!', outputAlert, 'alert-primary');
		return false;
	};
}

// 【單字】查詢模塊
function queryChar(inputValue, queryType, selVal){
	var res_gw = [];
	if (selVal.some(item => item.indexOf('1838') > -1)) {
		res_gw = MainQuery.queryTableOne(inputValue, ['1838'], queryType);
		tableDiv(res_gw, 'outTab_gw', "《江湖尺牘分韻撮要合集》", outTabTitle_gw, colData_gw);
	};
	
	var res = [];
	var selArr = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('1838') == -1);
	if (selArr.length != 0) {
		res = MainQuery.queryTable(inputValue, selArr, queryType);
		tableDiv(res, 'outTab', "南寧白話", outTabTitle, colData);  // 顯示白話表格
		pieDiv(res, inputValue, 'outPie', "南寧白話");  // 顯示白話餅圖
	};
	
	var res_bw = [];
	if (selVal.some(item => item.indexOf('_bw') > -1)) {
		res_bw = MainQuery.queryTable(inputValue, selVal.filter(item => item.indexOf('_bw') > -1), queryType);
		tableDiv(res_bw, 'outTab_bw', "南寧平話", outTabTitle_bw, colData);  // 顯示平話表格
		pieDiv(res_bw, inputValue, 'outPie_bw', "南寧平話");  // 顯示平話餅圖
	};
	
	return res_gw.length + res.length + res_bw.length;
}


// 【詞彙】查詢模塊
function queryPhrase(inputValue, queryType, selVal){
	var res = [];
	var selArr = selVal.filter(item => item.indexOf('2008') > -1);
	if (selArr.length != 0) {
		res = MainQuery.queryTablePhrase(inputValue, [`${selArr}_phrase`], queryType);
		tableDiv(res, 'outTab', "南寧白話", outTabTitle, colData_phrase);  // 顯示白話表格
		pieDiv(res, inputValue, 'outPie', "南寧白話");  // 顯示白話餅圖
	};
	
	return res.length;
}


// 表格列數據寫在config.js中
// 格式化來源欄
function formatSOUR(value, row_year, picType) {
	var bookname = $(`#selectpicker option[value=${row_year}]`).text();
	row_year = row_year.replace('_bw', '').replace('_phrase', '');
	var linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/' + row_year;
	
	if (row_year == '1994') linkaddr += 'zh/zh'
	else if (row_year == '1997') linkaddr += 'yd/yd'
	else if (row_year == '1998') linkaddr += 'dfz/dfz'
	else if (row_year == '2002') linkaddr += 'zk/zk'
	else if (row_year == '2007') linkaddr = ''
	else if (row_year == '2008') linkaddr += 'yj/yj'
	else if (row_year == '2018') linkaddr = '';
	
	if (value == '' || linkaddr == '') {
		return `<span style="white-space: nowrap;">${bookname}</span>`;
	} else {
		return `<span style="white-space: nowrap;">${bookname + pageSplit(value, picType, linkaddr)}</span>`;
	};
}

// 葉碼拼接函數
function pageSplit(value, picType, linkaddr) {
	var pageLink = '';
	var pages = value.replace('P', '').replace('（單字音表）', '').split('，');
	for (let i in pages) {
		pageLink += `P<a href="${linkaddr + pages[i]}.${picType}" target="_Blank">${pages[i]}</a>，`;
	}
	return pageLink.replace(/，$/gi, "");
}


// 表格顯示函數
function tableDiv(res, outputDiv, tabTitle, tabTitleDiv, colData) {
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
function pieDiv(res, inputValue, div_id, pieTitle) {
	//if (res.length == 0) return false;
	// 餅圖數據處理
	const pie_data = {};  // 對象：{粵拼 -> [多份數據年份]}
	for (let line of res) { // 循環每一對象存入數據 pie_data
		var JYUTPING = line['JYUTPING'], YEAR = line['YEAR'];
		YEAR = YEAR.replace('_bw', '').replace('_phrase', ''); // 餅圖顯示1998_bw -> 1998、2008_phrase -> 2008
		if (typeof (pie_data[JYUTPING]) == "undefined") { pie_data[JYUTPING] = []; pie_data[JYUTPING].push(YEAR); } else { pie_data[JYUTPING].push(YEAR); };
	};
	// 開始顯示
	var show_data = [];
	for (var i in pie_data) { pie_data[i] = new Set(pie_data[i]) }; //去重
	for (var i in pie_data) { show_data.push({ name: i, y: pie_data[i].size, x: Array.from(pie_data[i]).toString() }) }; //name 數據名 y 數據值 x 附帶值

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
	$('#' + div_id).highcharts(json);
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
		document.getElementById('queryRadio-dicPhrase').style.display = 'none';
		document.getElementById('char').checked = true; // 默認選擇第一個
	} else if ('dicPhrase' === _this.id){
		document.getElementById('queryRadio-dicWord').style.display = 'none';
		document.getElementById('phrase').checked = true; // 默認選擇第一個
	}
	document.getElementById('queryRadio-' + _this.id).style.display = 'block';
}

/*
加载完毕，传入需要完成加载的的元素
	删除disabled
	获取completedName属性的值显示在按钮上
	删除加载中的样式
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
显示错误提示
*/
function displayAlert(text, obj, colorType, close=true){
	var html = `<div class="alert ${colorType} alert-dismissible fade show" role="alert"><strong>${text}</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`;
	if (!close){
		html = `<div class="alert ${colorType}"><strong>${text}</strong></div>`;
	}
	obj.innerHTML = html;
}

// 入口文件
(() => {
	DictDb.factory(DictConfig.dir);
})()