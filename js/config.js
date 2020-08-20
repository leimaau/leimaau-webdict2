/*
全局配置
*/

const cdnAddr = [];
cdnAddr.push('https://cdn.jsdelivr.net/npm');
cdnAddr.push('leimaau-npm-cdn@1.1.6');
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
	, { field: 'NN_SL',title: '心墟平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'NN_SH',title: '石埠平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'HX_P',title: '橫縣平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
];

const rowData_book = [
	{ BOOK: '1994年謝建猷《南寧白話同音字彙》', NN: 'tab_1994', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'tab_1997', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》(單字音表)', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'tab_1998', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_1998_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '1998年陳謨志總纂《南寧市誌·文化卷》(單字音表)', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'tab_2000_zb_wj' }
	, { BOOK: '2002年候精一《現代漢語方言音庫(字庫)》', NN: 'tab_2002', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'tab_2007', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'tab_2007_zb_sz', NN_SH: '', HX_P: 'tab_2007_zb_wj' }
	, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'noData', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2007年林亦《南寧石埠平話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2009年陳海倫、林亦《粵語平話土話方音字彙》', NN: 'noData', NN_D: '', NN_Y: 'noData', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '' }
	, { BOOK: '2009年張菁雅《桂南平話語音研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData' }
	, { BOOK: '2017年教育部《漢語方言用字規範》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201703_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201705_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '2018年滕祖愛《南寧市與桂平市粵方言比較研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2018年覃遠雄《南寧心墟平話語音系統》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2018年Leimaau《南寧話審音表》(本站提供)', NN: 'tab_2018', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2018_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'tab_2019_zb_b_wj', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
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
	, { field: 'NN_SL',title: '心墟平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	//, { field: 'NN_SH',title: '石埠平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'HX_P',title: '橫縣平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_book_phrase = [
	{ BOOK: '1987年張均如《記南寧心墟平話》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', HX_P: '' }
	, { BOOK: '1994年閉克朝《廣西橫縣平話詞彙》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: 'noData' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'noData', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', HX_P: 'noData' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2015年黃增霞《廣西南寧疍家話詞彙研究》', NN: '', NN_D: 'noData', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年李怡《南寧白話古語詞研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年韋慧梅《南寧白話詞彙研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2019年莫思敏《橫縣白話語音研究》', NN: '', NN_D: '', HX_B: 'noData', NN_T: '', NN_SL: '', NN_S: '', HX_P: '' }
	, { BOOK: '2020年Leimaau《南寧話審詞表》(本站提供)', NN: 'tab_2020_phrase', NN_D: '', HX_B: '', NN_T: 'tab_2020_bw_phrase', NN_SL: '', NN_S: '', HX_P: '' }
];

// 語法資料
const colData_book_grammar = [
	{ field: 'BOOK', title: '南寧語法資料', align: 'center' }
	, { field: 'NN', title: '市區白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	//, { field: 'NN_D',title: '疍家白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	//, { field: 'NN_Y',title: '邕寧白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	//, { field: 'HX_B',title: '橫縣白話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	, { field: 'NN_T',title: '亭子平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	, { field: 'NN_SL',title: '心墟平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	, { field: 'NN_S',title: '沙井平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	, { field: 'NN_SH',title: '石埠平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
	, { field: 'HX_P',title: '橫縣平話', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
];

const rowData_book_grammar = [
	{ BOOK: '1985年白宛如《南寧白話的[ɬai˧]與廣州話的比較》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '1997年李榮主編《南寧平話詞典》(單字音表)', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '1999年閉思明《廣西橫縣平話語法研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData' }
	//, { BOOK: '1998年陳謨志總纂《南寧市誌·文化卷》(單字音表)', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'tab_2000_zb_wj' }
	, { BOOK: '2004年楊敬宇《南寧平話體標記“了”的輕讀分析》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2007年褚俊海《桂南平話與白話的介詞研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', NN_SH: '', HX_P: 'noData' }
	//, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'noData', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2007年吳旭虹《南寧白話體貌考察》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2007年農海慧《南寧白話的體標記“住”》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2009年覃鳳餘、吳福祥《南寧白話“過”的兩種特殊用法》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2009年覃鳳餘《南寧白話的比較句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2010年吳福祥、覃鳳餘《南寧粵語短差比式“X+A+過”的來源》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData' }
	, { BOOK: '2011年陸識爲《南寧白話的比較句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2011年覃遠雄《南寧白話的“握”字句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2011年覃遠雄《南寧白話的“捱”字句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2014年郭必之《南寧地區語言「去」義語素的語法化與接觸引發的「複製」》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2015年寧潔《南寧白話的處置句式》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2016年余瑾《廣西平話研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2016年黃陽《南寧粵語的助詞“晒”》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '2018年滕祖愛《南寧市與桂平市粵方言比較研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2019年黃陽《南寧白話被動句句法研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2019年郭必之《語言接觸視角下的南寧粵語語法》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '2019年霍進萍《南寧和岑溪粵語語氣詞比較研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	, { BOOK: '2020年Leimaau《南寧話例句表》(本站提供)', NN: 'tab_2020_grammar', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2020_bw_grammar', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
	//, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'tab_2019_zb_b_wj', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '' }
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
	, { field: 'PAGE', title: '䈎', formatter: (value, row) => { return pageSplit(value.replace('-','，'), 'jpg', row['VOLUME']=='上冊' ? 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume1/' : 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume2/') } }
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
	, { field: 'PAGE', title: '䈎', formatter: (value, row) => { return pageSplit(value.replace('*','s'), 'jpg', 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1856fy/fy') } }
	, { field: 'IPA', title: 'IPA擬音' }
	, { field: 'JYUTPING', title: '粵拼擬音', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
];

const colData_jj = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'IPA', title: 'IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'PAGE', title: '䈎', formatter: (value, row) => { return pageSplit(value, 'jpg', 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1941yy/yy') } }
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
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'char') } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '本站附註', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

const colData_proverb = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_proverb', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', width: '550px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SIMP', title: '簡體', width: '550px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '280px', formatter: (value, row) => { if(row['YEAR'] == 'tab_2020_proverb') {return `<span style="white-space: normal">2020年Leimaau《南寧童謠和熟語》(本站提供)<span/>`} else {return (row['YEAR'] == 'tab_1937kk_proverb') ? '<span style="white-space: normal">1937年廣西省政府總務處統計室《南寧社會概況》' + pageSplit(value, 'jpg','https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/kk_tj') + '<span/>' : '<span style="white-space: normal">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)》' + pageSplit(value, 'jpg','https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/jz_tj') + '<span/>' } } }
	, { field: 'EXPL', title: '釋義', width: '220px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'NOTE', title: '本站附註', width: '220px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_phrase', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	, { field: 'IPA_S', title: '原文IPA', sortable : true }
	, { field: 'IPA_T', title: '統一IPA', sortable : true }
	, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'phrase') } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '本站附註', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true }
];

const colData_grammar = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_grammar', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRAD', title: '繁體', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SIMP', title: '簡體', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'IPA_S', title: '原文IPA', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'IPA_T', title: '統一IPA', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'JYUTPING', title: '粵拼', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '280px', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'grammar') } }
	, { field: 'EXPL', title: '釋義', width: '220px', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'NOTE', title: '本站附註', width: '220px', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true }
];

// 格式化來源欄
function formatSOUR(value, row_year, picType, qType) {
	if (qType == 'char'){
		var bookname = rowData_book.find(item => (item.NN == row_year || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	} else if (qType == 'phrase') {
		var bookname = rowData_book_phrase.find(item => (item.NN == row_year || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	} else if (qType == 'grammar') {
		var bookname = rowData_book_grammar.find(item => (item.NN == row_year || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year)).BOOK;
	};
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('tab_', '');
	//var linkaddr = 'https://leimaau.github.io/CDN/data-store/' + row_year;
	//var linkaddr = 'https://cdn.jsdelivr.net/gh/leimaau/CDN@latest/data-store/' + row_year;
	var linkaddr = 'https://leimaau.github.io/CDN/index.html?value=' + row_year;
	
	if (row_year == '1994') linkaddr += 'zh/zh'
	else if (row_year == '1997') linkaddr += 'yd/yd'
	else if (row_year == '1998') linkaddr += 'dfz/dfz'
	else if (row_year == '2002') linkaddr += 'zk/zk'
	else if (row_year == '2007') linkaddr = ''
	else if (row_year == '2008') linkaddr += 'yj/yj'
	else if (row_year == '2009') linkaddr += 'yy/yy'
	else if (row_year == '201703') linkaddr = linkaddr.replace('201703','2017') + 'gj/gj'
	else if (row_year == '201705') linkaddr =  linkaddr.replace('201705','2017') + 'hy/hy0'
	else if (row_year == '2018') linkaddr = '';
	
	if (value == '' || linkaddr == '') {
		return (qType != 'grammar') ? `<span style="white-space: nowrap">${bookname}</span>` : `<span style="white-space: normal">${bookname}<span/>`;
	} else {
		return (qType != 'grammar') ? `<span style="white-space: nowrap">${bookname + pageSplit(value, picType, linkaddr)}</span>` : `<span style="white-space: normal">${bookname + pageSplit(value, picType, linkaddr)}</span>`;
	};
}

// 䈎碼拼接函數
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

/*
var playlist = [
	{ title: "Heart Like California", artist: "Before You Exit", mp3: "http://music.163.com/song/media/outer/url?id=28828120.mp3" ,cover: "http://p1.music.126.net/zuxhlVEkxksU3e5_mR4Ymg==/5990139348590509.jpg?param=130y130" }
	, { title: "Pneumatic Tokyo", artist: "EnV", mp3: "http://music.163.com/song/media/outer/url?id=33937527.mp3" ,cover: "http://p1.music.126.net/k8kONmsvnxJIeuvEE7eR0Q==/109951163694694330.jpg?param=130y130" }
	, { title: "造物者", artist: "华晨宇", mp3: "http://music.163.com/song/media/outer/url?id=419250437.mp3" ,cover: "http://p1.music.126.net/Brk5ra86AWlPOrBljUQ9rw==/1405175872394479.jpg?param=130y130" }
	, { title: "ソレソレ", artist: "JABBERLOOP", mp3: "http://music.163.com/song/media/outer/url?id=29307597.mp3" ,cover: "http://p1.music.126.net/HIjHgonnMOHxTo_cjt0LyQ==/6644348767037594.jpg?param=130y130" }
	, { title: "回娘家", artist: "朱明瑛", mp3: "http://music.163.com/song/media/outer/url?id=340054.mp3" ,cover: "http://p2.music.126.net/b1DuxpPbEicNE06gVUQsLA==/39582418613242.jpg?param=130y130" }
	, { title: "Last Dance", artist: "伍佰 & China Blue", mp3: "http://music.163.com/song/media/outer/url?id=157276.mp3" ,cover: "http://p1.music.126.net/HDdQFXVIlRvR96s0mQyu9g==/109951164170257125.jpg?param=130y130" }
	, { title: "万水千山总是情(翻唱)", artist: "励志豪", mp3: "http://music.163.com/song/media/outer/url?id=570074859.mp3" ,cover: "http://p1.music.126.net/-tC1TR2JtKD5-jfx1id88w==/109951163325160885.jpg?param=130y130" }
	, { title: "She纯音乐(Splice Version)", artist: "EYAir / Jami Soul / Mr. Bang / 시나에", mp3: "http://music.163.com/song/media/outer/url?id=478596258.mp3" ,cover: "http://p1.music.126.net/ieoL3KmgJLL3y3O9TqG3bQ==/109951162928795320.jpg?param=130y130" }
	, { title: "李白", artist: "李荣浩", mp3: "http://music.163.com/song/media/outer/url?id=27678655.mp3" ,cover: "http://p2.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951163187393370.jpg?param=130y130" }
	, { title: "年轮", artist: "汪苏泷", mp3: "http://music.163.com/song/media/outer/url?id=32897777.mp3" ,cover: "http://p2.music.126.net/5D4hfLdRezRlax4OWiPgnw==/2899412164997218.jpg?param=130y130" }
	, { title: "The Day You Went Away", artist: "M2M", mp3: "http://music.163.com/song/media/outer/url?id=864648190.mp3" ,cover: "http://p2.music.126.net/0vL8DKxOjDAW-CgXBbgqMA==/109951163393829674.jpg?param=130y130" }
	, { title: "情非得已(中英文版)", artist: "汪定中", mp3: "http://music.163.com/song/media/outer/url?id=36095122.mp3" ,cover: "http://p1.music.126.net/r-Zh4oqP4JJFQ1FaWP0NOQ==/3283141722233740.jpg?param=130y130" }
	, { title: "大鱼", artist: "周深", mp3: "http://music.163.com/song/media/outer/url?id=413812448.mp3" ,cover: "http://p1.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg?param=130y130" }
];
var isRotate = true;
var autoplay = false;
function bgChange(){
	var lis= $('.lib');
	for(var i=0; i<lis.length; i+=2)
	lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;
*/

// 鏈接顯示函數
function showLink(textChar){
	const outputText = [], outputText2 = [], outputText3 = [];
	outputText.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>
	漢典網：<a href="http://www.zdic.net/hans/${textChar}" target="_blank">${textChar}</a> | <a href="http://www.zdic.net/zd/yy/yy/${textChar}" target="_blank">粵語</a> | <a href="http://www.zdic.net/zd/yy/ph/${textChar}" target="_blank">平話</a></br>
	韻典網：<a href="https://ytenx.org/zim?dzih=${textChar}&dzyen=1&jtkb=1&jtkd=1&jtdt=1&jtgt=1" target="_blank">${textChar}</a></br>
	國學大師：<a href="http://www.guoxuedashi.com/zidian/${encodeUnicode(textChar).replace('\\u','')}.html" target="_blank">${textChar}</a></br>
	古今文字集成：<a href="http://www.ccamc.co/cjkv.php?cjkv=${textChar}" target="_blank">${textChar}</a></br>
	粵音資料集叢：<a href="https://jyut.net/query?q=${textChar}" target="_blank">${textChar}</a></br>
	漢語多功能字庫：<a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=${textChar}" target="_blank">${textChar}</a> | <a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/dialect.php?word=${textChar}" target="_blank">其他方言讀音</a></br>
	縱橫在線中文字典：<a href="https://ckc.eduhk.hk/ckc2/dictionary.php?jiinput=${textChar}&lang=b5&form1=1" target="_blank">${textChar}</a></br>
	「數理華聲」科學及數學科詞彙表：<a href="https://ckc.eduhk.hk/ckc2/charlist.php?csmsinput=${textChar}&lang=b5" target="_blank">${textChar}</a></br>
	英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/search.php?titleOnlyBtn=true&searchStr=${textChar}&lang=b5" target="_blank">${textChar}</a></br>
	粵拼歌詞網：<a href="https://jyut6.com/search.php?keyword=${textChar}" target="_blank">${textChar}</a></br>
	翡翠粵語歌詞：<a href="https://www.feitsui.com/zh-hans/search/${textChar}.html" target="_blank">${textChar}</a></br>
	</span></div></div>`);
	
	outputText2.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>
	漢字全息資源應用系統：<a href="http://qxk.bnu.edu.cn/#/danziDetail/42c2d834-fa1d-47e9-9f90-972a687183f7/${textChar}/22d3af76-1ffe-46da-8c28-40e7dfe6b8d2/0" target="_blank">${textChar}</a></br>
	中國哲學書電子化計劃：<a href="https://ctext.org/dictionary.pl?if=gb&char=${textChar}" target="_blank">${textChar}</a></br>
	字海|葉典：<a href="http://yedict.com/zscontent.asp?uni=${encodeUnicode(textChar).replace('\\u','')}" target="_blank">${textChar}</a></br>
	Forvo：<a href="https://zh.forvo.com/search/${textChar}/" target="_blank">${textChar}</a></br>
	Unihan：<a href="https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint=${textChar}" target="_blank">${textChar}</a></br>
	萌典：<a href="https://www.moedict.tw/${textChar}" target="_blank">${textChar}</a></br>
	活用中文大辭典：<a href="https://lib.ctcn.edu.tw/chtdict/result.aspx?keyword=${textChar}" target="_blank">${textChar}</a></br>
	漢字ペディア：<a href="https://www.kanjipedia.jp/search?k=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>
	CHISE IDS 漢字検索：<a href="http://www.chise.org/ids-find?components=${textChar}" target="_blank">${textChar}</a></br>
	GlyphWiki：<a href="http://glyphwiki.org/wiki/${encodeUnicode(textChar).replace('\\','')}?tdsourcetag=s_pctim_aiomsg" target="_blank">${textChar}</a></br>
	Chinese Etymology 字源：<a href="https://hanziyuan.net/#${textChar}" target="_blank">${textChar}</a></br>
	小雞詞典：<a href="https://jikipedia.com/search?phrase=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>
	</span></div></div>`);
	
	outputText3.push(`<div class="card mt-1 mb-3"><div class="card-header">相關鏈接</div><div class="card-body text-secondary"><span>
	東方語言學：<a href="http://www.eastling.org/" target="_blank">前往</a></br>
	漢語方言學大詞典：<a href="http://www.fangyanxue.com/pages/index/index.html" target="_blank">前往</a></br>
	古音手鏡：<a href="http://www.guguolin.com/" target="_blank">前往</a></br>
	小學堂：<a href="http://xiaoxue.iis.sinica.edu.tw/" target="_blank">前往</a></br>
	英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/index.php" target="_blank">前往</a></br>
	引得市：<a href="http://www.mebag.com/index/" target="_blank">前往</a></br>
	廣東省情網：<a href="http://dfz.gd.gov.cn/" target="_blank">前往</a></br>
	廣州市情網：<a href="http://dfz.gz.gov.cn/gzsdfz/index.shtml" target="_blank">前往</a></br>
	廣西地情資料庫：<a href="http://www.gxdfz.org.cn/gdtz/" target="_blank">前往</a></br>
	開放康熙字典：<a href="http://kangxi.adcs.org.tw/kangxizidian/" target="_blank">前往</a></br>
	漢語大字典檢索：<a href="http://www.homeinmists.com/hd/search.html" target="_blank">前往</a></br>
	說文解字圖像查閱：<a href="http://www.homeinmists.com/shuowen/find.html" target="_blank">前往</a></br>
	現代標準漢語與粵語對照資料庫：<a href="http://apps.itsc.cuhk.edu.hk/hanyu/Page/Cover.aspx" target="_blank">前往</a></br>
	CantoDict：<a href="http://www.cantonese.sheik.co.uk/scripts/masterlist.htm" target="_blank">前往</a></br>
	ISO漢字查詢系統：<a href="http://glyph.iso10646hk.net/chinese/icharacters.jsp" target="_blank">前往</a></br>
	香港小學學習字詞表：<a href="https://www.edbchinese.hk/lexlist_ch/" target="_blank">前往</a></br>
	早期粵語口語文獻資料庫：<a href="http://143.89.108.109/Candbase/" target="_blank">前往</a></br>
	香港二十世紀中期粵語語料庫：<a href="https://hkcc.eduhk.hk/v1/introduction.html" target="_blank">前往</a></br>
	語保工程採錄展示平臺：<a href="https://zhongguoyuyan.cn/" target="_blank">前往</a></br>
	</span></div></div>`);
	
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

	if (IPA_version == 'tIPA2') {
		outputstr = outputstr.replace(/gw/g,"Ku");
		outputstr = outputstr.replace(/kw/g,"Kʰu");
	} else {
		outputstr = outputstr.replace(/gw/g,"Kʷ");
		outputstr = outputstr.replace(/kw/g,"Kʷʰ");
	}
	
    outputstr = outputstr.replace(/(^|[ /])([ptk])/g,"$1$2ʰ");
    outputstr = outputstr.replace(/(^|[ /])b/g,"$1p");
    outputstr = outputstr.replace(/(^|[ /])d/g,"$1t");
    outputstr = outputstr.replace(/(^|[ /])g/g,"$1k");
	
    outputstr = outputstr.replace(/zy(\d)/g,"t͡Sɿ$1");
    outputstr = outputstr.replace(/cy(\d)/g,"t͡Sʰɿ$1");
    outputstr = outputstr.replace(/sy(\d)/g,"Sɿ$1");
    outputstr = outputstr.replace(/ng/g,"ŋ");
	
    if (IPA_version == 'nIPA' || IPA_version == 'tIPA' || IPA_version == 'tIPA3'){
        outputstr = outputstr.replace(/s/g,"ʃ");
        outputstr = outputstr.replace(/z/g,"t͡ʃ");
        outputstr = outputstr.replace(/c/g,"t͡ʃʰ");
	} else if(IPA_version == 'nIPA2' || IPA_version == 'tIPA2' || IPA_version == 'gIPA') {
        outputstr = outputstr.replace(/s/g,"s");
        outputstr = outputstr.replace(/z/g,"t͡s");
        outputstr = outputstr.replace(/c/g,"t͡sʰ");
	} else if(IPA_version == 'nIPA3'){
        outputstr = outputstr.replace(/s/g,"ɕ");
        outputstr = outputstr.replace(/z/g,"t͡ɕ");
        outputstr = outputstr.replace(/c/g,"t͡ɕʰ");
	}
	
    if (IPA_version == 'tIPA'){
        outputstr = outputstr.replace(/ɔː|ɔ/g,"o");
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"o$1");
        outputstr = outputstr.replace(/(ɛ|ɛː)(\d|i)/g,"e$2");
        outputstr = outputstr.replace(/ɪ/g,"e");
	} else if (IPA_version == 'tIPA2'){
        outputstr = outputstr.replace(/ȵ/g,"ɲ");
        outputstr = outputstr.replace(/w/g,"β");
        outputstr = outputstr.replace(/ɐ/g,"ə");
        outputstr = outputstr.replace(/œ/g,"ø");
        outputstr = outputstr.replace(/ɛː|ɛ/g,"e");
        outputstr = outputstr.replace(/ɔː|ɔ/g,"o");
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"o$1");
        outputstr = outputstr.replace(/iə([ŋk])/g,"iɐ$1");
        outputstr = outputstr.replace(/ɪ/g,"e");
        outputstr = outputstr.replace(/βu/g,"∅u");
        outputstr = outputstr.replace(/jy/g,"∅y");
        outputstr = outputstr.replace(/^ji/g,"∅i");
        outputstr = outputstr.replace(/^j/g,"∅i");
	} else if (IPA_version == 'tIPA3'){
        outputstr = outputstr.replace(/ȵ/g,"ɲ");
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"u$1");
        outputstr = outputstr.replace(/ɪ/g,"e");
        outputstr = outputstr.replace(/iɐ([ŋk])/g,"ɛː$1");
	} else if(IPA_version == 'nIPA') {
		outputstr = outputstr.replace(/ɪ/g,"e");
	} else if(IPA_version == 'nIPA2') {
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"o$1");
		outputstr = outputstr.replace(/ɪ/g,"e");
	} else if(IPA_version == 'nIPA3')  {
		outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"u$1");
		outputstr = outputstr.replace(/ɪ(k|ŋ)/g,"i$1");
	}

    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'gIPA'){
        outputstr = outputstr.replace(/([ptk])6/g,"$1̚˨");
        outputstr = outputstr.replace(/([ptk])3/g,"$1̚˧");
        outputstr = outputstr.replace(/([ptk])1/g,"$1̚˥");	
	} else if(IPA_version == 'tIPA' || IPA_version == 'tIPA3') {
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
        outputstr = outputstr.replace(/4/g,"˨˩");
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
	
    outputstr = outputstr.toLowerCase();
	
	if( $("#" + judgeDiv).is(":checked") == false ){
		outputstr = outputstr.replace(/ː/g,"").replace(/͡/g,"").replace(/̚/g,"");
	}
	
    if(output_IPAformat == 'noUp'){
        outputstr = outputstr.replace(/˥/g,"5").replace(/˦/g,"4").replace(/˧/g,"3").replace(/˨/g,"2").replace(/˩/g,"1");
	} else if(output_IPAformat == 'Up') {
        outputstr = outputstr.replace(/˥/g,"⁵").replace(/˦/g,"⁴").replace(/˧/g,"³").replace(/˨/g,"²").replace(/˩/g,"¹");
	} else {
        outputstr = outputstr.replace(/˥˥/g,'˥').replace(/˧˧/g,'˧').replace(/˨˨/g,'˨');
	}
	
    outputstr = outputstr.replace(/^([aeiouœʊɐɛɪɔə])/g,"∅$1");
	
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
	
	outputstr = outputstr.replace(/ʊk|ok|uk/g,"uk");
	outputstr = outputstr.replace(/ʊŋ|oŋ|uŋ/g,"ung");
	
    outputstr = outputstr.replace(/^([∅]|)([yi])([aeiouœʊɐɛɪɔə]|)([ŋmnptk]|)(\d|)/g,"j$2$3$4$5");
    outputstr = outputstr.replace(/^([∅]|)([yi])(\d|)/g,"j$2$3");

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
	
	if (IPA_version == 'tIPA2') {
		outputstr = outputstr.replace(/∅u/g,"wu");
		outputstr = outputstr.replace(/^([∅]|)([u])([int]|)(\d|)/g,"w$2$3$4");
		outputstr = outputstr.replace(/∅y/g,"jy");
	}
    outputstr = outputstr.replace(/^[ʔ∅0Ø]/g,"");

    outputstr = outputstr.toLowerCase();
	
	return outputstr;
}
