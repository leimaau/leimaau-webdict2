/*
全局配置
*/

const cdnAddr = [];
cdnAddr.push('https://cdn.jsdelivr.net/npm');
cdnAddr.push('leimaau-npm-cdn@1.1.1');
cdnAddr.push('db/leimaau.db3');

const DictConfig = {
  //dir: 'db/leimaau.db3',  // 使用本地庫
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
	//{ BOOK: '1993年辻伸久 《南寧平話字音記略》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	{ BOOK: '1994年謝建猷《南寧白話同音字彙》', NN: 'tab_1994', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'tab_1997', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》(單字音表)', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
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
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008_phrase', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2015年黃增霞《廣西南寧疍家話詞彙研究》', NN: '', NN_D: 'noData', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2016年余瑾《廣西平話研究》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '2019年莫思敏《橫縣白話語音研究》', NN: '', NN_D: '', HX_B: 'noData', NN_T: '', NN_S: '', HX_P: '' }
	, { BOOK: '2020年Leimaau《南寧話審詞表》(本站提供)', NN: 'tab_2020_phrase', NN_D: '', HX_B: '', NN_T: 'tab_2020_bw_phrase', NN_S: '', HX_P: '' }
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
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD1', title: '字頭(覈校前)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'WORD2', title: '字頭(覈校後)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'FANQIE1', title: '反切(覈校前)' }
	, { field: 'FANQIE2', title: '反切(覈校後)' }
	, { field: 'FIRST', title: '聲紐' }
	, { field: 'SHE', title: '攝' }
	, { field: 'HU', title: '呼' }
	, { field: 'DENG', title: '等' }
	, { field: 'YUNBU1', title: '韻部(調整前)' }
	, { field: 'YUNBU2', title: '韻部(調整後)' }
	, { field: 'TONE', title: '聲調' }
	, { field: 'PINYIN', title: '中古拼音(polyhedron版)', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
];

const colData_gw = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
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
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_COMP', title: '兼容字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_NOTE', title: '字條校訂註' }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'OLD_JP', title: '讀音' }
	, { field: 'OLD_JP_TYPE', title: '讀音分類' }
	, { field: 'OLD_JP_NOTE', title: '讀音備註' }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value.replace('*','s'), 'jpg', 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1856fy/fy') } }
	, { field: 'IPA', title: 'IPA擬音' }
	, { field: 'JYUTPING', title: '粵拼擬音', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
];

const colData_jj = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'IPA', title: 'IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'PAGE', title: '葉', formatter: (value, row) => { return pageSplit(value, 'jpg', 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1941yy/yy') } }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'FIRSTFLAG', title: '國語聲母是否捲舌', formatter: (value) => { return `${value.replace('1', '1（否）').replace('2', '2（是）')}` }  }
];

