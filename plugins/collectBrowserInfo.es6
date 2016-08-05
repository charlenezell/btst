const UA = require('../lib/ua-device/index.js');
// const UA = require('ua-device');
//这里使用的是百度fex的uadevice删减版原版应该是后端使用的，有一个全集的罗列，那部分代码已经注释掉了,注意这里的ua-device是删减版的
var uaInfo = new UA(navigator.userAgent);
var {cookie}=require("../core/tools.es6");
// let util = require("../core/util.es6");
let core = require("../core/core.es6");

function CollectBrowserInfo(coreAPI) {
    this.core = coreAPI;
}
CollectBrowserInfo.prototype.ready = function() {
    this.core.sendInfomation(this.collectBrowserInfo());
}
CollectBrowserInfo.prototype.collectBrowserInfo = function() {
    return {
        osVersion: uaInfo.os.version.original,
        os: uaInfo.os.name,
        platform: navigator.platform,
        browser: uaInfo.browser.name,
        cookieSupport: cookie.support,
        browserVersion: uaInfo.browser.version&&uaInfo.browser.version.original,
        deviceManufacturer: uaInfo.device.manufacturer,
        deviceModel: uaInfo.device.model,
        deviceType: uaInfo.device.type,
        engineName: uaInfo.engine.name,
        engineVersion: uaInfo.engine.version&&uaInfo.engine.version.original,
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