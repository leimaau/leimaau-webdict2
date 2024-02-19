/*
全局配置
*/

const cdnAddr = [];
cdnAddr.push('https://fastly.jsdelivr.net/npm');
cdnAddr.push('leimaau-npm-cdn@1.4.7');
cdnAddr.push('db/leimaau.db3');

const cdnAddr2 = [];
cdnAddr2.push('https://fastly.jsdelivr.net/npm');
cdnAddr2.push('leimaau-npm-cdn@1.4.7');
cdnAddr2.push('db/leimaau2.db3');

const cdnAddr3 = [];
cdnAddr3.push('https://fastly.jsdelivr.net/npm');
cdnAddr3.push('leimaau-npm-cdn@1.4.7');
cdnAddr3.push('db/leimaau3.db3');

const DictConfig = {
  //dir: 'db/leimaau.db3',  // 使用本地庫
  dir: cdnAddr.join('/'),  // 使用CDN加速
  dir2: cdnAddr2.join('/'),
  dir3: cdnAddr3.join('/')
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
	// { OLDBOOK: `1008年《廣韻》[<a class="text-info" target="_blank" href="https://zhuanlan.zhihu.com/p/20430939">網絡poem覈校版20170209</a>]`, TRIUNGKOX: 'tab_1008_g', OLDCANTO: '', CANTO: '' }
	{ OLDBOOK: `1008年《廣韻》[<a class="text-info" target="_blank" href="http://www.eastling.org/">東方語言學版</a> | <a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/Infer.html">本站推導理論音</a>]`, TRIUNGKOX: 'tab_1008_d_g', OLDCANTO: '', CANTO: '' }
	, { OLDBOOK: `1039年《集韻》[<a class="text-info" target="_blank" href="http://www.eastling.org/">東方語言學版</a> | <a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/Infer.html">本站推導理論音</a>]`, TRIUNGKOX: 'tab_1039_g', OLDCANTO: '', CANTO: '' }
	, { OLDBOOK: `1838年重鐫本《江湖尺牘分韻撮要合集》[首版爲1782年][<a class="text-info" target="_blank" href="http://ytenx.org/pyonh/">韻典網poem覈校版</a>](本站擬音)`, TRIUNGKOX: '', OLDCANTO: 'tab_1838_g', CANTO: '' }
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
	, { field: 'BY_P',title: '賓陽話(蘆墟)', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'BY_P2',title: '賓陽話(新橋)', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'BY_P3',title: '賓陽話(大橋)', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
	, { field: 'MS_P',title: '馬山喬利平話', align: 'center', formatter: (value) => { return formatCheckBox(value) } }
];

const rowData_book = [
	{ BOOK: '1994年謝建猷《南寧白話同音字彙》', NN: 'tab_1994', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'tab_1997', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	//, { BOOK: '1997年李榮主編《南寧平話詞典》(單字音表)', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'tab_1998', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_1998_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2000年李連進《南寧近郊平話方言島》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P: 'noData' , BY_P2: '' , BY_P3: '' , MS_P: 'noData'}
	, { BOOK: '2003年侯精一《現代漢語方言音庫(字庫)》', NN: 'tab_2003', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2007年李彬《左江土白話研究》', NN: 'tab_200706', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '', BY_P2: '' , BY_P3: '' , MS_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'tab_2007', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', NN_SH: '', HX_P: 'noData', BY_P: '', BY_P2: 'noData' , BY_P3: '' , MS_P: '' }
	, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'tab_2007_zb_dg', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2007年林亦《南寧石埠平話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2009年陳海倫、林亦《粵語平話土話方音字彙》', NN: 'tab_2009', NN_D: '', NN_Y: 'noData', HX_B: '', NN_T: 'tab_2009_bw', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: 'noData' , MS_P: ''}
	, { BOOK: '2009年張菁雅《桂南平話語音研究》', NN: 'tab_200906', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2017年教育部《漢語方言用字規範》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201703_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201705_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年滕祖愛《南寧市與桂平市粵方言比較研究》', NN: 'tab_201806', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年覃遠雄《南寧心墟平話語音系統》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年Leimaau《南寧話審音表》(本站提供)', NN: 'tab_2018', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2018_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'tab_2019_zb_b_wj', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2021年Leimaau《單字音零散資料匯總》(本站提供)', NN: 'tab_2021', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2021_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	//, { BOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/2022.html">2022年電腦《切韻音系自動推導理論音》(本站提供)</a>', NN: 'tab_2022', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2022_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
];

// 詞典資料
const colData_oldbook_proverb = [
	{ field: 'OLDBOOK', title: '古籍資料和近代資料', align: 'center' }
	, { field: 'OLDPROVERB', title: '早期童謠', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'PROVERB', title: '近代童謠和熟語', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'PHRASE', title: '詞彙', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_oldbook_proverb = [
	{ OLDBOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/1937jz_proverb.html">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)·童謠》</a>', OLDPROVERB: 'tab_1937jz_proverb', PROVERB: '', PHRASE: '' }
	, { OLDBOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/1937kk_proverb.html">1937年廣西省政府總務處統計室《南寧社會概況·童謠》</a>', OLDPROVERB: 'tab_1937kk_proverb', PROVERB: '', PHRASE: '' }
	, { OLDBOOK: '1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)·言語》', OLDPROVERB: '', PROVERB: '', PHRASE: 'noData'}
	//, { OLDBOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', OLDPROVERB: '', PROVERB: 'noData' }
	//, { OLDBOOK: '?年萬立仁、劉子林《白話童謠300首辨析》', OLDPROVERB: '', PROVERB: 'noData' }
	, { OLDBOOK: '2020年Leimaau《南寧童謠和熟語》(本站提供)', OLDPROVERB: '', PROVERB: 'tab_2020_proverb', PHRASE: '' }
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
	, { field: 'BY_P',title: '賓陽話(蘆墟)', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'BY_P2',title: '賓陽話(新橋)', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_book_phrase = [
	{ BOOK: '1987年張均如《記南寧心墟平話》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '1994年閉克朝《廣西橫縣平話詞彙》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: 'noData', BY_P: '', BY_P2: '' }
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'noData', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2000年李連進《南寧近郊平話方言島》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2006年張均如《賓陽話的語音和詞彙》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: 'noData', BY_P2: '' }
	, { BOOK: '2007年李彬《左江土白話研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', HX_P: 'noData', BY_P: '', BY_P2: 'noData' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	// 	黎丽程 宾阳话的基本词类及句式研究	
	// 	黎丽程 宾阳话的语音和词汇构成	
	//  王莉宁 桂南平话与粤语词汇比较方法探讨
	, { BOOK: '2015年黃增霞《廣西南寧疍家話詞彙研究》', NN: '', NN_D: 'noData', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2017年李怡《南寧白話古語詞研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2017年韋慧梅《南寧白話詞彙研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2019年莫思敏《橫縣白話語音研究》', NN: '', NN_D: '', HX_B: 'noData', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2020年Leimaau《南寧話審詞表》(本站提供)', NN: 'tab_2020_phrase', NN_D: '', HX_B: '', NN_T: 'tab_2020_bw_phrase', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2021年Leimaau《詞彙零散資料匯總》(本站提供)', NN: 'tab_2021_phrase', NN_D: '', HX_B: '', NN_T: 'tab_2021_bw_phrase', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
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
	, { field: 'BY_P2',title: '賓陽話(新橋)', align: 'center', formatter: (value) => { return formatCheckBox(value, '_grammar') } }
];

const rowData_book_grammar = [
	//{ BOOK: '1985年白宛如《南寧白話的[ɬai˧]與廣州話的比較》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	{ BOOK: '1987年張均如《記南寧心墟平話》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	// 1994年壮语陆西话和汉语平话、白话若干相似现象
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '1997年李榮主編《南寧平話詞典》(單字音表)', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '1999年閉思明《廣西橫縣平話語法研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P2: '' }
	//, { BOOK: '1998年陳謨志總纂《南寧市誌·文化卷》(單字音表)', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'tab_2000_zb_wj', BY_P2: '' }
	//, { BOOK: '2004年楊敬宇《南寧平話體標記“了”的輕讀分析》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2007年褚俊海《桂南平話與白話的介詞研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '', BY_P2: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', NN_SH: '', HX_P: 'noData', BY_P2: '' }
	//, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'noData', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2007年吳旭虹《南寧白話體貌考察》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2007年農海慧《南寧白話的體標記“住”》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '2007年覃東生《賓陽話語法研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: 'noData' }
	// 	覃东生 宾阳话的述补结构和体标记
	// 	黎丽程 宾阳话的基本词类及句式研究	
	// 	广西宾阳平话与壮语“吃”类词的接触与借贷	康忠德; 莫海文
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2009年覃鳳餘、吳福祥《南寧白話“過”的兩種特殊用法》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2009年覃鳳餘《南寧白話的比較句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2010年吳福祥、覃鳳餘《南寧粵語短差比式“X+A+過”的來源》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P2: '' }
	//, { BOOK: '2011年陸識爲《南寧白話的比較句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2011年覃遠雄《南寧白話的“握”字句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2011年覃遠雄《南寧白話的“捱”字句》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2014年郭必之《南寧地區語言「去」義語素的語法化與接觸引發的「複製」》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2015年寧潔《南寧白話的處置句式》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '2016年余瑾《廣西平話研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: 'noData' }
	//, { BOOK: '2016年黃陽《南寧粵語的助詞“晒”》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2018年滕祖愛《南寧市與桂平市粵方言比較研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//2018年覃东生,覃凤余 广西汉、壮语方言的方式助词和取舍助词
	//, { BOOK: '2019年黃陽《南寧白話被動句句法研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '2019年郭必之《語言接觸視角下的南寧粵語語法》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2019年霍進萍《南寧和岑溪粵語語氣詞比較研究》', NN: 'noData', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '2020年Leimaau《南寧話例句表》(本站提供)', NN: 'tab_2020_grammar', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2020_bw_grammar', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	, { BOOK: '2021年Leimaau《語法零散資料匯總》(本站提供)', NN: 'tab_2021_grammar', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
	//, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'tab_2019_zb_b_wj', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P2: '' }
];

// 格式化顯示爲checkbox
function formatCheckBox (value, qType = '') {
	let checkboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input book${qType}" id="checkbox_${value}" name="dataCheck" value="${value}" checked><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
	let disableCheckboxDiv = `<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input disabledbook" id="checkbox_${value}" name="dataCheck" value="${value}" disabled><label class="custom-control-label" for="checkbox_${value}">選擇</label></div>`;
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
/*const colData_triungkox = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD1', title: '字頭(覈校前)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'WORD2', title: '字頭(覈校後)', align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'NIU', title: '聲紐' }
	, { field: 'YUNBU1', title: '韻部(調整前)' }
	, { field: 'YUNBU2', title: '韻部(調整後)' }
	, { field: 'SHE', title: '攝' }
	, { field: 'HU', title: '呼' }
	, { field: 'DENG', title: '等' }
	, { field: 'TONE', title: '聲調' }
	, { field: 'FANQIE1', title: '反切(覈校前)' }
	, { field: 'FANQIE2', title: '反切(覈校後)' }
	, { field: 'PINYIN', title: '中古拼音(polyhedron版)', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'EXPL', title: '釋文', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
];*/

const colData_triungkox_tung = [
	[{ field: 'YEAR', title: '資料', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '').replace('_d', '')}</span>` } }
	//, {field: 'ID',title: 'ID', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'WORD', title: '字頭', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'NIU', title: '聲', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'YUNBU', title: '韻', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'SHE', title: '攝', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'HU', title: '呼', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'DENG', title: '等', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'TONE', title: '調', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'CHONG', title: '重紐', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'FANQIE', title: '反切', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'fanqie', 'dicWord')">${value}</a>` } }
	, { field: 'FLAG', title: '異讀', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'EXPL', title: '釋文', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: '', title: '南寧市區理論音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	, { field: '', title: '南寧亭子理論音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	],[
	{ field: 'IPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'JP', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'BWIPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'BWJP', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	]
];

const colData_triungkoxghuh = [
	[{ field: 'YEAR', title: '資料', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'WORD', title: '字頭', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'NIU', title: '聲', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'YUNBU', title: '韻', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'SHE', title: '攝(增補)', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'HU', title: '呼', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'DENG', title: '等', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'TONE', title: '調', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'FANQIE', title: '反切', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'fanqie', 'dicWord')">${value}</a>` } }
	, { field: 'EXPL', title: '釋文', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` }  }
	, { field: '', title: '南寧市區理論音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	, { field: '', title: '南寧亭子理論音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	],[
	{ field: 'IPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'JP', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'BWIPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'BWJP', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	]
];

const colData_gw = [
	[{ field: 'YEAR', title: '資料', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'WORD', title: '字頭', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'EXPL', title: '字義', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'FINAL_PART', title: '韻部', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'FIRST_OLD', title: '聲母', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'FINAL_OLD', title: '韻母', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'TONE', title: '聲調', rowspan: 2, align: 'center', valign: 'middle' }
	//, { field: 'FIRST_TYPE', title: '紐類', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'FANQIE', title: '反切', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'VOLUME', title: '冊', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'PAGE', title: '䈎', rowspan: 2, align: 'center', valign: 'middle', formatter: (value, row) => { return pageSplit(value.replace('-','，'), 'jpg', row['VOLUME']=='上冊' ? 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume1/' : 'http://ytenx.org/static/img/KrungGhoTchiekDukPyonYonhTsuatQjeuhGhopDzip/volume2/') } }
	, { field: '', title: '擬音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	],[
	{ field: 'IPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'JYUTPING', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	]
];

const colData_jw = [
	[{ field: 'YEAR', title: '資料', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'WORD', title: '字頭', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_COMP', title: '兼容字頭', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'WORD_NOTE', title: '字條校訂註', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'EXPL', title: '釋義', rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` }  }
	, { field: 'OLD_JP', title: '讀音', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'OLD_JP_TYPE', title: '讀音分類', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'OLD_JP_NOTE', title: '讀音備註', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: 'PAGE', title: '䈎', rowspan: 2, align: 'center', valign: 'middle', formatter: (value, row) => { return pageSplit(value.replace('*','s'), 'jpg', 'https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1856fy/fy') } }
	, { field: '', title: '擬音', rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	],[
	{ field: 'IPA', title: 'IPA', align: 'center', valign: 'middle' }
	, { field: 'JYUTPING', title: '粵拼', align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	]
];

const colData_jj = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'WORD', title: '字頭', align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'char', 'dicWord')">${charStr[i]}</a>`); return aLink.join('|') } }
	, { field: 'IPA', title: 'IPA' }
	, { field: 'JYUTPING', title: '粵拼', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'PAGE', title: '䈎', formatter: (value, row) => { return pageSplit(value, 'jpg', 'https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1941yy/yy') } }
	, { field: 'EXPL', title: '釋義', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` }  }
	, { field: 'FIRSTFLAG', title: '國語聲母是否捲舌', formatter: (value) => { return `${value.replace('1', '1（否）').replace('2', '2（是）')}` }  }
];

const colData = [
	[{ field: 'YEAR', title: '資料', sortable : true, rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('tab_', '').replace(/_zb.*/g,'')}</span>` } }
	//, {field: 'ID',title: 'ID', rowspan: 2, align: 'center', valign: 'middle' }
	, { field: '', title: '字頭', sortable : true, rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	, { field: '', title: 'IPA', sortable : true, rowspan: 1,colspan: 2, align: 'center', valign: 'middle' }
	, { field: 'JYUTPING', title: '粵拼', sortable : true, rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'jyut6ping3', 'dicWord')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', sortable : true, rowspan: 2, align: 'center', valign: 'middle', formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'char') } }
	, { field: 'EXPL', title: '釋義', sortable : true, rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '本站校訂附註', sortable : true, rowspan: 2, align: 'center', valign: 'middle', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	],[
	{ field: 'TRAD', title: '繁體', sortable : true, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char', 'dicWord')">${value}</a>` } }
	, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', valign: 'middle', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'char_simp', 'dicWord')">${value}</a>` } }
	, { field: 'IPA_S', title: '原文IPA', sortable : true, align: 'center', valign: 'middle' }
	, { field: 'IPA_T', title: '統一IPA', sortable : true, align: 'center', valign: 'middle' }
	]
];

const colData_proverb = [
	{ field: 'YEAR', title: '資料', align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_proverb', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRADSIMP', title: '繁體〔簡體〕', width: '550px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'TRAD', title: '繁體', width: '550px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'SIMP', title: '簡體', width: '550px', align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '250px', formatter: (value, row) => { if(row['YEAR'] == 'tab_2020_proverb') {return `<span style="white-space: normal">2020年Leimaau《南寧童謠和熟語》(本站提供)<span/>`} else {return (row['YEAR'] == 'tab_1937kk_proverb') ? '<span style="white-space: normal">1937年廣西省政府總務處統計室《南寧社會概況》' + pageSplit(value, 'jpg','https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/kk_tj') + '<span/>' : '<span style="white-space: normal">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)》' + pageSplit(value, 'jpg','https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/1937tj/jz_tj') + '<span/>' } } }
	, { field: 'EXPL', title: '釋義', width: '250px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'NOTE', title: '本站校訂附註', width: '250px', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_phrase', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRADSIMP', title: '繁體〔簡體〕', width: '550px', sortable : true, align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', '${i}'=='0' ? 'phrase' : 'phrase_simp', 'dicPhrase')">${charStr[i]}</a>`); return aLink.join('<br/>') } }
	//, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	//, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	, { field: 'JYUTPING_IPA_TS', title: '粵拼〔統一IPA、原文IPA〕', width: '550px', sortable : true, formatter: (value) => { let jpStr = value.split('|'), aLink = []; for (let i in jpStr) aLink.push(i==0 ? `<a href="javascript:querySubmit('${jpStr[i]}', 'phrase_jyut6ping3', 'dicPhrase')">${jpStr[i]}</a>` : `${jpStr[i]}`); return aLink.join('<br/>') } }
	//, { field: 'IPA_S', title: '原文IPA', sortable : true }
	//, { field: 'IPA_T', title: '統一IPA', sortable : true }
	//, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', width: '1500px', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'phrase') } }
	, { field: 'EXPL', title: '釋義', width: '550px', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'NOTE', title: '本站校訂附註', width: '550px', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

const colData_grammar = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_grammar', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	, { field: 'TRADSIMP', title: '繁體〔簡體〕', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'TRAD', title: '繁體', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'SIMP', title: '簡體', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'JYUTPING_IPA_TS', title: '粵拼〔統一IPA、原文IPA〕', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'IPA_S', title: '原文IPA', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'IPA_T', title: '統一IPA', width: '550px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'JYUTPING', title: '粵拼', width: '750px', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', width: '1500px', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'grammar') } }
	, { field: 'EXPL', title: '釋義', width: '550px', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'NOTE', title: '本站校訂附註', width: '550px', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

// 格式化來源欄
function formatSOUR(value, row_year, picType, qType) {
	let bookname = '';
	if (qType == 'char'){
		bookname = rowData_book.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year || item.MS_P == row_year)).BOOK;
	} else if (qType == 'phrase') {
		bookname = rowData_book_phrase.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year)).BOOK;
	} else if (qType == 'grammar') {
		bookname = rowData_book_grammar.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year)).BOOK;
	};
	bookname = bookname.replace(/<\/?a.*?>/g,'');
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('_grammar', '').replace('tab_', '');
	//let linkaddr = 'https://leimaau.github.io/CDN/data-store/' + row_year;
	//let linkaddr = 'https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/' + row_year;
	let linkaddr = 'https://leimaau.github.io/CDN/index.html?value=' + row_year;
	
	if (row_year == '1994') linkaddr += 'zh/zh'
	else if (row_year == '1997') linkaddr += 'yd/yd'
	else if (row_year == '1998') linkaddr += 'dfz/dfz'
	else if (row_year == '2000') linkaddr += 'yj/yj'
	else if (row_year == '2003') linkaddr += 'zk/zk'
	else if (row_year == '200706') linkaddr += 'zj/zj'
	else if (row_year == '2007') linkaddr += 'yj/yj'
	else if (row_year == '2008') linkaddr += 'yj/yj'
	else if (row_year == '2009') linkaddr += 'yy/yy'
	else if (row_year == '200906') linkaddr = linkaddr.replace('200906','2009') + 'yj/yj'
	else if (row_year == '201703') linkaddr = linkaddr.replace('201703','2017') + 'gj/gj'
	else if (row_year == '201705') linkaddr =  linkaddr.replace('201705','2017') + 'hy/hy0'
	else if (row_year == '2018') linkaddr = ''
	else if (row_year == '201806') linkaddr = linkaddr.replace('201806','2018') + 'yj/yj'
	else if (/2021/.test(row_year)) {
		if (/1997年李榮主編《南寧平話詞典》引論/.test(value)){
			linkaddr = linkaddr.replace('2021_','') + 'cd/cd';
			bookname = '〔2021年匯總〕1997年李榮主編《南寧平話詞典》引論';
			value = value.replace('1997年李榮主編《南寧平話詞典》引論','');
		} else if (/1998年陳謨志總纂《南寧市誌·文化卷》/.test(value)){
			linkaddr = linkaddr.replace('2021_','') + 'sz/sz';
			bookname = '〔2021年匯總〕1998年陳謨志總纂《南寧市誌·文化卷》';
			value = value.replace('1998年陳謨志總纂《南寧市誌·文化卷》','');
		} else {
			linkaddr = '';
			bookname = '〔2021年匯總〕' + value;
		}
	}
	
	if (value == '' || linkaddr == '') {
		return (qType == 'char') ? `<span style="white-space: nowrap">${bookname}</span>` : `<span style="white-space: normal">${bookname}<span/>`;
	} else {
		return (qType == 'char') ? `<span style="white-space: nowrap">${bookname + pageSplit(value, picType, linkaddr)}</span>` : `<span style="white-space: normal">${bookname + pageSplit(value, picType, linkaddr)}</span>`;
	}
}

// 䈎碼拼接函數
function pageSplit(value, picType, linkaddr) {
	let pageLink = [];
	let pages = value.replace('P', '').split('，');
	for (let i in pages) {
		pageLink.push(`P<a href="${linkaddr + pages[i]}.${picType}" target="_Blank">${pages[i].replace('s','*')}</a>`);
	}
	return pageLink.join('，');
}

const shengniu = {'幫':['幫','非'],
'滂':['滂','敷'],
'並':['並','奉'],
'明':['明','微'],
'端':['端'],
'透':['透'],
'定':['定'],
'泥':['泥'],
'知':['知'],
'徹':['徹'],
'澄':['澄'],
'娘':['娘','孃'],
'精':['精'],
'清':['清'],
'從':['從'],
'心':['心'],
'邪':['邪'],
'莊':['莊','照莊'],
'初':['初','穿初'],
'崇':['崇','牀崇'],
'生':['生','審生'],
'章':['章','照章'],
'昌':['昌','穿昌'],
'禪':['禪','常','俟','禪俟'],
'書':['書','審書'],
'船':['船','牀船'],
'見':['見'],
'溪':['溪'],
'群':['群'],
'疑':['疑'],
'曉':['曉'],
'匣':['匣'],
'影':['影'],
'云':['云','喻云'],
'來':['來'],
'以':['以','喻以'],
'日':['日']};

const yunmu = {'東':['東','董','送','屋'],
'冬':['冬','湩','宋','沃','（湩）'],
'鍾':['鍾','腫','用','燭'],
'江':['江','講','絳','覺'],
'支':['支','紙','寘'],
'脂':['脂','旨','至'],
'之':['之','止','志'],
'微':['微','尾','未'],
'魚':['魚','語','御'],
'虞':['虞','麌','遇'],
'模':['模','姥','暮'],
'齊':['齊','薺','霽'],
'祭':['祭'],
'泰':['泰'],
'佳':['佳','蟹','卦'],
'皆':['皆','駭','怪'],
'夬':['夬'],
'灰':['灰','賄','隊'],
'咍':['咍','海','代'],
'廢':['廢'],
'眞':['眞','真','軫','震','質','諄','準','稕','術'],
'真':['真','眞','軫','震','質','諄','準','稕','術'],
'諄':['諄','準','稕','術'], // 真韻合口
'臻':['臻','𧤛','櫬','櫛','（櫬）'],
'文':['文','吻','問','物'],
'欣':['欣','殷','隱','焮','迄'],
'殷':['殷','欣','隱','焮','迄'],
'元':['元','阮','願','月'],
'魂':['魂','混','慁','沒'],
'痕':['痕','很','恨','麧'],
'寒':['寒','旱','翰','曷','桓','緩','換','末'],
'桓':['桓','緩','換','末'], // 寒韻合口
'刪':['刪','潸','諫','黠'],
'山':['山','產','産','襇','襉','鎋'],
'先':['先','銑','霰','屑'],
'仙':['仙','獮','線','薛'],
'蕭':['蕭','篠','嘯'],
'宵':['宵','小','笑'],
'肴':['肴','巧','效'],
'豪':['豪','晧','号'],
'歌':['歌','戈','哿','箇','果','過'],
'戈':['戈','歌','果','過','哿','箇'],
'麻':['麻','馬','禡'],
'陽':['陽','養','漾','藥'],
'唐':['唐','蕩','宕','鐸'],
'庚':['庚','梗','映','陌'],
'耕':['耕','耿','諍','麥'],
'清':['清','靜','勁','昔'],
'青':['青','迥','徑','錫'],
'蒸':['蒸','拯','證','職'],
'登':['登','等','嶝','德'],
'尤':['尤','有','宥'],
'侯':['侯','厚','候'],
'幽':['幽','黝','幼'],
'侵':['侵','寑','寢','沁','緝'],
'覃':['覃','感','勘','合'],
'談':['談','敢','闞','盍'],
'鹽':['鹽','琰','豔','葉'],
'添':['添','忝','㮇','怗'],
'咸':['咸','豏','陷','洽'],
'銜':['銜','檻','鑑','狎'],
'嚴':['嚴','儼','釅','業'],
'凡':['凡','梵','范','乏'],
'屋':['屋'],
'沃':['沃'],
'燭':['燭'],
'覺':['覺'],
'質':['質'],
'術':['術'],
'櫛':['櫛'],
'物':['物'],
'迄':['迄'],
'月':['月'],
'沒':['沒'],
'麧':['麧'],
'曷':['曷'],
'末':['末'],
'黠':['黠'],
'鎋':['鎋'],
'屑':['屑'],
'薛':['薛'],
'藥':['藥'],
'鐸':['鐸'],
'陌':['陌'],
'麥':['麥'],
'昔':['昔'],
'錫':['錫'],
'職':['職'],
'德':['德'],
'緝':['緝'],
'合':['合'],
'盍':['盍'],
'葉':['葉'],
'怗':['怗','帖'],
'帖':['帖','怗'],
'洽':['洽'],
'狎':['狎'],
'業':['業'],
'乏':['乏']};


// 古音查詢
const colData_select = [
	{ field: 'SHOW', title: '說明', align: 'left' }
	, { field: 'ITEM', title: '選項', align: 'left', formatter: (value,row,index) => { return formatCheckBox2(value,index) } }
];

const rowData_select = [
	{ SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-niu" name="dataCheck" value="checkbox-niu" onclick="javascript:{document.getElementsByClassName('checkbox-0').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-niu">聲</label></div>`, ITEM: `幫組 幫 滂 並 明|端組 端 透 定 泥|知組 知 徹 澄 娘|精組 精 清 從 心 邪|莊組 莊 初 崇 生|章組 章 昌 禪 書 船|見組 見 溪 群 疑 曉 匣 影 云|來組 來 以 日` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-yun" name="dataCheck" value="checkbox-yun" onclick="javascript:{document.getElementsByClassName('checkbox-1').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-yun">韻</label></div>`, ITEM: `果陰 歌|假陰 麻|遇陰 模 魚 虞|流陰 侯 尤 幽|效陰 豪 肴 宵 蕭|止陰 支 脂 之 微|蟹陰 咍 泰 皆 佳 夬 祭 廢 齊 灰|咸陽 覃 談 咸 銜 鹽 嚴 添 凡|深陽 侵|山陽 寒 山 刪 先 仙 元|臻陽 痕 真 臻 殷 魂 文|梗陽 庚 耕 清 青|宕陽 唐 陽|曾陽 登 蒸|江陽 江|通陽 東 冬 鍾|咸入 合 盍 洽 狎 葉 業 帖 乏|深入 緝|山入 曷 鎋 黠 屑 薛 月|臻入 質 櫛 迄 沒 物|梗入 陌 麥 昔 錫|宕入 鐸 藥|曾入 德 職|江入 覺|通入 屋 沃 燭` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-hu" name="dataCheck" value="checkbox-hu" onclick="javascript:{document.getElementsByClassName('checkbox-2').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-hu">呼</label></div>`, ITEM: `開口 合口` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-deng" name="dataCheck" value="checkbox-deng" onclick="javascript:{document.getElementsByClassName('checkbox-3').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-deng">等</label></div>`, ITEM: `一等 二等 三等 四等` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-tone" name="dataCheck" value="checkbox-tone" onclick="javascript:{document.getElementsByClassName('checkbox-4').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-tone">調</label></div>`, ITEM: `平聲 上聲 去聲 入聲` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-chong" name="dataCheck" value="checkbox-chong" onclick="javascript:{document.getElementsByClassName('checkbox-5').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-chong">重紐</label></div>`, ITEM: `A B X O` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-fanqie" name="dataCheck" value="checkbox-fanqie" onclick="javascript:{document.getElementsByClassName('text-fanqie').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-fanqie">反切</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox" id="checkbox-expl" name="dataCheck" value="checkbox-expl" onclick="javascript:{document.getElementsByClassName('text-expl').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-expl">釋文</label></div>`, ITEM: `` }
];

// 格式化顯示爲checkbox
function formatCheckBox2 (value,index) {
	let selArr = [];
	for (let i in value.split('|')) {
		for (let j in value.split('|')[i].split(' ')) {
			if (index==0 || index==1){
				if (j!= 0){
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox triungkox-item-${index} checkbox-${index} checkbox-${index}-${i}" id="checkbox_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}else{
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox checkbox-${index} checkbox-${index}-${i}" id="checkbox_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}" onclick="javascript:{document.getElementsByClassName('checkbox-${index}-${i}').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}
			} else if(index==6){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-fanqie" id="text_fanqie" value="" disabled/></div>`);
			} else if(index==7){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-expl" id="text_expl" value="" disabled/></div>`);
			} else {
				selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-triungkox checkbox-${index} checkbox-${index}-${i}" id="checkbox_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
			}
		}
		selArr.push(`<br/>`);
	}
	return selArr.join('');
}

// 早期粵音查詢
const colData_selectY = [
	{ field: 'SHOW', title: '說明', align: 'left' }
	, { field: 'ITEM', title: '選項', align: 'left', formatter: (value,row,index) => { return formatCheckBox3(value,index) } }
];

const rowData_selectY = [
	{ SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut" id="checkbox-jyut-niu" name="dataCheck" value="checkbox-jyut-niu" onclick="javascript:{document.getElementsByClassName('checkbox-jyut-0').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-jyut-niu">聲</label></div>`, ITEM: `幫非 幫 滂 非 明|端來 端 透 來 泥|見曉 見 古(見合) 溪 困(溪合) 曉 我|精心 精 清 心|照知 照 穿 審|以日 亞 以 云 日` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut" id="checkbox-jyut-yun" name="dataCheck" value="checkbox-jyut-yun" onclick="javascript:{document.getElementsByClassName('checkbox-jyut-1').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-jyut-yun">韻</label></div>`, ITEM: `第一先蘚線屑 先 屑|第二威偉畏 威|第三幾紀記 幾|第四諸主著 諸|第五修叟秀 修|第六東董凍篤 東 篤|第七英影應益 英 益|第八賓禀嬪𤲃 賓 𤲃|第九張掌帳着 張 着|第十剛講降角 剛 角|第十一朝沼照 朝|第十二孤古故 孤|第十三鴛婉怨乙 鴛 乙|第十四皆解介 皆|第十五登等凳德 登 德|第十六師史四 師|第十七金錦禁急 金 急|第十八交絞教 交|第十九栽宰載 栽|第二十兼檢劍劫 兼 劫|第二十一津贐進卒 津 卒|第二十二雖髓歲 雖|第二十三科火貨 科|第二十四緘减鑒甲 緘 甲|第二十五翻反泛發 翻 發|第二十六家賈嫁 家|第二十七官管貫括 官 括|第二十八魁賄誨 魁|第二十九遮者蔗 遮|第三十干趕幹割 干 割|第三十一甘敢紺蛤 甘 蛤|第三十二彭棒硬額 彭 額|第三十三吾五悟 吾` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut" id="checkbox-jyut-tone" name="dataCheck" value="checkbox-jyut-tone" onclick="javascript:{document.getElementsByClassName('checkbox-jyut-2').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-jyut-tone">調</label></div>`, ITEM: `陰平 陰上 陰去 陰入 陽平 陽上 陽去 陽入` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut" id="checkbox-jyut-fanqie" name="dataCheck" value="checkbox-jyut-fanqie" onclick="javascript:{document.getElementsByClassName('text-jyut-fanqie').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-jyut-fanqie">反切</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut" id="checkbox-jyut-expl" name="dataCheck" value="checkbox-jyut-expl" onclick="javascript:{document.getElementsByClassName('text-jyut-expl').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-jyut-expl">字義</label></div>`, ITEM: `` }
];

// 格式化顯示爲checkbox
function formatCheckBox3 (value,index) {
	let selArr = [];
	for (let i in value.split('|')) {
		for (let j in value.split('|')[i].split(' ')) {
			if (index==0 || index==1){
				if (j!= 0){
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut jyut-item-${index} checkbox-jyut-${index} checkbox-jyut-${index}-${i}" id="checkbox-jyut_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox-jyut_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}else{
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut checkbox-jyut-${index} checkbox-jyut-${index}-${i}" id="checkbox-jyut_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}" onclick="javascript:{document.getElementsByClassName('checkbox-jyut-${index}-${i}').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-jyut_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}
			} else if(index==3){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-jyut-fanqie" id="text_jyutfanqie" value="" disabled/></div>`);
			} else if(index==4){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-jyut-expl" id="text_jyutexpl" value="" disabled/></div>`);
			} else {
				selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-jyut checkbox-jyut-${index} checkbox-jyut-${index}-${i}" id="checkbox-jyut_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox-jyut_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
			}
		}
		selArr.push(`<br/>`);
	}
	return selArr.join('');
}

// 贊助名單(暫不使用表格)
/*const colData_sponsor = [
	{ field: 'TIME', title: '贊助時間', align: 'center' }
	, { field: 'WAY', title: '轉賬方式', align: 'center' }
	, { field: 'NAME',title: '贊助人', align: 'center' }
	, { field: 'MONEY',title: '金錢', align: 'center' }
];

const rowData_sponsor = [
	{ TIME: '2020-04-06', WAY: '微信轉賬', NAME: 'C*o', MONEY: '保密' }
];
*/


let playlist = [
	{ title: "Celebrity Mashup", artist: "Blue Stahli", mp3: "http://music.163.com/song/media/outer/url?id=26358699.mp3" ,cover: "http://p1.music.126.net/_fO4tqYgG2-SbYCjTB0Qiw==/109951165209621635.jpg?param=130y130" }
	, { title: "顽童", artist: "大宇", mp3: "http://music.163.com/song/media/outer/url?id=1433376109.mp3" ,cover: "http://p2.music.126.net/-fkYAJ6ZEUF3z_SvCi7nZA==/109951164832402338.jpg?param=130y130" }
	, { title: "Trouble Maker", artist: "Soundroll", mp3: "http://music.163.com/song/media/outer/url?id=39224325.mp3" ,cover: "http://p1.music.126.net/pNrh9cQMc8S8s2saGFrDwA==/3223768095974144.jpg?param=130y130" }
	, { title: "轻轻地告诉你", artist: "杨钰莹", mp3: "http://music.163.com/song/media/outer/url?id=317396.mp3" ,cover: "http://p2.music.126.net/O51NKwxOEmWlOXw3-hY6BA==/109951167519003016.jpg?param=130y130" }
	, { title: "Miami Nights", artist: "Work Drugs", mp3: "http://music.163.com/song/media/outer/url?id=532776022.mp3" ,cover: "http://p1.music.126.net/nnj8wlrsc6yLJ9aujhcc0A==/109951165449485352.jpg?param=130y130" }
	, { title: "柳叶笺 (Instrumental)", artist: "朱彦安", mp3: "http://music.163.com/song/media/outer/url?id=553798646.mp3" ,cover: "http://p1.music.126.net/BfUADafLXpKYAubWpWZJZw==/109951163253095310.jpg?param=130y130" }
	, { title: "Samurai 45 (伴奏《异度侵入 ID_INVADED》插曲)", artist: "Hinno", mp3: "http://music.163.com/song/media/outer/url?id=2009429476.mp3" ,cover: "http://p1.music.126.net/Bt8ZcyJMfGjKJedn_ue2Jw==/109951168172151605.jpg?param=130y130" }
	, { title: "one day before i die", artist: "nobody likes you pat", mp3: "http://music.163.com/song/media/outer/url?id=1986926142.mp3" ,cover: "http://p1.music.126.net/5NCG08qMlA5SHjnu3m99qg==/109951167937905668.jpg?param=130y130" }
	, { title: "星间旅行 Interstellar Journey (英文版)", artist: "HOYO-MiX / Lea Sirk", mp3: "http://music.163.com/song/media/outer/url?id=2043177706.mp3" ,cover: "http://p2.music.126.net/JaSa3Gt5oaJ77cDfJBR1fg==/109951168575641463.jpg?param=130y130" }
	, { title: "致：黯淡星", artist: "傲七爷 / 哦漏", mp3: "http://music.163.com/song/media/outer/url?id=2047787698.mp3" ,cover: "http://p2.music.126.net/LAXHjEEFTBTgg85eHWQ0LQ==/109951168616575456.jpg?param=130y130" }
	, { title: "城市青年图鉴", artist: "侯磊", mp3: "http://music.163.com/song/media/outer/url?id=1905604895.mp3" ,cover: "http://p2.music.126.net/bltsKq7u2MtjWXnbJAIArg==/109951166778335025.jpg?param=130y130" }
	, { title: "杀死那个石家庄人", artist: "万能青年旅店", mp3: "http://music.163.com/song/media/outer/url?id=386844.mp3" ,cover: "http://p1.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg?param=130y130" }
];
let isRotate = true;
let autoplay = false;
function bgChange(){
	let lis= $('.lib');
	for(let i=0; i<lis.length; i+=2)
	lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
}
window.onload = bgChange;


// 鏈接顯示函數
function showLink(textChar){
	const outputText = [], outputText2 = [], outputText3 = [];
	outputText.push(`<div class="card mt-1 mb-3"><div class="card-header">快速鏈接</div><div class="card-body text-secondary"><span>
	漢典網：<a href="http://www.zdic.net/hans/${textChar}" target="_blank">${textChar}</a> | <a href="http://www.zdic.net/zd/yy/yy/${textChar}" target="_blank">粵語</a> | <a href="http://www.zdic.net/zd/yy/ph/${textChar}" target="_blank">平話</a></br>
	韻典網：<a href="https://ytenx.org/zim?dzih=${textChar}&dzyen=1&jtkb=1&jtkd=1&jtdt=1&jtgt=1" target="_blank">${textChar}</a></br>
	國學大師：<a href="http://www.guoxuedashi.net/zidian/${encodeUnicode(textChar).replace('\\u','')}.html" target="_blank">${textChar}</a></br>
	古今文字集成：<a href="http://www.ccamc.co/cjkv.php?cjkv=${textChar}" target="_blank">${textChar}</a></br>
	粵音資料集叢：<a href="https://jyut.net/query?q=${textChar}" target="_blank">${textChar}</a></br>
	漢語多功能字庫：<a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=${textChar}" target="_blank">${textChar}</a> | <a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/dialect.php?word=${textChar}" target="_blank">其他方言讀音</a></br>
	漢字音典：<a href="https://mcpdict.sourceforge.io/cgi-bin/index.py" target="_blank">前往</a></br>
	粵典：<a href="https://words.hk/zidin/wan/?q=${textChar}" target="_blank">${textChar}</a></br>
	CC-Canto：<a href="https://www.cccanto.org/search.php?q=${textChar}" target="_blank">${textChar}</a></br>
	開放粵語詞典：<a href="https://kaifangcidian.com/han/yue/?${textChar}" target="_blank">${textChar}</a></br>
	縱橫在線中文字典：<a href="https://ckc.eduhk.hk/ckc2/dictionary.php?jiinput=${textChar}&lang=b5&form1=1" target="_blank">${textChar}</a></br>
	HKIED 繁簡辨識（1.0版）：<a href="https://ckc.eduhk.hk/ckc2/translate.php?word=${textChar}&lang=" target="_blank">${textChar}</a></br>
	英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/search.php?titleOnlyBtn=true&searchStr=${textChar}&lang=b5" target="_blank">${textChar}</a></br>
	粵拼歌詞網：<a href="https://jyut6.com/search.php?keyword=${textChar}" target="_blank">${textChar}</a></br>
	翡翠粵語歌詞：<a href="https://www.feitsui.com/zh-hans/search/?query=${textChar}" target="_blank">${textChar}</a></br>
	中國大百科全書數據庫：<a href="https://h.bkzx.cn/search?query=${textChar}&sublibId=" target="_blank">${textChar}</a></br>
	中國哲學書電子化計劃：<a href="https://ctext.org/dictionary.pl?if=gb&char=${textChar}" target="_blank">${textChar}</a></br>
	大學數字圖書館合作計劃：<a href="https://cadal.edu.cn/index/home" target="_blank">前往</a></br>
	萬方方誌數據庫：<a href="http://fz.wanfangdata.com.cn/index.do" target="_blank">前往</a></br>
	</span></div></div>`);
	
	outputText2.push(`<div class="card mt-1 mb-3"><div class="card-header">快速鏈接</div><div class="card-body text-secondary"><span>
	字海|葉典：<a href="http://zisea.com/zscontent.asp?uni=${encodeUnicode(textChar).replace('\\u','')}" target="_blank">${textChar}</a></br>
	字統网：<a href="https://zi.tools/zi/${textChar}" target="_blank">${textChar}</a></br>
	漢字全息資源應用系統：<a href="http://qxk.bnu.edu.cn/#/danziDetail/42c2d834-fa1d-47e9-9f90-972a687183f7/${textChar}/22d3af76-1ffe-46da-8c28-40e7dfe6b8d2/0" target="_blank">${textChar}</a></br>
	教育部國語小字典：<a href="https://dict.mini.moe.edu.tw/SearchIndex/searchResult?searchType=one&dictSearchField=${textChar}" target="_blank">${textChar}</a></br>
	Forvo：<a href="https://zh.forvo.com/search/${textChar}/" target="_blank">${textChar}</a></br>
	Unihan：<a href="https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint=${textChar}" target="_blank">${textChar}</a></br>
	萌典：<a href="https://www.moedict.tw/${textChar}" target="_blank">${textChar}</a></br>
	辭海：<a href="https://www.cihai.com.cn/search/words?q=${textChar}" target="_blank">${textChar}</a></br>
	活用中文大辭典：<a href="https://lib.ctcn.edu.tw/chtdict/result.aspx?keyword=${textChar}" target="_blank">${textChar}</a></br>
	漢字ペディア：<a href="https://www.kanjipedia.jp/search?k=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>
	CHISE IDS 漢字検索：<a href="http://www.chise.org/ids-find?components=${textChar}" target="_blank">${textChar}</a></br>
	GlyphWiki：<a href="http://glyphwiki.org/wiki/${encodeUnicode(textChar).replace('\\','')}?tdsourcetag=s_pctim_aiomsg" target="_blank">${textChar}</a></br>
	Chinese Etymology 字源：<a href="https://hanziyuan.net/#${textChar}" target="_blank">${textChar}</a></br>
	ChuNom：<a href="https://chunom.org/pages/?search=${textChar}" target="_blank">${textChar}</a></br>
	小雞詞典：<a href="https://jikipedia.com/search?phrase=${textChar}&kt=1&sk=leftHand" target="_blank">${textChar}</a></br>
	CantoDict：<a href="http://www.cantonese.sheik.co.uk/scripts/masterlist.htm" target="_blank">前往</a></br>
	中國數字方誌庫：<a href="http://x.wenjinguan.com/" target="_blank">前往</a></br>
	中國歷史文獻總庫：<a href="http://mg.nlcpress.com/library/publish/default/Login.jsp" target="_blank">前往</a></br>
	廣西師範大學圖書館：<a href="http://www.library.gxnu.edu.cn/main.htm" target="_blank">前往</a></br>
	</span></div></div>`);
	
	outputText3.push(`<div class="card mt-1 mb-3"><div class="card-header">快速鏈接</div><div class="card-body text-secondary"><span>
	東方語言學：<a href="http://www.eastling.org/" target="_blank">前往</a></br>
	漢語方言學大詞典：<a href="http://www.fangyanxue.com:8090/pages/index/index.html" target="_blank">前往</a></br>
	古音小鏡：<a href="http://www.kaom.net/" target="_blank">前往</a></br>
	小學堂：<a href="http://xiaoxue.iis.sinica.edu.tw/" target="_blank">前往</a></br>
	早期漢語方言文獻資料庫：<a href="http://database.shss.ust.hk/5dialects/" target="_blank">前往</a></br>
	香港小學學習字詞表：<a href="https://www.edbchinese.hk/lexlist_ch/" target="_blank">前往</a></br>
	壯漢在線詞典：<a href="http://www.jiu60.com/hoiz/" target="_blank">前往</a></br>
	廣東省情網：<a href="http://dfz.gd.gov.cn/" target="_blank">前往</a></br>
	中共廣州市委黨史文獻研究室：<a href="http://www.gzsqw.org.cn/" target="_blank">前往</a></br>
	廣西地情資料庫：<a href="http://www.gxdfz.org.cn/gdtz/" target="_blank">前往</a></br>
	開放康熙字典：<a href="http://kangxi.adcs.org.tw/kangxizidian/" target="_blank">前往</a></br>
	漢語大字典檢索：<a href="http://www.homeinmists.com/hd/search.html" target="_blank">前往</a></br>
	國學寶典：<a href="http://www.gxbd.com/" target="_blank">前往</a></br>
	說文解字在線查詢：<a href="http://www.shuowen.org/" target="_blank">前往</a></br>
	現代標準漢語與粵語對照資料庫：<a href="http://apps.itsc.cuhk.edu.hk/hanyu/Page/Cover.aspx" target="_blank">前往</a></br>
	ISO漢字查詢系統：<a href="http://glyph.iso10646hk.net/chinese/icharacters.jsp" target="_blank">前往</a></br>
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
    let res = [];
    for (let i = 0; i < str.length; i++) {
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
	outputstr = outputstr.replace(/(\b)(m)(\d)/g, "$1m̩$3");
	outputstr = outputstr.replace(/(\b)(ng)(\d)/g, "$1ŋ̍$3");
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

	if (IPA_version == 'tIPA2' || IPA_version == 'nIPA4' || IPA_version == 'tIPA4') {
		outputstr = outputstr.replace(/gw/g,"Ku");
		outputstr = outputstr.replace(/kw/g,"Kʰu");
	} else {
		outputstr = outputstr.replace(/gw/g,"Kʷ");
		outputstr = outputstr.replace(/kw/g,"Kʷʰ");
	}
	
    outputstr = outputstr.replace(/(\b)([ptk])(\D\S)/g,"$1$2ʰ$3");
    outputstr = outputstr.replace(/(\b)b/g,"$1p");
    outputstr = outputstr.replace(/(\b)d/g,"$1t");
    outputstr = outputstr.replace(/(\b)g/g,"$1k");
	
    outputstr = outputstr.replace(/zy(\d)/g,"t͡Sɿ$1");
    outputstr = outputstr.replace(/cy(\d)/g,"t͡Sʰɿ$1");
    outputstr = outputstr.replace(/sy(\d)/g,"Sɿ$1");
    outputstr = outputstr.replace(/ng/g,"ŋ");
	
  if (IPA_version == 'nIPA' || IPA_version == 'tIPA' || IPA_version == 'tIPA3' || IPA_version == 'nIPA4' || IPA_version == 'tIPA4'){
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
	
  if (IPA_version == 'tIPA' || IPA_version == 'tIPA4'){
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
	} else if(IPA_version == 'nIPA2' || IPA_version == 'nIPA4') {
        outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"o$1");
		    outputstr = outputstr.replace(/ɪ/g,"e");
	} else if(IPA_version == 'nIPA3')  {
		    outputstr = outputstr.replace(/ʊ(k|ŋ)/g,"u$1");
		    outputstr = outputstr.replace(/ɪ(k|ŋ)/g,"i$1");
	}

  if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'nIPA4' || IPA_version == 'gIPA'){
        outputstr = outputstr.replace(/([ptk])6/g,"$1̚˨");
        outputstr = outputstr.replace(/([ptk])3/g,"$1̚˧");
        outputstr = outputstr.replace(/([ptk])1/g,"$1̚˥");	
	} else if(IPA_version == 'tIPA' || IPA_version == 'tIPA3' || IPA_version == 'tIPA4') {
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
	
    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'nIPA4'){
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
	
    if (IPA_version == 'nIPA' || IPA_version == 'nIPA2' || IPA_version == 'nIPA3' || IPA_version == 'nIPA4' || IPA_version == 'gIPA'){
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
	
	outputstr = outputstr.replace(/^([∅]|)([yi])([aeiouœʊɐɛɪɔə]|)([ŋmnptk]|)(\d|)/g,"∅$2$3$4$5");
	outputstr = outputstr.replace(/^([∅]|)([yi])(\d|)/g,"∅$2$3");

    outputstr = outputstr.replace(/kʷʰ|kʰʷ|kwh|khw|kʰu|khu/g,"Kw");
    outputstr = outputstr.replace(/kʷ|kw|ku/g,"gw");
    outputstr = outputstr.replace(/(Kw)([inktg]*)(\d)/g,"Ku$2$3");
    outputstr = outputstr.replace(/(gw)([inktg]*)(\d)/g,"gu$2$3");

    outputstr = outputstr.replace(/(\b)p([^hʰ\s\d])/g,"$1b$2");
    outputstr = outputstr.replace(/(\b)t([^hʰ\s\d])/g,"$1d$2");
    outputstr = outputstr.replace(/(\b)k([^hʰ\s\d])/g,"$1g$2");
    outputstr = outputstr.replace(/(\b)(ph|pʰ)/g,"$1p");
    outputstr = outputstr.replace(/(\b)(th|tʰ)/g,"$1t");
    outputstr = outputstr.replace(/(\b)(kh|kʰ)/g,"$1k");

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
	
	if (IPA_version == 'tIPA2' || IPA_version == 'tIPA4') {
		outputstr = outputstr.replace(/∅u/g,"wu");
		outputstr = outputstr.replace(/^([∅]|)([u])([int]|)(\d|)/g,"w$2$3$4");
		outputstr = outputstr.replace(/∅y/g,"jy");
	}
    outputstr = outputstr.replace(/^[ʔ∅0Ø]/g,"");

    outputstr = outputstr.toLowerCase();
	
	return outputstr;
}


const syllable = ['a','aa','aai','aak','aan','aang','aap','aat','aau','ai','ak','am','an','ang','ap','at','au','baa','baai','baak','baan','baang','baap','baat','baau','bai','bak','bam','ban','bang','bap','bat','bau','be','bek','ben','beng','bet','beu','bi','bik','bin','bing','bit','biu','bo','bok','bong','bot','bu','bui','buk','bun','bung','but','caa','caai','caak','caam','caan','caang','caap','caat','caau','cai','cak','cam','can','cang','cap','cat','cau','ce','cek','cem','cen','ceng','cep','cet','ceu','ci','cik','cim','cin','cing','cip','cit','ciu','co','coek','coeng','coi','cok','cong','cot','cu','cui','cuk','cung','cy','cyu','cyun','cyut','daa','daai','daak','daam','daan','daang','daap','daat','dai','dak','dam','dan','dang','dap','dat','dau','de','dek','dem','deng','dep','det','deu','di','dik','dim','din','ding','dip','dit','diu','do','doe','doek','doeng','doet','doi','dok','dong','du','dui','duk','dung','dut','dyun','dyut','e','ek','en','et','eu','faa','faai','faak','faan','faat','fai','fak','fan','fang','fat','fau','fe','fen','fet','fi','fik','fing','fit','fiu','fo','fok','fong','fot','fu','fui','fuk','fun','fung','fut','gaa','gaai','gaak','gaam','gaan','gaang','gaap','gaat','gaau','gai','gak','gam','gan','gang','gap','gat','gau','ge','gem','gen','geng','gep','geu','gi','gik','gim','gin','ging','gip','git','giu','go','goe','goek','goeng','goi','gok','gon','gong','got','gu','gui','guk','gun','gung','gut','gwaa','gwaai','gwaak','gwaan','gwaang','gwaat','gwai','gwak','gwan','gwang','gwat','gwe','gwen','gwet','gwik','gwing','gwo','gwok','gwong','gyu','gyun','gyut','haa','haai','haak','haam','haan','haang','haap','haat','haau','hai','hak','ham','han','hang','hap','hat','hau','he','hek','hem','hen','heng','het','heu','hi','hik','him','hin','hing','hip','hit','hiu','hm','hng','ho','hoe','hoeng','hoet','hoi','hok','hon','hong','hot','hu','huk','hung','hyu','hyun','hyut','ik','jaa','jaai','jaak','jaam','jaang','jaap','jaau','jai','jak','jam','jan','jang','jap','jat','jau','je','jek','jem','jen','jeng','jep','jet','jeu','ji','jik','jim','jin','jing','jip','jit','jiu','jo','joek','joeng','jot','ju','jui','juk','jung','jyu','jyun','jyut','kaa','kaai','kaak','kaam','kaat','kaau','kai','kak','kam','kan','kang','kap','kat','kau','ke','kek','kem','ken','keng','ket','keu','ki','kik','kim','kin','king','kip','kit','kiu','ko','koek','koeng','koi','kok','kong','ku','kui','kuk','kung','kwaa','kwaai','kwaak','kwaang','kwai','kwak','kwan','kwang','kwe','kwik','kwok','kwong','kyu','kyun','kyut','la','laa','laai','laak','laam','laan','laang','laap','laat','laau','lai','lak','lam','lan','lang','lap','lat','lau','le','lek','lem','len','leng','lep','let','leu','li','lik','lim','lin','ling','lip','lit','liu','lo','loe','loek','loeng','loi','lok','long','lot','lu','lui','luk','lung','lyu','lyun','lyut','m','maa','maai','maak','maan','maang','maat','maau','mai','mak','mam','man','mang','map','mat','mau','me','mek','men','meng','met','meu','mi','mik','min','ming','mit','miu','mo','mok','mong','mu','mui','muk','mun','mung','mut','naa','naai','naak','naam','naan','naang','naap','naat','naau','nai','nak','nam','nan','nang','nap','nat','nau','ne','nem','nen','neng','nep','net','neu','ng','ngaa','ngaai','ngaak','ngaam','ngaan','ngaang','ngaap','ngaat','ngaau','ngai','ngak','ngam','ngan','ngang','ngap','ngat','ngau','nge','ngen','ngep','nget','ngeu','ngi','ngik','nging','ngo','ngoe','ngoi','ngok','ngon','ngong','ngu','nguk','ni','nik','nim','nin','ning','nip','nit','niu','no','noek','noeng','noi','nok','nong','not','nu','nui','nuk','nung','nyu','nyun','o','oet','oi','ok','on','ong','paa','paai','paak','paan','paang','paap','paat','paau','pai','pam','pan','pang','pap','pat','pau','pe','pek','pen','peng','pet','peu','pi','pik','pin','ping','pit','piu','po','pok','pong','pu','pui','puk','pun','pung','put','saa','saai','saak','saam','saan','saang','saap','saat','saau','sai','sam','san','sap','sat','sau','se','sek','sen','seng','sep','set','seu','si','sik','sim','sin','sing','sip','sit','siu','slaa','slaai','slaak','slaam','slaan','slaap','slaat','slaau','slai','slak','slam','slan','slang','slap','slat','slau','sle','slek','slem','slen','sleng','slep','slet','sleu','sli','slik','slin','sling','slip','slit','sliu','slo','sloe','sloek','sloeng','sloi','slok','slong','slot','slu','slui','sluk','slung','slyu','slyun','slyut','so','soe','soek','soeng','soi','sok','song','su','sui','suk','sung','sy','syu','syun','syut','taa','taai','taam','taan','taap','taat','tai','tak','tam','tan','tang','tap','tau','tek','ten','teng','tep','tet','teu','tik','tim','tin','ting','tip','tit','tiu','to','toe','toi','tok','tong','tu','tui','tuk','tung','tyun','tyut','u','ui','uk','ung','waa','waai','waak','waan','waang','waat','wai','wak','wan','wang','wat','wau','we','wen','wet','wik','wing','wo','wok','wong','wu','wui','wun','wung','wut','zaa','zaai','zaak','zaam','zaan','zaang','zaap','zaat','zaau','zai','zak','zam','zan','zang','zap','zat','zau','ze','zek','zem','zen','zeng','zep','zet','zeu','zi','zik','zim','zin','zing','zip','zit','ziu','zo','zoe','zoek','zoeng','zoet','zoi','zok','zong','zu','zui','zuk','zung','zy','zyu','zyun','zyut'];

const syllable_bw = ['aa','aai','aak','aam','aan','aang','aap','aat','aau','ai','ak','am','an','ang','ap','at','au','baa','baai','baak','baam','baan','baang','baap','baat','baau','bai','bak','bam','ban','bang','bap','bat','bau','be','bem','ben','bet','beu','bi','biak','biang','bik','bin','bing','bit','biu','bo','boek','boeng','bot','bu','bui','buk','bun','bung','but','byu','caa','caai','caak','caam','caan','caang','caap','caat','caau','cai','cak','cam','can','cang','cap','cat','cau','ce','cem','cen','cet','ci','ciak','ciang','cik','cim','cin','cing','cip','cit','ciu','co','coek','coeng','con','cot','cu','cui','cuk','cun','cut','cyu','cyun','cyut','daa','daai','daak','daam','daan','daang','daap','daat','daau','dai','dak','dam','dan','dang','dap','dat','dau','de','dem','den','dep','det','deu','di','diak','diang','dik','dim','din','ding','dip','dit','diu','do','doek','doeng','dot','du','dui','duk','dun','dung','dut','dyu','e','em','en','et','eu','faak','faam','faan','faat','fai','fak','fam','fan','fang','fat','fau','fe','fet','fi','fik','fing','fit','fiu','fo','foek','foeng','fot','fu','fuk','fung','ga','gaa','gaai','gaak','gaam','gaan','gaang','gaap','gaat','gaau','gai','gak','gam','gan','gang','gap','gat','gau','ge','gem','gen','gep','get','geu','gi','giak','giang','gik','gim','gin','ging','gip','git','giu','go','goek','goeng','got','gu','gui','guk','gun','gung','gut','gwaa','gwaai','gwaak','gwaan','gwaang','gwaat','gwai','gwan','gwang','gwat','gwe','gwet','gwik','gwing','gyu','gyun','gyut','haa','haai','haak','haam','haan','haang','haap','haat','haau','hai','hak','ham','han','hang','hap','hat','hau','he','hem','hen','hep','het','heu','hi','hiak','hiang','hik','him','hin','hing','hip','hit','hiu','hm','hng','ho','hoe','hoek','hoeng','hon','hu','hui','huk','hun','hung','hut','hyu','hyun','hyut','i','iak','ik','ing','jaa','jaak','jaam','jaap','jaat','jaau','jai','jak','jam','jan','jap','jat','jau','je','jet','ji','jiak','jiang','jik','jim','jin','jing','jip','jit','jiu','jo','joek','joeng','jot','ju','jui','jyu','jyun','jyut','kaa','kaai','kaak','kaam','kaang','kaat','kaau','kai','kak','kam','kang','kap','kat','kau','ke','ket','keu','ki','kiak','kiang','kik','kin','king','kit','kiu','ko','koek','koeng','kon','ku','kui','kuk','kung','kwaa','kwaai','kwaak','kwaang','kwai','kwak','kwan','kwang','kwat','kwe','kwik','kyu','kyut','laa','laai','laak','laam','laan','laang','laap','laat','laau','lai','lak','lam','lan','lang','lap','lat','lau','le','lem','lep','let','leu','li','liak','liang','lik','lim','lin','ling','lip','lit','liu','lo','loe','loek','loeng','lon','lot','lu','lui','luk','lun','lung','lut','lyu','lyun','lyut','m','maa','maai','maak','maan','maang','maap','maat','maau','mai','mak','mam','man','mang','map','mat','mau','me','men','met','meu','mi','miak','miang','mik','min','ming','mit','miu','mo','moek','moeng','mon','mot','mu','mui','muk','mun','mung','mut','naa','naai','naak','naam','naan','naang','naap','naat','naau','nai','nak','nam','nan','nang','nap','nat','nau','ne','nem','nen','nep','net','neu','ng','ngaa','ngaai','ngaak','ngaam','ngaan','ngaang','ngaap','ngaat','ngaau','ngai','ngak','ngam','ngan','ngap','ngat','ngau','nge','ngen','ngep','nget','ngeu','ngiak','ngiang','nging','ngo','ngu','nguk','ni','niak','niang','nik','nim','nin','ning','nip','nit','niu','njaa','njaai','njaak','njaam','njaan','njaap','njaau','njak','njam','njan','njang','njap','njat','njau','nje','njen','nji','njim','njin','njit','njoek','njoeng','njon','njui','njuk','njung','njyu','njyun','njyut','no','noek','noeng','not','nu','nui','nuk','nun','nung','nyu','o','oe','oek','oeng','oet','paa','paai','paak','paan','paang','paap','paat','paau','pai','pam','pan','pang','pap','pat','pau','pe','pem','pen','pet','peu','pi','piak','piang','pik','pin','ping','pit','piu','po','poek','poeng','pu','pui','puk','pun','put','saa','saai','saak','saam','saan','saang','saap','saat','saau','sai','sam','san','sang','sap','sat','sau','se','sen','set','si','siak','siang','sik','sim','sin','sing','sip','sit','siu','slaa','slaai','slaak','slaam','slaan','slaang','slaap','slaat','slaau','slai','slak','slam','slan','slang','slap','slat','slau','sle','slek','slen','slep','slet','sli','sliak','sliang','slik','slin','sling','slip','slit','sliu','slo','sloek','sloeng','slon','slu','slui','slun','slyu','slyun','slyut','so','soek','soeng','sok','su','sui','suk','sung','syu','syun','syut','taa','taai','taak','taam','taan','taang','taap','taat','taau','tai','tak','tam','tan','tang','tap','tat','tau','tet','teu','tik','tim','tin','ting','tip','tit','tiu','to','toek','toeng','tu','tui','tuk','tun','tut','u','ui','uk','ung','waa','waai','waak','waan','waang','waat','waau','wai','wan','wang','wat','wau','we','wet','wiak','wiang','wik','wing','wo','woeng','wu','wui','wuk','wun','zaa','zaai','zaak','zaam','zaan','zaang','zaap','zaat','zaau','zai','zak','zam','zan','zang','zap','zat','zau','ze','zen','zep','zet','zeu','zi','ziak','ziang','zik','zim','zin','zing','zip','zit','ziu','zo','zoek','zoeng','zon','zot','zu','zui','zuk','zun','zung','zut','zyu','zyun','zyut'];
