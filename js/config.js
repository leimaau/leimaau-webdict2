/*
全局配置
*/
const DictConfig = {
  dir: 'db/leimaau.db3',
};

/*
bootstrapTable 默認配置
*/
(($) => {
  $.fn.bootstrapTable.custom = {
    theadClasses: "thead-light",
    formatNoMatches: function () {
      return '沒有找到匹配的記錄'
    }
  };
  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.custom);
})($);


// 模態框表格數據
// 古籍資料
const colData_oldbook = [
	{ field: 'OLDBOOK', title: '古籍資料', align: 'center' }
	, { field: 'TRIUNGKOX', title: '中古音', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'OLDCANTO',title: '早期粵音', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
];

const rowData_oldbook = [
	{ OLDBOOK: "《廣韻》", TRIUNGKOX: "noData", OLDCANTO: "" }
	, { OLDBOOK: "道光十八年重鐫本《江湖尺牘分韻撮要合集》(1838年)", TRIUNGKOX: "", OLDCANTO: "tab_1838" }
	, { OLDBOOK: "1856年衛三畏廉士甫《英華分韻撮要》", TRIUNGKOX: "", OLDCANTO: "noData" }
];

// 字典資料
const colData_book = [
	{ field: 'BOOK', title: '南寧單字音資料', align: 'center' }
	, { field: 'NN', title: '市區白話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_D',title: '疍家白話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_Y',title: '邕寧白話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'HX_B',title: '橫縣白話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_T',title: '亭子平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'HX_P',title: '橫縣平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
];

const rowData_book = [
	{ BOOK: "1994年謝建猷《南寧白話同音字彙》", NN: "tab_1994", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "1997年楊煥典《南寧話音檔》", NN: "tab_1997", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "1998年楊煥典主編《廣西通誌·漢語方言誌》", NN: "tab_1998", NN_D: "", NN_Y: "", HX_B: "", NN_T: "tab_1998_bw", NN_S: "", HX_P: "" }
	, { BOOK: "2000年李連進《平話音韻研究》", NN: "", NN_D: "", NN_Y: "", HX_B: "", NN_T: "noData", NN_S: "", HX_P: "noData" }
	, { BOOK: "2002年楊煥典《現代漢語方言音庫(字庫)》", NN: "tab_2002", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "2007年謝建猷《廣西漢語方言研究》", NN: "tab_2007", NN_D: "", NN_Y: "", HX_B: "noData", NN_T: "", NN_S: "noData", HX_P: "" }
	, { BOOK: "2007年白雲《廣西疍家話語音研究》", NN: "", NN_D: "noData", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "2008年林亦、覃鳳餘《廣西南寧白話研究》", NN: "tab_2008", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "2009年陳海倫、林亦《粵語平話土話方音字彙》", NN: "noData", NN_D: "", NN_Y: "noData", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "2009年張菁雅《桂南平話語音研究》", NN: "noData", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "noData" }
	, { BOOK: "2016年余瑾《廣西平話研究》", NN: "", NN_D: "", NN_Y: "", HX_B: "", NN_T: "", NN_S: "", HX_P: "" }
	, { BOOK: "2018年Leimaau《南寧話審音表》", NN: "tab_2018", NN_D: "", NN_Y: "", HX_B: "", NN_T: "tab_2018_bw", NN_S: "", HX_P: "" }
	, { BOOK: "2019年莫思敏、談婷《廣西橫縣白話同音字彙》", NN: "", NN_D: "", NN_Y: "", HX_B: "noData", NN_T: "", NN_S: "", HX_P: "" }
];

// 詞典資料
const colData_book_phrase = [
	{ field: 'BOOK', title: '南寧詞彙資料', align: 'center' }
	, { field: 'NN', title: '市區白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'HX_B',title: '橫縣白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_T',title: '亭子平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }

];

const rowData_book_phrase = [
	{ BOOK: "1997年楊煥典《南寧話音檔》", NN: "tab_1997_phrase", HX_B: "", NN_T: "", NN_S: "" }
	, { BOOK: "1997年李榮主編《南寧平話詞典》", NN: "", HX_B: "", NN_T: "noData", NN_S: "" }
	, { BOOK: "1998年楊煥典主編《廣西通誌·漢語方言誌》", NN: "tab_1998_phrase", HX_B: "", NN_T: "tab_1998_bw_phrase", NN_S: "" }
	, { BOOK: "2007年謝建猷《廣西漢語方言研究》", NN: "tab_2007_phrase", HX_B: "noData", NN_T: "", NN_S: "noData" }
	, { BOOK: "2008年林亦、覃鳳餘《廣西南寧白話研究》", NN: "tab_2008_phrase", HX_B: "", NN_T: "", NN_S: "" }
	, { BOOK: "2016年余瑾《廣西平話研究》", NN: "", HX_B: "", NN_T: "", NN_S: "" }
	, { BOOK: "2020年Leimaau《南寧城市信息》", NN: "tab_2020_nncity", HX_B: "", NN_T: "", NN_S: "" }
	, { BOOK: "2020年Leimaau《南寧童謠》", NN: "tab_2020_proverb", HX_B: "", NN_T: "", NN_S: "" }
];


// 格式化顯示爲checkbox
function formatCheckBox (value, qType = '') {
	var checkboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input book${qType}" id="checkbox_${value}" name="checkbox_${value}" value="${value}" checked><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
	var disableCheckboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input disabledbook" id="checkbox_${value}" name="checkbox_${value}" value="${value}" disabled><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
	if (value != "") {
		if (value == "noData") {
			return disableCheckboxDiv;
		}
		return checkboxDiv;
	} else {
		return ``;
	}
}


// 定義表格列數據
const colData = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_bw', '').replace('tab_', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>`; } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char_simp', 'dicWord')">${value}</a>`; } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value.slice(0, -1)}', 'jyutping', 'dicWord')">${value.slice(0, -1)}</a>${value.slice(-1)}`; } }
	, { field: 'SOUR', title: '來源', formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png') } }
	, { field: 'EXPL', title: '詞例', formatter: (value) => { return `<p data-toggle="tooltip"  title='${value}'>${value}<p/>` } }
	, { field: 'NOTE', title: 'leimaau附註', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` } }
];

