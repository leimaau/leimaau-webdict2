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
  var selval = $('.selectpicker').selectpicker('val'); // 複選下拉框的選值數組
  if (!inputValue) {
	res = [`<div class="alert alert-primary"><strong>請輸入查詢關鍵字!</strong></div>`];
	outputAlert.innerHTML = res.join('\n');
    return false;
  } else {
	res = [``];
	outputAlert.innerHTML = res.join('\n');
  };
  if (!queryType) {
	res = [`<div class="alert alert-primary"><strong>請選擇查詢類型!</strong></div>`];
	outputAlert.innerHTML = res.join('\n');
    return false;
  } else {
	res = [``];
	outputAlert.innerHTML = res.join('\n');
  };
  if (!DictDb.hasDb()) {
	res = [`<div class="alert alert-primary"><strong>數據庫未加載，請刷新!</strong></div>`];
	outputAlert.innerHTML = res.join('\n');
    return false;
  } else {
	res = [``];
	outputAlert.innerHTML = res.join('\n');
  };
  if (queryType == 'char') {
    res = MainQuery.queryTrad(inputValue, selval);
  } else if (queryType == 'char_simp') {
    res = MainQuery.querySimp(inputValue, selval);
  } else if (queryType == 'jyutping') {
    res = MainQuery.queryJyutping(inputValue, selval);
  } else if (queryType == 'jyut6ping3') {
    res = MainQuery.queryJyut6ping3(inputValue, selval);
  }
  dispatchSubmit(res, inputValue);
}

// 輸出界面
function dispatchSubmit(arrObj, inputValue) {
	const res = [`<span>南寧白話</span><span>
<span>資料</span>
<!--<span>ID</span>-->
<span>繁體</span>
<span>簡體</span>
<span>原文IPA</span>
<span>統一IPA</span>
<span>粵拼</span>
<span>來源</span>
<span>詞例</span>
<span>leimaau附註</span>
</span>
`];

	const res2 = [`<span>南寧平話</span><span>
<span>資料</span>
<!--<span>ID</span>-->
<span>繁體</span>
<span>簡體</span>
<span>原文IPA</span>
<span>統一IPA</span>
<span>粵拼</span>
<span>來源</span>
<span>詞例</span>
<span>leimaau附註</span>
</span>
`];
	const pie_data = {}, pie_data2 = {};  // 對象：{粵拼 -> [多份數據年份]}
	for (let line of arrObj) { //循環每一對象並將其通過formatLine格式化
		var JYUTPING = line['JYUTPING'], YEAR = line['year'];
		if(line['year']=='1998_bw') { // 平話資料
			line['year'] = line['year'].replace(/_bw/, ""); // 表格顯示1998_bw -> 1998
			YEAR = line['year'].replace(/_bw/, ""); // 餅圖顯示1998_bw -> 1998
			res2.push(formatLine(line));
			if (typeof(pie_data2[JYUTPING]) == "undefined") { pie_data2[JYUTPING] = []; pie_data2[JYUTPING].push(YEAR); } else { pie_data2[JYUTPING].push(YEAR); };
		} else {
			res.push(formatLine(line));
			if (typeof(pie_data[JYUTPING]) == "undefined") { pie_data[JYUTPING] = []; pie_data[JYUTPING].push(YEAR); } else { pie_data[JYUTPING].push(YEAR); };
		}
	};
	outputArea.innerHTML = res.join('\n');  // 顯示白話表格
	outputArea2.innerHTML = res2.join('\n');  // 顯示平話表格
	pieDiv(pie_data,'container', inputValue);  // 顯示白話餅圖
	pieDiv(pie_data2,'container2', inputValue);  // 顯示平話餅圖
	$(() => { $("[data-toggle='tooltip']").tooltip(); })
}

// 將行變為格式化的 HTML
function formatLine(line) {
	var lineStr = "";
	for (let i in line) {
		lineStr += line[i] + ','
	};
	lineStr = lineStr.replace(/,$/gi,"");
	
	const [YEAR, ID, TRAD, SIMP, IPA_S, IPA_T, JYUTPING, SOUR, EXPL, NOTE] = lineStr.split(',');
	const pages = SOUR.replace('P','').replace('（單字音表）','').split('，');
	
	if (YEAR=='1994') 
		var bookname = '1994年謝建猷《南寧白話同音字彙》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1994zh/zh'
	else if (YEAR=='1997')
		var bookname = '1997年楊煥典《南寧話音檔》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1997yd/yd'
	else if (YEAR=='1998' || YEAR=='1998_bw')
		var bookname = '1998年楊煥典主編《廣西通誌·漢語方言誌》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/1998dfz/dfz'
	else if (YEAR=='2002')
		var bookname = '2002年楊煥典《現代漢語方言音庫(字庫)》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2002zk/zk'
	else if (YEAR=='2008')
		var bookname = '2008年林亦、覃鳳餘《廣西南寧白話研究》'
		, linkaddr = 'https://gitee.com/leimaau/data-store/raw/master/2008yj/yj';
	
	var pageLink="", addr="";
	for (var i=0;i<pages.length;i++){
		addr = linkaddr+pages[i]+'.png';
		pageLink += 'P'+'<a href="'+addr+'" target="_Blank">'+pages[i]+'</a>'+'，';
	};
	pageLink = pageLink.replace(/，$/gi,"");
	
	return `<span>
<span>${YEAR}</span>
<!--<span>${ID}</span>-->
<span><a href="javascript:querySubmit('${TRAD}', 'char')">${TRAD}</a></span>
<span><a href="javascript:querySubmit('${SIMP}', 'char_simp')">${SIMP}</a></span>
<span>${IPA_S}</span>
<span>${IPA_T}</span>
<span><a href="javascript:querySubmit('${JYUTPING.slice(0,-1)}', 'jyutping')">${JYUTPING.slice(0,-1)}</a>${JYUTPING.slice(-1)}</span>
<span>${bookname}`+pageLink+`</span>
<span><p data-toggle="tooltip" title="${EXPL}">${EXPL}</p></span>
<span><p data-toggle="tooltip" title="${NOTE}">${NOTE}</p></span>
</span>
`;
}

// 餅圖顯示函數
function pieDiv(pie_data, div_id, val){
	var show_data = [];
	for( var i in pie_data ){ pie_data[i] = new Set(pie_data[i]) }; //去重
	for( var i in pie_data ){ show_data.push({name: i, y: pie_data[i].size,x: Array.from(pie_data[i]).toString()}) }; //name 數據名 y 數據值 x 附帶值
	
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
	var series= [{
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
	$('#'+div_id).highcharts(json);
}