const colData = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('tab_', '').replace(/_zb.*/g,'')}</span>` } }
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
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_proverb', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', width: '350px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SIMP', title: '簡體', width: '350px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '280px', formatter: (value, row) => { if(row['YEAR'] == 'tab_2020_proverb') {return `<span style="white-space: normal">2020年Leimaau《南寧童謠和熟語》(本站提供)<span/>`} else {return (row['YEAR'] == 'tab_1937kk_proverb') ? '<span style="white-space: normal">1937年廣西省政府總務處統計室《南寧社會概況》' + pageSplit(value, 'jpg','https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/kk_tj') + '<span/>' : '<span style="white-space: normal">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)》' + pageSplit(value, 'jpg','https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/jz_tj') + '<span/>' } } }
	, { field: 'NOTE', title: '附註', width: '220px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_phrase', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	, { field: 'IPA_S', title: '原文IPA', sortable : true }
	, { field: 'IPA_T', title: '統一IPA', sortable : true }
	, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', false) } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '附註', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true }
];

// 格式化來源欄
function formatSOUR(value, row_year, picType, isChar = true) {
	if (isChar){
		var bookname = rowData_book.find(item => (item.NN == row_year || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	} else {
		var bookname = rowData_book_phrase.find(item => (item.NN == row_year || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	};
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('tab_', '');
	//var linkaddr = 'https://leimaau.gitee.io/data-store/' + row_year;
	var linkaddr = 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/' + row_year;
	
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

// 贊助名單(暫不使用表格)
/*
const colData_sponsor = [
	{ field: 'TIME', title: '贊助時間', align: 'center' }
	, { field: 'WAY', title: '轉賬方式', align: 'center' }
	, { field: 'NAME',title: '贊助人', align: 'center' }
	, { field: 'MONEY',title: '金錢', align: 'center' }
];

const rowData_sponsor = [
	{ TIME: '2020-04-06', WAY: '微信轉賬', NAME: 'C*o', MONEY: '保密' }
];
*/

var	playlist = [
	{ title: "Heart Like California", artist: "Before You Exit", mp3: "http://music.163.com/song/media/outer/url?id=28828120.mp3" ,cover: "http://p1.music.126.net/zuxhlVEkxksU3e5_mR4Ymg==/5990139348590509.jpg?param=130y130" }
	, { title: "Pneumatic Tokyo", artist: "EnV", mp3: "http://music.163.com/song/media/outer/url?id=33937527.mp3" ,cover: "http://p1.music.126.net/k8kONmsvnxJIeuvEE7eR0Q==/109951163694694330.jpg?param=130y130" }
	, { title: "造物者", artist: "华晨宇", mp3: "http://music.163.com/song/media/outer/url?id=419250437.mp3" ,cover: "http://p1.music.126.net/Brk5ra86AWlPOrBljUQ9rw==/1405175872394479.jpg?param=130y130" }
	, { title: "ソレソレ", artist: "JABBERLOOP", mp3: "http://music.163.com/song/media/outer/url?id=29307597.mp3" ,cover: "http://p1.music.126.net/HIjHgonnMOHxTo_cjt0LyQ==/6644348767037594.jpg?param=130y130" }
	, { title: "回娘家", artist: "朱明瑛", mp3: "http://music.163.com/song/media/outer/url?id=340054.mp3" ,cover: "http://p2.music.126.net/b1DuxpPbEicNE06gVUQsLA==/39582418613242.jpg?param=130y130" }
	, { title: "Last Dance", artist: "伍佰 & China Blue", mp3: "http://music.163.com/song/media/outer/url?id=157276.mp3" ,cover: "http://p1.music.126.net/HDdQFXVIlRvR96s0mQyu9g==/109951164170257125.jpg?param=130y130" }
	, { title: "万水千山总是情（翻自 汪明荃）", artist: "励志豪", mp3: "http://music.163.com/song/media/outer/url?id=570074859.mp3" ,cover: "http://p1.music.126.net/-tC1TR2JtKD5-jfx1id88w==/109951163325160885.jpg?param=130y130" }
	, { title: "She纯音乐(Splice Version)", artist: "EYAir / Jami Soul / Mr. Bang / 시나에", mp3: "http://music.163.com/song/media/outer/url?id=478596258.mp3" ,cover: "http://p1.music.126.net/ieoL3KmgJLL3y3O9TqG3bQ==/109951162928795320.jpg?param=130y130" }
];
var isRotate = true;
var autoplay = false;
function bgChange(){
	var lis= $('.lib');
	for(var i=0; i<lis.length; i+=2)
	lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;


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
	outputText2.push(`Forvo：<a href="https://zh.forvo.com/search/${textChar}/" target="_blank">${textChar}</a></br>`);
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
	outputText3.push(`廣東省情網：<a href="http://dfz.gd.gov.cn/" target="_blank">前往</a></br>`);
	outputText3.push(`廣州市情網：<a href="http://dfz.gz.gov.cn/gzsdfz/index.shtml" target="_blank">前往</a></br>`);
	outputText3.push(`廣西地情資料庫：<a href="http://www.gxdfz.org.cn/gdtz/" target="_blank">前往</a></br>`);
	outputText3.push(`開放康熙字典：<a href="http://kangxi.adcs.org.tw/kangxizidian/" target="_blank">前往</a></br>`);
	outputText3.push(`漢語大字典檢索：<a href="http://www.homeinmists.com/hd/search.html" target="_blank">前往</a></br>`);
	outputText3.push(`說文解字圖像查閱：<a href="http://www.homeinmists.com/shuowen/find.html" target="_blank">前往</a></br>`);
	outputText3.push(`現代標準漢語與粵語對照資料庫：<a href="http://apps.itsc.cuhk.edu.hk/hanyu/Page/Cover.aspx" target="_blank">前往</a></br>`);
	outputText3.push(`CantoDict：<a href="http://www.cantonese.sheik.co.uk/scripts/masterlist.htm" target="_blank">前往</a></br>`);
	outputText3.push(`ISO漢字查詢系統：<a href="http://glyph.iso10646hk.net/chinese/icharacters.jsp" target="_blank">前往</a></br>`);
	outputText3.push(`香港小學學習字詞表：<a href="https://www.edbchinese.hk/lexlist_ch/" target="_blank">前往</a></br>`);
	outputText3.push(`早期粵語口語文獻資料庫：<a href="http://143.89.108.109/Candbase/" target="_blank">前往</a></br>`);
	outputText3.push(`香港二十世紀中期粵語語料庫：<a href="https://hkcc.eduhk.hk/v1/introduction.html" target="_blank">前往</a></br>`);
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


// 粵拼轉IPA
function jyutping_to_ipa(inputstr, IPA_version, output_IPAformat, judgeDiv){
	let outputstr = inputstr;
	outputstr = outputstr.replace(/(^|[ ])(m)(\d)/g, "$1m̩$3");
	outputstr = outputstr.replace(/(^|[ ])(ng)(\d)/g, "$1ŋ̍$3");
    outputstr = outputstr.replace(/sl/g,"ɬ");
    outputstr = outputstr.replace(/nj/g,"ȵ");
	
    outputstr = outputstr.replace(/yu/g,"yː");
    outputstr = outputstr.replace(/eoi/g,"ɵy");
    outputstr = outputstr.replace(/eo([tn])/g,"ɵ$1");
    outputstr = outputstr.replace(/eo/g,"ɵ");
	
    outputstr = outputstr.replace(/oe([tk])/g,"œː$1");
    outputstr = outputstr.replace(/oeng/g,"œːŋ");
    outputstr = outputstr.replace(/oe/g,"œː");
	
    outputstr = outputstr.replace(/uk/g,"ʊk");  // uk[ok]
    outputstr = outputstr.replace(/ung/g,"ʊŋ"); // ung[oŋ]
    outputstr = outputstr.replace(/u([in])/g,"uː$1"); // ui[uːy]
    outputstr = outputstr.replace(/ut/g,"uːt");
    outputstr = outputstr.replace(/([^aeio])u(\d)/g,"$1uː$2");
	
    outputstr = outputstr.replace(/eng/g,"ɛːŋ");
    outputstr = outputstr.replace(/e([umnptk])/g,"ɛː$1");
    outputstr = outputstr.replace(/e(\d)/g,"ɛː$1");

    outputstr = outputstr.replace(/ing/g,"ɪŋ"); // ing[eŋ]
    outputstr = outputstr.replace(/ik/g,"ɪk");  // ik[ek]
    outputstr = outputstr.replace(/i([umnpt])/g,"iː$1");
    outputstr = outputstr.replace(/([^aeuoː])i(\d)/g,"$1iː$2");
	
    outputstr = outputstr.replace(/ong/g,"ɔːŋ");
    outputstr = outputstr.replace(/o([imnptk])/g,"ɔː$1"); // oi[ɔːy]
    outputstr = outputstr.replace(/o(\d)/g,"ɔː$1");

    outputstr = outputstr.replace(/aa/g,"Aː");
    outputstr = outputstr.replace(/a/g,"ɐ");

    outputstr = outputstr.replace(/gw/g,"Kʷ");  // gw[ku]
    outputstr = outputstr.replace(/kw/g,"Kʷʰ"); // kw[kʰu]
    outputstr = outputstr.replace(/(^|[ /])([ptk])/g,"$1$2ʰ");
    outputstr = outputstr.replace(/(^|[ /])b/g,"$1p");
    outputstr = outputstr.replace(/(^|[ /])d/g,"$1t");
    outputstr = outputstr.replace(/(^|[ /])g/g,"$1k");
	
    outputstr = outputstr.replace(/zy(\d)/g,"t͡Sɿ$1");
    outputstr = outputstr.replace(/cy(\d)/g,"t͡Sʰɿ$1");
    outputstr = outputstr.replace(/sy(\d)/g,"Sɿ$1");
    outputstr = outputstr.replace(/ng/g,"ŋ");
	
    if (IPA_version == 'nIPA' || IPA_version == 'tIPA'){
        outputstr = outputstr.replace(/s/g,"ʃ");
        outputstr = outputstr.replace(/z/g,"t͡ʃ");
        outputstr = outputstr.replace(/c/g,"t͡ʃʰ");
	} else if(IPA_version == 'nIPA2' || IPA_version == 'tIPA2') {
        outputstr = outputstr.replace(/s/g,"s");
        outputstr = outputstr.replace(/z/g,"t͡s");
        outputstr = outputstr.replace(/c/g,"t͡sʰ");
	} else if(IPA_version == 'nIPA3'){
        outputstr = outputstr.replace(/s/g,"ɕ");
        outputstr = outputstr.replace(/z/g,"t͡ɕ");
        outputstr = outputstr.replace(/c/g,"t͡ɕʰ");
	}
	
    if (IPA_version == 'tIPA2'){
        outputstr = outputstr.replace(/ȵ/g,"ɲ");
        outputstr = outputstr.replace(/w/g,"β");
        outputstr = outputstr.replace(/ɐ/g,"ə");
        outputstr = outputstr.replace(/œ/g,"ø");
        outputstr = outputstr.replace(/ɛː|ɛ/g,"e");
        outputstr = outputstr.replace(/ɔː|ɔ/g,"o");
        outputstr = outputstr.replace(/iə([ŋk])/g,"iɐ$1");
        outputstr = outputstr.replace(/ɪ/g,"e")
	} else if (IPA_version == 'tIPA'){
        outputstr = outputstr.replace(/ɔː|ɔ/g,"o");
        outputstr = outputstr.replace(/(ɛ|ɛː)(\d|ŋ|k|i)/g,"e$2");
        outputstr = outputstr.replace(/ɪ/g,"e")
	} else if(IPA_version == 'nIPA2') {
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"o$1");
		outputstr = outputstr.replace(/ɪ/g,"e")
	} else if(IPA_version == 'nIPA3')  {
		outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"u$1");
		outputstr = outputstr.replace(/ɪ(k|ŋ)/g,"i$1");
	}

    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'gIPA'){
        outputstr = outputstr.replace(/([ptk])6/g,"$1̚˨");
        outputstr = outputstr.replace(/([ptk])3/g,"$1̚˧");
        outputstr = outputstr.replace(/([ptk])1/g,"$1̚˥");	
	} else if(IPA_version == 'tIPA') {
        outputstr = outputstr.replace(/([ptk])3/g,"$1̚˥");
        outputstr = outputstr.replace(/([ptk])2/g,"$1̚˧");
        outputstr = outputstr.replace(/([ptk])5/g,"$1̚˨˦");
        outputstr = outputstr.replace(/([ptk])6/g,"$1̚˨");
	} else if(IPA_version == 'tIPA2') {
        outputstr = outputstr.replace(/([ptk])3/g,"$1̚˥");
        outputstr = outputstr.replace(/([ptk])2/g,"$1̚˧");
        outputstr = outputstr.replace(/([ptk])5/g,"$1̚˨˧");
        outputstr = outputstr.replace(/([ptk])6/g,"$1̚˨");
	}
	
    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3'){
        outputstr = outputstr.replace(/1/g,"˥˥");
        outputstr = outputstr.replace(/2/g,"˧˥");
        outputstr = outputstr.replace(/3/g,"˧˧");
        outputstr = outputstr.replace(/4/g,"˨˩");
        outputstr = outputstr.replace(/5/g,"˨˦");
        outputstr = outputstr.replace(/6/g,"˨˨");
	} else if(IPA_version == 'gIPA') {
        outputstr = outputstr.replace(/1/g,"˥˥");
        outputstr = outputstr.replace(/2/g,"˧˥");
        outputstr = outputstr.replace(/3/g,"˧˧");
        outputstr = outputstr.replace(/4/g,"˩˩");
        outputstr = outputstr.replace(/5/g,"˩˧");
        outputstr = outputstr.replace(/6/g,"˨˨");
	} else {
        outputstr = outputstr.replace(/1/g,"˥˧");
        outputstr = outputstr.replace(/2/g,"˧˧");
        outputstr = outputstr.replace(/3/g,"˥˥");
        outputstr = outputstr.replace(/4/g,"˨˩");
        outputstr = outputstr.replace(/5/g,"˨˦");
        outputstr = outputstr.replace(/6/g,"˨˨");
	}
	
    outputstr = outputstr.toLowerCase().replace(/ɪ/g,"e");
	
	if( $("#"+judgeDiv).is(":checked") == false ){
		outputstr = outputstr.replace(/ː/g,"").replace(/͡/g,"").replace(/̚/g,"");
	}
	
    if(output_IPAformat == 'noUp'){
        outputstr = outputstr.replace(/˥/g,"5").replace(/˦/g,"4").replace(/˧/g,"3").replace(/˨/g,"2").replace(/˩/g,"1");
	} else if(output_IPAformat == 'Up') {
        outputstr = outputstr.replace(/˥/g,"⁵").replace(/˦/g,"⁴").replace(/˧/g,"³").replace(/˨/g,"²").replace(/˩/g,"¹");
	} else {
        outputstr = outputstr.replace(/˥˥/g,'˥').replace(/˧˧/g,'˧').replace(/˨˨/g,'˨');
	}
	
    outputstr = outputstr.replace(/^([aeiouœʊɐɛɪɔ])/g,"∅$1");
	
	return outputstr;
}


// IPA轉粵拼
function ipa_to_jyutping(inputstr, IPA_version){
	let outputstr = inputstr;
	
	outputstr = outputstr.replace(/ː/g,"").replace(/͡/g,"").replace(/̚/g,"");
	
    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'gIPA'){
        outputstr = outputstr.replace(/˨˩|21|²¹|˩˩|11|¹¹/g,"_4");
        outputstr = outputstr.replace(/˥˥|55|⁵⁵/g,"_1");
        outputstr = outputstr.replace(/˨˦|24|²⁴|˩˧|13|¹³/g,"_5");
        outputstr = outputstr.replace(/˧˥|35|³⁵/g,"_2");
        outputstr = outputstr.replace(/˨˨|22|²²/g,"_6");
        outputstr = outputstr.replace(/˧˧|33|³³/g,"_3");
        outputstr = outputstr.replace(/(?<n1>[ptk])˨|(?<n2>[ptk])2|(?<n3>[ptk])²/g,"$<n1>$<n2>$<n3>6");
        outputstr = outputstr.replace(/(?<n1>[ptk])˧|(?<n2>[ptk])3|(?<n3>[ptk])³/g,"$<n1>$<n2>$<n3>3");
        outputstr = outputstr.replace(/(?<n1>[ptk])˥|(?<n2>[ptk])5|(?<n3>[ptk])⁵/g,"$<n1>$<n2>$<n3>1");
        outputstr = outputstr.replace(/˥/g,"_1");
        outputstr = outputstr.replace(/˧/g,"_3");
        outputstr = outputstr.replace(/˨/g,"_6");
	} else {
        outputstr = outputstr.replace(/˨˩|21|²¹/g,"_4");
        outputstr = outputstr.replace(/˥˧|53|⁵³|˦˩|41|⁴¹/g,"_1");
        outputstr = outputstr.replace(/˨˦|24|²⁴|˨˧|23|²³/g,"_5");
        outputstr = outputstr.replace(/˧˧|33|³³/g,"_2");
        outputstr = outputstr.replace(/˨˨|22|²²|˨˨˧|223|²²³/g,"_6");
        outputstr = outputstr.replace(/˥˥|55|⁵⁵/g,"_3");
        outputstr = outputstr.replace(/(?<n1>[ptk])˨|(?<n2>[ptk])2|(?<n3>[ptk])²/g,"$<n1>$<n2>$<n3>6");
        outputstr = outputstr.replace(/(?<n1>[ptk])˧|(?<n2>[ptk])3|(?<n3>[ptk])³/g,"$<n1>$<n2>$<n3>2");
        outputstr = outputstr.replace(/(?<n1>[ptk])˥|(?<n2>[ptk])5|(?<n3>[ptk])⁵/g,"$<n1>$<n2>$<n3>3");
        outputstr = outputstr.replace(/˥/g,"_3");
        outputstr = outputstr.replace(/˧/g,"_2");
        outputstr = outputstr.replace(/˨/g,"_6");
	}
    
    outputstr = outputstr.replace(/_/g,"");
    outputstr = outputstr.replace(/tʃʰ|tsʰ|tɕʰ|tʃh|tsh|tɕh|ʧʰ|ʦʰ|ʨʰ|ʧh|ʦh|ʨh/g,"c");
    outputstr = outputstr.replace(/tʃ|ts|tɕ|ʧ|ʦ|ʨ/g,"z");
    outputstr = outputstr.replace(/ʃ|s|ɕ/g,"s");

    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'gIPA'){
        outputstr = outputstr.replace(/ʊk|ok|uk/g,"uk");
        outputstr = outputstr.replace(/ʊŋ|oŋ|uŋ/g,"ung");
	} else {
		outputstr = outputstr.replace(/ok/g,"ok");
        outputstr = outputstr.replace(/oŋ/g,"ong");
	}

    outputstr = outputstr.replace(/^([yi])([mnptk])(\d)/g,"j$1$2$3");
    outputstr = outputstr.replace(/^([yi])(\d)/g,"j$1$2");

    outputstr = outputstr.replace(/kʷʰ|kʰʷ|kwh|khw|kʰu|khu/g,"Kw");
    outputstr = outputstr.replace(/kʷ|kw|ku/g,"gw");
    outputstr = outputstr.replace(/(Kw)([inktg]*)(\d)/g,"Ku$2$3");
    outputstr = outputstr.replace(/(gw)([inktg]*)(\d)/g,"gu$2$3");

    outputstr = outputstr.replace(/(^|[ /])p([^hʰ])/g,"$1b$2");
    outputstr = outputstr.replace(/(^|[ /])t([^hʰ])/g,"$1d$2");
    outputstr = outputstr.replace(/(^|[ /])k([^hʰ])/g,"$1g$2");
    outputstr = outputstr.replace(/(^|[ /])(ph|pʰ)/g,"$1p");
    outputstr = outputstr.replace(/(^|[ /])(th|tʰ)/g,"$1t");
    outputstr = outputstr.replace(/(^|[ /])(kh|kʰ)/g,"$1k");

    outputstr = outputstr.replace(/a/g,"aa");
    outputstr = outputstr.replace(/ɐ|ə/g,"a");

    outputstr = outputstr.replace(/ɔ/g,"o");

    outputstr = outputstr.replace(/eŋ|ɪŋ/g,"ing");
    outputstr = outputstr.replace(/ek|ɪk/g,"ik");
    outputstr = outputstr.replace(/ɛ/g,"e");
    outputstr = outputstr.replace(/œ|ø/g,"oe");

    outputstr = outputstr.replace(/ɵy/g,"eoi");
    outputstr = outputstr.replace(/ɵ/g,"eo");

    outputstr = outputstr.replace(/ɬ/g,"sl");
    outputstr = outputstr.replace(/ȵ|ɲ/g,"nj");
    outputstr = outputstr.replace(/v|β/g,"w");

    outputstr = outputstr.replace(/m̩|m̍/g,"m");
    outputstr = outputstr.replace(/ŋ̩|ŋ̍|ŋ|ŋ̇/g,"ng");
    outputstr = outputstr.replace(/y/g,"yu");
    outputstr = outputstr.replace(/ɿ/g,"y");
    outputstr = outputstr.replace(/^[ʔ∅0Ø]/g,"");

    outputstr = outputstr.toLowerCase();
	
	return outputstr;
}

var tradData = [{simp:'𪮳',trad:['𢺳']},{simp:'㓥',trad:['劏']},{simp:'㖊',trad:['噚']},{simp:'㖞',trad:['喎']},{simp:'㤘',trad:['㥮']},{simp:'㧏',trad:['掆']},{simp:'㧑',trad:['撝']},{simp:'㧟',trad:['擓']},{simp:'㭴',trad:['樫']},{simp:'㳠',trad:['澾']},{simp:'㳽',trad:['瀰']},{simp:'㶉',trad:['鸂']},{simp:'㶶',trad:['燶']},{simp:'䌶',trad:['䊷']},{simp:'䌹',trad:['絅']},{simp:'䌽',trad:['綵']},{simp:'䓕',trad:['薳']},{simp:'䗖',trad:['螮']},{simp:'䙓',trad:['襬']},{simp:'䜣',trad:['訢']},{simp:'䜧',trad:['譅']},{simp:'䞌',trad:['𧵳']},{simp:'䞍',trad:['䝼']},{simp:'䢂',trad:['𨋢']},{simp:'䦂',trad:['䥇']},{simp:'䩄',trad:['靦']},{simp:'䴔',trad:['鵁']},{simp:'䴖',trad:['鶄']},{simp:'䴙',trad:['鷿']},{simp:'万',trad:['萬']},{simp:'与',trad:['與']},{simp:'丑',trad:['醜']},{simp:'专',trad:['專']},{simp:'业',trad:['業']},{simp:'丛',trad:['叢']},{simp:'东',trad:['東']},{simp:'丝',trad:['絲']},{simp:'丢',trad:['丟']},{simp:'两',trad:['兩']},{simp:'严',trad:['嚴']},{simp:'丧',trad:['喪']},{simp:'个',trad:['個','箇']},{simp:'丬',trad:['爿']},{simp:'丰',trad:['豐']},{simp:'临',trad:['臨']},{simp:'为',trad:['為','爲']},{simp:'丽',trad:['麗']},{simp:'举',trad:['舉']},{simp:'么',trad:['幺','麽','麼']},{simp:'义',trad:['義']},{simp:'乌',trad:['烏']},{simp:'乐',trad:['樂']},{simp:'乔',trad:['喬']},{simp:'习',trad:['習']},{simp:'乡',trad:['鄉']},{simp:'书',trad:['書']},{simp:'买',trad:['買']},{simp:'乱',trad:['亂']},{simp:'了',trad:['瞭']},{simp:'争',trad:['爭']},{simp:'于',trad:['於']},{simp:'亏',trad:['虧']},{simp:'云',trad:['雲']},{simp:'亘',trad:['亙']},{simp:'亚',trad:['亞']},{simp:'产',trad:['產']},{simp:'亩',trad:['畝']},{simp:'亲',trad:['親']},{simp:'亵',trad:['褻']},{simp:'亸',trad:['嚲']},{simp:'亿',trad:['億']},{simp:'仅',trad:['僅']},{simp:'仆',trad:['僕']},{simp:'从',trad:['從']},{simp:'仑',trad:['侖','崙']},{simp:'仓',trad:['倉']},{simp:'他',trad:['祂']},{simp:'仪',trad:['儀']},{simp:'们',trad:['們']},{simp:'价',trad:['價']},{simp:'仿',trad:['彷']},{simp:'众',trad:['眾','衆']},{simp:'优',trad:['優']},{simp:'伙',trad:['夥']},{simp:'会',trad:['會']},{simp:'伛',trad:['傴']},{simp:'伞',trad:['傘']},{simp:'伟',trad:['偉']},{simp:'传',trad:['傳']},{simp:'伡',trad:['俥']},{simp:'伤',trad:['傷']},{simp:'伥',trad:['倀']},{simp:'伦',trad:['倫']},{simp:'伧',trad:['傖']},{simp:'伪',trad:['偽','僞']},{simp:'伫',trad:['佇']},{simp:'体',trad:['體']},{simp:'余',trad:['餘']},{simp:'佛',trad:['彿']},{simp:'你',trad:['妳']},{simp:'佣',trad:['傭']},{simp:'佥',trad:['僉']},{simp:'侄',trad:['姪']},{simp:'侠',trad:['俠']},{simp:'侣',trad:['侶']},{simp:'侥',trad:['僥']},{simp:'侦',trad:['偵']},{simp:'侧',trad:['側']},{simp:'侨',trad:['僑']},{simp:'侩',trad:['儈']},{simp:'侪',trad:['儕']},{simp:'侬',trad:['儂']},{simp:'俊',trad:['儁']},{simp:'俣',trad:['俁']},{simp:'俦',trad:['儔']},{simp:'俨',trad:['儼']},{simp:'俩',trad:['倆']},{simp:'俪',trad:['儷']},{simp:'俭',trad:['儉']},{simp:'修',trad:['脩']},{simp:'借',trad:['藉']},{simp:'债',trad:['債']},{simp:'倾',trad:['傾']},{simp:'偬',trad:['傯']},{simp:'偻',trad:['僂']},{simp:'偾',trad:['僨']},{simp:'偿',trad:['償']},{simp:'傥',trad:['儻']},{simp:'傧',trad:['儐']},{simp:'储',trad:['儲']},{simp:'傩',trad:['儺']},{simp:'僵',trad:['殭']},{simp:'儿',trad:['兒']},{simp:'克',trad:['剋']},{simp:'兑',trad:['兌']},{simp:'兖',trad:['兗']},{simp:'党',trad:['黨']},{simp:'兰',trad:['蘭']},{simp:'关',trad:['關']},{simp:'兴',trad:['興']},{simp:'兹',trad:['茲']},{simp:'养',trad:['養']},{simp:'兽',trad:['獸']},{simp:'内',trad:['內']},{simp:'冈',trad:['岡']},{simp:'册',trad:['冊']},{simp:'写',trad:['寫']},{simp:'军',trad:['軍']},{simp:'农',trad:['農']},{simp:'冢',trad:['塚']},{simp:'冬',trad:['鼕']},{simp:'冯',trad:['馮']},{simp:'冲',trad:['沖','衝']},{simp:'决',trad:['決']},{simp:'况',trad:['況']},{simp:'冻',trad:['凍']},{simp:'净',trad:['凈','淨']},{simp:'凄',trad:['悽','淒']},{simp:'准',trad:['準']},{simp:'凉',trad:['涼']},{simp:'凋',trad:['雕']},{simp:'凌',trad:['淩']},{simp:'减',trad:['減']},{simp:'凑',trad:['湊']},{simp:'凛',trad:['凜']},{simp:'几',trad:['幾']},{simp:'凤',trad:['鳳']},{simp:'凫',trad:['鳧']},{simp:'凭',trad:['憑']},{simp:'凯',trad:['凱']},{simp:'凶',trad:['兇']},{simp:'出',trad:['齣']},{simp:'击',trad:['擊']},{simp:'凼',trad:['氹']},{simp:'凿',trad:['鑿']},{simp:'刍',trad:['芻']},{simp:'划',trad:['劃','畫']},{simp:'刘',trad:['劉']},{simp:'则',trad:['則']},{simp:'刚',trad:['剛']},{simp:'创',trad:['創']},{simp:'删',trad:['刪']},{simp:'别',trad:['別','彆']},{simp:'刭',trad:['剄']},{simp:'刮',trad:['颳']},{simp:'制',trad:['製']},{simp:'刹',trad:['剎']},{simp:'刽',trad:['劊']},{simp:'刿',trad:['劌']},{simp:'剀',trad:['剴']},{simp:'剂',trad:['劑']},{simp:'剐',trad:['剮']},{simp:'剑',trad:['劍']},{simp:'剥',trad:['剝']},{simp:'剧',trad:['劇']},{simp:'劝',trad:['勸']},{simp:'办',trad:['辦']},{simp:'务',trad:['務']},{simp:'劢',trad:['勱']},{simp:'动',trad:['動']},{simp:'励',trad:['勵']},{simp:'劲',trad:['勁']},{simp:'劳',trad:['勞']},{simp:'势',trad:['勢']},{simp:'勋',trad:['勛','勳']},{simp:'勐',trad:['猛']},{simp:'勚',trad:['勩']},{simp:'匀',trad:['勻']},{simp:'匮',trad:['匱']},{simp:'区',trad:['區']},{simp:'医',trad:['醫']},{simp:'千',trad:['韆']},{simp:'升',trad:['昇','陞']},{simp:'华',trad:['華']},{simp:'协',trad:['協']},{simp:'单',trad:['單']},{simp:'卖',trad:['賣']},{simp:'卜',trad:['蔔']},{simp:'占',trad:['佔']},{simp:'卢',trad:['盧']},{simp:'卤',trad:['滷','鹵']},{simp:'卧',trad:['臥']},{simp:'卫',trad:['衛']},{simp:'即',trad:['卽']},{simp:'却',trad:['卻']},{simp:'卷',trad:['捲']},{simp:'卺',trad:['巹']},{simp:'厂',trad:['廠']},{simp:'厅',trad:['廳']},{simp:'历',trad:['曆','歷']},{simp:'厉',trad:['厲']},{simp:'压',trad:['壓']},{simp:'厌',trad:['厭']},{simp:'厕',trad:['厠','廁']},{simp:'厘',trad:['釐']},{simp:'厢',trad:['廂']},{simp:'厣',trad:['厴']},{simp:'厦',trad:['廈']},{simp:'厨',trad:['廚']},{simp:'厩',trad:['廄']},{simp:'厮',trad:['廝']},{simp:'县',trad:['縣']},{simp:'叁',trad:['叄']},{simp:'参',trad:['參','蔘']},{simp:'叇',trad:['靆']},{simp:'双',trad:['雙']},{simp:'发',trad:['發','髮']},{simp:'变',trad:['變']},{simp:'叙',trad:['敍','敘']},{simp:'叠',trad:['疊']},{simp:'只',trad:['祇','隻','衹']},{simp:'台',trad:['枱','颱','臺','檯']},{simp:'叶',trad:['葉']},{simp:'号',trad:['號']},{simp:'叹',trad:['嘆','歎']},{simp:'叽',trad:['嘰']},{simp:'吁',trad:['籲']},{simp:'吃',trad:['喫']},{simp:'合',trad:['閤']},{simp:'吊',trad:['弔']},{simp:'同',trad:['衕']},{simp:'后',trad:['後']},{simp:'向',trad:['嚮','曏']},{simp:'吓',trad:['嚇']},{simp:'吕',trad:['呂']},{simp:'吗',trad:['嗎']},{simp:'吣',trad:['唚']},{simp:'吨',trad:['噸']},{simp:'听',trad:['聽']},{simp:'启',trad:['啓','啟']},{simp:'吴',trad:['吳']},{simp:'呆',trad:['獃']},{simp:'呐',trad:['吶']},{simp:'呒',trad:['嘸']},{simp:'呓',trad:['囈']},{simp:'呕',trad:['嘔']},{simp:'呗',trad:['唄']},{simp:'员',trad:['員']},{simp:'呛',trad:['嗆']},{simp:'呜',trad:['嗚']},{simp:'周',trad:['週']},{simp:'呵',trad:['嗬']},{simp:'咏',trad:['詠']},{simp:'咔',trad:['哢']},{simp:'咙',trad:['嚨']},{simp:'咛',trad:['嚀']},{simp:'咝',trad:['噝']},{simp:'咤',trad:['吒']},{simp:'咨',trad:['諮']},{simp:'咴',trad:['噅']},{simp:'咸',trad:['鹹']},{simp:'咽',trad:['嚥']},{simp:'哄',trad:['鬨']},{simp:'哌',trad:['呱']},{simp:'响',trad:['響']},{simp:'哑',trad:['啞']},{simp:'哒',trad:['噠']},{simp:'哓',trad:['嘵']},{simp:'哔',trad:['嗶']},{simp:'哕',trad:['噦']},{simp:'哗',trad:['嘩','譁']},{simp:'哙',trad:['噲']},{simp:'哜',trad:['嚌']},{simp:'哝',trad:['噥']},{simp:'哟',trad:['喲']},{simp:'唇',trad:['脣']},{simp:'唛',trad:['嘜']},{simp:'唝',trad:['嗊']},{simp:'唠',trad:['嘮']},{simp:'唡',trad:['啢']},{simp:'唢',trad:['嗩']},{simp:'唣',trad:['唕']},{simp:'唤',trad:['喚']},{simp:'唿',trad:['呼']},{simp:'啧',trad:['嘖']},{simp:'啬',trad:['嗇']},{simp:'啭',trad:['囀']},{simp:'啮',trad:['嚙','齧']},{simp:'啰',trad:['囉']},{simp:'啸',trad:['嘯']},{simp:'喂',trad:['餵']},{simp:'喷',trad:['噴']},{simp:'喽',trad:['嘍']},{simp:'嗫',trad:['囁']},{simp:'嗳',trad:['噯']},{simp:'嘘',trad:['噓']},{simp:'嘤',trad:['嚶']},{simp:'嘱',trad:['囑']},{simp:'噘',trad:['撅']},{simp:'噜',trad:['嚕']},{simp:'噼',trad:['劈']},{simp:'嚣',trad:['囂']},{simp:'嚯',trad:['謔']},{simp:'回',trad:['迴']},{simp:'团',trad:['團','糰']},{simp:'园',trad:['園']},{simp:'困',trad:['睏']},{simp:'囱',trad:['囪']},{simp:'围',trad:['圍']},{simp:'囵',trad:['圇']},{simp:'国',trad:['國']},{simp:'图',trad:['圖']},{simp:'圆',trad:['圓']},{simp:'圣',trad:['聖']},{simp:'圹',trad:['壙']},{simp:'场',trad:['場']},{simp:'坂',trad:['阪']},{simp:'坏',trad:['壞']},{simp:'块',trad:['塊']},{simp:'坚',trad:['堅']},{simp:'坛',trad:['壇','罈','壜']},{simp:'坜',trad:['壢']},{simp:'坝',trad:['垻','壩']},{simp:'坞',trad:['塢']},{simp:'坟',trad:['墳']},{simp:'坠',trad:['墜']},{simp:'垄',trad:['壟']},{simp:'垅',trad:['壠']},{simp:'垆',trad:['壚']},{simp:'垒',trad:['壘']},{simp:'垦',trad:['墾']},{simp:'垧',trad:['坰']},{simp:'垩',trad:['堊']},{simp:'垫',trad:['墊']},{simp:'垯',trad:['墶']},{simp:'垱',trad:['壋']},{simp:'埘',trad:['塒']},{simp:'埚',trad:['堝']},{simp:'埝',trad:['墊']},{simp:'埯',trad:['垵']},{simp:'埼',trad:['碕']},{simp:'堑',trad:['塹']},{simp:'堕',trad:['墮']},{simp:'墙',trad:['墻','牆']},{simp:'壮',trad:['壯']},{simp:'声',trad:['聲']},{simp:'壳',trad:['殼']},{simp:'壶',trad:['壺']},{simp:'处',trad:['處']},{simp:'备',trad:['備']},{simp:'复',trad:['復','覆','複']},{simp:'够',trad:['夠']},{simp:'头',trad:['頭']},{simp:'夸',trad:['誇']},{simp:'夹',trad:['夾']},{simp:'夺',trad:['奪']},{simp:'奁',trad:['奩']},{simp:'奂',trad:['奐']},{simp:'奋',trad:['奮']},{simp:'奖',trad:['獎']},{simp:'奥',trad:['奧']},{simp:'奸',trad:['姦']},{simp:'妆',trad:['妝']},{simp:'妇',trad:['婦']},{simp:'妈',trad:['媽']},{simp:'妩',trad:['嫵']},{simp:'妪',trad:['嫗']},{simp:'妫',trad:['媯','嬀']},{simp:'姗',trad:['姍']},{simp:'姜',trad:['薑']},{simp:'姹',trad:['奼']},{simp:'娄',trad:['婁']},{simp:'娅',trad:['婭']},{simp:'娆',trad:['嬈']},{simp:'娇',trad:['嬌']},{simp:'娘',trad:['孃']},{simp:'娱',trad:['娛']},{simp:'娲',trad:['媧']},{simp:'娴',trad:['嫺','嫻']},{simp:'婳',trad:['嫿']},{simp:'婴',trad:['嬰']},{simp:'婵',trad:['嬋']},{simp:'婶',trad:['嬸']},{simp:'媪',trad:['媼']},{simp:'嫒',trad:['嬡']},{simp:'嫔',trad:['嬪']},{simp:'嫱',trad:['嬙']},{simp:'嬷',trad:['嬤']},{simp:'孙',trad:['孫']},{simp:'学',trad:['學']},{simp:'孪',trad:['孿']},{simp:'宁',trad:['寧']},{simp:'它',trad:['牠']},{simp:'宝',trad:['寶']},{simp:'实',trad:['實']},{simp:'宠',trad:['寵']},{simp:'审',trad:['審']},{simp:'宪',trad:['憲']},{simp:'宫',trad:['宮']},{simp:'家',trad:['傢']},{simp:'宽',trad:['寬']},{simp:'宾',trad:['賓']},{simp:'寝',trad:['寢']},{simp:'对',trad:['對']},{simp:'寻',trad:['尋']},{simp:'导',trad:['導']},{simp:'寿',trad:['壽']},{simp:'将',trad:['將']},{simp:'尔',trad:['爾']},{simp:'尘',trad:['塵']},{simp:'尝',trad:['嘗','嚐']},{simp:'尧',trad:['堯']},{simp:'尴',trad:['尷']},{simp:'尸',trad:['屍']},{simp:'尽',trad:['儘','盡']},{simp:'局',trad:['侷']},{simp:'层',trad:['層']},{simp:'屉',trad:['屜']},{simp:'届',trad:['屆']},{simp:'属',trad:['屬']},{simp:'屡',trad:['屢']},{simp:'屿',trad:['嶼']},{simp:'岁',trad:['歲']},{simp:'岂',trad:['豈']},{simp:'岖',trad:['嶇']},{simp:'岗',trad:['崗']},{simp:'岘',trad:['峴']},{simp:'岚',trad:['嵐']},{simp:'岛',trad:['島']},{simp:'岩',trad:['巖']},{simp:'岭',trad:['嶺']},{simp:'岳',trad:['嶽']},{simp:'岿',trad:['巋']},{simp:'峃',trad:['嶨']},{simp:'峄',trad:['嶧']},{simp:'峡',trad:['峽']},{simp:'峣',trad:['嶢']},{simp:'峥',trad:['崢']},{simp:'峦',trad:['巒']},{simp:'峰',trad:['峯']},{simp:'崂',trad:['嶗']},{simp:'崃',trad:['崍']},{simp:'崄',trad:['嶮']},{simp:'崭',trad:['嶄']},{simp:'嵘',trad:['嶸']},{simp:'嵚',trad:['嶔']},{simp:'嵛',trad:['崳']},{simp:'嵴',trad:['脊']},{simp:'巅',trad:['巔']},{simp:'巨',trad:['鉅']},{simp:'巩',trad:['鞏']},{simp:'巯',trad:['巰']},{simp:'币',trad:['幣']},{simp:'布',trad:['佈']},{simp:'帅',trad:['帥']},{simp:'师',trad:['師']},{simp:'帏',trad:['幃']},{simp:'帐',trad:['帳']},{simp:'帘',trad:['簾']},{simp:'帜',trad:['幟']},{simp:'带',trad:['帶']},{simp:'帧',trad:['幀']},{simp:'席',trad:['蓆']},{simp:'帮',trad:['幫']},{simp:'帱',trad:['幬']},{simp:'帻',trad:['幘']},{simp:'帼',trad:['幗']},{simp:'幂',trad:['冪']},{simp:'干',trad:['乾','榦','幹']},{simp:'并',trad:['並','併']},{simp:'幸',trad:['倖']},{simp:'幺',trad:['么']},{simp:'广',trad:['廣']},{simp:'庄',trad:['莊']},{simp:'庆',trad:['慶']},{simp:'床',trad:['牀']},{simp:'庐',trad:['廬']},{simp:'庑',trad:['廡']},{simp:'库',trad:['庫']},{simp:'应',trad:['應']},{simp:'庙',trad:['廟']},{simp:'庞',trad:['龐']},{simp:'废',trad:['廢']},{simp:'庵',trad:['菴']},{simp:'庼',trad:['廎']},{simp:'廪',trad:['廩']},{simp:'开',trad:['開']},{simp:'异',trad:['異']},{simp:'弃',trad:['棄']},{simp:'弑',trad:['弒']},{simp:'张',trad:['張']},{simp:'弥',trad:['彌','瀰']},{simp:'弦',trad:['絃']},{simp:'弯',trad:['彎']},{simp:'弹',trad:['彈']},{simp:'强',trad:['強']},{simp:'归',trad:['歸']},{simp:'当',trad:['噹','當']},{simp:'录',trad:['錄']},{simp:'彟',trad:['彠']},{simp:'彦',trad:['彥']},{simp:'彩',trad:['綵']},{simp:'彷',trad:['仿']},{simp:'彻',trad:['徹']},{simp:'征',trad:['徵']},{simp:'径',trad:['徑','逕']},{simp:'徕',trad:['徠']},{simp:'御',trad:['禦']},{simp:'徼',trad:['僥']},{simp:'忆',trad:['憶']},{simp:'忏',trad:['懺']},{simp:'志',trad:['誌']},{simp:'忧',trad:['憂']},{simp:'念',trad:['唸']},{simp:'忾',trad:['愾']},{simp:'怀',trad:['懷']},{simp:'态',trad:['態']},{simp:'怂',trad:['慫']},{simp:'怃',trad:['憮']},{simp:'怄',trad:['慪']},{simp:'怅',trad:['悵']},{simp:'怆',trad:['愴']},{simp:'怜',trad:['憐']},{simp:'总',trad:['總']},{simp:'怼',trad:['懟']},{simp:'怿',trad:['懌']},{simp:'恋',trad:['戀']},{simp:'恒',trad:['恆']},{simp:'恤',trad:['卹']},{simp:'恳',trad:['懇']},{simp:'恶',trad:['噁','惡']},{simp:'恸',trad:['慟']},{simp:'恹',trad:['懨']},{simp:'恺',trad:['愷']},{simp:'恻',trad:['惻']},{simp:'恼',trad:['惱']},{simp:'悦',trad:['悅']},{simp:'悫',trad:['愨']},{simp:'悬',trad:['懸']},{simp:'悭',trad:['慳']},{simp:'悯',trad:['憫']},{simp:'惊',trad:['驚']},{simp:'惧',trad:['懼']},{simp:'惨',trad:['慘']},{simp:'惩',trad:['懲']},{simp:'惫',trad:['憊']},{simp:'惬',trad:['愜']},{simp:'惭',trad:['慚']},{simp:'惮',trad:['憚']},{simp:'惯',trad:['慣']},{simp:'愈',trad:['癒']},{simp:'愠',trad:['慍']},{simp:'愣',trad:['楞']},{simp:'愤',trad:['憤']},{simp:'愿',trad:['願']},{simp:'慑',trad:['懾']},{simp:'憷',trad:['怵']},{simp:'懑',trad:['懣']},{simp:'懒',trad:['懶']},{simp:'懔',trad:['懍']},{simp:'戆',trad:['戇']},{simp:'戏',trad:['戲']},{simp:'战',trad:['戰']},{simp:'戚',trad:['慼','鏚']},{simp:'戬',trad:['戩']},{simp:'户',trad:['戶']},{simp:'才',trad:['纔']},{simp:'扎',trad:['紮']},{simp:'扑',trad:['撲']},{simp:'托',trad:['託']},{simp:'扣',trad:['釦']},{simp:'执',trad:['執']},{simp:'扩',trad:['擴']},{simp:'扪',trad:['捫']},{simp:'扫',trad:['掃']},{simp:'扬',trad:['揚']},{simp:'扭',trad:['鈕']},{simp:'扰',trad:['擾']},{simp:'折',trad:['摺']},{simp:'抚',trad:['撫']},{simp:'抛',trad:['拋']},{simp:'抟',trad:['摶']},{simp:'抠',trad:['摳']},{simp:'抡',trad:['掄']},{simp:'抢',trad:['搶']},{simp:'护',trad:['護']},{simp:'报',trad:['報']},{simp:'抬',trad:['擡']},{simp:'抵',trad:['牴']},{simp:'担',trad:['擔']},{simp:'拐',trad:['枴','柺']},{simp:'拟',trad:['擬']},{simp:'拢',trad:['攏']},{simp:'拣',trad:['揀']},{simp:'拥',trad:['擁']},{simp:'拦',trad:['攔']},{simp:'拧',trad:['擰']},{simp:'拨',trad:['撥']},{simp:'择',trad:['擇']},{simp:'拼',trad:['拚']},{simp:'挂',trad:['掛']},{simp:'挚',trad:['摯']},{simp:'挛',trad:['攣']},{simp:'挜',trad:['掗']},{simp:'挝',trad:['撾']},{simp:'挞',trad:['撻']},{simp:'挟',trad:['挾']},{simp:'挠',trad:['撓']},{simp:'挡',trad:['擋']},{simp:'挢',trad:['撟']},{simp:'挣',trad:['掙']},{simp:'挤',trad:['擠']},{simp:'挥',trad:['揮']},{simp:'挦',trad:['撏']},{simp:'挨',trad:['捱']},{simp:'挽',trad:['輓']},{simp:'捂',trad:['摀']},{simp:'捆',trad:['綑']},{simp:'捝',trad:['挩']},{simp:'捞',trad:['撈']},{simp:'损',trad:['損']},{simp:'捡',trad:['撿']},{simp:'换',trad:['換']},{simp:'捣',trad:['搗']},{simp:'据',trad:['據']},{simp:'捻',trad:['撚']},{simp:'掳',trad:['擄']},{simp:'掴',trad:['摑']},{simp:'掷',trad:['擲']},{simp:'掸',trad:['撢','撣']},{simp:'掺',trad:['摻']},{simp:'掼',trad:['摜']},{simp:'揸',trad:['摣']},{simp:'揽',trad:['攬']},{simp:'揾',trad:['搵']},{simp:'揿',trad:['撳']},{simp:'搀',trad:['攙']},{simp:'搁',trad:['擱']},{simp:'搂',trad:['摟']},{simp:'搅',trad:['攪']},{simp:'搜',trad:['蒐']},{simp:'携',trad:['攜']},{simp:'摄',trad:['攝']},{simp:'摅',trad:['攄']},{simp:'摆',trad:['擺','襬']},{simp:'摇',trad:['搖']},{simp:'摈',trad:['擯']},{simp:'摊',trad:['攤']},{simp:'撄',trad:['攖']},{simp:'撑',trad:['撐']},{simp:'撵',trad:['攆']},{simp:'撷',trad:['擷']},{simp:'撸',trad:['擼']},{simp:'擞',trad:['擻']},{simp:'攒',trad:['攢']},{simp:'敌',trad:['敵']},{simp:'敛',trad:['斂']},{simp:'数',trad:['數']},{simp:'斋',trad:['齋']},{simp:'斓',trad:['斕']},{simp:'斗',trad:['鬥']},{simp:'斩',trad:['斬']},{simp:'斫',trad:['斲']},{simp:'断',trad:['斷']},{simp:'旗',trad:['旂']},{simp:'无',trad:['無']},{simp:'旧',trad:['舊']},{simp:'时',trad:['時']},{simp:'旷',trad:['曠']},{simp:'旸',trad:['暘']},{simp:'昆',trad:['崑']},{simp:'昙',trad:['曇']},{simp:'昵',trad:['暱']},{simp:'昼',trad:['晝']},{simp:'昽',trad:['曨']},{simp:'显',trad:['顯']},{simp:'晋',trad:['晉']},{simp:'晒',trad:['曬']},{simp:'晓',trad:['曉']},{simp:'晔',trad:['曄']},{simp:'晕',trad:['暈']},{simp:'晖',trad:['暉']},{simp:'暂',trad:['暫']},{simp:'暗',trad:['闇']},{simp:'暧',trad:['曖']},{simp:'曲',trad:['麯','麴']},{simp:'札',trad:['劄']},{simp:'术',trad:['朮','術']},{simp:'朱',trad:['硃']},{simp:'朴',trad:['樸']},{simp:'机',trad:['機']},{simp:'杀',trad:['殺']},{simp:'杂',trad:['雜']},{simp:'权',trad:['權']},{simp:'杆',trad:['桿']},{simp:'杠',trad:['槓']},{simp:'条',trad:['條']},{simp:'来',trad:['來']},{simp:'杨',trad:['楊']},{simp:'杯',trad:['盃']},{simp:'杰',trad:['傑']},{simp:'松',trad:['鬆']},{simp:'板',trad:['闆']},{simp:'极',trad:['極']},{simp:'构',trad:['構']},{simp:'枞',trad:['樅']},{simp:'枢',trad:['樞']},{simp:'枣',trad:['棗']},{simp:'枧',trad:['梘']},{simp:'枨',trad:['棖']},{simp:'枪',trad:['槍']},{simp:'枫',trad:['楓']},{simp:'枭',trad:['梟']},{simp:'柜',trad:['櫃']},{simp:'柠',trad:['檸']},{simp:'柽',trad:['檉']},{simp:'栀',trad:['梔']},{simp:'栅',trad:['柵']},{simp:'标',trad:['標']},{simp:'栈',trad:['棧']},{simp:'栉',trad:['櫛']},{simp:'栊',trad:['櫳']},{simp:'栋',trad:['棟']},{simp:'栌',trad:['櫨']},{simp:'栏',trad:['欄']},{simp:'树',trad:['樹']},{simp:'栖',trad:['棲']},{simp:'栗',trad:['慄']},{simp:'样',trad:['樣']},{simp:'核',trad:['覈']},{simp:'栾',trad:['欒']},{simp:'桉',trad:['案']},{simp:'桊',trad:['棬']},{simp:'桠',trad:['椏']},{simp:'桡',trad:['橈']},{simp:'桢',trad:['楨']},{simp:'档',trad:['檔']},{simp:'桥',trad:['橋']},{simp:'桦',trad:['樺']},{simp:'桧',trad:['檜']},{simp:'桨',trad:['槳']},{simp:'桩',trad:['樁']},{simp:'梁',trad:['樑']},{simp:'梦',trad:['夢']},{simp:'梾',trad:['棶']},{simp:'梿',trad:['槤']},{simp:'检',trad:['檢']},{simp:'棁',trad:['梲']},{simp:'棂',trad:['欞']},{simp:'棱',trad:['稜']},{simp:'棹',trad:['櫂']},{simp:'椁',trad:['槨']},{simp:'椟',trad:['櫝']},{simp:'椭',trad:['橢']},{simp:'楼',trad:['樓']},{simp:'榄',trad:['欖']},{simp:'榅',trad:['榲']},{simp:'榇',trad:['櫬']},{simp:'榈',trad:['櫚']},{simp:'榉',trad:['櫸']},{simp:'槛',trad:['檻']},{simp:'槟',trad:['檳']},{simp:'槠',trad:['櫧']},{simp:'横',trad:['橫']},{simp:'樯',trad:['檣']},{simp:'樱',trad:['櫻']},{simp:'橥',trad:['櫫']},{simp:'橱',trad:['櫥']},{simp:'橹',trad:['櫓']},{simp:'檐',trad:['簷']},{simp:'檩',trad:['檁']},{simp:'欢',trad:['歡']},{simp:'欤',trad:['歟']},{simp:'欧',trad:['歐']},{simp:'欲',trad:['慾']},{simp:'歼',trad:['殲']},{simp:'殁',trad:['歿']},{simp:'殇',trad:['殤']},{simp:'残',trad:['殘']},{simp:'殒',trad:['殞']},{simp:'殓',trad:['殮']},{simp:'殚',trad:['殫']},{simp:'殡',trad:['殯']},{simp:'殴',trad:['毆']},{simp:'毁',trad:['毀','譭','燬']},{simp:'毂',trad:['轂']},{simp:'毕',trad:['畢']},{simp:'毙',trad:['斃']},{simp:'毡',trad:['氈']},{simp:'氇',trad:['氌']},{simp:'气',trad:['氣']},{simp:'氢',trad:['氫']},{simp:'氩',trad:['氬']},{simp:'氲',trad:['氳']},{simp:'汇',trad:['匯','彙']},{simp:'汉',trad:['漢']},{simp:'污',trad:['汙']},{simp:'汤',trad:['湯']},{simp:'汹',trad:['洶']},{simp:'沈',trad:['瀋']},{simp:'沉',trad:['沈']},{simp:'沓',trad:['遝']},{simp:'沟',trad:['溝']},{simp:'没',trad:['沒']},{simp:'沤',trad:['漚']},{simp:'沥',trad:['瀝']},{simp:'沦',trad:['淪']},{simp:'沧',trad:['滄']},{simp:'沩',trad:['溈','潙']},{simp:'沪',trad:['滬']},{simp:'沵',trad:['濔']},{simp:'泄',trad:['洩']},{simp:'泛',trad:['氾','汎']},{simp:'泞',trad:['濘']},{simp:'注',trad:['註']},{simp:'泪',trad:['淚']},{simp:'泷',trad:['瀧']},{simp:'泸',trad:['瀘']},{simp:'泺',trad:['濼']},{simp:'泻',trad:['瀉']},{simp:'泼',trad:['潑']},{simp:'泽',trad:['澤']},{simp:'泾',trad:['涇']},{simp:'洁',trad:['潔']},{simp:'洒',trad:['灑']},{simp:'洼',trad:['窪']},{simp:'浃',trad:['浹']},{simp:'浅',trad:['淺']},{simp:'浆',trad:['漿']},{simp:'浇',trad:['澆']},{simp:'浈',trad:['湞']},{simp:'浉',trad:['溮']},{simp:'浊',trad:['濁']},{simp:'测',trad:['測']},{simp:'济',trad:['濟']},{simp:'浏',trad:['瀏']},{simp:'浐',trad:['滻']},{simp:'浑',trad:['渾']},{simp:'浒',trad:['滸']},{simp:'浓',trad:['濃']},{simp:'浔',trad:['潯']},{simp:'浕',trad:['濜']},{simp:'涂',trad:['塗']},{simp:'涌',trad:['湧']},{simp:'涚',trad:['涗']},{simp:'涛',trad:['濤']},{simp:'涝',trad:['澇']},{simp:'涞',trad:['淶']},{simp:'涟',trad:['漣']},{simp:'涠',trad:['潿']},{simp:'涡',trad:['渦']},{simp:'涢',trad:['溳']},{simp:'涣',trad:['渙']},{simp:'涤',trad:['滌']},{simp:'润',trad:['潤']},{simp:'涧',trad:['澗']},{simp:'涨',trad:['漲']},{simp:'涩',trad:['澀']},{simp:'淀',trad:['澱']},{simp:'淼',trad:['渺']},{simp:'渊',trad:['淵']},{simp:'渌',trad:['淥']},{simp:'渍',trad:['漬']},{simp:'渎',trad:['瀆']},{simp:'渐',trad:['漸']},{simp:'渑',trad:['澠']},{simp:'渔',trad:['漁']},{simp:'渖',trad:['瀋']},{simp:'渗',trad:['滲']},{simp:'温',trad:['溫']},{simp:'游',trad:['遊']},{simp:'湾',trad:['灣']},{simp:'湿',trad:['溼','濕']},{simp:'溃',trad:['潰']},{simp:'溅',trad:['濺']},{simp:'溇',trad:['漊']},{simp:'溯',trad:['遡']},{simp:'溷',trad:['混']},{simp:'滗',trad:['潷']},{simp:'滚',trad:['滾']},{simp:'滞',trad:['滯']},{simp:'滟',trad:['灩']},{simp:'滠',trad:['灄']},{simp:'满',trad:['滿']},{simp:'滤',trad:['濾']},{simp:'滥',trad:['濫']},{simp:'滦',trad:['灤']},{simp:'滨',trad:['濱']},{simp:'滩',trad:['灘']},{simp:'滪',trad:['澦']},{simp:'漤',trad:['灠']},{simp:'潇',trad:['瀟']},{simp:'潋',trad:['瀲']},{simp:'潍',trad:['濰']},{simp:'潜',trad:['潛']},{simp:'潴',trad:['瀦']},{simp:'澜',trad:['瀾']},{simp:'澹',trad:['淡']},{simp:'濑',trad:['瀨']},{simp:'濒',trad:['瀕']},{simp:'灏',trad:['灝']},{simp:'灭',trad:['滅']},{simp:'灯',trad:['燈']},{simp:'灵',trad:['靈']},{simp:'灶',trad:['竈']},{simp:'灾',trad:['災']},{simp:'灿',trad:['燦']},{simp:'炀',trad:['煬']},{simp:'炉',trad:['爐']},{simp:'炖',trad:['燉']},{simp:'炜',trad:['煒']},{simp:'炝',trad:['熗']},{simp:'点',trad:['點']},{simp:'炼',trad:['煉','鍊']},{simp:'炽',trad:['熾']},{simp:'烁',trad:['爍']},{simp:'烂',trad:['爛']},{simp:'烛',trad:['燭']},{simp:'烟',trad:['煙','菸']},{simp:'烦',trad:['煩']},{simp:'烧',trad:['燒']},{simp:'烨',trad:['燁']},{simp:'烩',trad:['燴']},{simp:'烫',trad:['燙']},{simp:'烬',trad:['燼']},{simp:'热',trad:['熱']},{simp:'焕',trad:['煥']},{simp:'焖',trad:['燜']},{simp:'焘',trad:['燾']},{simp:'煳',trad:['糊']},{simp:'煴',trad:['熅']},{simp:'熏',trad:['燻']},{simp:'熘',trad:['溜']},{simp:'爱',trad:['愛']},{simp:'爲',trad:['為']},{simp:'爷',trad:['爺']},{simp:'牍',trad:['牘']},{simp:'牦',trad:['氂','犛']},{simp:'牵',trad:['牽']},{simp:'牺',trad:['犧']},{simp:'犊',trad:['犢']},{simp:'状',trad:['狀']},{simp:'犷',trad:['獷']},{simp:'犸',trad:['獁']},{simp:'犹',trad:['猶']},{simp:'狈',trad:['狽']},{simp:'狍',trad:['麅']},{simp:'狝',trad:['獮']},{simp:'狞',trad:['獰']},{simp:'独',trad:['獨']},{simp:'狭',trad:['狹']},{simp:'狮',trad:['獅']},{simp:'狯',trad:['獪']},{simp:'狰',trad:['猙']},{simp:'狱',trad:['獄']},{simp:'狲',trad:['猻']},{simp:'狸',trad:['貍']},{simp:'猃',trad:['獫']},{simp:'猎',trad:['獵']},{simp:'猕',trad:['獼']},{simp:'猡',trad:['玀']},{simp:'猪',trad:['豬']},{simp:'猫',trad:['貓']},{simp:'猬',trad:['蝟']},{simp:'献',trad:['獻']},{simp:'獭',trad:['獺']},{simp:'獾',trad:['貛']},{simp:'玑',trad:['璣']},{simp:'玙',trad:['璵']},{simp:'玛',trad:['瑪']},{simp:'玮',trad:['瑋']},{simp:'环',trad:['環']},{simp:'现',trad:['現']},{simp:'玺',trad:['璽']},{simp:'珉',trad:['瑉']},{simp:'珏',trad:['玨']},{simp:'珐',trad:['琺']},{simp:'珑',trad:['瓏']},{simp:'珰',trad:['璫']},{simp:'珲',trad:['琿']},{simp:'琅',trad:['瑯']},{simp:'琎',trad:['璡']},{simp:'琏',trad:['璉']},{simp:'琐',trad:['瑣']},{simp:'琼',trad:['瓊']},{simp:'瑶',trad:['瑤']},{simp:'瑷',trad:['璦']},{simp:'璎',trad:['瓔']},{simp:'瓮',trad:['甕']},{simp:'瓯',trad:['甌']},{simp:'甯',trad:['寧']},{simp:'电',trad:['電']},{simp:'画',trad:['畫']},{simp:'畅',trad:['暢']},{simp:'畲',trad:['畬']},{simp:'畴',trad:['疇']},{simp:'疖',trad:['癤']},{simp:'疗',trad:['療']},{simp:'疟',trad:['瘧']},{simp:'疠',trad:['癘']},{simp:'疡',trad:['瘍']},{simp:'疬',trad:['癧']},{simp:'疭',trad:['瘲']},{simp:'疮',trad:['瘡']},{simp:'疯',trad:['瘋']},{simp:'疱',trad:['皰']},{simp:'疴',trad:['痾']},{simp:'症',trad:['癥']},{simp:'痈',trad:['癰']},{simp:'痉',trad:['痙']},{simp:'痒',trad:['癢']},{simp:'痨',trad:['癆']},{simp:'痪',trad:['瘓']},{simp:'痴',trad:['癡']},{simp:'痹',trad:['痺']},{simp:'瘘',trad:['瘺','瘻']},{simp:'瘪',trad:['癟']},{simp:'瘫',trad:['癱']},{simp:'瘾',trad:['癮']},{simp:'瘿',trad:['癭']},{simp:'癞',trad:['癩']},{simp:'癣',trad:['癬']},{simp:'癫',trad:['癲']},{simp:'癯',trad:['臒']},{simp:'皂',trad:['皁']},{simp:'皑',trad:['皚']},{simp:'皱',trad:['皺']},{simp:'皲',trad:['皸']},{simp:'盏',trad:['盞']},{simp:'盐',trad:['鹽']},{simp:'监',trad:['監']},{simp:'盖',trad:['蓋']},{simp:'盗',trad:['盜']},{simp:'盘',trad:['盤']},{simp:'眍',trad:['瞘']},{simp:'眦',trad:['眥']},{simp:'眬',trad:['矓']},{simp:'眯',trad:['瞇']},{simp:'着',trad:['著']},{simp:'睁',trad:['睜']},{simp:'睃',trad:['脧']},{simp:'睐',trad:['睞']},{simp:'睾',trad:['睪']},{simp:'瞒',trad:['瞞']},{simp:'瞩',trad:['矚']},{simp:'矫',trad:['矯']},{simp:'矶',trad:['磯']},{simp:'矾',trad:['礬']},{simp:'矿',trad:['礦']},{simp:'砀',trad:['碭']},{simp:'码',trad:['碼']},{simp:'砖',trad:['磚']},{simp:'砗',trad:['硨']},{simp:'砚',trad:['硯']},{simp:'砜',trad:['碸']},{simp:'砺',trad:['礪']},{simp:'砻',trad:['礱']},{simp:'砾',trad:['礫']},{simp:'础',trad:['礎']},{simp:'硁',trad:['硜']},{simp:'硅',trad:['矽']},{simp:'硕',trad:['碩']},{simp:'硗',trad:['磽']},{simp:'硙',trad:['磑']},{simp:'硚',trad:['礄']},{simp:'确',trad:['確']},{simp:'硷',trad:['礆','鹼']},{simp:'碍',trad:['礙']},{simp:'碛',trad:['磧']},{simp:'碜',trad:['磣']},{simp:'碱',trad:['堿']},{simp:'碱',trad:['鹼']},{simp:'磙',trad:['滾']},{simp:'礼',trad:['禮']},{simp:'祎',trad:['禕']},{simp:'祯',trad:['禎']},{simp:'祷',trad:['禱']},{simp:'祸',trad:['禍']},{simp:'禀',trad:['稟']},{simp:'禄',trad:['祿']},{simp:'禅',trad:['禪']},{simp:'离',trad:['離']},{simp:'秃',trad:['禿']},{simp:'秆',trad:['稈']},{simp:'秋',trad:['鞦']},{simp:'种',trad:['種']},{simp:'秘',trad:['祕']},{simp:'积',trad:['積']},{simp:'称',trad:['稱']},{simp:'秸',trad:['稭']},{simp:'秽',trad:['穢']},{simp:'秾',trad:['穠']},{simp:'稆',trad:['穭']},{simp:'税',trad:['稅']},{simp:'稣',trad:['穌']},{simp:'稳',trad:['穩']},{simp:'穑',trad:['穡']},{simp:'穗',trad:['繐']},{simp:'穷',trad:['窮']},{simp:'窃',trad:['竊']},{simp:'窍',trad:['竅']},{simp:'窑',trad:['窯']},{simp:'窜',trad:['竄']},{simp:'窝',trad:['窩']},{simp:'窥',trad:['窺']},{simp:'窦',trad:['竇']},{simp:'竖',trad:['豎']},{simp:'竞',trad:['競']},{simp:'笃',trad:['篤']},{simp:'笋',trad:['筍']},{simp:'笔',trad:['筆']},{simp:'笕',trad:['筧']},{simp:'笺',trad:['箋']},{simp:'笼',trad:['籠']},{simp:'笾',trad:['籩']},{simp:'筑',trad:['築']},{simp:'筚',trad:['篳']},{simp:'筛',trad:['篩']},{simp:'筜',trad:['簹']},{simp:'筝',trad:['箏']},{simp:'筹',trad:['籌']},{simp:'筼',trad:['篔']},{simp:'签',trad:['簽','籤']},{simp:'简',trad:['簡']},{simp:'箓',trad:['籙']},{simp:'箦',trad:['簀']},{simp:'箧',trad:['篋']},{simp:'箨',trad:['籜']},{simp:'箩',trad:['籮']},{simp:'箪',trad:['簞']},{simp:'箫',trad:['簫']},{simp:'篑',trad:['簣']},{simp:'篓',trad:['簍']},{simp:'篮',trad:['籃']},{simp:'篱',trad:['籬']},{simp:'籁',trad:['籟']},{simp:'籴',trad:['糴']},{simp:'类',trad:['類']},{simp:'籼',trad:['秈']},{simp:'粜',trad:['糶']},{simp:'粝',trad:['糲']},{simp:'粤',trad:['粵']},{simp:'粪',trad:['糞']},{simp:'粮',trad:['糧']},{simp:'糁',trad:['糝']},{simp:'糇',trad:['餱']},{simp:'糊',trad:['餬']},{simp:'糖',trad:['醣']},{simp:'系',trad:['係','繫']},{simp:'紧',trad:['緊']},{simp:'累',trad:['纍']},{simp:'絷',trad:['縶']},{simp:'纟',trad:['糸']},{simp:'纠',trad:['糾']},{simp:'纡',trad:['紆']},{simp:'红',trad:['紅']},{simp:'纣',trad:['紂']},{simp:'纤',trad:['縴','纖']},{simp:'纥',trad:['紇']},{simp:'约',trad:['約']},{simp:'级',trad:['級']},{simp:'纨',trad:['紈']},{simp:'纩',trad:['纊']},{simp:'纪',trad:['紀']},{simp:'纫',trad:['紉']},{simp:'纬',trad:['緯']},{simp:'纭',trad:['紜']},{simp:'纯',trad:['純']},{simp:'纰',trad:['紕']},{simp:'纱',trad:['紗']},{simp:'纲',trad:['綱']},{simp:'纳',trad:['納']},{simp:'纴',trad:['紝']},{simp:'纵',trad:['縱']},{simp:'纶',trad:['綸']},{simp:'纷',trad:['紛']},{simp:'纸',trad:['紙']},{simp:'纹',trad:['紋']},{simp:'纺',trad:['紡']},{simp:'纻',trad:['紵']},{simp:'纽',trad:['紐']},{simp:'纾',trad:['紓']},{simp:'线',trad:['綫','線']},{simp:'绀',trad:['紺']},{simp:'绁',trad:['紲']},{simp:'绂',trad:['紱']},{simp:'练',trad:['練']},{simp:'组',trad:['組']},{simp:'绅',trad:['紳']},{simp:'细',trad:['細']},{simp:'织',trad:['織']},{simp:'终',trad:['終']},{simp:'绉',trad:['縐']},{simp:'绊',trad:['絆']},{simp:'绋',trad:['紼']},{simp:'绌',trad:['絀']},{simp:'绍',trad:['紹']},{simp:'绎',trad:['繹']},{simp:'经',trad:['經']},{simp:'绑',trad:['綁']},{simp:'绒',trad:['絨']},{simp:'结',trad:['結']},{simp:'绔',trad:['絝']},{simp:'绕',trad:['繞']},{simp:'绗',trad:['絎']},{simp:'绘',trad:['繪']},{simp:'给',trad:['給']},{simp:'绚',trad:['絢']},{simp:'绛',trad:['絳']},{simp:'络',trad:['絡']},{simp:'绝',trad:['絕']},{simp:'绞',trad:['絞']},{simp:'统',trad:['統']},{simp:'绠',trad:['綆']},{simp:'绡',trad:['綃']},{simp:'绢',trad:['絹']},{simp:'绣',trad:['綉','繡']},{simp:'绥',trad:['綏']},{simp:'继',trad:['繼']},{simp:'绨',trad:['綈']},{simp:'绩',trad:['績']},{simp:'绪',trad:['緒']},{simp:'绫',trad:['綾']},{simp:'续',trad:['續']},{simp:'绮',trad:['綺']},{simp:'绯',trad:['緋']},{simp:'绰',trad:['綽']},{simp:'绱',trad:['緔','鞝']},{simp:'绲',trad:['緄']},{simp:'绳',trad:['繩']},{simp:'维',trad:['維']},{simp:'绵',trad:['綿']},{simp:'绶',trad:['綬']},{simp:'绷',trad:['繃']},{simp:'绸',trad:['綢']},{simp:'绹',trad:['綯']},{simp:'绺',trad:['綹']},{simp:'综',trad:['綜']},{simp:'绽',trad:['綻']},{simp:'绾',trad:['綰']},{simp:'绿',trad:['綠']},{simp:'缀',trad:['綴']},{simp:'缁',trad:['緇']},{simp:'缃',trad:['緗']},{simp:'缄',trad:['緘']},{simp:'缅',trad:['緬']},{simp:'缆',trad:['纜']},{simp:'缇',trad:['緹']},{simp:'缈',trad:['緲']},{simp:'缉',trad:['緝']},{simp:'缊',trad:['縕']},{simp:'缋',trad:['繢']},{simp:'缌',trad:['緦']},{simp:'缍',trad:['綞']},{simp:'缎',trad:['緞']},{simp:'缐',trad:['線']},{simp:'缒',trad:['縋']},{simp:'缓',trad:['緩']},{simp:'缔',trad:['締']},{simp:'缕',trad:['縷']},{simp:'编',trad:['編']},{simp:'缗',trad:['緡']},{simp:'缘',trad:['緣']},{simp:'缙',trad:['縉']},{simp:'缚',trad:['縛']},{simp:'缛',trad:['縟']},{simp:'缜',trad:['縝']},{simp:'缝',trad:['縫']},{simp:'缞',trad:['縗']},{simp:'缟',trad:['縞']},{simp:'缠',trad:['纏']},{simp:'缢',trad:['縊']},{simp:'缣',trad:['縑']},{simp:'缤',trad:['繽']},{simp:'缥',trad:['縹']},{simp:'缦',trad:['縵']},{simp:'缧',trad:['縲']},{simp:'缨',trad:['纓']},{simp:'缩',trad:['縮']},{simp:'缪',trad:['繆']},{simp:'缫',trad:['繅']},{simp:'缬',trad:['纈']},{simp:'缭',trad:['繚']},{simp:'缮',trad:['繕']},{simp:'缯',trad:['繒']},{simp:'缰',trad:['繮','韁']},{simp:'缱',trad:['繾']},{simp:'缲',trad:['繰']},{simp:'缴',trad:['繳']},{simp:'缵',trad:['纘']},{simp:'罂',trad:['罌']},{simp:'网',trad:['網']},{simp:'罗',trad:['羅']},{simp:'罚',trad:['罰']},{simp:'罢',trad:['罷']},{simp:'罴',trad:['羆']},{simp:'羁',trad:['羈']},{simp:'羡',trad:['羨']},{simp:'群',trad:['羣']},{simp:'翘',trad:['翹']},{simp:'翙',trad:['翽']},{simp:'翚',trad:['翬']},{simp:'耧',trad:['耬']},{simp:'耸',trad:['聳']},{simp:'耻',trad:['恥']},{simp:'聂',trad:['聶']},{simp:'聋',trad:['聾']},{simp:'职',trad:['職']},{simp:'聍',trad:['聹']},{simp:'联',trad:['聯']},{simp:'聪',trad:['聰']},{simp:'肃',trad:['肅']},{simp:'肠',trad:['腸']},{simp:'肤',trad:['膚']},{simp:'肮',trad:['骯']},{simp:'肴',trad:['餚']},{simp:'肾',trad:['腎']},{simp:'肿',trad:['腫']},{simp:'胀',trad:['脹']},{simp:'胁',trad:['脅']},{simp:'胆',trad:['膽']},{simp:'背',trad:['揹']},{simp:'胜',trad:['勝']},{simp:'胡',trad:['衚','鬍']},{simp:'胧',trad:['朧']},{simp:'胪',trad:['臚']},{simp:'胫',trad:['脛']},{simp:'胶',trad:['膠']},{simp:'脉',trad:['脈']},{simp:'脍',trad:['膾']},{simp:'脏',trad:['臟','髒']},{simp:'脐',trad:['臍']},{simp:'脑',trad:['腦']},{simp:'脓',trad:['膿']},{simp:'脚',trad:['腳']},{simp:'脱',trad:['脫']},{simp:'脶',trad:['腡']},{simp:'脸',trad:['臉']},{simp:'腊',trad:['臘']},{simp:'腌',trad:['醃']},{simp:'腭',trad:['齶']},{simp:'腻',trad:['膩']},{simp:'腼',trad:['靦']},{simp:'腽',trad:['膃']},{simp:'腾',trad:['騰']},{simp:'膑',trad:['臏']},{simp:'膻',trad:['羶']},{simp:'臜',trad:['臢']},{simp:'致',trad:['緻']},{simp:'舆',trad:['輿']},{simp:'舍',trad:['捨']},{simp:'舣',trad:['艤']},{simp:'舰',trad:['艦']},{simp:'舱',trad:['艙']},{simp:'舻',trad:['艫']},{simp:'艰',trad:['艱']},{simp:'艳',trad:['艷','豔']},{simp:'艹',trad:['艸']},{simp:'艺',trad:['藝']},{simp:'节',trad:['節']},{simp:'芜',trad:['蕪']},{simp:'芦',trad:['蘆']},{simp:'芸',trad:['蕓']},{simp:'苇',trad:['葦']},{simp:'苈',trad:['藶']},{simp:'苋',trad:['莧']},{simp:'苌',trad:['萇']},{simp:'苍',trad:['蒼']},{simp:'苎',trad:['苧']},{simp:'苏',trad:['囌','蘇','甦']},{simp:'苔',trad:['薹']},{simp:'苘',trad:['檾']},{simp:'苧',trad:['薴']},{simp:'苹',trad:['蘋']},{simp:'范',trad:['範']},{simp:'茎',trad:['莖']},{simp:'茏',trad:['蘢']},{simp:'茑',trad:['蔦']},{simp:'茔',trad:['塋']},{simp:'茕',trad:['煢']},{simp:'茧',trad:['繭']},{simp:'荆',trad:['荊']},{simp:'荐',trad:['薦']},{simp:'荙',trad:['薘']},{simp:'荚',trad:['莢']},{simp:'荜',trad:['蓽']},{simp:'荞',trad:['蕎']},{simp:'荟',trad:['薈']},{simp:'荠',trad:['薺']},{simp:'荡',trad:['盪','蕩']},{simp:'荣',trad:['榮']},{simp:'荤',trad:['葷']},{simp:'荥',trad:['滎']},{simp:'荦',trad:['犖']},{simp:'荧',trad:['熒']},{simp:'荨',trad:['蕁']},{simp:'荩',trad:['藎']},{simp:'荪',trad:['蓀']},{simp:'荫',trad:['廕','蔭']},{simp:'药',trad:['葯','藥']},{simp:'莅',trad:['蒞']},{simp:'莱',trad:['萊']},{simp:'莲',trad:['蓮']},{simp:'莳',trad:['蒔']},{simp:'莴',trad:['萵']},{simp:'莶',trad:['薟']},{simp:'获',trad:['獲','穫']},{simp:'莸',trad:['蕕']},{simp:'莹',trad:['瑩']},{simp:'莺',trad:['鶯']},{simp:'莼',trad:['蒓','蓴']},{simp:'菰',trad:['菇']},{simp:'萝',trad:['蘿']},{simp:'萤',trad:['螢']},{simp:'营',trad:['營']},{simp:'萦',trad:['縈']},{simp:'萧',trad:['蕭']},{simp:'萨',trad:['薩']},{simp:'葚',trad:['椹']},{simp:'葱',trad:['蔥']},{simp:'蒉',trad:['蕢']},{simp:'蒋',trad:['蔣']},{simp:'蒌',trad:['蔞']},{simp:'蒙',trad:['懞','矇','濛']},{simp:'蓝',trad:['藍']},{simp:'蓟',trad:['薊']},{simp:'蓣',trad:['蕷']},{simp:'蓦',trad:['驀']},{simp:'蔑',trad:['衊']},{simp:'蔷',trad:['薔']},{simp:'蔺',trad:['藺']},{simp:'蔼',trad:['藹']},{simp:'蕲',trad:['蘄']},{simp:'蕴',trad:['藴','蘊']},{simp:'薮',trad:['藪']},{simp:'藁',trad:['槁']},{simp:'藓',trad:['蘚']},{simp:'蘖',trad:['櫱','蘗']},{simp:'虏',trad:['虜']},{simp:'虑',trad:['慮']},{simp:'虚',trad:['虛']},{simp:'虫',trad:['蟲']},{simp:'虬',trad:['虯']},{simp:'虮',trad:['蟣']},{simp:'虱',trad:['蝨']},{simp:'虽',trad:['雖']},{simp:'虾',trad:['蝦']},{simp:'虿',trad:['蠆']},{simp:'蚀',trad:['蝕']},{simp:'蚁',trad:['蟻']},{simp:'蚂',trad:['螞']},{simp:'蚕',trad:['蠶']},{simp:'蚝',trad:['蠔']},{simp:'蚬',trad:['蜆']},{simp:'蛊',trad:['蠱']},{simp:'蛎',trad:['蠣']},{simp:'蛏',trad:['蟶']},{simp:'蛮',trad:['蠻']},{simp:'蛰',trad:['蟄']},{simp:'蛱',trad:['蛺']},{simp:'蛲',trad:['蟯']},{simp:'蛳',trad:['螄']},{simp:'蛴',trad:['蠐']},{simp:'蜕',trad:['蛻']},{simp:'蜗',trad:['蝸']},{simp:'蜡',trad:['蠟']},{simp:'蝇',trad:['蠅']},{simp:'蝈',trad:['蟈']},{simp:'蝉',trad:['蟬']},{simp:'蝎',trad:['蠍']},{simp:'蝼',trad:['螻']},{simp:'蝾',trad:['蠑']},{simp:'衅',trad:['釁']},{simp:'衔',trad:['銜']},{simp:'补',trad:['補']},{simp:'表',trad:['錶']},{simp:'衬',trad:['襯']},{simp:'衮',trad:['袞']},{simp:'袄',trad:['襖']},{simp:'袅',trad:['嫋','裊']},{simp:'袜',trad:['襪']},{simp:'袭',trad:['襲']},{simp:'装',trad:['裝']},{simp:'裆',trad:['襠']},{simp:'裈',trad:['褌']},{simp:'裢',trad:['褳']},{simp:'裤',trad:['褲']},{simp:'裥',trad:['襉']},{simp:'褛',trad:['褸']},{simp:'褴',trad:['襤']},{simp:'襁',trad:['繈']},{simp:'襕',trad:['襴']},{simp:'见',trad:['見']},{simp:'观',trad:['觀']},{simp:'规',trad:['規']},{simp:'觅',trad:['覓']},{simp:'视',trad:['視']},{simp:'觇',trad:['覘']},{simp:'览',trad:['覽']},{simp:'觉',trad:['覺']},{simp:'觊',trad:['覬']},{simp:'觋',trad:['覡']},{simp:'觌',trad:['覿']},{simp:'觎',trad:['覦']},{simp:'觐',trad:['覲']},{simp:'觑',trad:['覷']},{simp:'觞',trad:['觴']},{simp:'触',trad:['觸']},{simp:'詟',trad:['讋']},{simp:'誉',trad:['譽']},{simp:'誊',trad:['謄']},{simp:'计',trad:['計']},{simp:'订',trad:['訂']},{simp:'讣',trad:['訃']},{simp:'认',trad:['認']},{simp:'讥',trad:['譏']},{simp:'讦',trad:['訐']},{simp:'讧',trad:['訌']},{simp:'讨',trad:['討']},{simp:'让',trad:['讓']},{simp:'讪',trad:['訕']},{simp:'讫',trad:['訖']},{simp:'讬',trad:['託']},{simp:'训',trad:['訓']},{simp:'议',trad:['議']},{simp:'讯',trad:['訊']},{simp:'记',trad:['記']},{simp:'讱',trad:['訒']},{simp:'讲',trad:['講']},{simp:'讳',trad:['諱']},{simp:'讴',trad:['謳']},{simp:'讵',trad:['詎']},{simp:'讶',trad:['訝']},{simp:'讷',trad:['訥']},{simp:'许',trad:['許']},{simp:'讹',trad:['訛']},{simp:'论',trad:['論']},{simp:'讻',trad:['訩']},{simp:'讼',trad:['訟']},{simp:'讽',trad:['諷']},{simp:'设',trad:['設']},{simp:'访',trad:['訪']},{simp:'诀',trad:['訣']},{simp:'证',trad:['證']},{simp:'诂',trad:['詁']},{simp:'诃',trad:['訶']},{simp:'评',trad:['評']},{simp:'诅',trad:['詛']},{simp:'识',trad:['識']},{simp:'诈',trad:['詐']},{simp:'诉',trad:['訴']},{simp:'诊',trad:['診']},{simp:'诋',trad:['詆']},{simp:'词',trad:['詞']},{simp:'诏',trad:['詔']},{simp:'译',trad:['譯']},{simp:'诒',trad:['詒']},{simp:'诔',trad:['誄']},{simp:'试',trad:['試']},{simp:'诗',trad:['詩']},{simp:'诘',trad:['詰']},{simp:'诙',trad:['詼']},{simp:'诚',trad:['誠']},{simp:'诛',trad:['誅']},{simp:'诜',trad:['詵']},{simp:'话',trad:['話']},{simp:'诞',trad:['誕']},{simp:'诟',trad:['詬']},{simp:'诠',trad:['詮']},{simp:'诡',trad:['詭']},{simp:'询',trad:['詢']},{simp:'诣',trad:['詣']},{simp:'诤',trad:['諍']},{simp:'该',trad:['該']},{simp:'详',trad:['詳']},{simp:'诧',trad:['詫']},{simp:'诨',trad:['諢']},{simp:'诩',trad:['詡']},{simp:'诪',trad:['譸']},{simp:'诫',trad:['誡']},{simp:'诬',trad:['誣']},{simp:'语',trad:['語']},{simp:'诮',trad:['誚']},{simp:'误',trad:['誤']},{simp:'诰',trad:['誥']},{simp:'诱',trad:['誘']},{simp:'诲',trad:['誨']},{simp:'诳',trad:['誑']},{simp:'说',trad:['說','説']},{simp:'诵',trad:['誦']},{simp:'诶',trad:['誒']},{simp:'请',trad:['請']},{simp:'诸',trad:['諸']},{simp:'诹',trad:['諏']},{simp:'诺',trad:['諾']},{simp:'读',trad:['讀']},{simp:'诼',trad:['諑']},{simp:'诽',trad:['誹']},{simp:'课',trad:['課']},{simp:'诿',trad:['諉']},{simp:'谀',trad:['諛']},{simp:'谁',trad:['誰']},{simp:'谂',trad:['諗']},{simp:'调',trad:['調']},{simp:'谄',trad:['諂']},{simp:'谅',trad:['諒']},{simp:'谆',trad:['諄']},{simp:'谈',trad:['談']},{simp:'谊',trad:['誼']},{simp:'谋',trad:['謀']},{simp:'谌',trad:['諶']},{simp:'谍',trad:['諜']},{simp:'谎',trad:['謊']},{simp:'谏',trad:['諫']},{simp:'谐',trad:['諧']},{simp:'谑',trad:['謔']},{simp:'谒',trad:['謁']},{simp:'谓',trad:['謂']},{simp:'谔',trad:['諤']},{simp:'谕',trad:['諭']},{simp:'谗',trad:['讒']},{simp:'谘',trad:['諮']},{simp:'谙',trad:['諳']},{simp:'谚',trad:['諺']},{simp:'谛',trad:['諦']},{simp:'谜',trad:['謎']},{simp:'谟',trad:['謨']},{simp:'谡',trad:['謖']},{simp:'谢',trad:['謝']},{simp:'谣',trad:['謠']},{simp:'谤',trad:['謗']},{simp:'谥',trad:['諡','謚']},{simp:'谦',trad:['謙']},{simp:'谧',trad:['謐']},{simp:'谨',trad:['謹']},{simp:'谩',trad:['謾']},{simp:'谪',trad:['謫']},{simp:'谫',trad:['譾']},{simp:'谬',trad:['謬']},{simp:'谭',trad:['譚']},{simp:'谮',trad:['譖']},{simp:'谯',trad:['譙']},{simp:'谱',trad:['譜']},{simp:'谲',trad:['譎']},{simp:'谴',trad:['譴']},{simp:'谵',trad:['譫']},{simp:'谶',trad:['讖']},{simp:'谷',trad:['穀']},{simp:'豮',trad:['豶']},{simp:'贝',trad:['貝']},{simp:'贞',trad:['貞']},{simp:'负',trad:['負']},{simp:'贡',trad:['貢']},{simp:'财',trad:['財']},{simp:'责',trad:['責']},{simp:'贤',trad:['賢']},{simp:'败',trad:['敗']},{simp:'账',trad:['賬']},{simp:'货',trad:['貨']},{simp:'质',trad:['質']},{simp:'贩',trad:['販']},{simp:'贪',trad:['貪']},{simp:'贫',trad:['貧']},{simp:'贬',trad:['貶']},{simp:'购',trad:['購']},{simp:'贮',trad:['貯']},{simp:'贯',trad:['貫']},{simp:'贰',trad:['貳']},{simp:'贱',trad:['賤']},{simp:'贲',trad:['賁']},{simp:'贳',trad:['貰']},{simp:'贴',trad:['貼']},{simp:'贵',trad:['貴']},{simp:'贶',trad:['貺']},{simp:'贷',trad:['貸']},{simp:'贸',trad:['貿']},{simp:'费',trad:['費']},{simp:'贺',trad:['賀']},{simp:'贻',trad:['貽']},{simp:'贼',trad:['賊']},{simp:'贽',trad:['贄']},{simp:'贾',trad:['賈']},{simp:'贿',trad:['賄']},{simp:'赀',trad:['貲']},{simp:'赁',trad:['賃']},{simp:'赂',trad:['賂']},{simp:'赃',trad:['贓']},{simp:'资',trad:['資']},{simp:'赅',trad:['賅']},{simp:'赆',trad:['贐']},{simp:'赇',trad:['賕']},{simp:'赈',trad:['賑']},{simp:'赉',trad:['賚']},{simp:'赊',trad:['賒']},{simp:'赋',trad:['賦']},{simp:'赌',trad:['賭']},{simp:'赎',trad:['贖']},{simp:'赏',trad:['賞']},{simp:'赐',trad:['賜']},{simp:'赑',trad:['贔']},{simp:'赒',trad:['賙']},{simp:'赓',trad:['賡']},{simp:'赔',trad:['賠']},{simp:'赕',trad:['賧']},{simp:'赖',trad:['賴']},{simp:'赘',trad:['贅']},{simp:'赙',trad:['賻']},{simp:'赚',trad:['賺']},{simp:'赛',trad:['賽']},{simp:'赝',trad:['贋','贗']},{simp:'赞',trad:['讚','贊']},{simp:'赟',trad:['贇']},{simp:'赠',trad:['贈']},{simp:'赡',trad:['贍']},{simp:'赢',trad:['贏']},{simp:'赣',trad:['贛']},{simp:'赵',trad:['趙']},{simp:'赶',trad:['趕']},{simp:'趋',trad:['趨']},{simp:'趱',trad:['趲']},{simp:'趸',trad:['躉']},{simp:'跃',trad:['躍']},{simp:'跖',trad:['蹠']},{simp:'践',trad:['踐']},{simp:'跶',trad:['躂']},{simp:'跷',trad:['蹺']},{simp:'跸',trad:['蹕']},{simp:'跹',trad:['躚']},{simp:'跻',trad:['躋']},{simp:'踊',trad:['踴']},{simp:'踌',trad:['躊']},{simp:'踪',trad:['蹤']},{simp:'踬',trad:['躓']},{simp:'踯',trad:['躑']},{simp:'蹑',trad:['躡']},{simp:'蹒',trad:['蹣']},{simp:'蹰',trad:['躕']},{simp:'蹿',trad:['躥']},{simp:'躏',trad:['躪']},{simp:'躯',trad:['軀']},{simp:'车',trad:['車']},{simp:'轧',trad:['軋']},{simp:'轨',trad:['軌']},{simp:'轩',trad:['軒']},{simp:'轪',trad:['軑']},{simp:'轫',trad:['軔']},{simp:'转',trad:['轉']},{simp:'轭',trad:['軛']},{simp:'轮',trad:['輪']},{simp:'软',trad:['軟']},{simp:'轰',trad:['轟']},{simp:'轱',trad:['軲']},{simp:'轲',trad:['軻']},{simp:'轳',trad:['轤']},{simp:'轴',trad:['軸']},{simp:'轵',trad:['軹']},{simp:'轶',trad:['軼']},{simp:'轸',trad:['軫']},{simp:'轺',trad:['軺']},{simp:'轻',trad:['輕']},{simp:'轼',trad:['軾']},{simp:'载',trad:['載']},{simp:'轾',trad:['輊']},{simp:'轿',trad:['轎']},{simp:'辀',trad:['輈']},{simp:'辂',trad:['輅']},{simp:'较',trad:['較']},{simp:'辄',trad:['輒']},{simp:'辅',trad:['輔']},{simp:'辆',trad:['輛']},{simp:'辇',trad:['輦']},{simp:'辈',trad:['輩']},{simp:'辉',trad:['輝']},{simp:'辋',trad:['輞']},{simp:'辌',trad:['輬']},{simp:'辍',trad:['輟']},{simp:'辎',trad:['輜']},{simp:'辏',trad:['輳']},{simp:'辐',trad:['輻']},{simp:'辑',trad:['輯']},{simp:'辒',trad:['轀']},{simp:'输',trad:['輸']},{simp:'辔',trad:['轡']},{simp:'辕',trad:['轅']},{simp:'辖',trad:['轄']},{simp:'辗',trad:['輾']},{simp:'辘',trad:['轆']},{simp:'辙',trad:['轍']},{simp:'辚',trad:['轔']},{simp:'辞',trad:['辭']},{simp:'辟',trad:['闢']},{simp:'辩',trad:['辯']},{simp:'辫',trad:['辮']},{simp:'边',trad:['邊']},{simp:'辽',trad:['遼']},{simp:'达',trad:['達']},{simp:'迁',trad:['遷']},{simp:'过',trad:['過']},{simp:'迈',trad:['邁']},{simp:'运',trad:['運']},{simp:'还',trad:['還']},{simp:'这',trad:['這']},{simp:'进',trad:['進']},{simp:'远',trad:['遠']},{simp:'违',trad:['違']},{simp:'连',trad:['連']},{simp:'迟',trad:['遲']},{simp:'迩',trad:['邇']},{simp:'迳',trad:['逕']},{simp:'迹',trad:['跡','蹟']},{simp:'适',trad:['適']},{simp:'选',trad:['選']},{simp:'逊',trad:['遜']},{simp:'递',trad:['遞']},{simp:'逦',trad:['邐']},{simp:'逻',trad:['邏']},{simp:'遗',trad:['遺']},{simp:'遥',trad:['遙']},{simp:'邓',trad:['鄧']},{simp:'邝',trad:['鄺']},{simp:'邬',trad:['鄔']},{simp:'邮',trad:['郵']},{simp:'邹',trad:['鄒']},{simp:'邺',trad:['鄴']},{simp:'邻',trad:['鄰']},{simp:'郁',trad:['鬱']},{simp:'郏',trad:['郟']},{simp:'郑',trad:['鄭']},{simp:'郓',trad:['鄆']},{simp:'郦',trad:['酈']},{simp:'郧',trad:['鄖']},{simp:'郸',trad:['鄲']},{simp:'酝',trad:['醖','醞']},{simp:'酦',trad:['醱']},{simp:'酰',trad:['醯']},{simp:'酱',trad:['醬']},{simp:'酸',trad:['痠']},{simp:'酽',trad:['釅']},{simp:'酾',trad:['釃']},{simp:'酿',trad:['釀']},{simp:'采',trad:['採']},{simp:'释',trad:['釋']},{simp:'里',trad:['裏','裡']},{simp:'鉴',trad:['鑑','鑒']},{simp:'銮',trad:['鑾']},{simp:'錾',trad:['鏨']},{simp:'钆',trad:['釓']},{simp:'钇',trad:['釔']},{simp:'针',trad:['針','鍼']},{simp:'钉',trad:['釘']},{simp:'钊',trad:['釗']},{simp:'钋',trad:['釙']},{simp:'钌',trad:['釕']},{simp:'钍',trad:['釷']},{simp:'钎',trad:['釺']},{simp:'钏',trad:['釧']},{simp:'钐',trad:['釤']},{simp:'钑',trad:['鈒']},{simp:'钒',trad:['釩']},{simp:'钓',trad:['釣']},{simp:'钔',trad:['鍆']},{simp:'钕',trad:['釹']},{simp:'钗',trad:['釵']},{simp:'钙',trad:['鈣']},{simp:'钚',trad:['鈈']},{simp:'钛',trad:['鈦']},{simp:'钜',trad:['鉅']},{simp:'钝',trad:['鈍']},{simp:'钞',trad:['鈔']},{simp:'钟',trad:['鍾','鐘']},{simp:'钠',trad:['鈉']},{simp:'钡',trad:['鋇']},{simp:'钢',trad:['鋼']},{simp:'钣',trad:['鈑']},{simp:'钤',trad:['鈐']},{simp:'钥',trad:['鑰']},{simp:'钦',trad:['欽']},{simp:'钧',trad:['鈞']},{simp:'钨',trad:['鎢']},{simp:'钩',trad:['鈎','鉤']},{simp:'钪',trad:['鈧']},{simp:'钫',trad:['鈁']},{simp:'钬',trad:['鈥']},{simp:'钮',trad:['鈕']},{simp:'钯',trad:['鈀']},{simp:'钰',trad:['鈺']},{simp:'钱',trad:['錢']},{simp:'钳',trad:['鉗']},{simp:'钴',trad:['鈷']},{simp:'钵',trad:['缽','鉢']},{simp:'钷',trad:['鉕']},{simp:'钸',trad:['鈽']},{simp:'钹',trad:['鈸']},{simp:'钺',trad:['鉞']},{simp:'钻',trad:['鑽']},{simp:'钼',trad:['鉬']},{simp:'钽',trad:['鉭']},{simp:'钾',trad:['鉀']},{simp:'钿',trad:['鈿']},{simp:'铀',trad:['鈾']},{simp:'铁',trad:['鐵']},{simp:'铂',trad:['鉑']},{simp:'铃',trad:['鈴']},{simp:'铄',trad:['鑠']},{simp:'铅',trad:['鉛']},{simp:'铆',trad:['鉚']},{simp:'铇',trad:['鉋']},{simp:'铈',trad:['鈰']},{simp:'铉',trad:['鉉']},{simp:'铊',trad:['鉈']},{simp:'铋',trad:['鉍']},{simp:'铌',trad:['鈮']},{simp:'铍',trad:['鈹']},{simp:'铎',trad:['鐸']},{simp:'铐',trad:['銬']},{simp:'铑',trad:['銠']},{simp:'铒',trad:['鉺']},{simp:'铕',trad:['銪']},{simp:'铗',trad:['鋏']},{simp:'铙',trad:['鐃']},{simp:'铛',trad:['鐺']},{simp:'铜',trad:['銅']},{simp:'铝',trad:['鋁']},{simp:'铞',trad:['銱']},{simp:'铟',trad:['銦']},{simp:'铠',trad:['鎧']},{simp:'铡',trad:['鍘']},{simp:'铢',trad:['銖']},{simp:'铣',trad:['銑']},{simp:'铤',trad:['鋌']},{simp:'铥',trad:['銩']},{simp:'铦',trad:['銛']},{simp:'铧',trad:['鏵']},{simp:'铨',trad:['銓']},{simp:'铩',trad:['鎩']},{simp:'铪',trad:['鉿']},{simp:'铬',trad:['鉻']},{simp:'铭',trad:['銘']},{simp:'铮',trad:['錚']},{simp:'铯',trad:['銫']},{simp:'铰',trad:['鉸']},{simp:'铱',trad:['銥']},{simp:'铲',trad:['剷','鏟']},{simp:'铳',trad:['銃']},{simp:'铵',trad:['銨']},{simp:'银',trad:['銀']},{simp:'铷',trad:['銣']},{simp:'铸',trad:['鑄']},{simp:'铹',trad:['鐒']},{simp:'铺',trad:['舖','鋪']},{simp:'铻',trad:['鋙']},{simp:'铼',trad:['錸']},{simp:'铽',trad:['鋱']},{simp:'链',trad:['鍊','鏈']},{simp:'铿',trad:['鏗']},{simp:'销',trad:['銷']},{simp:'锁',trad:['鎖']},{simp:'锂',trad:['鋰']},{simp:'锃',trad:['鋥']},{simp:'锄',trad:['鋤']},{simp:'锅',trad:['鍋']},{simp:'锆',trad:['鋯']},{simp:'锇',trad:['鋨']},{simp:'锈',trad:['銹','鏽']},{simp:'锉',trad:['銼']},{simp:'锊',trad:['鋝']},{simp:'锋',trad:['鋒']},{simp:'锌',trad:['鋅']},{simp:'锎',trad:['鐦']},{simp:'锏',trad:['鐧']},{simp:'锐',trad:['銳','鋭']},{simp:'锑',trad:['銻']},{simp:'锒',trad:['鋃']},{simp:'锔',trad:['鋦']},{simp:'锕',trad:['錒']},{simp:'锖',trad:['錆']},{simp:'锗',trad:['鍺']},{simp:'锘',trad:['鍩']},{simp:'错',trad:['錯']},{simp:'锚',trad:['錨']},{simp:'锛',trad:['錛']},{simp:'锜',trad:['錡']},{simp:'锝',trad:['鍀']},{simp:'锡',trad:['錫']},{simp:'锢',trad:['錮']},{simp:'锣',trad:['鑼']},{simp:'锤',trad:['錘','鎚']},{simp:'锥',trad:['錐']},{simp:'锦',trad:['錦']},{simp:'锧',trad:['鑕']},{simp:'锨',trad:['杴','鍁']},{simp:'锫',trad:['錇']},{simp:'锭',trad:['錠']},{simp:'键',trad:['鍵']},{simp:'锯',trad:['鋸']},{simp:'锰',trad:['錳']},{simp:'锱',trad:['錙']},{simp:'锲',trad:['鍥']},{simp:'锴',trad:['鍇']},{simp:'锵',trad:['鏘']},{simp:'锶',trad:['鍶']},{simp:'锷',trad:['鍔']},{simp:'锸',trad:['鍤']},{simp:'锹',trad:['鍬']},{simp:'锺',trad:['鍾']},{simp:'锻',trad:['鍛']},{simp:'锾',trad:['鍰']},{simp:'锿',trad:['鎄']},{simp:'镀',trad:['鍍']},{simp:'镁',trad:['鎂']},{simp:'镂',trad:['鏤']},{simp:'镃',trad:['鎡']},{simp:'镄',trad:['鐨']},{simp:'镅',trad:['鎇']},{simp:'镆',trad:['鏌']},{simp:'镇',trad:['鎮']},{simp:'镈',trad:['鎛']},{simp:'镉',trad:['鎘']},{simp:'镊',trad:['鑷']},{simp:'镋',trad:['鎲']},{simp:'镌',trad:['鐫']},{simp:'镍',trad:['鎳']},{simp:'镎',trad:['鎿']},{simp:'镏',trad:['鎦']},{simp:'镐',trad:['鎬']},{simp:'镑',trad:['鎊']},{simp:'镒',trad:['鎰']},{simp:'镓',trad:['鎵']},{simp:'镔',trad:['鑌']},{simp:'镕',trad:['鎔']},{simp:'镖',trad:['鏢']},{simp:'镗',trad:['鏜']},{simp:'镛',trad:['鏞']},{simp:'镜',trad:['鏡']},{simp:'镝',trad:['鏑']},{simp:'镞',trad:['鏃']},{simp:'镟',trad:['鏇']},{simp:'镠',trad:['鏐']},{simp:'镡',trad:['鐔']},{simp:'镢',trad:['钁']},{simp:'镣',trad:['鐐']},{simp:'镤',trad:['鏷']},{simp:'镥',trad:['鑥']},{simp:'镧',trad:['鑭']},{simp:'镨',trad:['鐠']},{simp:'镪',trad:['鏹']},{simp:'镫',trad:['鐙']},{simp:'镬',trad:['鑊']},{simp:'镭',trad:['鐳']},{simp:'镮',trad:['鐶']},{simp:'镯',trad:['鐲']},{simp:'镰',trad:['鎌','鐮']},{simp:'镱',trad:['鐿']},{simp:'镲',trad:['鑔']},{simp:'镳',trad:['鑣']},{simp:'镴',trad:['鑞']},{simp:'镵',trad:['鑱']},{simp:'镶',trad:['鑲']},{simp:'长',trad:['長']},{simp:'门',trad:['門']},{simp:'闩',trad:['閂']},{simp:'闪',trad:['閃']},{simp:'闫',trad:['閆']},{simp:'闭',trad:['閉']},{simp:'问',trad:['問']},{simp:'闯',trad:['闖']},{simp:'闰',trad:['閏']},{simp:'闱',trad:['闈']},{simp:'闲',trad:['閑','閒']},{simp:'闳',trad:['閎']},{simp:'间',trad:['間']},{simp:'闵',trad:['閔']},{simp:'闶',trad:['閌']},{simp:'闷',trad:['悶']},{simp:'闸',trad:['閘']},{simp:'闹',trad:['鬧']},{simp:'闺',trad:['閨']},{simp:'闻',trad:['聞']},{simp:'闼',trad:['闥']},{simp:'闽',trad:['閩']},{simp:'闾',trad:['閭']},{simp:'阀',trad:['閥']},{simp:'阁',trad:['閣']},{simp:'阂',trad:['閡']},{simp:'阃',trad:['閫']},{simp:'阄',trad:['鬮']},{simp:'阅',trad:['閱','閲']},{simp:'阆',trad:['閬']},{simp:'阈',trad:['閾']},{simp:'阉',trad:['閹']},{simp:'阊',trad:['閶']},{simp:'阌',trad:['閿']},{simp:'阍',trad:['閽']},{simp:'阎',trad:['閻']},{simp:'阏',trad:['閼']},{simp:'阐',trad:['闡']},{simp:'阑',trad:['闌']},{simp:'阒',trad:['闃']},{simp:'阔',trad:['闊']},{simp:'阕',trad:['闋']},{simp:'阖',trad:['闔']},{simp:'阗',trad:['闐']},{simp:'阘',trad:['闒']},{simp:'阙',trad:['闕']},{simp:'阚',trad:['闞']},{simp:'阛',trad:['闤']},{simp:'队',trad:['隊']},{simp:'阳',trad:['陽']},{simp:'阴',trad:['陰']},{simp:'阵',trad:['陣']},{simp:'阶',trad:['階']},{simp:'际',trad:['際']},{simp:'陆',trad:['陸']},{simp:'陇',trad:['隴']},{simp:'陈',trad:['陳']},{simp:'陉',trad:['陘']},{simp:'陕',trad:['陜','陝']},{simp:'陧',trad:['隉']},{simp:'陨',trad:['隕']},{simp:'险',trad:['險']},{simp:'随',trad:['隨']},{simp:'隐',trad:['隱']},{simp:'隶',trad:['隸']},{simp:'隽',trad:['雋']},{simp:'难',trad:['難']},{simp:'雇',trad:['僱']},{simp:'雏',trad:['雛']},{simp:'雕',trad:['彫','鵰']},{simp:'雠',trad:['讎']},{simp:'雳',trad:['靂']},{simp:'雾',trad:['霧']},{simp:'霁',trad:['霽']},{simp:'霉',trad:['黴']},{simp:'霭',trad:['靄']},{simp:'靓',trad:['靚']},{simp:'静',trad:['靜']},{simp:'面',trad:['麪','麵']},{simp:'靥',trad:['靨']},{simp:'鞑',trad:['韃']},{simp:'鞯',trad:['韉']},{simp:'韦',trad:['韋']},{simp:'韧',trad:['韌']},{simp:'韨',trad:['韍']},{simp:'韩',trad:['韓']},{simp:'韪',trad:['韙']},{simp:'韫',trad:['韞']},{simp:'韬',trad:['韜']},{simp:'韵',trad:['韻']},{simp:'页',trad:['頁']},{simp:'顶',trad:['頂']},{simp:'顷',trad:['頃']},{simp:'项',trad:['項']},{simp:'顺',trad:['順']},{simp:'须',trad:['須','鬚']},{simp:'顼',trad:['頊']},{simp:'顽',trad:['頑']},{simp:'顾',trad:['顧']},{simp:'顿',trad:['頓']},{simp:'颀',trad:['頎']},{simp:'颁',trad:['頒']},{simp:'颂',trad:['頌']},{simp:'预',trad:['預']},{simp:'颅',trad:['顱']},{simp:'领',trad:['領']},{simp:'颇',trad:['頗']},{simp:'颈',trad:['頸']},{simp:'颉',trad:['頡']},{simp:'颊',trad:['頰']},{simp:'颍',trad:['潁']},{simp:'颏',trad:['頦']},{simp:'颐',trad:['頤']},{simp:'频',trad:['頻']},{simp:'颓',trad:['頹','頽']},{simp:'颔',trad:['頷']},{simp:'颖',trad:['穎']},{simp:'颗',trad:['顆']},{simp:'题',trad:['題']},{simp:'颙',trad:['顒']},{simp:'颚',trad:['顎']},{simp:'颛',trad:['顓']},{simp:'颜',trad:['顏']},{simp:'额',trad:['額']},{simp:'颠',trad:['顛']},{simp:'颡',trad:['顙']},{simp:'颢',trad:['顥']},{simp:'颤',trad:['顫']},{simp:'颦',trad:['顰']},{simp:'颧',trad:['顴']},{simp:'风',trad:['風']},{simp:'飏',trad:['颺']},{simp:'飐',trad:['颭']},{simp:'飒',trad:['颯']},{simp:'飓',trad:['颶']},{simp:'飔',trad:['颸']},{simp:'飕',trad:['颼']},{simp:'飖',trad:['颻']},{simp:'飗',trad:['飀']},{simp:'飘',trad:['飄']},{simp:'飙',trad:['飆']},{simp:'飞',trad:['飛']},{simp:'飨',trad:['饗']},{simp:'餍',trad:['饜']},{simp:'饤',trad:['飣']},{simp:'饥',trad:['飢','饑']},{simp:'饦',trad:['飥']},{simp:'饨',trad:['飩']},{simp:'饩',trad:['餼']},{simp:'饪',trad:['飪']},{simp:'饫',trad:['飫']},{simp:'饬',trad:['飭']},{simp:'饭',trad:['飯']},{simp:'饮',trad:['飲']},{simp:'饯',trad:['餞']},{simp:'饰',trad:['飾']},{simp:'饱',trad:['飽']},{simp:'饲',trad:['飼']},{simp:'饴',trad:['飴']},{simp:'饵',trad:['餌']},{simp:'饶',trad:['饒']},{simp:'饷',trad:['餉']},{simp:'饸',trad:['餄']},{simp:'饹',trad:['餎']},{simp:'饺',trad:['餃']},{simp:'饼',trad:['餅']},{simp:'饽',trad:['餑']},{simp:'饾',trad:['餖']},{simp:'饿',trad:['餓']},{simp:'馀',trad:['余','餘']},{simp:'馁',trad:['餒']},{simp:'馂',trad:['餕']},{simp:'馃',trad:['餜']},{simp:'馄',trad:['餛']},{simp:'馅',trad:['餡']},{simp:'馆',trad:['館']},{simp:'馈',trad:['饋']},{simp:'馊',trad:['餿']},{simp:'馋',trad:['饞']},{simp:'馍',trad:['饃']},{simp:'馎',trad:['餺']},{simp:'馏',trad:['餾']},{simp:'馐',trad:['饈']},{simp:'馑',trad:['饉']},{simp:'馒',trad:['饅']},{simp:'馓',trad:['饊']},{simp:'馔',trad:['饌']},{simp:'马',trad:['馬']},{simp:'驭',trad:['馭']},{simp:'驮',trad:['馱']},{simp:'驯',trad:['馴']},{simp:'驰',trad:['馳']},{simp:'驱',trad:['驅']},{simp:'驳',trad:['駁']},{simp:'驴',trad:['驢']},{simp:'驶',trad:['駛']},{simp:'驷',trad:['駟']},{simp:'驸',trad:['駙']},{simp:'驹',trad:['駒']},{simp:'驻',trad:['駐']},{simp:'驼',trad:['駝']},{simp:'驽',trad:['駑']},{simp:'驾',trad:['駕']},{simp:'驿',trad:['驛']},{simp:'骁',trad:['驍']},{simp:'骂',trad:['罵','駡']},{simp:'骃',trad:['駰']},{simp:'骄',trad:['驕']},{simp:'骅',trad:['驊']},{simp:'骆',trad:['駱']},{simp:'骇',trad:['駭']},{simp:'骈',trad:['駢']},{simp:'骊',trad:['驪']},{simp:'骋',trad:['騁']},{simp:'验',trad:['驗']},{simp:'骍',trad:['騂']},{simp:'骎',trad:['駸']},{simp:'骏',trad:['駿']},{simp:'骐',trad:['騏']},{simp:'骑',trad:['騎']},{simp:'骓',trad:['騅']},{simp:'骔',trad:['騣']},{simp:'骖',trad:['驂']},{simp:'骗',trad:['騙']},{simp:'骘',trad:['騭']},{simp:'骙',trad:['騤']},{simp:'骚',trad:['騷']},{simp:'骛',trad:['騖']},{simp:'骝',trad:['騮']},{simp:'骞',trad:['騫']},{simp:'骟',trad:['騸']},{simp:'骠',trad:['驃']},{simp:'骡',trad:['騾']},{simp:'骢',trad:['驄']},{simp:'骤',trad:['驟']},{simp:'骥',trad:['驥']},{simp:'骧',trad:['驤']},{simp:'髅',trad:['髏']},{simp:'髋',trad:['髖']},{simp:'髌',trad:['髕']},{simp:'鬓',trad:['鬢']},{simp:'魇',trad:['魘']},{simp:'魉',trad:['魎']},{simp:'鱼',trad:['魚']},{simp:'鱽',trad:['魛']},{simp:'鱿',trad:['魷']},{simp:'鲀',trad:['魨']},{simp:'鲁',trad:['魯']},{simp:'鲂',trad:['魴']},{simp:'鲃',trad:['䰾']},{simp:'鲅',trad:['鮁']},{simp:'鲇',trad:['鮎','鯰']},{simp:'鲈',trad:['鱸']},{simp:'鲊',trad:['鮓']},{simp:'鲋',trad:['鮒']},{simp:'鲍',trad:['鮑']},{simp:'鲎',trad:['鱟']},{simp:'鲑',trad:['鮭']},{simp:'鲔',trad:['鮪']},{simp:'鲕',trad:['鮞']},{simp:'鲗',trad:['鰂']},{simp:'鲛',trad:['鮫']},{simp:'鲜',trad:['鮮']},{simp:'鲞',trad:['鮝','鯗']},{simp:'鲟',trad:['鱘']},{simp:'鲠',trad:['鯁']},{simp:'鲡',trad:['鱺']},{simp:'鲢',trad:['鰱']},{simp:'鲣',trad:['鰹']},{simp:'鲤',trad:['鯉']},{simp:'鲥',trad:['鰣']},{simp:'鲦',trad:['鰷']},{simp:'鲧',trad:['鯀']},{simp:'鲨',trad:['鯊']},{simp:'鲩',trad:['鯇']},{simp:'鲫',trad:['鯽']},{simp:'鲮',trad:['鯪']},{simp:'鲯',trad:['鯕']},{simp:'鲱',trad:['鯡']},{simp:'鲳',trad:['鯧']},{simp:'鲵',trad:['鯢']},{simp:'鲶',trad:['鯰']},{simp:'鲷',trad:['鯛']},{simp:'鲸',trad:['鯨']},{simp:'鲻',trad:['鯔']},{simp:'鲽',trad:['鰈']},{simp:'鳀',trad:['鯷']},{simp:'鳁',trad:['鰮']},{simp:'鳃',trad:['鰓']},{simp:'鳄',trad:['鰐','鱷']},{simp:'鳅',trad:['鰍']},{simp:'鳇',trad:['鰉']},{simp:'鳌',trad:['鰲','鼇']},{simp:'鳍',trad:['鰭']},{simp:'鳏',trad:['鰥']},{simp:'鳐',trad:['鰩']},{simp:'鳒',trad:['鰜']},{simp:'鳓',trad:['鰳']},{simp:'鳔',trad:['鰾']},{simp:'鳕',trad:['鱈']},{simp:'鳖',trad:['鱉']},{simp:'鳗',trad:['鰻']},{simp:'鳙',trad:['鱅']},{simp:'鳛',trad:['鰼']},{simp:'鳜',trad:['鱖']},{simp:'鳝',trad:['鱔']},{simp:'鳞',trad:['鱗']},{simp:'鳢',trad:['鱧']},{simp:'鸟',trad:['鳥']},{simp:'鸠',trad:['鳩']},{simp:'鸡',trad:['雞','鷄']},{simp:'鸢',trad:['鳶']},{simp:'鸣',trad:['鳴']},{simp:'鸤',trad:['鳲']},{simp:'鸥',trad:['鷗']},{simp:'鸦',trad:['鴉']},{simp:'鸨',trad:['鴇']},{simp:'鸩',trad:['鴆']},{simp:'鸪',trad:['鴣']},{simp:'鸬',trad:['鸕']},{simp:'鸭',trad:['鴨']},{simp:'鸮',trad:['鴞']},{simp:'鸯',trad:['鴦']},{simp:'鸰',trad:['鴒']},{simp:'鸱',trad:['鴟']},{simp:'鸲',trad:['鴝']},{simp:'鸳',trad:['鴛']},{simp:'鸵',trad:['鴕']},{simp:'鸶',trad:['鷥']},{simp:'鸷',trad:['鷙']},{simp:'鸺',trad:['鵂']},{simp:'鸼',trad:['鵃']},{simp:'鸽',trad:['鴿']},{simp:'鸾',trad:['鸞']},{simp:'鸿',trad:['鴻']},{simp:'鹁',trad:['鵓']},{simp:'鹂',trad:['鸝']},{simp:'鹃',trad:['鵑']},{simp:'鹄',trad:['鵠']},{simp:'鹅',trad:['鵝']},{simp:'鹆',trad:['鵒']},{simp:'鹈',trad:['鵜']},{simp:'鹉',trad:['鵡']},{simp:'鹊',trad:['鵲']},{simp:'鹌',trad:['鵪']},{simp:'鹏',trad:['鵬']},{simp:'鹐',trad:['鵮']},{simp:'鹑',trad:['鶉']},{simp:'鹓',trad:['鵷']},{simp:'鹕',trad:['鶘']},{simp:'鹗',trad:['鶚']},{simp:'鹘',trad:['鶻']},{simp:'鹚',trad:['鶿','鷀']},{simp:'鹜',trad:['鶩']},{simp:'鹝',trad:['鷊']},{simp:'鹞',trad:['鷂']},{simp:'鹡',trad:['鶺']},{simp:'鹢',trad:['鷁']},{simp:'鹣',trad:['鶼']},{simp:'鹤',trad:['鶴']},{simp:'鹦',trad:['鸚']},{simp:'鹧',trad:['鷓']},{simp:'鹩',trad:['鷯']},{simp:'鹪',trad:['鷦']},{simp:'鹫',trad:['鷲']},{simp:'鹬',trad:['鷸']},{simp:'鹭',trad:['鷺']},{simp:'鹮',trad:['䴉']},{simp:'鹰',trad:['鷹']},{simp:'鹲',trad:['鸏']},{simp:'鹳',trad:['鸛']},{simp:'麦',trad:['麥']},{simp:'麸',trad:['麩']},{simp:'麻',trad:['痲']},{simp:'麽',trad:['麼']},{simp:'黄',trad:['黃']},{simp:'黩',trad:['黷']},{simp:'黾',trad:['黽']},{simp:'鼋',trad:['黿']},{simp:'鼍',trad:['鼉']},{simp:'鼹',trad:['鼴']},{simp:'齄',trad:['齇']},{simp:'齐',trad:['齊']},{simp:'齑',trad:['齏']},{simp:'齿',trad:['齒']},{simp:'龀',trad:['齔']},{simp:'龁',trad:['齕']},{simp:'龃',trad:['齟']},{simp:'龄',trad:['齡']},{simp:'龅',trad:['齙']},{simp:'龇',trad:['齜']},{simp:'龈',trad:['齦']},{simp:'龉',trad:['齬']},{simp:'龊',trad:['齪']},{simp:'龋',trad:['齲']},{simp:'龌',trad:['齷']},{simp:'龙',trad:['龍']},{simp:'龚',trad:['龔']},{simp:'龛',trad:['龕']},{simp:'龟',trad:['龜']},{simp:'𠆿',trad:['𠌥']},{simp:'𠮶',trad:['嗰']},{simp:'𠯠',trad:['噅']},{simp:'𠵾',trad:['㗲']},{simp:'𡒄',trad:['壈']},{simp:'𢫬',trad:['摋']},{simp:'𤞤',trad:['玁']},{simp:'𥅴',trad:['䀹']},{simp:'𥇢',trad:['䁪']},{simp:'𥬠',trad:['篘']},{simp:'𥮜',trad:['䉲']},{simp:'𦈡',trad:['繻']},{simp:'𨅬',trad:['躝']},{simp:'𨱍',trad:['鎯']},{simp:'𩙫',trad:['颾']},{simp:'𩠌',trad:['餸']},{simp:'𩾃',trad:['鮸']},{simp:'𪢮',trad:['圞']},{simp:'𪨊',trad:['㞞']},{simp:'𪨗',trad:['屩']},{simp:'𪾢',trad:['睍']},{simp:'𫄨',trad:['絺']},{simp:'𫌀',trad:['襀']},{simp:'𫍰',trad:['諰']},{simp:'𫏋',trad:['蹻']},{simp:'𫓧',trad:['鈇']},{simp:'𫓩',trad:['鏦']},{simp:'𫗮',trad:['餭']},{simp:'𫘤',trad:['騃']},{simp:'𫚕',trad:['鰤']},{simp:'𫛛',trad:['鳷']},{simp:'𫛞',trad:['鴃']},{simp:'𫛶',trad:['鶒']},{simp:'𫛸',trad:['鶗']},{simp:'么',trad:['幺','麼']},{simp:'升',trad:['昇']},{simp:'卤',trad:['滷']},{simp:'厕',trad:['廁']},{simp:'参',trad:['參']},{simp:'只',trad:['祇','隻']},{simp:'向',trad:['嚮']},{simp:'墙',trad:['牆']},{simp:'娴',trad:['嫻']},{simp:'恶',trad:['惡']},{simp:'戚',trad:['慼']},{simp:'掸',trad:['撣']},{simp:'摆',trad:['擺']},{simp:'泛',trad:['氾']},{simp:'瘘',trad:['瘻']},{simp:'纤',trad:['纖']},{simp:'药',trad:['藥']},{simp:'蒙',trad:['濛','矇']},{simp:'蕴',trad:['蘊']},{simp:'说',trad:['說']},{simp:'赝',trad:['贋']},{simp:'酝',trad:['醞']},{simp:'针',trad:['針']},{simp:'镰',trad:['鐮']},{simp:'阅',trad:['閱']},{simp:'陕',trad:['陝']},{simp:'雕',trad:['彫']},{simp:'颓',trad:['頹']},{simp:'把',trad:['欛']},{simp:'鳌',trad:['鼇']}];

var evolveData = [{first:'幫',word:`pʰ	柏迫珀粕遍彼鄙谱圃辟卜编<br/>　　p	别瘪拨扮绊百伯八鳖憋钵博剥驳搏膊捌霸把坝拜豹爆迸柄并臂秘泌庇痹滗变布报贝辈背半蔽闭殡鬓簸播靶摆扳板版饱丙秉比秕畀髀贬匾表裱补保堡宝本禀跛榜谤绑扁饼逼迫碧璧壁煏必北笔毕不卜巴芭疤笆爸葩吧班斑颁包胞苞冰兵蓖碑卑悲鞭边蝙膘标彪飙镖猋瀌褒煲杯般搬宾槟奔锛缤斌滨崩绷蹦波菠帮邦<br/>　　m	擘扳`},
{first:'滂',word:`pʰ	剽滂胖帕拍魄撇泼劈怕派盼襻炮泡拼聘譬屁骗片漂票铺沛配判喷破肨普浦哺圃品剖颇僻霹擗匹朴扑仆趴攀抛脬娉披丕纰砒篇偏翩飘胚坯潘批烹坡樖塳<br/>　　p	泊怖埔捭玻啤`},
{first:'並',word:`pʰ	仆爬琶杷耙扒排牌篺刨螃鹏彭膨棚硼平坪评苹瓶屏萍皮疲脾琵枇便瓢嫖蒲菩葡袍培陪赔裴盘盆贫频颦濒朋凭婆旁庞磅蓬篷被婢鳔抱倍蓓蚌佩叛跑痞脯捕辟<br/>　　p	卜白帛拔钹跋别勃饽渤脖薄泊雹舶礴箔铂仆曝瀑罢稗败瓣办并被避备鼻篦辨辩汴便部簿步埠暴菢背焙伴拌敝弊币毙陛鐾笨傍棒镑龅病膀鲍辫`},
{first:'明',word:`m	觅汨灭篾末沫没茉墨默陌麦脉密蜜沕莫膜幕寞漠木目穆牧睦麻蟆痳埋蛮馒茅矛盲鸣明名铭冥螟瞑糜弥眉楣猕湄绵棉眠苗描瞄毛梅枚玫媒煤脢莓霉瞒门扪们迷谜民谋萌盟磨馍摹蘑忙芒茫虻氓蒙蠓矇濛朦骂卖迈慢漫幔貌孟命媚寐魅面庙妙暮慕墓募冒帽戊妹昧闷焖茂贸谬梦马码蚂玛买卯牡铆莽蟒猛锰蜢皿酩靡美免勉娩缅冕藐渺秒缈母拇冇姆每满米闽悯敏抿某亩抹懵搣乜妈孖猫咪踎掹魔摩模摸么咩孭檬<br/>　　n	锚`},
{first:'非',word:`pʰ	喷甫脯<br/>　　f	付傅奋法发贩赋咐富废粪放反返匪痱府腑俯斧粉否缶仿讽福幅蝠复腹辐覆非飞啡霏菲夫肤分吩方肪坊风枫疯封`},
{first:'敷',word:`pʰ	碰捧<br/>　　f	蕃妨赴讣泛副肺费沸抚纺仿访弗拂覆翻番幡妃敷俘孵麸芬纷氛吩芳丰峰蜂锋烽`},
{first:'奉',word:`pʰ	辅浮<br/>　　p	伏<br/>　　f	乏伐筏罚阀佛缚服伏栿茯袱凡帆烦繁矾藩樊肥符扶芙焚坟浮蜉房防冯逢缝范犯饭梵父腐附驸负吠份分阜埠凤奉俸妇愤忿翡釜复`},
{first:'微',word:`w	挽巫诬<br/>　　m	袜物勿微薇无文纹闻亡芒忘万蔓曼未味务雾问璺汶妄望晚尾武舞侮鹉吻刎网辋罔巫诬蚊`},
{first:'端',word:`tʰ	堤嚏疸<br/>　　t	订妒断锻顿窦栋侗答搭剁戴带旦店惦玷钓吊到倒对碓帝蒂谛缔扽斗凳当档冻打胆掸顶鼎点典屌堵赌祷岛捣睹短底抵抖陡蚪等戥朵躲党挡董懂的滴嫡得德笃督耽担丹单丁钉疔叮盯啲掂踮颠癫巅刁貂雕丢叼凋碉都刀叨嘟堆端低敦墩兜蔸登灯多裆东冬<br/>　　n	鸟`},
{first:'透',word:`tʰ	掏焘台妥椭搨塔榻塌溻遢帖贴铁脱托踢态贷太泰汰探炭叹听跳粜吐兔套退蜕替涕剃屉透唾烫趟摥痛毯瘫坦疸袒舔掭腆土讨腿体睇敨倘躺淌桶捅统剔惕秃他它她贪坍滩摊添天挑滔韬推梯锑吞偷拖胎汤劏厅通<br/>　　tʃʰ	獭<br/>　　t	贷踏`},
{first:'定',word:`tʰ	潭谭谈痰檀坛弹亭停廷庭蜓婷甜田填条调徒屠途涂图桃逃淘陶萄涛綯颓团题提蹄啼屯豚臀囤头投腾誊藤疼驼驮鸵砣坨陀台苔抬枱堂棠螳唐糖塘膛搪同铜桐筒童瞳彤茼淡挺铤肚断凼舵艇挑饨<br/>　　t	沓达笛敌狄涤荻迪叠碟蝶谍夺特突铎踱独读牍犊毒渎大啖但弹蛋锭定地哋簟垫电殿奠淀靛掉调杜度渡镀道稻盗导悼队段缎锻逮弟第递沌盾钝遁豆逗痘邓澄堕惰待怠殆代袋荡宕动洞戙垌跌诞兑`},
{first:'泥',word:`j	酿赁<br/>　　n	纳捺匿溺聂镊蹑捏诺拿男南难挠宁狞咛尼鲇年奴娘泥腍能挪娜囊农脓侬浓哝闹佞泞腻念尿怒内嫩糯懦耐奈哪那乃奶腩你碾袅努脑恼瑙女暖乸恁纽扭钮捻撵搦喃粘拈嬲捼呢燶`},
{first:'來',word:`t	隶<br/>　　n	辇粒拎<br/>　　l	腊蜡镴邋辣力历沥猎列烈裂栗律率略掠肋勒簕立落乐鹿禄六陆绿录漉睩蓝篮兰拦栏捞楞陵凌菱绫灵零铃伶翎龄鲮聆羚苓玲离篱梨蜊厘狸漓廉镰帘连联鲢怜莲燎疗聊辽撩僚嘹镣潦缭卢炉芦鸬庐劳牢唠痨鲈颅雷擂驴闾鸾銮邻鳞燐磷仑伦轮峦滦孪麟良凉量粮梁粱犁黎嚟林淋临琳霖楼流刘留榴硫琉馏髅瘤浏骝罗锣箩萝骡螺脶逻来郎廊狼螂榔笼聋胧隆龙咙珑赖攋滥缆烂令另利痢吏俐莉脷练炼楝料廖路赂露鹭涝累类泪虑滤乱吝论亮谅例厉励丽荔砺蛎漏陋溜浪弄览揽榄懒冷领岭李里理鲤敛殓辇了瞭鲁橹虏卤老姥儡垒蕾吕旅缕屡履榈侣铝两俩辆礼檩篓柳朗埌拢陇垄捋劣烙骆酪洛络罅喇旯癞冧啰靓链佬卵恋搂裸攞雳砾笠辘麓碌熝拉拎璃鹩噜褛窿`},
{first:'知',word:`tʃʰ	筑<br/>　　t	琢啄爹<br/>　　tʃ	摘着站缀扎哲蜇桌卓罩智致质置著驻注转涨帐账胀镇昼中展拄长肘竹嘲征贞知蜘沾粘朝追猪诛蛛株张砧珍桩忠衷`},
{first:'徹',word:`tʃʰ	褚拆彻撤戳牚畅趁逞耻丑宠畜撑痴黐超椿抽<br/>　　tʃ	侦`},
{first:'澄',word:`tʃʰ	茶搽澄惩呈程池驰踟迟持弛缠朝潮晁槌锤除储厨橱传椽长肠场沉陈尘绸稠筹虫重苎柱锃橙冲<br/>　　t	秩瞪<br/>　　tʃ	泽择宅掷蛰直值着侄浊逐轴站赚绽郑雉稚痔治赵兆召坠箸住篆传丈仗杖滞阵纣宙胄撞仲辙嘲<br/>　　ʃ	肇`},
{first:'精',word:`tʃʰ	雀躁噪燥挫歼笺<br/>　　ts	恣紫姊子梓资姿咨兹滋嗞孳孜<br/>　　tʃ	纂尽接节疖爵作脊赞恣箭溅荐醮做灶最醉钻酱将祭际济浸进晋俊骏峻竣奏甑载再葬借粽纵井紫姊子梓剪翦剿祖组早枣蚤澡藻嘴咀沮蒋奖桨攒走酒左佐咗宰崽姐总即鲫积迹绩卒则足簪精晶睛资姿咨兹滋嗞孳孜尖煎焦蕉椒礁租遭糟狙津尊遵樽浆挤揪曾增憎罾灾栽赃脏棕鬃宗综踪`},
{first:'清',word:`tsʰ	刺次此雌<br/>　　tʃʰ	从擦妾切窃撮鹊灿刺次俏醋糙淬脆翠悴萃趣窜寸砌沏凑蹭锉措错菜蔡笡惨请此浅草取娶忖抢寝彩采睬且戚猝缉七漆促猜参餐清青蜻雌签迁千锹缲悄粗操催崔摧璀蛆趋汆村皴枪妻凄侵亲秋鳅搓磋仓苍舱沧聪匆葱囱<br/>　　ʃ	沁`},
{first:'從',word:`tsʰ	脐瓷糍茨慈磁鹚疵<br/>　　tʃʰ	贼蚕惭残情晴脐瓷糍茨慈磁鹚潜钱前樵瞧憔曹槽嘈全泉存痊墙齐荠秦曾层才材财裁藏丛从坐辑疵<br/>　　t	蹲<br/>　　ts	自字牸<br/>　　tʃ	杂籍藉寂捷截绝集疾凿昨族暂錾静靖净自字牸渐贱皂造罪聚匠尽就赠座在藏脏砸嚼饯载践剂`},
{first:'心',word:`tsʰ	赐伺<br/>　　tʃʰ	赐伺鞘燥粹速纤栖<br/>　　ɬ	荀撒萨薛泄屑楔雪削塑索锡伞散性姓四线笑素诉嗉扫碎岁絮算蒜信讯逊迅浚细婿嗽秀绣锈丧泻卸送宋餸醒死癣冼跣小嫂选损笋榫想洗玺徙艘锁琐唢磉嗓搡写怂耸息熄媳惜昔析戌恤塞悉膝蟋宿肃粟夙卅三星腥猩惺仙鲜先消宵霄硝销逍萧箫苏酥须骚臊搔虽绥需酸宣孙相箱厢湘镶西犀荽心辛新薪锌莘修羞蓑梭唆腮鳃桑些松嵩<br/>　　s	肆斯厮撕私司丝思嘶<br/>　　tʃ	僧<br/>　　ʃ	晒肆赛省髓莎珊姗斯厮撕私司丝思嘶`},
{first:'邪',word:`tsʰ	辞词祠嗣饲似<br/>　　j	涎<br/>　　tʃʰ	辞词祠随徐详祥翔寻浔覃旬循巡驯囚泅邪斜松嗣饲似<br/>　　ɬ	旋旬循巡驯殉漩询徇羡绪擤<br/>　　ts	祀巳寺<br/>　　tʃ	席夕习袭俗续祀巳寺序叙象像橡袖谢诵颂讼屿<br/>　　ʃ	殉徇遂隧穗邃`},
{first:'莊',word:`j	眨皱爪渣揸<br/>　　ts	滓辎<br/>　　tʃ	窄责眨扎札捉诈榨炸债蘸湛笊诤皱绉壮鲊斩崭盏抓爪找滓阻侧楂渣揸斋争挣踭辎臻邹筝睁狰铮庄装妆`},
{first:'初',word:`tsʰ	厕差<br/>　　j	搊<br/>　　tʃʰ	策册栅插察岔汊忏厕篡衬创铲炒吵揣楚础闯测龊叉杈差钗搀抄钞铛窗参搊初疮`},
{first:'崇',word:`tʃʰ	茬查豺柴谗馋巢雏岑愁锄床崇<br/>　　s	士仕俟事<br/>　　tʃ	闸铡镯寨栈撰骤助状乍炸<br/>　　ʃ	事士仕柿俟`},
{first:'生',word:`tʃʰ	刷杉鞘产<br/>　　ɬ	傻朔漱洒搜所率蟀馊霜孀飕<br/>　　s	师狮蛳<br/>　　ʃ	霎杀煞刹晒疝涮汕潲使数帅渗瘦耍稍省史驶爽色啬涩虱缩沙纱裟砂鲨痧衫山删闩拴栓梢捎筲生牲笙甥师狮蛳衰双筛森参梳疏蔬`},
{first:'章',word:`j	执锥椎<br/>　　tʃʰ	帜诊疹昭<br/>　　tʃ	召赘折褶浙拙茁辍缀酌灼只证症正政至志痣占战颤照诏注蛀铸障瘴制振震咒蔗鹧众种拯整纸旨指止趾址祉煮主准掌枕帚者肿织职执汁质祝粥烛嘱瞩蒸征支枝肢栀脂之芝瞻詹毡招锥诸朱珠专砖肫章樟彰针斟真周舟州洲遮终钟盅`},
{first:'昌',word:`tʃʰ	杵绰焯尺称秤处串唱倡臭铳揰侈齿喘蠢丑厂敞扯赤斥出触眵嗤吹炊川穿春昌菖鲳娼猖车充冲<br/>　　ʃ	枢<br/>　　kʰ	枢`},
{first:'船',word:`t	盾<br/>　　ɬ	术述<br/>　　tʃ	剩<br/>　　ʃ	食蚀舌实术述赎乘绳塍船唇神蛇剩示顺葚射麝`},
{first:'書',word:`tʃʰ	设翅豕矢始束舂<br/>　　ɬ	释<br/>　　tʃ	膻<br/>　　ʃ	娠舜曙摄说胜圣试扇煽少税庶恕戍世势兽狩赦舍屎陕闪水暑鼠黍赏沈审婶手首守识式饰适湿失室叔升施尸诗烧书舒输商伤深身申伸呻绅收奢赊声<br/>　　h	晌饷`},
{first:'禪',word:`tʃʰ	匙常尝偿嫦臣仇酬恃阐鹑<br/>　　ɬ	纯醇<br/>　　tʃ	殖植<br/>　　ʃ	十什拾石硕熟淑孰塾蜀属承丞成城诚匙时莳蟾蝉禅婵韶垂谁薯殊纯醇裳辰晨佘盛是氏豉视侍峙赡善膳缮绍邵睡瑞竖树尚上誓逝甚慎受寿授售市鳝署肾社涉嗜`},
{first:'日',word:`j	热若弱入日肉辱褥仍扔儿而然燃饶如儒茹壬人仁柔揉戎绒茸认二贰芮润闰膶壤攘嚷让任刃韧尔耳饵染冉蕊汝乳擩软忍惹扰绕冗<br/>　　n	挠瓤穰`},
{first:'見',word:`kʷʰ	郭刽桧愧脍矿规昆均钧<br/>　　kʰ	扛揭诘厥蕨决诀镢阙獗觉搁假架驾构购媾灸概溉丐钙级给箍拘驹稽襟<br/>　　kʷ	逛括刮国帼挂卦怪惯鳜桂癸季贵棍过寡剐拐诡轨鬼滚果裹馃广骨橘瓜呱乖关圭闺龟归硅均钧君军锅戈光胱桄<br/>　　w	会蜗<br/>　　t	纠赳<br/>　　k	夹劲俱胳格革隔嗝膈甲胛挟劫涩结洁拮脚合蛤鸽各阁搁觉角割葛荚假架驾嫁稼价介界芥尬疥届戒诫尴鉴间谏涧教铰校较窖敬竟径茎胫寄冀记既暨剑建见叫故固锢雇顾告贯灌罐冠据锯句眷绢计继髻禁咁赣垢够灸救究疚更个盖干钢杠降虹嘅镜贡供贾解感敢橄减碱简柬拣锏茧趼笕绞狡搞搅饺境景警己纪几检矫缴古估盬牯股鼓稿蛊管馆莞举矩榉卷偈锦紧谨狗苟纠九久韭枸哽埂梗耿改杆秆擀赶讲港枧颈拱巩戟击激急桔吉讫谷菊鞠家加痂嘉枷袈皆阶秸佳街监艰奸交郊胶茭跤蛟耕京荆惊经饥肌基机讥兼搛犍肩坚骄娇浇姑孤鸪辜高膏篙羔糕菇沽咕官棺观居鹃娟涓疆僵姜礓缰鸡甘柑泔今金疳跟根巾斤筋沟鸠阄粳庚羹歌哥该赅肝竿冈岗刚纲缸江豇肛公蚣工功攻弓躬宫恭龚<br/>　　ŋ	讫勾钩<br/>　　h	懈酵侥`},
{first:'溪',word:`pʰ	棵<br/>　　kʷʰ	魁奎廓扩胯挎困旷矿傀捆夸垮跨匡筐眶框盔亏窥坤<br/>　　kʰ	企缺却确搉旮靠犒窍契叩扣寇慨抗炕楷顷巧启冚颗刻克曲卡咖倾区驱祛躯羌溪蹊抠棵<br/>　　j	吃泣丘蚯邱<br/>　　w	屈<br/>　　f	阔块快筷库裤课苦款窟枯恢宽科蝌<br/>　　k	揿券杞<br/>　　h	阖酷客掐怯恰壳渴吃庆磬器弃气汽欠歉去劝券勘嵌困看炕控考拷巧起岂遣谴犬坎砍恳垦口啃肯可凯铠刊侃慷孔恐刻克磕瞌乞哭揩悭烤敲坑卿轻氢欺谦牵圩圈堪龛钦铿开康糠腔空`},
{first:'群',word:`kʷʰ	逵葵群裙狂菌窘<br/>　　kʰ	剧屐擎鲸琼奇岐歧祁鳍其棋期旗麒祈钳乾虔掮乔侨桥荞翘渠瞿拳权颧强琴禽擒勤芹求球俅裘茄骑穷徛藠佢拒距妗近臼舅竭仇<br/>　　kʷ	掘倔跪柜郡<br/>　　k	极杰及局焗竞技妓忌俭件键健轿癐巨具惧炬倦旧柩嚿共腱圈咎仅<br/>　　h	芡`},
{first:'疑',word:`j	月虐疟玉狱迎仪沂严言研尧鱼渔愚虞娱元原源吟义谚砚唁御遇寓愿议俨语阮仰<br/>　　w	顽玩<br/>　　m	顽<br/>　　n	逆业孽凝宜疑谊验拟<br/>　　ŋ̍	吴蜈吾梧误悟五伍午<br/>　　ŋ	额腭鄂岳乐愕鳄噩颚牙芽衙蚜涯崖挨癌岩颜顽熬遨嗷敖倪霓桅危银牛蛾鹅俄讹娥峨呆昂讶艾雁硬傲艺毅伪魏饿卧碍外岸戆雅瓦眼咬蚁藕偶我啱奀`},
{first:'曉',word:`kʷʰ	况<br/>　　kʰ	蝎郝霍藿吸<br/>　　kʷ	轰<br/>　　j	谑衅旭吁欣焮休<br/>　　tʃʰ	嗅畜蓄<br/>　　w	唤焕涣痪讳毁歪麾挥辉昏婚熏勋荤<br/>　　f	豁化戽晦训货虎浒贿悔火伙恍忽花呼灰徽欢麾挥辉昏婚熏勋荤荒慌谎<br/>　　n	朽<br/>　　h	荷鼾哄吓瞎胁歇蝎血喝喊孝兴戏宪献好耗楦向汉喜险显蚬晓许享响喺吼海罕黑虾哈憨薅夯馨兄牺嬉熙希稀曦嘻禧轩掀嚣蒿虚嘘喧靴香乡蚶欣睺亨哼烘胸匈凶汹衅`},
{first:'匣',word:`kʷʰ	携畦溃<br/>　　kʰ	瓠<br/>　　kʷ	迥<br/>　　j	穴形型刑萤嫌贤弦舷完丸玄悬纨苋现县眩炫<br/>　　w	划获或惑滑猾活核镬华铧桦怀槐淮还环寰横胡湖狐壶乎葫蝴糊弧回茴蛔桓魂馄浑和禾黄簧皇蝗凰隍蟥磺煌惶话坏幻患宦户沪互护瓠汇会绘烩荟换惠慧蕙彗混祸缓皖鲩画哗<br/>　　f	晃幌<br/>　　l	舰<br/>　　k	茎汞偕虹<br/>　　ŋ	肴淆<br/>　　h	狭峡匣侠合盒辖核鹤学酷霞遐蛤孩谐鞋骸函咸衔涵闲嫌豪壕毫嚎蚝奚兮含酣痕侯喉猴恒行衡河何荷寒韩航杭姣弘宏红洪鸿虹讧下夏厦暇械撼憾陷馅限效校号浩皓系恨后候杏幸贺亥害骇汗焊翰悍瀚项巷蟹厚旱协挟洽很狠苛`},
{first:'影',word:`j	哕炎攸腌噎乙约跃应意薏懿厌堰燕咽宴要怨荫印幼影映倚椅掩宛婉饮隐拥忆亿抑益揖一沃郁喐鹰鹦樱英婴缨伊医衣依噫淹阉焉烟胭妖邀腰幺吆于淤迂冤鸳渊央秧殃鸯泱音阴因姻殷优忧幽翁痈壅臃嗡邕<br/>　　w	熨挖恶秽喂畏慰尉蔚酝涴豌剜碗惋腕萎委痿猥稳搵枉搲蛙洼娃弯湾乌污坞呜钨邬煨偎威温瘟倭窝涡莴蜗汪<br/>　　m	杳凹<br/>　　n	蔫<br/>　　tʃ	轧<br/>　　ŋ	呃桠握扼<br/>　　∅	恶爱按案蔼屙哀安鞍肮壅轭鸭押压阿亚隘嗌晏坳袄奥懊澳缢瞖暗沤怄瓮蕹哑矮揞呕拗握龌扼呃屋鸦丫埃挨罂庵鹌恩欧瓯鸥殴莺拥`},
{first:'云',word:`j	越曰粤莹盐盂圆员袁辕园援猿尤邮鱿荣熊又右佑矣雨宇禹羽远有友院于<br/>　　w	域荣为围违韦云耘芸王芋汇卫彗位胃谓猬渭韵运晕旺永泳咏伟苇纬往<br/>　　h	雄`},
{first:'以',word:`j	翼亦译易液腋疫役驿奕弈叶页悦阅药钥逸溢轶佚浴欲盈营茔移夷姨彝怡颐胰阎檐延筵蜒摇谣窑姚遥余榆逾愉俞瑜渝缘沿铅羊洋烊杨阳扬疡佯淫寅由油游犹悠椰爷赢融容蓉镕庸溶榕熔肄异艳焰耀鹞锐誉预豫愈喻裕孕恙样漾柚鼬釉夜用也已以衍舀与养痒引蚓酉莠诱野冶嘢勇跃演涌恿踊蛹俑佣育煜毓蝇<br/>　　w	维惟遗唯匀颖允尹<br/>　　k	捐<br/>　　h	赢`}];


var evolveData2 = [{first:'幫',word:`pʰ	辟柏迫珀卜粕彼鄙谱圃编遍簸<br/>　　p	别拨扮爆蔽绊剥八逼迫碧璧壁煏鳖憋必百伯博驳搏膊钵北笔毕不把靶摆扳板版保堡宝饱榜绑丙秉饼比秕贬表跛补本禀扁匾巴芭疤笆葩吧班斑颁褒包胞苞帮邦冰兵蓖鞭边蝙膘标彪镖瀌波菠杯般搬碑卑悲宾槟奔锛缤滨崩绷蹦霸坝爸拜报豹谤迸柄并臂秘泌庇痹滗变播布贝辈背半闭殡鬓<br/>　　m	擘扳`},
{first:'滂',word:`pʰ	帕僻劈霹撇拍魄朴扑仆泼匹颇普浦哺圃品剖趴攀泡抛披丕纰篇偏翩飘漂坡铺胚坯潘批烹怕派盼襻炮肨拼聘譬屁骗片票破沛配判喷<br/>　　p	泊滂剽胖捭啤玻怖埔`},
{first:'並',word:`pʰ	辟仆曝瀑跑痞捕佩<br/>　　p	雹拔跋别白帛薄泊舶礴箔铂钹勃饽渤脖卜鼻爬琶杷耙扒排牌袍刨旁螃庞磅平坪评苹瓶屏萍皮疲脾琵枇便瓢嫖婆蒲菩葡培陪赔裴盘盆蓬篷贫频颦濒脯朋鹏凭彭膨棚硼罢稗败瓣办暴菢傍棒镑病并敝弊币毙被避备辨辩汴鳔部簿步埠背焙叛陛鐾篦笨抱蚌婢倍蓓伴拌辫膀鲍`},
{first:'明',word:`m	麻蟆埋蛮馒毛茅矛忙芒茫氓鸣明名铭冥螟瞑糜弥眉楣绵棉眠苗描瞄盲虻馍摹蘑磨梅枚玫媒煤莓霉瞒门扪们蒙朦迷谜民谋萌盟骂卖迈慢漫幔冒帽貌牡命媚寐魅面庙妙孟暮慕墓募戊妹昧闷焖梦茂贸谬马码蚂玛买抹卯莽蟒冇觅汨皿酩靡免勉娩缅冕灭篾藐渺秒陌麦脉猛锰蜢母拇姆每满末沫没茉莫膜幕寞漠木目穆牧睦懵蠓米美墨默闽悯敏抿密蜜沕某亩搣乜咩魔摩模么摸踎妈猫孭咪檬<br/>　　n	锚`},
{first:'非',word:`pʰ	甫脯喷<br/>　　f	付傅奋否缶法发福幅蝠复腹辐覆反返匪仿府腑俯斧粉非飞啡霏菲方肪坊夫肤风枫疯封分吩贩废痱放赋咐富讽粪`},
{first:'敷',word:`pʰ	捧碰<br/>　　f	蕃妨赴讣覆弗拂纺仿访抚翻番幡妃芳敷俘孵麸丰峰蜂锋烽芬纷氛吩泛肺费副沸`},
{first:'奉',word:`pʰ	辅<br/>　　p	浮<br/>　　f	乏伐筏罚阀缚服伏栿袱佛凡帆烦繁矾藩樊肥房防符扶芙冯逢缝焚坟浮犯饭梵吠父腐附驸妇负阜凤奉俸份分埠愤忿复釜范翡`},
{first:'微',word:`w	挽巫诬<br/>　　m	亡芒微薇忘无纹蚊闻万蔓曼未味妄望务雾问璺晚袜尾网辋罔武舞侮鹉吻刎物勿巫诬<br/>　　f	无文纹闻武舞侮鹉物勿`},
{first:'端',word:`tʰ	嚏<br/>　　t	堤豚妒侗窦肚断答搭的滴嫡剁笃督得德打胆掸祷岛倒捣党挡顶鼎点典鸟屌躲朵堵赌睹短董懂底抵斗抖陡蚪等耽担丹单刀叨当裆丁钉疔叮盯掂踮颠癫巅刁貂雕叼凋碉多都嘟堆端东冬低敦墩兜丢登灯戴带旦到档订啲店惦玷钓吊对碓锻冻栋帝蒂谛缔顿扽凳<br/>　　n	鸟`},
{first:'透',word:`tʃʰ	獭<br/>　　tʰ	托搨塔榻塌溻踢剔惕帖贴铁秃脱毯瘫坦袒讨倘躺淌舔掭腆妥椭土腿桶捅统体敨他它她胎贪坍滩摊滔韬汤听厅添天挑拖推通梯锑吞偷态贷太泰汰探炭叹套烫趟跳粜唾吐兔退蜕痛替涕剃屉透<br/>　　t	踏贷`},
{first:'定',word:`tʰ	饨<br/>　　t	铎踱沓达笛敌狄涤荻迪叠碟蝶谍夺独读牍犊毒渎特突台苔抬枱潭谭谈痰檀坛弹桃逃淘陶萄涛堂棠螳唐糖塘膛搪亭停廷庭蜓婷甜田填条调驼驮鸵砣坨陀徒屠途涂图颓团同铜桐筒童瞳彤茼题提蹄啼屯豚臀囤头投腾誊藤澄疼大待怠殆代袋啖但蛋道稻盗导悼荡宕锭定地哋簟垫电殿奠淀靛掉舵堕惰杜度渡镀队段缎动洞戙逮弟第递沌盾钝遁豆逗痘邓淡艇挺铤肚断跌诞兑锻`},
{first:'泥',word:`n	溺捏拿男南难挠囊宁狞咛鲇年娘挪娜奴农脓侬浓哝泥尼腍能那耐奈闹佞泞念尿酿糯懦怒内嫩腻乃奶诺纳捺脑恼瑙匿你碾聂镊蹑袅努暖女恁哪乸纽扭钮捻撵喃呢粘拈捼嬲<br/>　　ȵ	赁`},
{first:'來',word:`t	隶<br/>　　n	辇粒拎<br/>　　l	箩来蓝篮兰拦栏劳捞牢唠痨郎廊狼螂榔楞陵凌菱绫灵零铃伶翎龄聆羚苓玲离篱璃梨蜊厘狸漓廉镰帘连联鲢怜莲燎疗聊辽撩僚嘹潦缭良凉量粮梁粱罗锣萝骡逻螺脶卢炉芦鸬庐鲈颅雷擂鸾銮峦滦孪驴闾笼聋胧隆龙咙珑犁黎嚟林淋临琳霖邻鳞燐磷仑伦轮麟楼流刘留榴硫琉馏髅瘤浏骝赖癞滥缆烂涝浪令另利痢吏俐莉练炼楝恋链料廖亮谅路赂露鹭累类泪乱虑滤弄例厉励丽荔砺蛎吝论漏陋溜落烙骆酪洛络乐览揽榄懒腊蜡镴辣老姥佬朗力历沥雳砾领岭李里理鲤敛殓辇猎了瞭略掠两俩辆冷裸鲁橹虏卤儡垒蕾卵捋吕旅缕屡履榈侣铝列烈裂劣鹿禄六陆绿录麓漉碌熝拢陇垄礼肋勒檩立笠栗律率篓搂柳喇拉拎鹩噜窿褛罅旯靓啰冧`},
{first:'知',word:`tʃʰ	筑<br/>　　t	琢啄爹<br/>　　tʃ	着站缀扎摘哲蜇桌卓竹长拄展转肘嘲征贞知蜘沾粘朝张桩追猪诛蛛株中忠衷砧珍罩智致质置涨帐账胀著驻注镇昼`},
{first:'徹',word:`tʃʰ	拆彻撤戳畜逞耻宠丑痴黐超撑椿抽畅牚趁<br/>　　tʃ	褚侦`},
{first:'澄',word:`tʃʰ	橙冲锃<br/>　　t	秩瞪<br/>　　tʃ	掷蛰直值着泽择宅浊逐轴侄茶搽澄惩呈程池驰踟迟持弛缠朝潮长肠场槌锤除储厨橱传椽虫重沉陈尘绸稠筹站赚绽郑雉稚痔治赵兆召丈仗杖撞坠箸住篆仲滞阵纣宙胄苎柱辙嘲<br/>　　ʃ	肇`},
{first:'精',word:`tʃʰ	雀歼笺躁噪燥挫<br/>　　tʃ	纂作即鲫积迹脊绩接节爵足则卒宰崽早枣蚤澡藻姐井紫姊子梓剪剿蒋奖桨左佐咗攒祖组嘴咀沮总挤尽走酒灾栽簪遭糟赃脏精晶睛资姿咨兹滋孳孜尖煎焦蕉椒礁将浆钻租尊遵樽狙棕鬃宗综踪津揪曾增憎载再赞灶葬借恣箭溅荐醮酱做最醉粽纵祭际济浸进晋俊骏峻竣奏`},
{first:'清',word:`tʃʰ	擦戚妾切窃鹊撮促缉七漆淬沏璀猝彩采睬惨草且请此浅抢忖取娶寝搓猜参餐操仓苍舱沧清青蜻雌签迁千锹缲悄枪磋汆粗催崔摧村蛆趋聪匆葱囱妻凄侵亲皴秋鳅菜蔡灿糙笡刺次俏锉措错醋脆翠悴萃窜寸趣砌凑蹭<br/>　　ʃ	沁`},
{first:'從',word:`tʃʰ	贼辑疵<br/>　　t	蹲<br/>　　tʃ	凿昨杂籍藉寂捷截绝族集疾才材财裁惭蚕残曹槽嘈藏情晴瓷糍慈磁潜钱前樵瞧憔墙存全泉痊丛从齐脐荠秦曾层在暂錾皂造脏静靖净自字牸渐贱匠座罪聚剂尽就赠践坐砸嚼载饯`},
{first:'心',word:`tʃʰ	速纤栖燥赐伺鞘粹<br/>　　ɬ	荀索撒萨息熄媳惜昔锡析屑楔削薛泄雪宿肃粟夙塞悉膝蟋戌恤散嫂磉嗓搡写醒死小想锁琐损癣选怂耸洗玺徙笋榫艘卅腮鳃三骚臊搔桑丧些星腥猩惺斯厮撕私司丝思仙先消宵霄硝销逍萧箫相箱厢湘镶蓑梭唆苏酥须虽绥酸孙需鲜宣松嵩西犀荽心辛新薪锌莘修羞伞扫泻卸性姓四线笑素诉塑嗉碎岁算蒜逊絮送宋细婿信讯迅浚嗽秀绣锈<br/>　　tʃ	僧<br/>　　ʃ	省髓莎珊姗赛晒肆`},
{first:'邪',word:`tʃʰ	斜嗣饲<br/>　　ɬ	俗邪旋漩旬循巡驯殉询徇松绪羡擤<br/>　　tʃ	席夕续习袭辞词祠详祥翔随徐松寻覃囚泅谢祀巳寺象像橡序叙诵颂讼袖似屿<br/>　　ʃ	遂隧穗<br/>　　h	涎`},
{first:'莊',word:`j	眨<br/>　　tʃʰ	侧<br/>　　tʃ	眨扎札窄责捉斩崭盏抓爪找滓阻楂渣揸斋庄装妆辎争挣踭臻邹筝睁狰铮诈榨炸债蘸湛笊壮诤皱绉<br/>　　ȵ	爪揸渣皱`},
{first:'初',word:`tʃʰ	插察策册栅龊测铲炒吵闯楚础揣叉杈差钗搀参抄钞疮窗铛初搊岔忏创厕篡衬<br/>　　ȵ	搊`},
{first:'崇',word:`tʃʰ	镯<br/>　　tʃ	闸铡茬查豺谗馋巢锄雏崇岑愁寨栈状助撰骤乍炸<br/>　　ʃ	柴床士仕柿俟事`},
{first:'生',word:`tʃʰ	刷产参杉鞘<br/>　　ɬ	傻朔率蟀洒所搜飕馊<br/>　　ʃ	霎杀煞刹色啬朔缩涩虱耍爽省数使史驶沙纱裟砂鲨衫山删闩拴栓梢捎稍生牲笙甥霜孀双梳疏蔬衰筛师狮蛳森晒疝涮汕潲漱帅渗瘦`},
{first:'章',word:`tʃʰ	昭帜<br/>　　tʃ	召赘缀织职只折褶酌灼浙拙茁辍祝粥烛嘱瞩执汁质者拯整纸旨指止趾址祉掌煮主种肿枕诊疹准帚蒸征遮支枝肢栀脂之芝瞻占詹招章樟彰锥诸朱珠毡专砖终钟盅针斟真肫周舟州洲蔗鹧证症正政制至志痣战颤照诏障瘴注蛀铸众振震咒<br/>　　ȵ	执`},
{first:'昌',word:`tʃʰ	赤斥尺绰焯触出厂敞扯侈齿处杵喘蠢丑车称眵嗤昌菖倡娼猖吹炊川穿充冲春秤唱串铳臭<br/>　　ʃ	枢`},
{first:'船',word:`t	盾<br/>　　ɬ	术述<br/>　　ʃ	食蚀舌赎实蛇乘绳塍船神唇射麝剩示顺葚`},
{first:'書',word:`tʃʰ	设束豕矢始舂翅<br/>　　ʃ	娠舜曙识式饰适释摄说叔湿失室舍屎陕闪少赏水暑鼠黍沈审婶手首守奢赊升声施尸诗膻烧商伤书舒输深身申伸呻绅收赦胜圣世势试扇煽税庶恕戍兽狩<br/>　　h	晌饷`},
{first:'禪',word:`tʃʰ	阐鹑<br/>　　tʃ	殖植匙臣酬<br/>　　ʃ	石硕折熟淑孰塾蜀属十什拾佘承丞成城诚匙时蟾蝉禅婵韶常尝裳偿嫦垂谁薯殊辰晨纯醇仇盛是氏豉视嗜恃侍峙赡绍邵睡瑞竖树善膳缮甚慎受寿授售尚上社市署鳝肾涉誓逝`},
{first:'日',word:`j	而饶如儒茹然燃戎绒茸柔揉芮扰绕若汝乳擩冗入<br/>　　n	挠瓤穰<br/>　　ȵ	儿壬人仁二贰任刃认韧润闰惹尔耳饵染冉热蕊软肉辱褥忍日<br/>　　ŋ	仍扔壤攘嚷让弱<br/>　　∅	而`},
{first:'見',word:`kʰ	扛搁郭击觉揭厥蕨决诀镢诘阙獗级给疆僵缰箍拘驹稽襟假架驾概溉丐钙构购媾<br/>　　kʷ	逛括刮骨橘寡剐拐诡轨鬼滚瓜呱乖关圭闺龟归君军挂卦怪惯鳜桂癸贵棍<br/>　　kʷʰ	规昆均钧矿刽桧愧脍<br/>　　w	会蜗<br/>　　t	纠赳<br/>　　k	俱各阁搁胳角合蛤鸽夹甲胛挟荚割葛戟激劫脚格革隔膈国帼涩结洁拮谷菊鞠急桔吉讫假贾改解感敢橄减碱竿杆秆擀赶简柬拣锏茧趼笕枧稿侥绞狡搞搅饺讲港嘅境景警颈己纪几检矫缴耿果裹馃广古估牯股鼓蛊管馆莞举矩卷拱巩锦紧谨狗苟纠九久韭灸枸哽埂梗家加痂嘉袈该皆阶秸佳街赅甘柑泔监疳干肝艰间奸高膏篙羔糕交郊胶蛟冈岗刚纲钢缸江豇肛京荆惊经饥肌基机讥兼搛犍骄娇浇姜礓更粳庚羹耕歌哥光胱桄锅戈姑孤鸪辜沽咕官棺观冠居肩坚鹃娟涓公蚣工功攻弓躬宫恭供龚鸡今金跟根巾斤筋沟鸠阄嫁稼价盖介界芥尬疥届戒诫尴鉴咁赣谏涧告教铰校较窖觉杠降虹劲敬竟镜径茎计继寄冀记既季暨剑建见叫个过故固锢雇顾贯灌罐据锯句眷绢贡髻禁垢够救究疚<br/>　　ŋ	讫勾钩<br/>　　h	懈侥酵`},
{first:'溪',word:`kʰ	确搉却廓扩缺酷曲刻克凯楷坎砍考烤拷慷顷企巧可棵颗傀孔恐启冚卡咖揩堪龛勘嵌康倾羌腔盔魁区驱躯溪蹊抠坑旮慨靠犒抗炕窍课旷契叩扣寇<br/>　　kʷ	奎<br/>　　j	丘蚯邱<br/>　　kʷʰ	捆夸垮跨匡筐眶框亏窥坤胯旷矿困<br/>　　w	窟屈块快筷困<br/>　　l	泣<br/>　　k	揿杞券<br/>　　h	阖壳磕恰掐渴吃怯客阔哭乞刊侃起岂款苦遣犬谴恳垦口啃肯瞌开悭敲糠卿轻氢欺谦科蝌枯恢宽圩牵圈空钦铿看庆磬器弃气汽欠歉库裤去劝券控炕`},
{first:'群',word:`kʰ	竭强<br/>　　kʷ	掘狂逵葵群裙跪柜郡窘菌<br/>　　w	倔<br/>　　k	极剧屐杰局及茄擎鲸琼奇骑岐歧祁鳍其棋期旗麒祈钳乔侨桥荞翘强渠佢瞿乾虔掮拳权颧穷琴禽擒勤芹求球裘技妓忌俭键健轿巨具惧炬件圈倦共旧柩仇嚿徛藠拒距妗近臼舅咎仅竞腱`},
{first:'疑',word:`j	沂尧愚虞娱言元原源御遇寓谚砚愿唁雅语<br/>　　w	顽桅危外玩伪魏瓦<br/>　　m	顽<br/>　　n	凝宜疑验逆拟业孽<br/>　　ŋ̍	吴蜈吾梧误悟五伍午<br/>　　ȵ	牙芽衙颜仪严鱼渔研吟牛讶雁艺谊义议眼咬俨阮月玉狱蚜<br/>　　ŋ	乐呆涯崖挨癌岩顽熬遨嗷敖昂迎蛾鹅俄讹娥峨吴蜈吾梧倪霓银碍艾岸傲硬饿卧误悟毅鄂愕鳄腭噩颚虐疟额仰我五伍午蚁藕偶岳奀啱戆`},
{first:'曉',word:`kʰ	郝霍藿蝎吸<br/>　　j	瞎旭吁休<br/>　　kʷʰ	轰况忽<br/>　　tʃʰ	畜蓄嗅<br/>　　w	讳唤焕涣痪毁花歪兄麾挥辉徽昏婚熏勋荤化训<br/>　　f	忽恍<br/>　　ŋ	朽<br/>　　h	荷鼾哄喝胁吓豁歇蝎血黑海罕好喜险晓享响火伙虎浒贿悔许显吼虾哈蚶憨蒿薅夯兴馨兄牺嬉熙希稀曦嘻禧嚣香乡荒慌谎呼灰欢虚嘘轩掀喧靴烘胸匈凶汹欣亨哼喊汉耗孝戏向货戽晦宪献楦衅睺`},
{first:'匣',word:`kʰ	酷溃<br/>　　kʷ	携畦迥<br/>　　j	穴萤嫌贤弦舷完丸玄悬纨下夏厦暇现县眩炫<br/>　　w	划或惑滑猾获镬活核华铧桦怀槐淮还环横桓回茴蛔魂馄浑画话坏幻患宦祸汇会绘惠慧烩蕙彗换混缓皖哗<br/>　　l	舰<br/>　　k	汞偕械校茎虹<br/>　　ŋ	肴淆<br/>　　h	鹤学合盒狭峡匣侠辖核霞遐孩谐鞋骸含函酣咸衔涵寒韩闲豪壕毫嚎蚝姣行航杭形型刑嫌河何荷和黄簧皇蝗凰隍蟥磺煌惶禾胡湖狐壶乎葫蝴糊弧弘宏红洪鸿虹讧奚兮痕侯喉猴恒衡亥害骇撼憾陷馅汗焊翰限苋悍瀚号浩皓项巷幸贺户沪互护瓠系恨后候蟹旱晃幌厚洽协挟很狠苛效杏`},
{first:'影',word:`j	炎攸跃哕腌噎约乙郁揖倚椅掩宛婉伊医衣依噫淹阉妖邀腰幺吆央秧殃鸯泱于淤迂焉烟胭冤鸳渊音阴优忧幽意懿厌要堰燕咽宴怨荫幼<br/>　　w	挖搲豌剜碗惋腕萎委痿猥稳蛙洼娃弯湾蜗乌污坞呜钨煨偎威温瘟秽喂畏慰尉蔚熨酝<br/>　　m	杳凹<br/>　　n	蔫<br/>　　tʃ	轧<br/>　　ȵ	饮喐<br/>　　ŋ	桠呃<br/>　　∅	恶鸭押压忆亿抑益扼轭龌握屋沃一哑蔼拗影映枉拥矮揞隐呕呃鸦丫屙哀埃挨庵安鞍肮鹰莺鹦樱英婴缨倭窝涡莴汪翁痈壅臃嗡邕鹌恩因姻殷欧瓯鸥殴阿亚爱隘暗按案晏袄奥懊坳澳应涴瓮缢瞖印沤怄`},
{first:'云',word:`j	莹盐盂圆员袁辕园援猿荣熊尤邮鱿芋院又右佑矣雨宇禹羽远越曰粤有友于<br/>　　w	为围违韦云芸耘卫彗位胃谓猬汇渭韵运晕域永泳咏伟苇纬<br/>　　h	王雄<br/>　　∅	旺往`},
{first:'以',word:`j	逸溢轶佚椰爷移夷姨彝怡颐胰阎檐摇谣窑姚遥羊洋烊杨阳扬疡佯余榆逾愉遗俞瑜渝延筵缘沿铅融容蓉镕庸溶榕熔淫寅由油游犹悠夜易异艳焰耀鹞恙样漾誉预豫愈喻裕用佣柚鼬釉也野冶翼亦译液腋驿奕弈已以衍叶页舀药钥跃养痒与悦阅勇涌恿踊蛹俑引蚓酉莠诱演肄<br/>　　w	营茔维惟唯匀疫役颖允尹<br/>　　ȵ	孕锐育浴欲煜毓<br/>　　k	捐<br/>　　ŋ	盈嘢<br/>　　h	赢易<br/>　　∅	蝇`}];


