/*
全局配置
*/

const cdnAddr = [];
cdnAddr.push('https://cdn.jsdelivr.net/gh/leimaau');
cdnAddr.push('CDN@latest');
cdnAddr.push('db/leimaau.db3');

const DictConfig = {
  //dir: 'db/leimaau.db3',
  dir: cdnAddr.join('/'),  // 使用CDN加速
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
	, { field: 'CANTO',title: '近代粵音', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
];

const rowData_oldbook = [
	{ OLDBOOK: `1008年《廣韻》[<a class="text-info" target="_blank" href="https://zhuanlan.zhihu.com/p/20430939">poem覈校版20170209</a>]`, TRIUNGKOX: 'tab_1008_g', OLDCANTO: '', CANTO: '' }
	, { OLDBOOK: `1838年重鐫本《江湖尺牘分韻撮要合集》[<a class="text-info" target="_blank" href="http://ytenx.org/pyonh/">韻典網poem覈校版</a>](本站擬音)`, TRIUNGKOX: '', OLDCANTO: 'tab_1838_g', CANTO: '' }
	, { OLDBOOK: `1856年衛三畏廉士甫《英華分韻撮要》[<a class="text-info" target="_blank" href="https://jyut.net/">粵音資料集叢版</a>](本站擬音)`, TRIUNGKOX: '', OLDCANTO: 'tab_1856_g', CANTO: '' }
	, { OLDBOOK: `1941年黃錫凌《粵音韻彙》[<a class="text-info" target="_blank" href="https://jyut.net/">粵音資料集叢版</a>](本站覆校)`, TRIUNGKOX: '', OLDCANTO: '', CANTO: 'tab_1941_g' }
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
	{ BOOK: '1994年謝建猷《南寧白話同音字彙》', NN: 'tab_1994', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'tab_1997', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'tab_1998', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_1998_bw', NN_S: '', HX_P: '' }
	, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_S: '', HX_P: 'tab_2000_zb_wj' }
	, { BOOK: '2002年候精一《現代漢語方言音庫(字庫)》', NN: 'tab_2002', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'tab_2007', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: 'tab_2007_zb_sz', HX_P: 'tab_2007_zb_wj' }
	, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'noData', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2009年陳海倫、林亦《粵語平話土話方音字彙》', NN: 'noData', NN_D: '', NN_Y: 'noData', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '2009年張菁雅《桂南平話語音研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: 'noData' }
	, { BOOK: '2016年余瑾《廣西平話研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2017_bw', NN_S: '', HX_P: '' }
	, { BOOK: '2018年Leimaau《南寧話審音表》(本站提供)', NN: 'tab_2018', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2018_bw', NN_S: '', HX_P: '' }
	, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'tab_2019_zb_b_wj', NN_T: '', NN_S: '', HX_P: '' }
];

// 詞典資料
const colData_oldbook_proverb = [
	{ field: 'OLDBOOK', title: '古籍資料和近代資料', align: 'center' }
	, { field: 'OLDPROVERB', title: '早期童謠', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'PROVERB', title: '近代童謠和熟語', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_oldbook_proverb = [
	{ OLDBOOK: '1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)》(童謠)', OLDPROVERB: 'tab_1937jz_proverb', PROVERB: '' }
	, { OLDBOOK: '1937年廣西省政府總務處統計室《南寧社會概況》(童謠)', OLDPROVERB: 'tab_1937kk_proverb', PROVERB: '' }
	//, { OLDBOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', OLDPROVERB: '', PROVERB: 'noData' }
	//, { OLDBOOK: '?年萬立仁、劉子林《白話童謠300首辨析》', OLDPROVERB: '', PROVERB: 'noData' }
	, { OLDBOOK: '2020年Leimaau《南寧童謠和熟語》(本站提供)', OLDPROVERB: '', PROVERB: 'tab_2020_proverb' }
];

const colData_book_phrase = [
	{ field: 'BOOK', title: '南寧詞彙資料', align: 'center' }
	, { field: 'NN', title: '市區白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_D',title: '疍家白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'HX_B',title: '橫縣白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_T',title: '亭子平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'HX_P',title: '橫縣平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_book_phrase = [
	{ BOOK: '1994年閉克朝《廣西橫縣平話詞彙》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: 'noData' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'noData', NN_D: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_S: 'noData', HX_P: 'noData' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2015年黃增霞《廣西南寧疍家話詞彙研究》', NN: '', NN_D: 'noData', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2016年余瑾《廣西平話研究》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '2019年莫思敏《橫縣白話語音研究》', NN: '', NN_D: '', HX_B: 'noData', NN_T: '', NN_S: '', HX_P: '' }
];


// 格式化顯示爲checkbox
function formatCheckBox (value, qType = '') {
	var checkboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input book${qType}" id="checkbox_${value}" name="dataCheck" value="${value}" checked><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
	var disableCheckboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input disabledbook" id="checkbox_${value}" name="dataCheck" value="${value}" disabled><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
	if (value != '') {
		if (value == 'noData') {
			return disableCheckboxDiv;
		} else {
			return checkboxDiv;
		}
	} else {
		return ``;
	}
}


// 定義表格列數據
// 具體顯示的表格
const colData_triungkox = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD1', title: '字頭(覈校前)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'WORD2', title: '字頭(覈校後)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'FANQIE1', title: '反切(覈校前)' }
	, { field: 'FANQIE2', title: '反切(覈校後)' }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'SHE', title: '攝' }
	, { field: 'HU', title: '呼' }
	, { field: 'DENG', title: '等' }
	, { field: 'YUNBU1', title: '韻部(調整前)' }
	, { field: 'YUNBU2', title: '韻部(調整後)' }
	, { field: 'TONE', title: '聲調' }
	, { field: 'FIRST', title: '聲紐' }
	, { field: 'PINYIN', title: '中古拼音(polyhedron版)', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
];

const colData_gw = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'EXPL', title: '字義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'FINAL_PART', title: '韻部' }
	, { field: 'FIRST_OLD', title: '聲母' }
	, { field: 'FINAL_OLD', title: '韻母' }
	, { field: 'TONE', title: '聲調' }
	//, { field: 'FIRST_TYPE', title: '紐類' }
	, { field: 'FANQIE', title: '反切' }
	, { field: 'VOLUME', title: '冊' }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value.replace('-','，'), 'jpg', row['VOLUME']=='上冊' ? 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume1/' : 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume2/') } }
	, { field: 'IPA', title: 'IPA擬音' }
	, { field: 'JYUTPING', title: '粵拼擬音', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }

];

