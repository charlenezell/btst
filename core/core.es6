var util = require("./util.es6");
var ready = require("./ready.es6");
var domEvent = require("./domEvent.es6");
var {
    cookie
} = require("./tools.es6");
var config = require("../config.es6");
var Plugin=require("./Plugin.es6");
// var event = require("./event.es6");
// var $ = require("./selector.es6");

function register(config) {
    // console.log(config);
    ready(function() { //when domcontentReady run life circle method ready of plugins
        util.each(config.plugins, (plugin) => {
            if(plugin.canRun&&plugin.canRun({url:location.href,phase:Plugin.phase.Ready})){
                plugin.ready && plugin.ready();
            }
        });
        window.btst_config=window.btst_config||{};
        window.btst_config.ready && window.btst_config.ready(st);
    });
    domEvent.addEvent(window, "unload", function() {
        util.each(config.plugins, (plugin) => {
            if(plugin.canRun&&plugin.canRun({url:location.href,phase:Plugin.phase.Unload})){
                plugin.unload && plugin.unload();
            }
        });
        window.btst_config=window.btst_config||{};
        window.btst_config.unload && window.btst_config.unload(st);
    });
    // window.onbeforeunload=function(){
    //         util.each(config.plugins, (plugin) => {
    //         plugin.beforeUnload && plugin.beforeUnload();
    //     });
    //     window.btst_config.beforeUnload && window.btst_config.beforeUnload();
    //     return void(0);
    // }
    domEvent.addEvent(window, "beforeunload", function() {
        util.each(config.plugins, (plugin) => {
            if(plugin.canRun&&plugin.canRun({url:location.href,phase:Plugin.phase.BeforeUnload})){
                plugin.beforeUnload && plugin.beforeUnload();
            }
        });
        window.btst_config=window.btst_config||{};
        window.btst_config.beforeUnload && window.btst_config.beforeUnload(st);
        // event.preventDefault();
        // event.returnValue = void(0);
        // event.returnValue = "我在这写点东西...";
        // event.preventDefault()
        return void(0);
    });
}
function parseParams(data){
    let g=[];
    util.each(data,function(v,k){
        g.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    });
    return g.join("&");
}
function sendInfomation(data) {
    // document.getElementById("hehe").innerHTML = JSON.stringify(data, null, "\t")
    window.____btstc=window.____btstc||{};
    var _key=(new Date()-0);
    window.____btstc[_key]=new Image()
    window.____btstc[_key].src="http://dc.100bt.com/bd?"+parseParams(data);

        // console.log(JSON.stringify(data, null, "\t"));
}
function getUuidCreateTime(){
    return cookie("btst_uuidctime");
}
function getUuid() {
    var t = cookie("btst_uuid");
    if (!t) {
        t = util.getUuid();
        cookie("btst_uuidctime",(new Date()-0),{
            expires: config.uuidcookieExpireDay * 24*60,
            domain: config.domain,
            path: config.path
        })
    }
    //每次都会更新一下那个cookie的expirestime
    cookie("btst_uuid", t, {
        expires: config.uuidcookieExpireDay * 24*60,
        domain: config.domain,
        path: config.path
    });
    return cookie("btst_uuid");
}
let st = {
    register,
    sendInfomation,
    getUuid,
    getUuidCreateTime
};

module.exports = st;