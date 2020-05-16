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
	//if (isShow != 0) { if(dataList.length != 0) $('#nav-tab').removeClass('d-none'); if(dataList_bw.length != 0) $('#nav-tab-bw').removeClass('d-none'); }// 顯示tab
	
	return isShow;
}


// 【詞彙】查詢模塊
function queryPhrase(inputValue, queryType, selVal){
	
	var res_proverb = [];
	var dataList_oldProverb = selVal.filter(item => item.indexOf('_proverb') > -1);
	if (dataList_oldProverb.length != 0) {
		res_proverb = MainQuery.queryTable_proverb(inputValue, dataList_oldProverb, queryType);
		showTable(res_proverb, 'outTab_triungkox', '早期童謠、近代童謠和熟語', outTabTitle_triungkox, colData_proverb);  // 使用顯示《廣韻》的位置
		showWordCloud(res_proverb, inputValue, 'outWordCloud_triungkox', '早期童謠、近代童謠和熟語', queryType, 'TRAD');
	};
	
	var res = [];
	var dataList = selVal.filter(item => item.indexOf('_bw') == -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList.length != 0) {
		res = MainQuery.queryTablePhrase(inputValue, dataList, queryType);
		showTable(res, 'outTab', allTitle, outTabTitle, colData_phrase);  // 顯示白話表格
		showPie(res, inputValue, 'outPie', allTitle, queryType);  // 顯示白話餅圖
		showWordCloud(res, inputValue, 'outWordCloud', allTitle, queryType, 'TRAD'); // 顯示白話詞雲圖
	};
	
	var res_bw = [];
	var dataList_bw = selVal.filter(item => item.indexOf('_bw') > -1).filter(item => item.indexOf('_proverb') == -1);
	if (dataList_bw.length != 0) {
		res_bw = MainQuery.queryTablePhrase(inputValue, dataList_bw, queryType);
		showTable(res_bw, 'outTab_bw', allTitle_bw, outTabTitle_bw, colData_phrase);  // 顯示平話表格
		showPie(res_bw, inputValue, 'outPie_bw', allTitle_bw, queryType);  // 顯示平話餅圖
		showWordCloud(res_bw, inputValue, 'outWordCloud_bw', allTitle_bw, queryType, 'TRAD'); // 顯示平話詞雲圖
	};
	
	var isShow = res_proverb.length + res.length + res_bw.length;
	if (isShow != 0) { if(dataList.length != 0) $('#nav-tab').removeClass('d-none'); if(dataList_bw.length != 0) $('#nav-tab-bw').removeClass('d-none'); }// 顯示tab
	
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

// 鏈接顯示函數
function showLink(textChar){
	const outputText = [], outputText2 = [], outputText3 = [];
	outputText.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>`);
	outputText.push(`漢典網：<a href="http://www.zdic.net/hans/${textChar}" target="_blank">${textChar}</a> | <a href="http://www.zdic.net/zd/yy/yy/${textChar}" target="_blank">粵語</a> | <a href="http://www.zdic.net/zd/yy/ph/${textChar}" target="_blank">平話</a></br>`);
	outputText.push(`韻典網：<a href="https://ytenx.org/zim?dzih=${textChar}&dzyen=1&jtkb=1&jtkd=1&jtdt=1&jtgt=1" target="_blank">${textChar}</a></br>`);
	outputText.push(`國學大師：<a href="http://www.guoxuedashi.com/zidian/${encodeUnicode(textChar).replace('\\u','')}.html" target="_blank">${textChar}</a></br>`);
	outputText.push(`古今文字集成：<a href="http://www.ccamc.co/cjkv.php?cjkv=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText.push(`粵音資料集叢：<a href="https://jyut.net/query?q=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText.push(`漢語多功能字庫：<a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=${textChar}" target="_blank">${textChar}</a> | <a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/dialect.php?word=${textChar}" target="_blank">其他方言讀音</a></br>`);
	outputText.push(`縱橫在線中文字典：<a href="https://ckc.eduhk.hk/ckc2/dictionary.php?jiinput=${textChar}&lang=b5&form1=1" target="_blank">${textChar}</a></br>`);
	outputText.push(`「數理華聲」科學及數學科詞彙表：<a href="https://ckc.eduhk.hk/ckc2/charlist.php?csmsinput=${textChar}&lang=b5" target="_blank">${textChar}</a></br>`);
	outputText.push(`英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/search.php?titleOnlyBtn=true&searchStr=${textChar}&lang=b5" target="_blank">${textChar}</a></br>`);
	outputText.push(`粵拼歌詞網：<a href="https://jyut6.com/search.php?keyword=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText.push(`翡翠粵語歌詞：<a href="https://www.feitsui.com/zh-hans/search/${textChar}.html" target="_blank">${textChar}</a></br>`);
	outputText.push(`</span></div></div>`);
	
	outputText2.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>`);
	outputText2.push(`漢字全息資源應用系統：<a href="http://qxk.bnu.edu.cn/#/danziDetail/42c2d834-fa1d-47e9-9f90-972a687183f7/${textChar}/22d3af76-1ffe-46da-8c28-40e7dfe6b8d2/0" target="_blank">${textChar}</a></br>`);
	outputText2.push(`中國哲學書電子化計劃：<a href="https://ctext.org/dictionary.pl?if=gb&char=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`字海|葉典：<a href="http://yedict.com/zscontent.asp?uni=${encodeUnicode(textChar).replace('\\u','')}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`Unihan：<a href="https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`萌典：<a href="https://www.moedict.tw/${textChar}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`活用中文大辭典：<a href="https://lib.ctcn.edu.tw/chtdict/result.aspx?keyword=${textChar}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`漢字ペディア：<a href="https://www.kanjipedia.jp/search?k=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>`);
	outputText2.push(`GlyphWiki：<a href="http://glyphwiki.org/wiki/${encodeUnicode(textChar).replace('\\','')}?tdsourcetag=s_pctim_aiomsg" target="_blank">${textChar}</a></br>`);
	outputText2.push(`Chinese Etymology 字源：<a href="https://hanziyuan.net/#${textChar}" target="_blank">${textChar}</a></br>`);
	outputText2.push(`小雞詞典：<a href="https://jikipedia.com/search?phrase=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>`);
	outputText2.push(`</span></div></div>`);
	
	outputText3.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>`);
	outputText3.push(`東方語言學：<a href="http://www.eastling.org/" target="_blank">前往</a></br>`);
	outputText3.push(`漢語方言學大詞典：<a href="http://www.fangyanxue.com/pages/index/index.html" target="_blank">前往</a></br>`);
	outputText3.push(`古音手鏡：<a href="http://www.guguolin.com/" target="_blank">前往</a></br>`);
	outputText3.push(`小學堂：<a href="http://xiaoxue.iis.sinica.edu.tw/" target="_blank">前往</a></br>`);
	outputText3.push(`英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/index.php" target="_blank">前往</a></br>`);
	outputText3.push(`引得市：<a href="http://www.mebag.com/index/" target="_blank">前往</a></br>`);
	outputText3.push(`開放康熙字典：<a href="http://kangxi.adcs.org.tw/kangxizidian/" target="_blank">前往</a></br>`);
	outputText3.push(`漢語大字典檢索：<a href="http://www.homeinmists.com/hd/search.html" target="_blank">前往</a></br>`);
	outputText3.push(`說文解字圖像查閱：<a href="http://www.homeinmists.com/shuowen/find.html" target="_blank">前往</a></br>`);
	outputText3.push(`現代標準漢語與粵語對照資料庫：<a href="http://apps.itsc.cuhk.edu.hk/hanyu/Page/Cover.aspx" target="_blank">前往</a></br>`);
	outputText3.push(`CantoDict：<a href="http://www.cantonese.sheik.co.uk/scripts/masterlist.htm" target="_blank">前往</a></br>`);
	outputText3.push(`ISO漢字查詢系統：<a href="http://glyph.iso10646hk.net/chinese/icharacters.jsp" target="_blank">前往</a></br>`);
	outputText3.push(`香港小學學習字詞表：<a href="https://www.edbchinese.hk/lexlist_ch/" target="_blank">前往</a></br>`);
	outputText3.push(`早期粵語口語文獻資料庫：<a href="http://143.89.108.109/Candbase/" target="_blank">前往</a></br>`);
	outputText3.push(`</span></div></div>`);
	
	$('#webLink').html(outputText.join(''));
	$('#webLink2').html(outputText2.join(''));
	$('#webLink3').html(outputText3.join(''));
}

// 漢字轉 Unicode
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);
    }
    return "\\u" + res.join("\\u");
}

