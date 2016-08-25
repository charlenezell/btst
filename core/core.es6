var util = require("./util.es6");
var ready = require("./ready.es6");
var domEvent = require("./domEvent.es6");
var {
    cookie
} = require("./tools.es6");
var config = require("../config.es6");
// var event = require("./event.es6");
// var $ = require("./selector.es6");

function register(config) {
    // console.log(config);
    ready(function() { //when domcontentReady run life circle method ready of plugins
        util.each(config.plugins, (plugin, k) => {
            plugin.ready && plugin.ready();
        });
        window.btst_config.ready && window.btst_config.ready();
    });
    domEvent.addEvent(window, "unload", function() {
        util.each(config.plugins, (plugin) => {
            plugin.unload && plugin.unload();
        });
        window.btst_config.unload && window.btst_config.unload();
    });
    // window.onbeforeunload=function(){
    //         util.each(config.plugins, (plugin) => {
    //         plugin.beforeUnload && plugin.beforeUnload();
    //     });
    //     window.btst_config.beforeUnload && window.btst_config.beforeUnload();
    //     return void(0);
    // }
    domEvent.addEvent(window, "beforeunload", function(event) {
        util.each(config.plugins, (plugin) => {
            plugin.beforeUnload && plugin.beforeUnload();
        });
        window.btst_config.beforeUnload && window.btst_config.beforeUnload();
        // event.preventDefault();
        // event.returnValue = void(0);
        // event.returnValue = "我在这写点东西...";
        // event.preventDefault()
        return void(0);
    });
}

function sendInfomation(data) {
    // document.getElementById("hehe").innerHTML = JSON.stringify(data, null, "\t")
        alert(JSON.stringify(data, null, "\t"));
}

function getUuid() {
    var t = cookie("btst_uuid");
    if (!t) {
        t = util.getUuid();
    }
    //每次都会更新一下那个cookie的expirestime
    cookie("btst_uuid", t, {
        expires: config.uuidcookieExpireDay * 24,
        domain: config.domain,
        path: config.path
    });
    return cookie("btst_uuid");
}
let st = {
    register,
    sendInfomation,
    getUuid
};

module.exports = st;