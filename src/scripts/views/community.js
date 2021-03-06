/**
 * Created by Administrator on 2016/8/19.
 */
var communityTpl = require('../tpls/community.string');

// 定义视图
SPA.defineView('community', {
    // 装载模板
    html: communityTpl,
    //define plugins
    plugins:[
        "delegated",
        {
            name:"avalon",
            options:function(vm){
                vm.livelistCom=[];
                vm.isShowLoading=true;
            }
        }
    ],
    bindEvents:{
        "show":function(){
            var that = this;
            var vm=this.getVM();
            var myScroll2=new IScroll("#myScroll2",{
                scrollBars:true,
                fadeScrollBars:true
            });
            $.ajax({
                url:"/FlyBeastCommunity/mock/livelistCom.json",
                type:"get",
                data:{
                    type:"more",
                    pageNo:1
                },
                success:function(res){
                    console.log(11);
                    console.log(res.data);
                    vm.livelistCom = res.data;
                    //myScroll2.refresh();
                }
            });
            //添加滚动事件
            myScroll2.on("scrollStart",function(){
                myScroll2.refresh();
            })
        }
    }

});