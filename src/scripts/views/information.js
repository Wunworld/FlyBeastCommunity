/**
 * Created by Administrator on 2016/8/19.
 */
var informationTpl = require('../tpls/information.string');

// 定义视图
SPA.defineView('information', {
    // 装载模板
    html: informationTpl,
    //define plugins
    plugins:[
        "delegated",
        {
            name:"avalon",
            option:function(vm){
                vm.livelist=[];
            }
        }
    ],
//    绑定视图
    bindEvents:{
        "show":function(){
        var that = this;
            var vm=this.getVM();
            var myScroll=new IScroll("#myScroll",{
                scrollBars:true,
                fadeScrollBars:true
            });
            $.ajax({
                url:"/FlyBeastCommunity/mock/livelist.json",
                type:"get",
                data:{
                    type:"more",
                    pageNo:1
                },
                success:function(res){
                    console.log(res.data);
                    //vm.livelist = res.data;
                    myScroll.refresh();
                }
            });
            //添加滚动事件
            myScroll.on("scrollStart",function(){
                myScroll.refresh();
            })
        }
    }
});