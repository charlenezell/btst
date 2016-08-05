/// <reference path="../typings/index.d.ts" />
let UA = require('ua-device');
let uaInfo = new UA(navigator.userAgent);
let util = require("../core/util.es6");
// let uaInfo = new UA("Mozilla/5.0 (Linux; Android 6.0.1; SM-G9300 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036555 Safari/537.36 MicroMessenger/6.3.22.821 NetType/WIFI Language/zh_CN");
let st = require("../core/core.es6").st;

function CollectBrowserInfo(coreAPI, option) {
    this.core = coreAPI;
}
CollectBrowserInfo.prototype.ready = function() {
    this.core.sendInfomation(this.collectBrowserInfo());
}
CollectBrowserInfo.prototype.collectBrowserInfo = function() {
    //这里的ua-device实在有点庞大，压缩后连框架代码直接到150k+，上线时候可能需要改为只传输userAgent字符串做统计
    // function cal(uaStr){
    //     console.log(uaStr);
    //     var iii=uaStr;
    //     var tempPlaceholder="XXXX";
    //     var pars=iii.match(/\([^)]*\)/g);
    //     // console.log(pars);
    //     var pS=pars.map(function(v){
    //         return v.replace(/([\(\)\[\]\$\^])/g,"\\$1");
    //     }).join("|");
    //     // console.log(pS);
    //     var pR=new RegExp(`(${pS})`,"g");
    //     var tUA=iii.replace(pR,tempPlaceholder);
    //     // console.log(tUA);
    //     var partArr=tUA.split(" ").map(x=>{
    //     if(x==tempPlaceholder){return pars.shift()}else{return x}
    //     });
    //     // console.log(partArr);
    //     var gg= {
    //         os:partArr[1].split(";")[0],
    //         browser:calBrowser(partArr[4],partArr.slice(4)),
    //         device:partArr[1].split(";")[2].split(" ")[0]
    //     }
    //     console.log(gg);
    //     return gg;
    // }
    // function calBrowser(def,candidator){
    //     var g=["microMessage","QQ"]
    //     var m=candidator.join(" ").match(new RegExp(g.join("|")))
    //     if(m){
    //         return m;
    //     }else{
    //         return def.split("/")[0];
    //     }
    // }
    // cal('Mozilla/5.0 (Linux; Android 6.0.1; SM-G9300 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36')
    // cal(navigator.userAgent);
    // cal("Mozilla/5.0 (Linux; Android 6.0.1; SM-G9300 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile MQQBrowser/6.2 TBS/036555 Safari/537.36 MicroMessenger/6.3.22.821 NetType/WIFI Language/zh_CN")
    return {
        osVersion: uaInfo.os.version.original,
        os: uaInfo.os.name,
        platform: navigator.platform,
        browser: uaInfo.browser.name,
        cookieSupport: util.cookies.enabled,
        // browserVersion: uaInfo.browser.version.original,
        deviceManufacturer: uaInfo.device.manufacturer,
        deviceModel: uaInfo.device.model,
        deviceType: uaInfo.device.type,
        engineName: uaInfo.engine.name,
        engineVersion: uaInfo.engine.version.original,
        language: navigator.language,
        screenWidth: screen.width,
        screenHeight: screen.height,
        aScreenWidth: screen.availWidth,
        aScreenHeight: screen.availHeight,
        userAgent: navigator.userAgent
    }
}


function createBrowserInfoPlugin(option) {
    return new CollectBrowserInfo(st, option);
}
module.exports = createBrowserInfoPlugin;