// Unicode 轉漢字
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
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
		document.getElementById('nav-tab').style.display = 'none'; // 隱藏tab
		document.getElementById('nav-tab-bw').style.display = 'none';
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
function signArticle(textCont, signText_type, signResult_type, signResult_format, signResult_way, signResult_IPA) {
	if (textCont.length > 2000){
		toastrFunc('toast-top-center');
		toastr.error('禁止超過兩千字！');
		return false;
	}
	
	if (!cutModule.initFlag){ // 初始化分詞模塊，衹執行一次
		//const segDict = MainQuery.queryTableOne_segdict(); // 目前是從segDict.js獲取，tab_segdict爲空，需要時導入數據使用
		cutModule.initFlag = true;
		segMain(segDict);
	}
	
	var outputText = [];
	
	for (let lines of textCont.split('\n')) {
		if (signResult_format == 'updown') { // 按字內嵌
			let outputLine = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				outputLine.push(`<ruby>${queryJyutpingPhrase(txtStr, signText_type, signResult_type, (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') ? 'jyutping' : 'ipa', signResult_format, signResult_IPA, false)}</ruby>`);
			}
			outputText.push(`${outputLine.join('')}<br>`);
		} else if (signResult_format == 'lineupdown') { // 按行內嵌
			let outputLine1 = [], outputLine3 = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, (signResult_way == 'jyutping' || signResult_way == 'jyutping_ipa') ? 'jyutping' : 'ipa', signResult_format, signResult_IPA).split(',').join(' '));
				outputLine3.push(txtStr);
			}
			outputText.push(`<ruby>${outputLine3.join('')}<rp>(</rp><rt>${outputLine1.join(' ')}</rt><rp>)</rp></ruby><br>`);
		} else if (signResult_format == 'twolines' || signResult_format == 'parallel') { // 分行或平行
			let outputLine1 = [], outputLine2 = [], outputLine3 = [];
			for (let txtStr of cutModule.cut(lines, false)) {
				if (signResult_way == 'jyutping') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'ipa') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'jyutping_ipa') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA).split(',').join(' '));
					outputLine2.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA).split(',').join(' '));
					outputLine3.push(txtStr);
				} else if (signResult_way == 'ipa_jyutping') {
					outputLine1.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'ipa', signResult_format, signResult_IPA).split(',').join(' '));
					outputLine2.push(queryJyutpingPhrase(txtStr, signText_type, signResult_type, 'jyutping', signResult_format, signResult_IPA).split(',').join(' '));
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
		}
	}
	
	$('#signResult').html(outputText.join(''));
}

