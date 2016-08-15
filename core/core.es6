var util = require("./util.es6");
var ready= require("./ready.es6");
var domEvent=require("./domEvent.es6");
// var event = require("./event.es6");
// var $ = require("./selector.es6");

// function env() {

// }

function register(config) {
    // console.log(config);
    ready(function(){//when domcontentReady run life circle method ready of plugins
        util.each(config.plugins,(plugin,k)=>{
            plugin.ready&&plugin.ready();
        });
        window.btst_config.ready&&window.btst_config.ready();
    });
    domEvent.addEvent(window,"unload",function(e){
        util.each(config.plugins,(plugin,k)=>{
            plugin.unload&&plugin.unload();
        });
        window.btst_config.unload&&window.btst_config.unload();
    });
    domEvent.addEvent(window,"beforeunload",function(){
        util.each(config.plugins,(plugin,k)=>{
            plugin.beforeUnload&&plugin.beforeUnload();
        });
        window.btst_config.beforeUnload&&window.btst_config.beforeUnload();
        //  event.returnValue = "我在这写点东西...";
    });
    // var beforeloadFunc = window.onbeforeunload;
    //     if(typeof beforeloadFunc != 'function'){
    //       window.onbeforeunload = func;
    //     }else{
    //       window.onbeforeunload = function(){
    //         beforeloadFunc();
    //         func();
    //       }
    //     }
}

function sendInfomation(data) {
    document.getElementById("hehe").innerHTML = JSON.stringify(data, null, "\t")
    // console.log(data);
}
let st = {
    register,
    sendInfomation
};

module.exports = st;