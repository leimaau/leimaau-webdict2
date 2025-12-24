/*
全局配置
*/

const cdnAddr = [];
//cdnAddr.push('https://fastly.jsdelivr.net/npm');
//cdnAddr.push('leimaau-npm-cdn@1.5.9');
//cdnAddr.push('db/leimaau.db3');
cdnAddr.push('https://delicate-bombolone-0bc03e.netlify.app/');
cdnAddr.push('public/leimaau.db3.gz'); // 使用gzip压缩文件

const cdnAddr2 = [];
//cdnAddr2.push('https://fastly.jsdelivr.net/npm');
//cdnAddr2.push('leimaau-npm-cdn@1.5.9');
//cdnAddr2.push('db/leimaau2.db3');
cdnAddr2.push('https://delicate-bombolone-0bc03e.netlify.app/');
cdnAddr2.push('public/leimaau2.db3.gz'); // 使用gzip压缩文件

const cdnAddr3 = [];
//cdnAddr3.push('https://fastly.jsdelivr.net/npm');
//cdnAddr3.push('leimaau-npm-cdn@1.5.9');
//cdnAddr3.push('db/leimaau3.db3');
cdnAddr3.push('https://delicate-bombolone-0bc03e.netlify.app/');
cdnAddr3.push('public/leimaau3.db3.gz'); // 使用gzip压缩文件

const DictConfig = {
  //dir: 'db/leimaau.db3',  // 使用本地庫
  dir: cdnAddr.join('/'),  // 使用CDN加速
  dir2: cdnAddr2.join('/'),
  dir3: cdnAddr3.join('/')
};