// 【單字】查詢粵拼或IPA函數
function queryJyutping(txtStr, trad_simp, tabName, jyutping_ipa, signResult_IPA, keep_symbol = true){
	//let res = MainQuery.queryJyutping(txtStr, trad_simp, tabName); // 目前是從segDict.js獲取，tab_nn_review、tab_nnt_review、tab_gz_review爲空，需要時導入數據使用
	let res = window[tabName].filter(item => item[trad_simp] == txtStr);
	if ( !(/[^\u4e00-\u9fa5]/.test(txtStr)) || (res.length > 0) ) { // 判斷是否中文或字典有數據
		if(res.length != 0){
			if (res.length == 1){ // 只有一種讀音
				return (jyutping_ipa == 'jyutping') ? jpFormat(res[0]['jyutping'], res[0]['trad'], res[0]['simp']) : ipaFormat(res[0]['ipa'], signResult_IPA, res[0]['trad'], res[0]['simp']);
			} else {
				let char_jyutping = [], char_ipa = [];
				for (let i of res){
					char_jyutping.push(jpFormat(i.jyutping, i.trad, i.simp));
					char_ipa.push(ipaFormat(i.ipa, signResult_IPA, i.trad, i.simp));
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

// 【詞彙】查詢粵拼或IPA函數
function queryJyutpingPhrase(txtStr, trad_simp, tabName, jyutping_ipa, signResult_format, signResult_IPA, keep_symbol = true){
	//let res = MainQuery.queryJyutping(txtStr, trad_simp, tabName); // 目前是從segDict.js獲取，tab_nn_review、tab_nnt_review、tab_gz_review停用，需要時導入數據使用
	let res = window[tabName].filter(item => item[trad_simp] == txtStr), resJ =[];
	if (res.length == 1 && txtStr.length > 1 ) { // 詞典有數據並且爲詞彙
		for(let i in txtStr.split('')){
			if (signResult_format == 'updown') { // 按字內嵌時 中文字後帶 '</rt><rp>)</rp>'，拼音或ipa後帶 '</rt><rp>)</rp>'，return時合併起來
				resJ.push(txtStr.split('')[i] + '<rp>(</rp><rt>');
				resJ.push((jyutping_ipa == 'jyutping') ? jpFormat(res[0]['jyutping'].split(' ')[i]) + '</rt><rp>)</rp>' : ipaFormat(res[0]['ipa'].split(' ')[i], signResult_IPA) + '</rt><rp>)</rp>');
			} else {
				resJ.push((jyutping_ipa == 'jyutping') ? jpFormat(res[0]['jyutping'].split(' ')[i]) : ipaFormat(res[0]['ipa'].split(' ')[i], signResult_IPA));
			}
		}
	} else { // 詞典無數據或有多個讀音或爲單字
		for(let i of txtStr.split('')){
			if (signResult_format == 'updown') {
				resJ.push(i + '<rp>(</rp><rt>');
				resJ.push(queryJyutping(i, trad_simp, tabName, jyutping_ipa, signResult_IPA, keep_symbol) + '</rt><rp>)</rp>');
			} else {
				resJ.push(queryJyutping(i, trad_simp, tabName, jyutping_ipa, signResult_IPA, keep_symbol));
			}
		}
	}
	return resJ.join((signResult_format == 'updown') ? '' : ',');
}

// IPA格式處理
function ipaFormat(IPA, signResult_IPA, trad, simp){
	IPA = ($("#checkbox_isw").is(":checked") == true) ? IPA : IPA.replace(/kʷ(ʰ|)ɔ(k|ŋ|\d{2})/g,'k$1ɔ$2').replace(/kʷ(ʰ|)ek/g,'k$1ek');
	
	if(signResult_IPA == 'noUp'){
		IPA = IPA;
	} else if(signResult_IPA == 'Up') {
		IPA = IPA.replace(/1/g,'¹').replace(/2/g,'²').replace(/3/g,'³').replace(/4/g,'⁴').replace(/5/g,'⁵');
	} else if(signResult_IPA == 'toneLine') {
		IPA = IPA.replace(/1/g,'˩').replace(/2/g,'˨').replace(/3/g,'˧').replace(/4/g,'˦').replace(/5/g,'˥');
	}
	IPA = IPA.replace(/˥˥/g,'˥').replace(/˧˧/g,'˧').replace(/˨˨/g,'˨');
	
	const reg = /郭|槨|彍|椁|崞/g;
	IPA = (reg.test(trad) || reg.test(simp)) ? IPA.replace(/kʷʰak/g,'kʰak') : IPA;  // 專門處理平話「郭」字的白讀 [kʷʰak3/kʰak3]，恢復合口
	
	return IPA;
}

// 粵拼格式處理
function jpFormat(jyutping, trad, simp){
	jyutping = ($("#checkbox_isw").is(":checked") == true) ? jyutping : jyutping.replace(/(g|k)wo(k|ng|\d)/g,'$1o$2').replace(/(g|k)wik/g,'$1ik');
	
	const reg = /郭|槨|彍|椁|崞/g;
	jyutping = (reg.test(trad) || reg.test(simp)) ? jyutping.replace(/kwaak/g,'kaak') : jyutping;  // 專門處理平話「郭」字的白讀 kwaak2/kaak2，恢復合口
	
	return jyutping;
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
		segMain(segDict);
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
	
	const outputText = [];
	
	outputText.push(`暫時未實現該功能！`);
	
	$('#derivationResult').html(outputText.join(''));
	
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

// 設置葉面底部年份信息
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
	// 設置葉面底部年份信息
	setWebYear();
	// 固定輸入框
	setSticky();
	// 返回頂部插件
	$('body').materialScrollTop();
})
