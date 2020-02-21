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
	};
	return true;
}

// 搜索按鈕
function querySubmit(inputValue, queryType) {
	outputAlert.innerHTML = '';
	container.innerHTML = '';
	container_bw.innerHTML = '';
	outTab.innerHTML = '';
	outTab_bw.innerHTML = '';
	outTabTitle.innerHTML = '';
	outTabTitle_bw.innerHTML = '';

	var selval = $('.selectpicker').selectpicker('val'); // 複選下拉框的選值數組
	if (!inputValue) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>請輸入查詢關鍵字!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	} else if (!queryType) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>請選擇查詢類型!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	} else if (!DictDb.hasDb()) {
		res = [`<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>數據庫未加載，請刷新!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	};
	res = MainQuery.queryTable(inputValue, selval, queryType);
	if (res.length == 0) {
		res = [`<div class="alert alert-primary alert-dismissible fade show" role="alert"><strong>未查詢到結果!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`];
		outputAlert.innerHTML = res.join('\n');
		return false;
	};
	dispatchSubmit(res, inputValue);
}

// 輸出界面
function dispatchSubmit(arrObj, inputValue) {
	// 更新表
	updateTable(arrObj);
	// 餅圖數據處理
	const pie_data = {}, pie_data2 = {};  // 對象：{粵拼 -> [多份數據年份]}
	for (let line of arrObj) { // 循環每一對象存入數據 pie_data, pie_data2
		var JYUTPING = line['JYUTPING'], YEAR = line['year'];
		if (YEAR == '1998_bw') { // 平話資料
			YEAR = YEAR.replace(/_bw/, ""); // 餅圖顯示1998_bw -> 1998
			if (typeof (pie_data2[JYUTPING]) == "undefined") { pie_data2[JYUTPING] = []; pie_data2[JYUTPING].push(YEAR); } else { pie_data2[JYUTPING].push(YEAR); };
		} else {
			if (typeof (pie_data[JYUTPING]) == "undefined") { pie_data[JYUTPING] = []; pie_data[JYUTPING].push(YEAR); } else { pie_data[JYUTPING].push(YEAR); };
		}
	};
	pieDiv(pie_data, 'container', inputValue);  // 顯示白話餅圖
	pieDiv(pie_data2, 'container_bw', inputValue);  // 顯示平話餅圖
}

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

// 格式化來源欄
function formatSOUR(value, row) {
	var bookname = '';
	if (row['year'] == '1994')
		var bookname = '1994年謝建猷《南寧白話同音字彙》'
			, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1994zh/zh'
	else if (row['year'] == '1997')
		var bookname = '1997年楊煥典《南寧話音檔》'
			, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1997yd/yd'
	else if (row['year'] == '1998' || row['year'] == '1998_bw')
		var bookname = '1998年楊煥典主編《廣西通誌·漢語方言誌》'
			, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1998dfz/dfz'
	else if (row['year'] == '2002')
		var bookname = '2002年楊煥典《現代漢語方言音庫(字庫)》'
			, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2002zk/zk'
	else if (row['year'] == '2008')
		var bookname = '2008年林亦、覃鳳餘《廣西南寧白話研究》'
			, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2008yj/yj';
	const pages = value.replace('P', '').replace('（單字音表）', '').split('，');
	var pageLink = '';
	for (let i in pages) {
		pageLink += `P<a href="` + linkaddr + `${pages[i]}.png" target="_Blank">${pages[i]}</a>，`;
	};
	return `<span style="white-space: nowrap;">${bookname}` + pageLink.replace(/，$/gi, "") + '</span>';
};

// 更新表函數
function updateTable(arrObj) {
	$("#outTab,#outTab_bw").bootstrapTable('destroy'); // 銷毀舊表

	let outTab = [], outTab_bw = [];
	for (item of arrObj) {
		if (item.year.indexOf('_bw') > -1) {
			outTab_bw.push(item);
		} else {
			outTab.push(item);
		}
	};
	outTabTitle.innerHTML = `<h5>南寧白話</h5>`;  // 標題
	$('#outTab').bootstrapTable({ // 顯示白話表格
		columns: colData,
		data: outTab
	});
	outTabTitle_bw.innerHTML = `<h5>南寧平話</h5>`;  // 標題
	$('#outTab_bw').bootstrapTable({ // 顯示平話表格
		columns: colData,
		data: outTab_bw
	});
	$("[data-toggle='tooltip']").tooltip(); // 綁定tips
}

// 餅圖顯示函數
function pieDiv(pie_data, div_id, val) {
	var show_data = [];
	for (var i in pie_data) { pie_data[i] = new Set(pie_data[i]) }; //去重
	for (var i in pie_data) { show_data.push({ name: i, y: pie_data[i].size, x: Array.from(pie_data[i]).toString() }) }; //name 數據名 y 數據值 x 附帶值

	var chart = {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	};
	var title = {
		text: div_id == 'container' ? '南寧白話【' + val + '】' : '南寧平話【' + val + '】'
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
	var json = {};
	json.credits = { enabled: false };
	json.chart = chart;
	json.title = title;
	json.tooltip = tooltip;
	json.series = series;
	json.plotOptions = plotOptions;
	$('#' + div_id).highcharts(json);
}

// 入口文件
(() => {
	DictDb.factory(DictConfig.dir);
})()