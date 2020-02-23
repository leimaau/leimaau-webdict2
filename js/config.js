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

/*
bootstrap-select 本地化配置
*/
(($) => {
  $.fn.selectpicker.defaults = {
    noneSelectedText: '沒有選中任何項',
    noneResultsText: '沒有找到匹配項',
    countSelectedText: '選中{1}項中的{0}項',
    maxOptionsText: ['超出限制 (最多選擇{n}項)', '組選擇超出限制(最多選擇{n}組)'],
    multipleSeparator: ', ',
    selectAllText: '全選',
    deselectAllText: '取消全選'
  };
})($);


// 定義表格列數據
const colData = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_bw', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>`; } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char_simp', 'dicWord')">${value}</a>`; } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value.slice(0, -1)}', 'jyutping', 'dicWord')">${value.slice(0, -1)}</a>${value.slice(-1)}`; } }
	, { field: 'SOUR', title: '來源', formatter: (value, row) => { return formatSOUR(value, row['YEAR'].replace('_bw', ''), 'png') } }
	, { field: 'EXPL', title: '詞例', formatter: (value) => { return `<p data-toggle="tooltip"  title='${value}'>${value}<p/>` } }
	, { field: 'NOTE', title: 'leimaau附註', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` } }
];

const colData_gw = [
	{ field: 'YEAR', title: '資料', align: 'center' }
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
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `${value.replace('_phrase', '')}`; } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'LEVEL1', title: '一級分類', align: 'center' }
	, { field: 'LEVEL2', title: '二級分類' }
	, { field: 'LEVEL3', title: '三級分類', align: 'center' }
	, { field: 'TRAD', title: '繁體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>`; } }
	, { field: 'SIMP', title: '簡體', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>`; } }
	, { field: 'IPA_S', title: '原文IPA' }
	, { field: 'IPA_T', title: '統一IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>`; } }
	, { field: 'SOUR', title: '來源', formatter: (value, row) => { return formatSOUR(value, row['YEAR'].replace('_phrase', ''), 'png') } }
	, { field: 'EXPL', title: '解釋', formatter: (value) => { return `<p data-toggle="tooltip"  title='${value}'>${value}<p/>` } }
	, { field: 'NOTE', title: 'leimaau附註', formatter: (value) => { return `<p data-toggle="tooltip" title='${value}'>${value}<p/>` } }
];



