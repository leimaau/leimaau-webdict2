// 回車事件
function searchPress(e, valueInput, queryType) {
	var keyCode = null;
	if (e.which)
		keyCode = e.which;
	else if (e.keyCode)
		keyCode = e.keyCode;
	if (keyCode == 13) {
		querySubmit(valueInput, queryType);
		return false;
	}
	return true;
}

// 搜索按鈕
function querySubmit(inputValue, queryType, dictType) {
	console.log(inputValue, queryType, dictType);
	// [[ TODO dictType ]]
	outputAlert.innerHTML = '';
	document.getElementsByClassName("classPie").forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName("classTabTitle").forEach((obj)=>{obj.innerHTML = ''});
	document.getElementsByClassName("classTable").forEach((obj)=>{obj.innerHTML = ''});
	
	var selVal = $('.selectpicker').selectpicker('val'); // 複選下拉框的選值數組
	var res = [];
	if (!inputValue) { //判斷選擇
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>請輸入查詢關鍵字!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	} else if (!queryType) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>請選擇查詢類型!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	} else if (selVal.length == 0) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>請選擇查詢資料!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	} else if (!DictDb.hasDb()) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>數據庫未加載，請刷新!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	};
	
	// 開始顯示
	var res_gw = [];
	if (selVal.some(item => item.indexOf('1838') > -1)) {
		res_gw = MainQuery.queryTableOne(inputValue, ['1838'], queryType);
		tableDiv(res_gw, 'outTab_gw', "《江湖尺牘分韻撮要合集》", outTabTitle_gw, colData_gw);
	};
	
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
	
	if (res_gw.length == 0 && res.length == 0 && res_bw.length == 0) {
		res = [`<div class="alert alert-primary alert-dismissible fade show" role="alert"><strong>未查詢到結果!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	};
}

// 定義表格列數據
const colData = [
	{ field: 'year', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_bw', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char')">${value}</a>`; } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char_simp')">${value}</a>`; } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value.slice(0, -1)}', 'jyutping')">${value.slice(0, -1)}</a>${value.slice(-1)}`; } }
	, { field: 'SOUR', title: '來源', formatter: formatSOUR }
	, { field: 'EXPL', title: '詞例', formatter: (value) => { return `<p data-toggle="tooltip"  title='${value}'>${value}<p/>` } }
	, { field: 'NOTE', title: 'leimaau附註', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` } }
];

const colData_gw = [
	{ field: 'WORD', title: '字', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char')">${value}</a>`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'FINAL_PART', title: '韻部' }
	, { field: 'FIRST_OLD', title: '聲母' }
	, { field: 'FINAL_OLD', title: '韻母' }
	, { field: 'TONE', title: '聲調' }
	//, { field: 'FIRST_TYPE', title: '紐類' }
	, { field: 'FANQIE', title: '反切' }
	, { field: 'EXPL', title: '字義', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` }  }
	, { field: 'VOLUME', title: '冊' }
	, { field: 'PAGE', title: '葉' }
	, { field: 'IPA', title: '擬音IPA' }
	, { field: 'JYUTPING', title: '擬音粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value.slice(0, -1)}', 'jyutping')">${value.slice(0, -1)}</a>${value.slice(-1)}`; } }

];


// 格式化來源欄
function formatSOUR(value, row) {
	var bookname = '', linkaddr = '', pageLink = '';
	if (row['year'] == '1994')
		bookname = '1994年謝建猷《南寧白話同音字彙》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1994zh/zh'
	else if (row['year'] == '1997')
		bookname = '1997年楊煥典《南寧話音檔》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1997yd/yd'
	else if (row['year'] == '1998' || row['year'] == '1998_bw')
		bookname = '1998年楊煥典主編《廣西通誌·漢語方言誌》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1998dfz/dfz'
	else if (row['year'] == '2002')
		bookname = '2002年楊煥典《現代漢語方言音庫(字庫)》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2002zk/zk'
	else if (row['year'] == '2007')
		bookname = '2007年謝建猷《廣西漢語方言研究》'
		, linkaddr = ''
	else if (row['year'] == '2008')
		bookname = '2008年林亦、覃鳳餘《廣西南寧白話研究》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2008yj/yj'
	else if (row['year'] == '2018')
		bookname = '2018年Leimaau《南寧白話審音表》'
		, linkaddr = ''
	else if (row['year'] == '2018_bw')
		bookname = '2018年Leimaau《南寧平話審音表》'
		, linkaddr = '';
		
	if (value == '' || linkaddr == '') {
		return `<span style="white-space: nowrap;">${bookname}</span>`;
	} else {
		const pages = value.replace('P', '').replace('（單字音表）', '').split('，');
		for (let i in pages) {
			pageLink += `P<a href="` + linkaddr + `${pages[i]}.png" target="_Blank">${pages[i]}</a>，`;
		}
		return `<span style="white-space: nowrap;">${bookname}` + pageLink.replace(/，$/gi, "") + '</span>';
	};
}

// 表格顯示函數
function tableDiv(res, outputDiv, tabTitle, tabTitleDiv, colData) {
	if (res.length == 0) return false;
	$('#'+outputDiv).bootstrapTable('destroy'); // 銷毀舊表
	tabTitleDiv.innerHTML = `<h5>` + tabTitle + `</h5>`;  // 標題
	$('#'+outputDiv).bootstrapTable({ // 顯示表格
		columns: colData,
		data: res
	});
	$("[data-toggle='tooltip']").tooltip(); // 綁定tips
}

// 餅圖顯示函數
function pieDiv(res, inputValue, div_id, pieTitle) {
	if (res.length == 0) return false;
	// 餅圖數據處理
	const pie_data = {};  // 對象：{粵拼 -> [多份數據年份]}
	for (let line of res) { // 循環每一對象存入數據 pie_data
		var JYUTPING = line['JYUTPING'], YEAR = line['year'];
		YEAR = YEAR.replace(/_bw/, ""); // 餅圖顯示1998_bw -> 1998
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
		document.getElementById('queryRadio-dicLine').style.display = 'none';
		document.getElementById('char').checked = true; // 默認選擇第一個
	} else if ('dicLine' === _this.id){
		document.getElementById('queryRadio-dicWord').style.display = 'none';
		document.getElementById('line_char').checked = true; // 默認選擇第一個
	}
	document.getElementById('queryRadio-' + _this.id).style.display = 'block';
}

// 入口文件
(() => {
	DictDb.factory(DictConfig.dir);
})()