// 配置 DOMPurify
const purifyConfig = {
    ALLOWED_TAGS: [
        'div', 'span', 'a', 'br', 'input', 'label',  // 基础标签
        'ruby', 'rt', 'rp',  // 注音相关
        'small', 'b', 'pre', 'h5'  // 格式化相关
    ],
    ALLOWED_ATTR: [
        'class', 'href', 'target',  // 基础属性
        'type', 'id', 'name', 'value',  // input 属性
        'onclick', 'disabled',  // 交互属性
        'for',  // label 属性
        'data-toggle', 'style', 'role', 'aria-label'  // Bootstrap 相关
    ]
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
	//, { BOOK: '2000年李連進《南寧近郊平話方言島》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2000年李連進《平話音韻研究》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2000_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P: 'noData' , BY_P2: '' , BY_P3: '' , MS_P: 'noData'}
	, { BOOK: '2003年侯精一《現代漢語方言音庫(字庫)》', NN: 'tab_2003', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2007年李彬《左江土白話研究》', NN: 'tab_200706', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '', BY_P2: '' , BY_P3: '' , MS_P: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'tab_2007', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', NN_SH: '', HX_P: 'noData', BY_P: '', BY_P2: 'noData' , BY_P3: '' , MS_P: '' }
	, { BOOK: '2007年白雲《廣西疍家話語音研究》', NN: '', NN_D: 'noData', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2007年林亦《南寧石埠平話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2009年陳海倫、林亦《粵語平話土話方音字彙》', NN: 'tab_2009', NN_D: '', NN_Y: 'noData', HX_B: '', NN_T: 'tab_2009_bw', NN_SL: '', NN_S: '', NN_SH: 'noData', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: 'noData' , MS_P: ''}
	, { BOOK: '2009年張菁雅《桂南平話語音研究》', NN: 'tab_200906', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: 'noData', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2017年教育部《漢語方言用字規範》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201703_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2017年詹伯慧、張振興《漢語方言學大詞典》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_201705_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年滕祖愛《南寧市與桂平市粵方言比較研究》', NN: 'tab_201806', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年覃遠雄《南寧心墟平話語音系統》', NN: '', NN_D: '', NN_Y: '', HX_B: '', NN_T: '', NN_SL: 'noData', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2018年Leimaau《南寧話審音表》(本站提供)', NN: 'tab_2018', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2018_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2019年莫思敏、談婷《廣西橫縣白話同音字彙》', NN: '', NN_D: '', NN_Y: '', HX_B: 'noData', NN_T: '', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	, { BOOK: '2021年Leimaau《單字音零散資料匯總》(本站提供)', NN: 'tab_2021', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2021_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
	//, { BOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/2022.html">2022年電腦《切韻音系自動推導理論音》(本站提供)</a>', NN: 'tab_2022', NN_D: '', NN_Y: '', HX_B: '', NN_T: 'tab_2022_bw', NN_SL: '', NN_S: '', NN_SH: '', HX_P: '', BY_P: '' , BY_P2: '' , BY_P3: '' , MS_P: ''}
];

// 詞典資料
const colData_oldbook_proverb = [
	{ field: 'OLDBOOK', title: '近現代資料', align: 'center' }
	, { field: 'OLDPROVERB', title: '早期童謠', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'PROVERB', title: '近代諺語、童謠等', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
	, { field: 'PHRASE', title: '現代漢語詞彙', align: 'center', formatter: (value) => { return formatCheckBox(value, '_phrase') } }
];

const rowData_oldbook_proverb = [
	{ OLDBOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/1937jz_proverb.html">1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)·童謠》</a>', OLDPROVERB: 'tab_1937jz_proverb', PROVERB: '', PHRASE: '' }
	, { OLDBOOK: '<a class="text-info" target="_blank" href="https://leimaau.github.io/leimaau-webdict2/db/1937kk_proverb.html">1937年廣西省政府總務處統計室《南寧社會概況·童謠》</a>', OLDPROVERB: 'tab_1937kk_proverb', PROVERB: '', PHRASE: '' }
	//, { OLDBOOK: '1937年邕寧縣修誌委員會《邕寧縣誌(第4冊)·言語》', OLDPROVERB: '', PROVERB: '', PHRASE: 'noData'}
	//, { OLDBOOK: '?年萬立仁、劉子林《白話童謠300首辨析》', OLDPROVERB: '', PROVERB: 'noData', PHRASE: '' }
	, { OLDBOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', OLDPROVERB: '', PROVERB: 'tab_2008_proverb', PHRASE: '' }
	, { OLDBOOK: '2015年語保工程(南寧白話的諺語、童謠等)', OLDPROVERB: '', PROVERB: 'tab_2015_proverb', PHRASE: '' }
	, { OLDBOOK: '2020年Leimaau《南寧白話的諺語、童謠等》(本站提供)', OLDPROVERB: '', PROVERB: 'tab_2020_proverb', PHRASE: '' }
	, { OLDBOOK: '2021年Leimaau《南寧的諺語、童謠等零散資料匯總》(本站提供)', OLDPROVERB: '', PROVERB: 'tab_2021_proverb', PHRASE: '' }
	, { OLDBOOK: '2025年Leimaau《現代漢語詞彙讀音表》(本站提供)', OLDPROVERB: '', PROVERB: '', PHRASE: 'tab_xiandaihanyu_phrase'}
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
	, { BOOK: '1997年楊煥典《南寧話音檔》', NN: 'tab_1997_phrase', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '1997年李榮主編《南寧平話詞典》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '1998年楊煥典主編《廣西通誌·漢語方言誌》', NN: 'tab_1998_phrase', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2000年李連進《南寧近郊平話方言島》', NN: '', NN_D: '', HX_B: '', NN_T: 'noData', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2006年張均如《賓陽話的語音和詞彙》', NN: '', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: 'noData', BY_P2: '' }
	//, { BOOK: '2007年李彬《左江土白話研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	, { BOOK: '2007年謝建猷《廣西漢語方言研究》', NN: 'tab_2007_phrase', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: 'noData', HX_P: 'noData', BY_P: '', BY_P2: 'noData' }
	, { BOOK: '2008年林亦、覃鳳餘《廣西南寧白話研究》', NN: 'tab_2008_phrase', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	// 	黎丽程 宾阳话的基本词类及句式研究	
	// 	黎丽程 宾阳话的语音和词汇构成	
	//  王莉宁 桂南平话与粤语词汇比较方法探讨
	, { BOOK: '2015年黃增霞《廣西南寧疍家話詞彙研究》', NN: '', NN_D: 'noData', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	//, { BOOK: '2017年李怡《南寧白話古語詞研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
	//, { BOOK: '2017年韋慧梅《南寧白話詞彙研究》', NN: 'noData', NN_D: '', HX_B: '', NN_T: '', NN_SL: '', NN_S: '', HX_P: '', BY_P: '', BY_P2: '' }
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
	, { field: 'PAGE', title: '䈎', rowspan: 2, align: 'center', valign: 'middle', formatter: (value, row) => { return pageSplit(value.replace('*','s'), 'jpg', 'https://polite-cranachan-566a82.netlify.app/data-store/1856fy/fy') } }
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
	, { field: 'PAGE', title: '䈎', formatter: (value, row) => { return pageSplit(value, 'jpg', 'https://polite-cranachan-566a82.netlify.app/data-store/1941yy/yy') } }
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
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_proverb', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	//, { field: 'TRADSIMP', title: '繁體、簡體', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'TRADJYUTPING', title: '繁體、粵拼', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'TRAD', title: '繁體', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'SIMP', title: '簡體', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'proverb') } }
	, { field: 'EXPLNOTECLASSIFI', title: '釋義（或發音人情況）、本站校訂附註、分類', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'NOTE', title: '本站校訂附註', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'CLASSIFI', title: '分類', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

const colData_xiandaihanyu = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value}<span/>` } }
	//, {field: 'ID',title: 'ID'}
	//, { field: 'TRADSIMP', title: '繁體〔簡體〕', sortable : true, align: 'center', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	//, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	, { field: 'JYUTPING', title: '南寧白話', sortable : true, formatter: (value) => { let charStr = value.split(/,|\|\|/), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'phrase_jyut6ping3', 'dicPhrase')">${charStr[i]}</a>`); return aLink.join('<br/>') } }
	, { field: 'JYUTPING2', title: '南寧亭子平話', sortable : true, formatter: (value) => { let charStr = value.split(/,|\|\|/), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', 'phrase_jyut6ping3', 'dicPhrase')">${charStr[i]}</a>`); return aLink.join('<br/>') } }
	//, { field: 'SOUR', title: '來源（釋義主要來源）', sortable : true, formatter: (value) => { return '《現代漢語詞典（第7版）》' } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value.replace(/\/\/〖/g, '<br/>〖')}<span/>` } }
	//, { field: 'NOTE', title: '本站校訂附註', formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

const colData_phrase = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_phrase', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	//, { field: 'TRADSIMP', title: '繁體、簡體', sortable : true, align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', '${i}'=='0' ? 'phrase' : 'phrase_simp', 'dicPhrase')">${charStr[i]}</a>`); return aLink.join('<br/>') } }
	, { field: 'TRADJYUTPING', title: '繁體、粵拼', sortable : true, align: 'center', formatter: (value) => { let charStr = value.split('|'), aLink = []; for (let i in charStr) aLink.push(`<a href="javascript:querySubmit('${charStr[i]}', '${i}'=='0' ? 'phrase' : 'phrase_jyut6ping3', 'dicPhrase')">${charStr[i]}</a>`); return aLink.join('<br/>') } }
	//, { field: 'TRAD', title: '繁體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase', 'dicPhrase')">${value}</a>` } }
	//, { field: 'SIMP', title: '簡體', sortable : true, align: 'center', formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_simp', 'dicPhrase')">${value}</a>` } }
	//, { field: 'JYUTPING_IPA_TS', title: '粵拼〔統一IPA、原文IPA〕', sortable : true, formatter: (value) => { let jpStr = value.split('|'), aLink = []; for (let i in jpStr) aLink.push(i==0 ? `<a href="javascript:querySubmit('${jpStr[i]}', 'phrase_jyut6ping3', 'dicPhrase')">${jpStr[i]}</a>` : `${jpStr[i]}`); return aLink.join('<br/>') } }
	//, { field: 'IPA_S', title: '原文IPA', sortable : true }
	//, { field: 'IPA_T', title: '統一IPA', sortable : true }
	//, { field: 'JYUTPING', title: '粵拼', sortable : true, formatter: (value) => { return `<a href="javascript:querySubmit('${value}', 'phrase_jyut6ping3', 'dicPhrase')">${value}</a>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'phrase') } }
	, { field: 'EXPLNOTECLASSIFI', title: '釋義（或上一級分類）、本站校訂附註、分類', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'EXPL', title: '釋義（或上一級分類）', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'NOTE', title: '本站校訂附註', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'CLASSIFI', title: '分類', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
];

const colData_grammar = [
	{ field: 'YEAR', title: '資料', sortable : true, align: 'center', formatter: (value) => { return `<span class="user-font">${value.replace('_bw', '').replace('_grammar', '').replace('tab_', '')}</span>` } }
	//, {field: 'ID',title: 'ID'}
	//, { field: 'TRADSIMP', title: '繁體〔簡體〕', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'TRAD', title: '繁體', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'SIMP', title: '簡體', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'JYUTPING_IPA_TS', title: '粵拼〔統一IPA、原文IPA〕', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'IPA_S', title: '原文IPA', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	//, { field: 'IPA_T', title: '統一IPA', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'JYUTPING', title: '粵拼', sortable : true, align: 'left', formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'SOUR', title: '來源', sortable : true, formatter: (value, row) => { return formatSOUR(value, row['YEAR'], 'png', 'grammar') } }
	, { field: 'EXPL', title: '釋義', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'NOTE', title: '本站校訂附註', sortable : true, formatter: (value) => { return `<span style="white-space: normal">${value}<span/>` } }
	, { field: 'CLASSIFI', title: '分類', sortable : true, formatter: (value) => { return `<p data-toggle="tooltip" data-placement="left" title="${value}">${value}<p/>` } }
];

// 格式化來源欄
function formatSOUR(value, row_year, picTypeInput, qType) {
	let bookname = '';
	let picType = picTypeInput;
	if (qType == 'char'){
		bookname = rowData_book.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.NN_Y == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year || item.MS_P == row_year)).BOOK;
	} else if (qType == 'phrase') {
		bookname = rowData_book_phrase.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year)).BOOK;
	} else if (qType == 'grammar') {
		bookname = rowData_book_grammar.find(item => (item.NN == row_year || /2021/.test(row_year) || item.NN_D == row_year || item.HX_B == row_year || item.NN_T == row_year || item.NN_S == row_year || item.HX_P == row_year || item.BY_P == row_year)).BOOK;
	} else if (qType == 'proverb') {
		bookname = rowData_oldbook_proverb.find(item => (item.OLDPROVERB == row_year || /2021/.test(row_year) || item.PROVERB == row_year || item.PHRASE == row_year)).OLDBOOK;
	};
	bookname = bookname.replace(/<\/?a.*?>/g,'');
	row_year = row_year.replace('_bw', '').replace('_phrase', '').replace('_grammar', '').replace('_proverb', '').replace('tab_', '');
	//let linkaddr = 'https://leimaau.github.io/CDN/data-store/' + row_year;
	//let linkaddr = 'https://fastly.jsdelivr.net/gh/leimaau/CDN@latest/data-store/' + row_year;
	//let linkaddr = 'https://leimaau.github.io/CDN/index.html?value=' + row_year;
	let linkaddr = 'https://polite-cranachan-566a82.netlify.app/data-store/' + row_year;
	
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
	else if (row_year == '2015') linkaddr = ''
	else if (row_year == '201703') linkaddr = linkaddr.replace('201703','2017') + 'gj/gj'
	else if (row_year == '201705') linkaddr =  linkaddr.replace('201705','2017') + 'hy/hy0'
	else if (row_year == '2018') linkaddr = ''
	else if (row_year == '201806') linkaddr = linkaddr.replace('201806','2018') + 'yj/yj'
	else if (row_year == '2020') linkaddr = ''
	else if (row_year == '1937jz') { linkaddr = linkaddr.replace('1937jz','1937tj') + '/jz_tj'; picType='jpg'}
	else if (row_year == '1937kk') { linkaddr = linkaddr.replace('1937kk','1937tj') + '/kk_tj'; picType='jpg'}
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

// 詞彙聯合查詢
const colData_selectP = [
	{ field: 'SHOW', title: '說明', align: 'left' }
	, { field: 'ITEM', title: '選項', align: 'left', formatter: (value,row,index) => { return formatCheckBox4(value,index) } }
];

const setCheckboxDiv = `<br/>語保分類：<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-1" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_600').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-1">一、天文地理</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-2" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_601').checked = this.checked;document.getElementById('checkbox-phrase_642').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-2">二、時間方位</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-3" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_603').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-3">三、植物</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-4" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_610').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-4">四、動物</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-5" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_611').checked = this.checked;document.getElementById('checkbox-phrase_623').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-5">五、房舍器具</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-6" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_621').checked = this.checked;document.getElementById('checkbox-phrase_622').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-6">六、服飾飲食</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-7" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_613').checked = this.checked;document.getElementById('checkbox-phrase_620').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-7">七、身體醫療</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-8" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_631').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-8">八、婚喪信仰</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-9" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_612').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-9">九、人品稱謂</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-10" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_602').checked = this.checked;document.getElementById('checkbox-phrase_632').checked = this.checked;document.getElementById('checkbox-phrase_633').checked = this.checked;document.getElementById('checkbox-phrase_630').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-10">十、農工商文</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-11" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_640').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-11">十一、動作行爲</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-12" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_641').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-12">十二、性質狀態</label></div>
<br/><div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-13" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_652').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-13">十三、數量</label></div>
<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2015-14" name="dataCheck" value="checkbox-phrase-classifi2015" onclick="javascript:{document.getElementById('checkbox-phrase_643').checked = this.checked;document.getElementById('checkbox-phrase_650').checked = this.checked;document.getElementById('checkbox-phrase_651').checked = this.checked;}"><label class="custom-control-label" for="checkbox-phrase-classifi2015-14">十四、代副介連詞</label></div>
`;

const rowData_selectP = [
	{ SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-trad" name="dataCheck" value="checkbox-phrase-trad" onclick="javascript:{document.getElementsByClassName('text-phrase-trad').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-trad">詞彙（繁體）</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-jyut" name="dataCheck" value="checkbox-phrase-jyut" onclick="javascript:{document.getElementsByClassName('text-phrase-jyut').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-jyut">拼音（無聲調）</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-jyutandtone" name="dataCheck" value="checkbox-phrase-jyutandtone" onclick="javascript:{document.getElementsByClassName('text-phrase-jyutandtone').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-jyutandtone">拼音（帶聲調）</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-expl" name="dataCheck" value="checkbox-phrase-expl" onclick="javascript:{document.getElementsByClassName('text-phrase-expl').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-expl">釋義</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-note" name="dataCheck" value="checkbox-phrase-note" onclick="javascript:{document.getElementsByClassName('text-phrase-note').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-note">附註</label></div>`, ITEM: `` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi1997" name="dataCheck" value="checkbox-phrase-classifi1997" onclick="javascript:{document.getElementsByClassName('checkbox-phrase-5').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-phrase-classifi1997">1997分類</label></div><br/><div>（該分類無動詞，動詞歸入「六、身體」）</div>`, ITEM: `一、自然現象 二、時令、時節 三、植物 四、動物|五、房舍 六、身體 七、親屬 八、飯食|九、稱謂 十、疾病 十一、代詞 十二、量詞|十三、方位詞 十四、形容詞 十五、副詞、連詞、介詞 十六、數詞` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2007" name="dataCheck" value="checkbox-phrase-classifi2007" onclick="javascript:{document.getElementsByClassName('checkbox-phrase-6').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-phrase-classifi2007">2007分類</label></div>${setCheckboxDiv}`, ITEM: `一、自然 二、時令 三、農事 四、植物|五、動物 六、房舍 七、稱謂 八、人體|九、疾病 十、服飾 十一、飲食 十二、起居|十三、交際 十四、婚喪 十五、商業 十六、文化|十七、動作 十八、性狀 十九、方位 二十、指代|二十一、副詞 二十二、介詞 二十三、數量` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi2008" name="dataCheck" value="checkbox-phrase-classifi2008" onclick="javascript:{document.getElementsByClassName('checkbox-phrase-7').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-phrase-classifi2008">2008分類</label></div>`, ITEM: `一、天文 日、月、星 風、雲、雷、雨 冰、雪、霜、露 氣候|二、地理 地 山 江、河、湖、海、水 石沙、土塊、礦物 城鄉處所|三、時令時間 季節 節日 年 月 日、時 其他時間概念|四、農業 農事 農具|五、植物 農作物 豆類、菜蔬 樹木 瓜果 花草、菌類|六、動物 牲畜 鳥獸 蟲類 魚蝦類|七、房舍 房子 房屋結構 其他設施|八、器具、用品 一般傢俱 臥室用具 炊事用具 工匠用具 其他生活用品|九、稱謂 一般稱謂 職業稱謂|十、親屬 長輩 平輩 晚輩 其他|十一、身體 五官 手、腳、胸、背 其他|十二、疾病、醫療 一般用語 內科 外科 殘疾等|十三、衣服、穿戴 服裝 鞋帽 裝飾品 其他穿戴用品|十四、飲食 伙食 米食 麪食 肉、蛋 菜 油鹽作料 菸、茶、酒|十五、紅白大事 婚姻、生育 壽辰、喪葬 迷信|十六、日常生活 衣 食 住 行|十七、訟事 訟事|十八、交際 交際|十九、商業、交通 經商行業 經營、交易 賬目、度量衡 交通|二十、文化教育 學校 教室、文具 讀書識字 寫字|二十一、文體活動 遊戲、玩具 體育 武術、舞蹈 戲劇|二十二、動作 一般動作 心理活動 語言動作|二十三、位置 位置|二十四、代詞等 代詞等|二十五、形容詞 形容詞|二十六、副詞、介詞等 副詞、介詞等|二十七、連詞 連詞|二十八、量詞 量詞|二十九、附加成分 後加成分 前加成分 虛字|三十、數字等 數字等|三十一、四字詞語 四字詞語|三十二、干支 干支` }
	, { SHOW: `<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase" id="checkbox-phrase-classifi" name="dataCheck" value="checkbox-phrase-classifi" onclick="javascript:{document.getElementsByClassName('text-phrase-classifi').forEach((item)=>{ item.disabled = !this.checked });}"><label class="custom-control-label" for="checkbox-phrase-classifi">自定義分類輸入</label></div>`, ITEM: `` }
];

// 格式化顯示爲checkbox
function formatCheckBox4 (value,index) {
	let selArr = [];
	
	let setRadioDiv_trad = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="trad_isNotMatchWholeWord" name="trad_matchType" value="0" checked><label for="trad_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="trad_isMatchWholeWord" name="trad_matchType" value="1"><label for="trad_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;

	let setRadioDiv_jyut = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="jyut_isNotMatchWholeWord" name="jyut_matchType" value="0" checked><label for="jyut_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="jyut_isMatchWholeWord" name="jyut_matchType" value="1"><label for="jyut_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;

	let setRadioDiv_jyutandtone = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="jyutandtone_isNotMatchWholeWord" name="jyutandtone_matchType" value="0" checked><label for="jyutandtone_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="jyutandtone_isMatchWholeWord" name="jyutandtone_matchType" value="1"><label for="jyutandtone_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;

	let setRadioDiv_expl = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="expl_isNotMatchWholeWord" name="expl_matchType" value="0" checked><label for="expl_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="expl_isMatchWholeWord" name="expl_matchType" value="1"><label for="expl_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;
	
	let setRadioDiv_note = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="note_isNotMatchWholeWord" name="note_matchType" value="0" checked><label for="note_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="note_isMatchWholeWord" name="note_matchType" value="1"><label for="note_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;

	let setRadioDiv_classifi = `<div class="custom-control custom-radio custom-control-inline ml-2">
<input class="custom-control-input" type="radio" id="classifi_isNotMatchWholeWord" name="classifi_matchType" value="0" checked><label for="classifi_isNotMatchWholeWord" class="custom-control-label">部分匹配</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input class="custom-control-input" type="radio" id="classifi_isMatchWholeWord" name="classifi_matchType" value="1"><label for="classifi_isMatchWholeWord" class="custom-control-label">完全匹配</label>
</div>`;
	
	
	for (let i in value.split('|')) {
		for (let j in value.split('|')[i].split(' ')) {
			if (index==0){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-trad" id="text_phrasetrad" value="" disabled/></div>${setRadioDiv_trad}`);
			} else if(index==1){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-jyut" id="text_phrasejyut" value="" disabled/></div>${setRadioDiv_jyut}`);
			} else if(index==2){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-jyutandtone" id="text_phrasejyutandtone" value="" disabled/></div>${setRadioDiv_jyutandtone}`);
			} else if(index==3){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-expl" id="text_phraseexpl" value="" disabled/></div>${setRadioDiv_expl}`);
			} else if(index==4){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-note" id="text_phrasenote" value="" disabled/></div>${setRadioDiv_note}`);
			} else if (index==7){
				if (j!= 0){
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase phrase-item-${index} checkbox-phrase-${index} checkbox-phrase-${index}-${i}" id="checkbox-phrase_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox-phrase_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}else{
					selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase checkbox-phrase-${index} checkbox-phrase-${index}-${i}" id="checkbox-phrase_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}" onclick="javascript:{document.getElementsByClassName('checkbox-phrase-${index}-${i}').forEach((item)=>{ item.checked = this.checked });}"><label class="custom-control-label" for="checkbox-phrase_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
				}
			} else if(index==8){
				selArr.push(`<div class="custom-control custom-text custom-control-inline"><input type="text" class="form-control text-phrase text-phrase-classifi" id="text_phraseclassifi" value="" disabled/></div>${setRadioDiv_classifi}`);
			} else {
				selArr.push(`<div class="custom-control custom-checkbox custom-control-inline"><input type="checkbox" class="custom-control-input checkbox-phrase checkbox-phrase-${index} checkbox-phrase-${index}-${i}" id="checkbox-phrase_${index}${i}${j}" name="dataCheck" value="${value.split('|')[i].split(' ')[j]}"><label class="custom-control-label" for="checkbox-phrase_${index}${i}${j}">${value.split('|')[i].split(' ')[j]}</label></div>`);
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
	, { title: "关于我在地铁上莫名其妙干了碗鸡汤这件事儿 (Live)", artist: "孙天宇", mp3: "http://music.163.com/song/media/outer/url?id=2607368013.mp3" ,cover: "http://p1.music.126.net/Yw9k8sm5dZYkM8AS55BGoQ==/109951169775132195.jpg?param=130y130" }
	, { title: "轻轻地告诉你", artist: "杨钰莹", mp3: "http://music.163.com/song/media/outer/url?id=317396.mp3" ,cover: "http://p2.music.126.net/O51NKwxOEmWlOXw3-hY6BA==/109951167519003016.jpg?param=130y130" }
	, { title: "Miami Nights", artist: "Work Drugs", mp3: "http://music.163.com/song/media/outer/url?id=532776022.mp3" ,cover: "http://p1.music.126.net/nnj8wlrsc6yLJ9aujhcc0A==/109951165449485352.jpg?param=130y130" }
	, { title: "柳叶笺 (Instrumental)", artist: "朱彦安", mp3: "http://music.163.com/song/media/outer/url?id=553798646.mp3" ,cover: "http://p1.music.126.net/BfUADafLXpKYAubWpWZJZw==/109951163253095310.jpg?param=130y130" }
	, { title: "Samurai 45 (伴奏《异度侵入 ID_INVADED》插曲)", artist: "Hinno", mp3: "http://music.163.com/song/media/outer/url?id=2009429476.mp3" ,cover: "http://p1.music.126.net/Bt8ZcyJMfGjKJedn_ue2Jw==/109951168172151605.jpg?param=130y130" }
	, { title: "阑珊处", artist: "唐伯虎Annie", mp3: "http://music.163.com/song/media/outer/url?id=2692072314.mp3" ,cover: "http://p1.music.126.net/OlfKE-Imu3iPqzZgu_SPvQ==/109951170700086034.jpg?param=130y130" }
	, { title: "字字我念", artist: "任胤菘", mp3: "http://music.163.com/song/media/outer/url?id=2721297073.mp3" ,cover: "http://p2.music.126.net/mX6yQt2glZo_0FFAW6OXyw==/109951171707041907.jpg?param=130y130" }
	, { title: "谎", artist: "双笙（陈元汐） / 瞿子千 / 万物和声", mp3: "http://music.163.com/song/media/outer/url?id=2036195126.mp3" ,cover: "http://p2.music.126.net/IAJFLnY_AUkg1Wbc1cI4hg==/109951168521636974.jpg?param=130y130" }
	, { title: "城市青年图鉴", artist: "侯磊", mp3: "http://music.163.com/song/media/outer/url?id=1905604895.mp3" ,cover: "http://p2.music.126.net/bltsKq7u2MtjWXnbJAIArg==/109951166778335025.jpg?param=130y130" }
	, { title: "杀死那个石家庄人", artist: "万能青年旅店", mp3: "http://music.163.com/song/media/outer/url?id=386844.mp3" ,cover: "http://p1.music.126.net/W1kczDCB4-r-uNAznD1ljg==/108851651165850.jpg?param=130y130" }
	, { title: "有梦好甜蜜(独唱版)", artist: "胡彦斌", mp3: "http://music.163.com/song/media/outer/url?id=4877778.mp3" ,cover: "http://p2.music.126.net/so1A3jfz5PBIw8I_b0NXRA==/19171084741913846.jpg?param=130y130" }
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
	漢典網：<a href="http://www.zdic.net/hans/${textChar}" target="_blank">${textChar}</a> | <a href="http://www.zdic.net/zd/yy/yy/${textChar}" target="_blank">粵語</a> | <a href="http://www.zdic.net/zd/yy/ph/${textChar}" target="_blank">平話</a><br/>
	韻典網：<a href="https://ytenx.org/zim?dzih=${textChar}&dzyen=1&jtkb=1&jtkd=1&jtdt=1&jtgt=1" target="_blank">${textChar}</a><br/>
	粵音資料集叢：<a href="https://jyut.net/query?q=${textChar}" target="_blank">${textChar}</a><br/>
	漢語多功能字庫：<a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=${textChar}" target="_blank">${textChar}</a> | <a href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/dialect.php?word=${textChar}" target="_blank">其他方言讀音</a><br/>
	漢語大字典：<a href="https://dict.rushi-ai.net/dict/hy?q=${textChar}" target="_blank">${textChar}</a><br/>
	萌典：<a href="https://www.moedict.tw/${textChar}" target="_blank">${textChar}</a><br/>
	中國大百科全書（第三版）：<a href="https://www.zgbk.com/ecph/search/result?SiteID=1&Alias=all&Query=${textChar}" target="_blank">${textChar}</a><br/>
	中國大百科全書數據庫：<a href="https://h.bkzx.cn/search?query=${textChar}" target="_blank">${textChar}</a><br/>
	辭海：<a href="https://www.cihai.com.cn/search?type=cihai&q=${textChar}" target="_blank">${textChar}</a><br/>
	開放粵語詞典：<a href="https://kaifangcidian.com/yue/ci/?${textChar}" target="_blank">${textChar}</a><br/>
	粵典：<a href="https://words.hk/zidin/wan/?q=${textChar}" target="_blank">${textChar}</a><br/>
	CC-Canto：<a href="https://www.cccanto.org/search.php?q=${textChar}" target="_blank">${textChar}</a><br/>
	縱橫在線中文字典：<a href="https://ckc.eduhk.hk/ckc2/dictionary.php?jiinput=${textChar}&lang=b5&form1=1" target="_blank">${textChar}</a><br/>
	HKIED 繁簡辨識（1.0版）：<a href="https://ckc.eduhk.hk/ckc2/translate.php?word=${textChar}&lang=" target="_blank">${textChar}</a><br/>
	英華字典資料庫：<a href="http://mhdb.mh.sinica.edu.tw/dictionary/search.php?titleOnlyBtn=true&searchStr=${textChar}&lang=b5" target="_blank">${textChar}</a><br/>
	粵拼歌詞網：<a href="https://jyut6.com/search.php?keyword=${textChar}" target="_blank">${textChar}</a><br/>
	翡翠粵語歌詞：<a href="https://www.feitsui.com/zh-hans/search/?query=${textChar}" target="_blank">${textChar}</a><br/>
	大學數字圖書館合作計劃：<a href="https://cadal.edu.cn/index/home" target="_blank">前往</a><br/>
	萬方方誌數據庫：<a href="http://fz.wanfangdata.com.cn/index.do" target="_blank">前往</a><br/>
	</span></div></div>`);
	
	outputText2.push(`<div class="card mt-1 mb-3"><div class="card-header">快速鏈接</div><div class="card-body text-secondary"><span>
	字統网：<a href="https://zi.tools/zi/${textChar}" target="_blank">${textChar}</a><br/>
	重編國語辭典修訂本：<a href="https://dict.revised.moe.edu.tw/search.jsp?md=1&word=${textChar}#searchL" target="_blank">${textChar}</a><br/>
	國語辭典簡編本：<a href="https://dict.concised.moe.edu.tw/search.jsp?md=1&word=${textChar}&qMd=0&qCol=0" target="_blank">${textChar}</a><br/>	
	國語小字典：<a href="https://dict.mini.moe.edu.tw/SearchIndex/searchResult?searchType=one&dictSearchField=${textChar}" target="_blank">${textChar}</a><br/>
	異體字字典：<a href="https://dict.variants.moe.edu.tw/search.jsp?QTP=0&WORD=${textChar}#searchL" target="_blank">${textChar}</a><br/>
	國學大師：<a href="http://www.guoxuedashi.net/zidian/${encodeUnicode(textChar).replace('\\u','')}.html" target="_blank">${textChar}</a><br/>
	古今文字集成：<a href="http://www.ccamc.co/cjkv.php?cjkv=${textChar}" target="_blank">${textChar}</a><br/>
	漢字全息資源應用系統：<a href="http://qxk.bnu.edu.cn/#/danziDetail/42c2d834-fa1d-47e9-9f90-972a687183f7/${textChar}/22d3af76-1ffe-46da-8c28-40e7dfe6b8d2/0" target="_blank">${textChar}</a><br/>
	字海|葉典：<a href="http://zisea.com/zscontent.asp?uni=${encodeUnicode(textChar).replace('\\u','')}" target="_blank">${textChar}</a><br/>
	Forvo：<a href="https://zh.forvo.com/search/${textChar}/" target="_blank">${textChar}</a><br/>
	Unihan：<a href="https://www.unicode.org/cgi-bin/GetUnihanData.pl?codepoint=${textChar}" target="_blank">${textChar}</a><br/>
	活用中文大辭典：<a href="https://lib.ctcn.edu.tw/chtdict/result.aspx?keyword=${textChar}" target="_blank">${textChar}</a><br/>
	CHISE IDS 漢字検索：<a href="http://www.chise.org/ids-find?components=${textChar}" target="_blank">${textChar}</a><br/>
	GlyphWiki：<a href="http://glyphwiki.org/wiki/${encodeUnicode(textChar).replace('\\','')}?tdsourcetag=s_pctim_aiomsg" target="_blank">${textChar}</a><br/>
	Chinese Etymology 字源：<a href="https://hanziyuan.net/#${textChar}" target="_blank">${textChar}</a><br/>
	ChuNom：<a href="https://chunom.org/pages/?search=${textChar}" target="_blank">${textChar}</a><br/>
	CantoDict：<a href="http://www.cantonese.sheik.co.uk/scripts/masterlist.htm" target="_blank">前往</a><br/>
	中國數字方誌庫：<a href="http://x.wenjinguan.com/" target="_blank">前往</a><br/>
	中國歷史文獻總庫：<a href="http://mg.nlcpress.com/library/publish/default/Login.jsp" target="_blank">前往</a><br/>
	</span></div></div>`);
	
	outputText3.push(`<div class="card mt-1 mb-3"><div class="card-header">快速鏈接</div><div class="card-body text-secondary"><span>
	中國國家地名信息庫：<a href="https://dmfw.mca.gov.cn/index.html" target="_blank">前往</a><br/>
	古音小鏡：<a href="http://www.kaom.net/" target="_blank">前往</a><br/>
	小學堂：<a href="http://xiaoxue.iis.sinica.edu.tw/" target="_blank">前往</a><br/>
	香港小學學習字詞表：<a href="https://www.edbchinese.hk/lexlist_ch/" target="_blank">前往</a><br/>
	如是古籍字典：<a href="https://dict.rushi-ai.net/variant" target="_blank">前往</a><br/>
	東方語言學：<a href="http://www.eastling.org/" target="_blank">前往</a><br/>
	語保工程採錄展示平臺：<a href="https://zhongguoyuyan.cn/" target="_blank">前往</a><br/>
	早期漢語方言文獻資料庫：<a href="https://database.shss.hkust.edu.hk/5dialects/" target="_blank">前往</a><br/>
	早期粵語口語文獻資料庫：<a href="https://database.shss.hkust.edu.hk/Candbase/" target="_blank">前往</a><br/>
	香港二十世紀中期粵語語料庫：<a href="https://hkcc.eduhk.hk/v1/introduction.html" target="_blank">前往</a><br/>
	漢語方言學大詞典：<a href="http://www.fangyanxue.com:8090/pages/index/index.html" target="_blank">前往</a><br/>
	廣西地情網：<a href="http://www.gxdfz.org.cn/index.html" target="_blank">前往</a><br/>
	廣東省情網：<a href="http://dfz.gd.gov.cn/" target="_blank">前往</a><br/>
	中共廣州市委黨史文獻研究室：<a href="http://www.gzsqw.org.cn/" target="_blank">前往</a><br/>
	廣西圖書館：<a href="https://www.gxlib.org.cn/" target="_blank">前往</a><br/>
	國學寶典：<a href="http://www.gxbd.com/" target="_blank">前往</a><br/>
	說文解字在線查詢：<a href="http://www.shuowen.org/" target="_blank">前往</a><br/>
	現代標準漢語與粵語對照資料庫：<a href="http://apps.itsc.cuhk.edu.hk/hanyu/Page/Cover.aspx" target="_blank">前往</a><br/>
	ISO漢字查詢系統：<a href="http://glyph.iso10646hk.net/chinese/icharacters.jsp" target="_blank">前往</a><br/>
	</span></div></div>`);
	
	$('#webLink').html(
		DOMPurify.sanitize(outputText.join(''), purifyConfig)
	);

	$('#webLink2').html(
		DOMPurify.sanitize(outputText2.join(''), purifyConfig)
	);

	$('#webLink3').html(
		DOMPurify.sanitize(outputText3.join(''), purifyConfig)
	);
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
