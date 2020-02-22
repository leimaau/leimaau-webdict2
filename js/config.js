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