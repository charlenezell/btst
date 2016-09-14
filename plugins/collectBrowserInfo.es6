// const UA = require('../lib/ua-device/index.js');
// const UA = require('ua-device');
//这里使用的是百度fex的uadevice删减版原版应该是后端使用的，有一个全集的罗列，那部分代码已经注释掉了,注意这里的ua-device是删减版的
// var uaInfo = new UA(navigator.userAgent);
var {cookie}=require("../core/tools.es6");
// let util = require("../core/util.es6");
let config=require("../config.es6");
let core = require("../core/core.es6");
var now=new Date();
// var isoDateStr=util.toISODateString(now);
// let time={
//     full:isoDateStr,
//     date:isoDateStr.split("T")[0],
//     hour:now.getUTCHours()
// }
var feDuoduoId1000d=cookie("btst_duoduoId1000d");
var backendDuoduoId=cookie("BT_duoduoId");
if(!feDuoduoId1000d){
    if(backendDuoduoId){
        cookie("btst_duoduoId1000d",backendDuoduoId,{
            expires: 1000 * 24,//1000天的超时
            domain: config.domain,
            path: config.path
        })
    }
}
var uuid=core.getUuid();
var uuidCreateTime=core.getUuidCreateTime();
var isNewVistor=true;
if(uuidCreateTime&&(now-uuidCreateTime)>=1000*60*60*24){
    isNewVistor=false;
}
// function getFrontSessionId(){
//     //和btuuid存在不一致的地方就是btuuid是每次都会续期，这个是不会续期除非超时30天
//     var f_session=cookie("btst_f_sessionstr");
//     if(!f_session){//不存在
//         // console.log(1,f_session);
//         f_session=util.getUuid();
//         cookie("btst_f_sessionstr",f_session,{
//             exports:30*24,
//             domain:config.domain,
//             path:config.path
//         });
//     }
//     return f_session
// }

function CollectBrowserInfo(coreAPI) {
    this.core = coreAPI;
}

CollectBrowserInfo.prototype.beforeUnload=function(){
    // 停留时间统计
    var lastingSecend=(new Date()-now)/1000;
    this.core.sendInfomation({page_on_time :lastingSecend});

}
CollectBrowserInfo.prototype.unload=function(){
    this.core.sendInfomation("sendUnload");

}
CollectBrowserInfo.prototype.canRun=function(data){
    return true;//任何情形都跑
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
        is_opencookie : cookie.support,
        // browserVersion: uaInfo.browser.version&&uaInfo.browser.version.original,
        // deviceManufacturer: uaInfo.device.manufacturer,
        // deviceModel: uaInfo.device.model,
        // deviceType: uaInfo.device.type,
        // engineName: uaInfo.engine.name,
        // engineVersion: uaInfo.engine.version&&uaInfo.engine.version.original,
        // accessUTCTime:time.full,//header自取
        // accessUTCDate:time.date,//header自取
        // accessUTCHour:time.hour,//header自取
        // url:location.href,//header自取
        refer :document.referrer,
        // f_sessionid:getFrontSessionId(),//header自取
        COOKIE_ID :uuid,
        // language: navigator.language,//header自取
        screenWidth: screen.width,
        screenHeight: screen.height,
        aScreenWidth: screen.availWidth,
        aScreenHeight: screen.availHeight,
        // userAgent: navigator.userAgent,//header自取
        is_new:isNewVistor?"1":"0",//是否是新访客 is_new STRING 20 如果CookieID是新生成的（不论是否登录，是否购物过），则定义为新访客，时间为1个自然天。第二天就不是新访客了。 1-是，0-否。
        user_id :feDuoduoId1000d||"-",// Cookie中的user_id vipruid BIGINT 20 Cookie中的user_id, 有效期1000天，退出仍然会有。如cookie中没有user_id，则填-。
    }
}
function createBrowserInfoPlugin(option) {
    return new CollectBrowserInfo(core, option);
}
module.exports = createBrowserInfoPlugin;