const colData_jw = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_COMP', title: '兼容字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_NOTE', title: '字條校訂註' }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'OLD_JP', title: '讀音' }
	, { field: 'OLD_JP_TYPE', title: '讀音分類' }
	, { field: 'OLD_JP_NOTE', title: '讀音備註' }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value.replace('*','s'), 'jpg', 'https://leimaau.gitee.io/data-store/1856fy/fy') } }
	, { field: 'IPA', title: 'IPA擬音' }
	, { field: 'JYUTPING', title: '粵拼擬音', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
];

const colData_jj = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'IPA', title: 'IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value, 'jpg', 'https://leimaau.gitee.io/data-store/1941yy/yy') } }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'FIRSTFLAG', title: '國語聲母是否捲舌', formatter: (value) => { return `${value.replace('1', '1（否）').replace('2', '2（是）')}` }  }
];

const colData = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `${value.replace('_bw', '').replace('tab_', '').replace(/_zb.*/g,'')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char_simp', 'dicWord')">${value}</a>` } }
	, { field: 'IPA_S', title: '原文IPA', sortable : true }
	, { field: 'IPA_T', title: '統一IPA', sortable : true }
	, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png') } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '附註', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

const colData_proverb = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_proverb', '').replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', width: '350px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SIMP', title: '簡體', width: '350px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '280px', formatter: (value, row) => { if(row['YEAR'] == 'tab_2020_proverb') {return `<span style="white-space: normal">2020年Leimaau《南寧童謠和熟語》(本站提供)<span/>`} else {return (row['YEAR'] == 'tab_1937kk_proverb') ? '<span style="white-space: normal">1937年廣西省政府總務處統計室《南寧社會概況》' + pageSplit(value, 'jpg','https://leimaau.gitee.io/data-store/1937tj/kk_tj') + '<span/>' : '<span style="white-space: normal">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)》' + pageSplit(value, 'jpg','https://leimaau.gitee.io/data-store/1937tj/jz_tj') + '<span/>' } } }
	, { field: 'NOTE', title: '附註', width: '220px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_phrase', '').replace('tab_', '')}` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'CLASSIFI', title: '分類' }
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', false) } }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '附註', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

// 格式化來源欄
function formatSOUR(value, row_year, picType, isChar = true) {
	if (isChar){
		var bookname = rowData_book.find(item => (item.NN == row_year || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	} else {
		var bookname = rowData_book_phrase.find(item => (item.NN == row_year || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	};
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('tab_', '');
	var linkaddr = 'https://leimaau.gitee.io/data-store/' + row_year;
	
	if (row_year == '1994') linkaddr += 'zh/zh'
	else if (row_year == '1997') linkaddr += 'yd/yd'
	else if (row_year == '1998') linkaddr += 'dfz/dfz'
	else if (row_year == '2002') linkaddr += 'zk/zk'
	else if (row_year == '2007') linkaddr = ''
	else if (row_year == '2008') linkaddr += 'yj/yj'
	else if (row_year == '2017') linkaddr += 'hy/hy0'
	else if (row_year == '2018') linkaddr = '';
	
	if (value == '' || linkaddr == '') {
		return `<span style="white-space: nowrap;">${bookname}</span>`;
	} else {
		return `<span style="white-space: nowrap;">${bookname + pageSplit(value, picType, linkaddr)}</span>`;
	};
}

// 葉碼拼接函數
function pageSplit(value, picType, linkaddr) {
	var pageLink = [];
	var pages = value.replace('P', '').replace('（單字音表）', '').split('，');
	for (let i in pages) {
		pageLink.push(`P<a href="${linkaddr + pages[i]}.${picType}" target="_Blank">${pages[i].replace('s','*')}</a>`);
	}
	return pageLink.join('，');
}
