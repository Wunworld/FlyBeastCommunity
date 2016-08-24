
var indexTpl = require('../tpls/index.string');

// 定义视图
SPA.defineView('index', {
  // 装载模板
  html: indexTpl,

  //定义插件
  plugins:['delegated'],

  //装载视图
  modules:[{
    name:'content',
    container:'#m-container',
    views:['information','community','discovery','mine'],
    defaultTag:'information'
  }],
  //绑定tap事件
  bindActions:{
    'switch':function(el,data){
      //console.log(0);
      this.modules.content.launch(data.name);
      $('#index-nav li').eq($(el.el).index()).addClass('active').siblings().removeClass('active');
    }
  }
});