const colData_gw = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('tab_', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>`; } }
	, { field: 'EXPL', title: '字義', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` }  }
	, { field: 'FINAL_PART', title: '韻部' }
	, { field: 'FIRST_OLD', title: '聲母' }
	, { field: 'FINAL_OLD', title: '韻母' }
	, { field: 'TONE', title: '聲調' }
	//, { field: 'FIRST_TYPE', title: '紐類' }
	, { field: 'FANQIE', title: '反切' }
	, { field: 'VOLUME', title: '冊' }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value, 'jpg', row['VOLUME']=='上冊' ? 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume1/' : 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume2/') } }
	, { field: 'IPA', title: '擬音IPA' }
	, { field: 'JYUTPING', title: '擬音粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value.slice(0, -1)}', 'jyutping', 'dicWord')">${value.slice(0, -1)}</a>${value.slice(-1)}`; } }

];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_phrase', '').replace('tab_', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'LEVEL1', title: '一級分類', align: 'center' }
	, { field: 'LEVEL2', title: '二級分類' }
	, { field: 'LEVEL3', title: '三級分類', align: 'center' }
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>`; } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>`; } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>`; } }
	, { field: 'SOUR', title: '來源', formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', false) } }
	, { field: 'EXPL', title: '解釋', formatter: (value) => { return `<p data-toggle="tooltip"  title='${value}'>${value}<p/>` } }
	, { field: 'NOTE', title: 'leimaau附註', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` } }
];

// 格式化來源欄
function formatSOUR(value, row_year, picType, isChar = true) {
	if (isChar){
		var bookname = rowData_book.find(item => (item.NN == row_year || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	} else {
		var bookname = rowData_book_phrase.find(item => (item.NN == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year)).BOOK;
	};
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('tab_', '');
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
