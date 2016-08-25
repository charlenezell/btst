// const UA = require('../lib/ua-device/index.js');
// const UA = require('ua-device');
//这里使用的是百度fex的uadevice删减版原版应该是后端使用的，有一个全集的罗列，那部分代码已经注释掉了,注意这里的ua-device是删减版的
// var uaInfo = new UA(navigator.userAgent);
var {cookie}=require("../core/tools.es6");
let util = require("../core/util.es6");
let config=require("../config.es6");
let core = require("../core/core.es6");
var now=new Date();
var isoDateStr=util.toISODateString(now);
let time={
    full:isoDateStr,
    date:isoDateStr.split("T")[0],
    hour:now.getUTCHours()
}
function getFrontSessionId(){
    //和btuuid存在不一致的地方就是btuuid是每次都会续期，这个是不会续期除非超时30天
    var f_session=cookie("btst_f_sessionstr");
    if(!f_session){//不存在
        // console.log(1,f_session);
        f_session=util.getUuid();
        cookie("btst_f_sessionstr",f_session,{
            exports:30*24,
            domain:config.domain,
            path:config.path
        });
    }
    return f_session
}

function CollectBrowserInfo(coreAPI) {
    this.core = coreAPI;
}

CollectBrowserInfo.prototype.beforeUnload=function(){
    // 停留时间统计
    var lastingSecend=(new Date()-now)/1000;
    this.core.sendInfomation(lastingSecend);

}
CollectBrowserInfo.prototype.unload=function(){
    this.core.sendInfomation("sendUnload");

}
CollectBrowserInfo.prototype.ready = function() {
    this.core.sendInfomation(this.collectBrowserInfo());
}
CollectBrowserInfo.prototype.collectBrowserInfo = function() {
    return {
        // osVersion: uaInfo.os.version.original,
        // os: uaInfo.os.name,
        // platform: navigator.platform,
        // browser: uaInfo.browser.name,
        cookieSupport: cookie.support,
        // browserVersion: uaInfo.browser.version&&uaInfo.browser.version.original,
        // deviceManufacturer: uaInfo.device.manufacturer,
        // deviceModel: uaInfo.device.model,
        // deviceType: uaInfo.device.type,
        // engineName: uaInfo.engine.name,
        // engineVersion: uaInfo.engine.version&&uaInfo.engine.version.original,
        accessUTCTime:time.full,
        accessUTCDate:time.date,
        accessUTCHour:time.hour,
        cUrl:location.href,
        pUrl:document.referrer,
        f_sessionid:getFrontSessionId(),
        uuid:core.getUuid(),
        language: navigator.language,
        screenWidth: screen.width,
        screenHeight: screen.height,
        aScreenWidth: screen.availWidth,
        aScreenHeight: screen.availHeight,
        userAgent: navigator.userAgent
    }
}
function createBrowserInfoPlugin(option) {
    return new CollectBrowserInfo(core, option);
}
module.exports = createBrowserInfoPlugin;