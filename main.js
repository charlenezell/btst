!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var i;i="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,i.btst=e()}}(function(){var define,module,exports;return function e(i,t,o){function s(n,a){if(!t[n]){if(!i[n]){var c="function"==typeof require&&require;if(!a&&c)return c(n,!0);if(r)return r(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var h=t[n]={exports:{}};i[n][0].call(h.exports,function(e){var t=i[n][1][e];return s(t?t:e)},h,h.exports,e,i,t,o)}return t[n].exports}for(var r="function"==typeof require&&require,n=0;n<o.length;n++)s(o[n]);return s}({1:[function(e,i,t){"use strict";function o(e){e.plugins[0].ready()}function s(e){window.onload=function(){document.getElementById("hehe").innerHTML=JSON.stringify(e,null,"\t")+("\n"+navigator.userAgent)}}var r={register:o,sendInfomation:s};i.exports=r},{}],2:[function(e,i,t){"use strict";var o=e("./tools/cookies.es6");i.exports={cookie:o}},{"./tools/cookies.es6":3}],3:[function(e,i,t){"use strict";function o(e,i,t){if(arguments.length>1&&"[object Object]"!==String(i)){if(t=s.extend({},t),null!==i&&void 0!==i||(t.expires=-1),"number"==typeof t.expires){var o=t.expires,r=t.expires=new Date;r.setHours(r.getHours()+o)}return i=String(i),document.cookie=[encodeURIComponent(e),"=",t.raw?i:encodeURIComponent(i),t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}t=i||{};var n,a=t.raw?function(e){return e}:decodeURIComponent;return(n=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?a(n[1]):null}var s=e("../util.es6");o.support=function(){var e=!1;return o("mytestofcookie","mytestofcookie"),o("mytestofcookie")&&(e=!0),o("mytestofcookie",null,{expires:"1990-01-01"}),e}(),i.exports=o},{"../util.es6":4}],4:[function(require,module,exports){"use strict";function isArrayLike(e){var i=!!e&&"length"in e&&e.length,t=type(e);return"function"!==t&&!isWindow(e)&&("array"===t||0===i||"number"==typeof i&&i>0&&i-1 in e)}function each(e,i){var t,o=0;if(isArrayLike(e))for(t=e.length;o<t&&i.call(e[o],e[o],o)!==!1;o++);else for(o in e)if(i.call(e[o],e[o],o)===!1)break;return e}function map(e,i,t){var o,s,r=0,n=[];if(isArrayLike(e))for(o=e.length;r<o;r++)s=i(e[r],r,t),null!=s&&n.push(s);else for(r in e)s=i(e[r],r,t),null!=s&&n.push(s);return concat.apply([],n)}function generateNS(e,i,t){for(var o=e.split("."),s=t||window,r=null;r=o.shift();)if(o.length)void 0===s[r]&&(s[r]={}),s=s[r];else{if(void 0!==s[r])throw"["+e+"] : has been register";s[r]=i}}function queryNS(expression,context){try{return eval('\n        with(context) {\n            eval(expression)||""\n        }\n        ')}catch(e){return""}}function _template(e,i,t){return e.replace(t||/\${([^{}]*)}/g,function(e,t){return queryNS(t,i)})}function template(e,i,t){return e.replace(t||/\${([^{}]*)}/g,function(e,t){return void 0!==i[t]&&null!==i[t]&&i[t].toString()||""})}function type(e){return null==e?e+"":"object"===("undefined"==typeof e?"undefined":_typeof(e))||"function"==typeof e?class2type[toString.call(e)]||"object":"undefined"==typeof e?"undefined":_typeof(e)}function isWindow(e){return null!=e&&e==e.window}function isPlainObject(e){if(!e||"object"!==type(e)||e.nodeType||isWindow(e))return!1;var i,t;return i=e.constructor,"function"==typeof i&&(t=i.prototype,type(t)!==!1&&t.hasOwnProperty("isPrototypeOf")!==!1)}function isFunction(e){return"function"===type(e)}function isNumeric(e){var i=e&&e.toString();return!isArray(e)&&i-parseFloat(i)+1>=0}function isArray(e){return"array"===type(e)}function getUuid(){return uuid.generate()}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},uuid=require("../lib/uuid.es6"),class2type={},toString=class2type.toString,hasOwn=class2type.hasOwnProperty,support={},deletedIds=[],concat=deletedIds.concat;each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e){class2type["[object "+e+"]"]=e.toLowerCase()});var extend=require("extend"),td=require("../lib/throttledebounce.es6");module.exports={each:each,map:map,extend:extend,isFunction:isFunction,isPlainObject:isPlainObject,isNumeric:isNumeric,getUuid:getUuid,generateNS:generateNS,_template:_template,template:template,debounce:td.debounce,throttle:td.throttle}},{"../lib/throttledebounce.es6":5,"../lib/uuid.es6":9,extend:10}],5:[function(e,i,t){"use strict";var o,s={};s.throttle=o=function(e,i,t,o){function r(){function s(){a=+new Date,t.apply(c,h)}function r(){n=void 0}var c=this,l=+new Date-a,h=arguments;o&&!n&&s(),n&&clearTimeout(n),void 0===o&&l>e?s():i!==!0&&(n=setTimeout(o?r:s,void 0===o?e-l:e))}var n,a=0;return"boolean"!=typeof i&&(o=t,t=i,i=void 0),s.guid&&(r.guid=t.guid=t.guid||s.guid++),r},s.debounce=function(e,i,t){return void 0===t?o(e,i,!1):o(e,t,i!==!1)},i.exports=s},{}],6:[function(e,i,t){"use strict";i.exports=e("./lib/ua-device.js")},{"./lib/ua-device.js":7}],7:[function(e,i,t){"use strict";var o=e("./useragent-base");i.exports=function(e){var i,t,s=new o(e);if("mobile"!==s.device.type&&"tablet"!==s.device.type||(i=e.match(/(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia)/i))&&(s.device.manufacturer=i[1],s.device.model&&s.device.model.indexOf(i[1])>=0&&(s.device.model=s.device.model.replace(i[1],""))),"desktop"===s.device.type?(i=/360se(?:[ \/]([\w.]+))?/i.exec(e))?(s.browser.name="360 security Explorer",s.browser.version={original:i[1]}):(i=/the world(?:[ \/]([\w.]+))?/i.exec(e))?(s.browser.name="the world",s.browser.version={original:i[1]}):(i=/tencenttraveler ([\w.]+)/i.exec(e))&&(s.browser.name="tencenttraveler",s.browser.version={original:i[1]}):"mobile"!==s.device.type&&"tablet"!==s.device.type||((i=/BaiduHD\s+([\w.]+)/i.exec(e))?(s.browser.name="BaiduHD",s.browser.version={original:i[1]}):(i=/360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/i.exec(e))?(s.browser.name="360 Browser",s.browser.version={original:i[1]}):(i=/flyflow\/([\w.]+)/i.exec(e))?(s.browser.name="Baidu Browser",s.browser.version={original:i[1]}):(i=/baiduhd ([\w.]+)/i.exec(e))?(s.browser.name="Baidu HD",s.browser.version={original:i[1]}):(i=/LieBaoFast\/([\w.]+)/i.exec(e))?(s.browser.name="LieBao Fast",s.browser.version={original:i[1]}):(i=/LieBao\/([\w.]+)/i.exec(e))?(s.browser.name="LieBao",s.browser.version={original:i[1]}):"Android"===s.os.name&&/safari/i.test(e)&&(i=/version\/([0-9\.]+)/i.exec(e))?(s.browser.name="Google Browser",s.browser.version={original:i[1]}):/(ipad|iphone).* applewebkit\/.* mobile/i.test(e)&&(s.browser.name="Safari")),/baiduboxapp/i.test(e)?s.browser.name="百度框":/BaiduLightAppRuntime/i.test(e)?s.browser.name="轻应用runtime":/Weibo/i.test(e)?s.browser.name="微博":/baidubrowser/i.test(e)?s.browser.name="手机百度":/MQQ/i.test(e)?s.browser.name="手机QQ":/hao123/i.test(e)&&(s.browser.name="hao123"),i=/Edge\/([\w.]+)/i.exec(e)){s.browser.name="Edge";var r=i[1].replace(/_/g,".");t=/(\d+\.\d+\.\d+\.\d+)/.exec(r),t&&(r=t[1]),s.browser.version={original:r}}if(i=/MicroMessenger\/([\w.]+)/i.exec(e)){s.browser.name="微信";var r=i[1].replace(/_/g,".");t=/(\d+\.\d+\.\d+\.\d+)/.exec(r),t&&(r=t[1]),s.browser.version={original:r}}if(i=/2345Explorer\/([\w.]+)/i.exec(e)){s.browser.name="2345浏览器";var r=i[1].replace(/_/g,".");t=/(\d+\.\d+\.\d+\.\d+)/.exec(r),t&&(r=t[1]),s.browser.version={original:r}}return(i=/UCBrowser\/([\w.]+)/i.exec(e))&&(s.browser.name="UC Browser",s.browser.version={original:i[1]}),(i=/OPR\/([\w.]+)/i.exec(e))?(s.browser.name="Opera",s.browser.version={original:i[1]}):/Trident\/7/i.test(e)&&/rv:11/i.test(e)?(s.browser.name="Internet Explorer",s.browser.version={major:"11",original:"11"}):/Edge\/12/i.test(e)&&/Windows Phone|Windows NT/i.test(e)?(s.browser.name="Microsoft Edge",s.browser.version={major:"12",original:"12"}):(i=/miuibrowser\/([\w.]+)/i.exec(e))&&(s.browser.name="miui browser",s.browser.version={original:i[1]}),s.browser.name||(i=/Safari\/([\w.]+)/i.exec(e)&&/Version/i.test(e))&&(s.browser.name="Safari"),s.browser.name&&!s.browser.version&&(i=/Version\/([\w.]+)/i.exec(e))&&(s.browser.version={original:i[1]}),"Windows"===s.os.name||/Windows/i.test(e)?(s.os.name="Windows",/NT 6.3/i.test(e)?s.os.version={alias:"8.1",original:"8.1"}:(/NT 6.4/i.test(e)||/NT 10.0/i.test(e))&&(s.os.version={alias:"10",original:"10"})):"Mac OS X"===s.os.name?(s.os.name="Mac OS X",(i=/Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.exec(e))?s.os.version={alias:i[1].replace(/_/g,"."),original:i[1].replace(/_/g,".")}:s.os.version={alias:"",original:""}):/Android/i.test(s.os.name)&&(i=e.match(/Android[\s\_\-\/i686]?[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i))&&(s.os.version={alias:i[1],original:i[1]}),s}},{"./useragent-base":8}],8:[function(e,i,t){"use strict";i.exports=function(){function e(e){return e="undefined"==typeof e?"":e,e=e.replace(/_TD$/,""),e=e.replace(/_CMCC$/,""),e=e.replace(/_/g," "),e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/\/[^\/]+$/,""),e=e.replace(/\/[^\/]+ Android\/.*/,""),e=e.replace(/^tita on /,""),e=e.replace(/^Android on /,""),e=e.replace(/^Android for /,""),e=e.replace(/^ICS AOSP on /,""),e=e.replace(/^Full AOSP on /,""),e=e.replace(/^Full Android on /,""),e=e.replace(/^Full Cappuccino on /,""),e=e.replace(/^Full MIPS Android on /,""),e=e.replace(/^Full Android/,""),e=e.replace(/^Acer ?/i,""),e=e.replace(/^Iconia /,""),e=e.replace(/^Ainol /,""),e=e.replace(/^Coolpad ?/i,"Coolpad "),e=e.replace(/^ALCATEL /,""),e=e.replace(/^Alcatel OT-(.*)/,"one touch $1"),e=e.replace(/^YL-/,""),e=e.replace(/^Novo7 ?/i,"Novo7 "),e=e.replace(/^GIONEE /,""),e=e.replace(/^HW-/,""),e=e.replace(/^Huawei[ -]/i,"Huawei "),e=e.replace(/^SAMSUNG[ -]/i,""),e=e.replace(/^SonyEricsson/,""),e=e.replace(/^Lenovo Lenovo/,"Lenovo"),e=e.replace(/^LNV-Lenovo/,"Lenovo"),e=e.replace(/^Lenovo-/,"Lenovo "),e=e.replace(/^(LG)[ _\/]/,"$1-"),e=e.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/,"$1"),e=e.replace(/^(HTC)[-\/]/,"$1 "),e=e.replace(/^(HTC)([A-Z][0-9][0-9][0-9])/,"$1 $2"),e=e.replace(/^(Motorola[\s|-])/,""),e=e.replace(/^(Moto|MOT-)/,""),e=e.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i,""),e=e.replace(/http:\/\/.+$/i,""),e=e.replace(/^\s+|\s+$/g,"")}function i(e){e=e.toString();var i=e.split("."),t=i.shift();return parseFloat(t+"."+i.join(""))}var t=null,o={},s={},r=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};r.prototype={initialize:function(e){this.original=e.value||null,this.alias=e.alias||null}};var n=function(){this.initialize.apply(this,arguments)};return n.prototype={initialize:function(e,i){this.options={useFeatures:i&&i.useFeatures||!1,detectCamouflage:i&&i.detectCamouflage||!0},this.browser={stock:!0,hidden:!1,channel:""},this.engine={},this.os={},this.device={type:"desktop",identified:!1},this.camouflage=!1,this.features=[],this.detect(e)},detect:function(n){if(n.match("Unix")&&(this.os.name="Unix"),n.match("FreeBSD")&&(this.os.name="FreeBSD"),n.match("OpenBSD")&&(this.os.name="OpenBSD"),n.match("NetBSD")&&(this.os.name="NetBSD"),n.match("SunOS")&&(this.os.name="Solaris"),n.match("Linux")&&(this.os.name="Linux"),n.match("iPhone( Simulator)?;")||n.match("iPad;")||n.match("iPod;")?(this.os.name="iOS",this.os.version=new r({value:"1.0"}),(t=/OS (.*) like Mac OS X/.exec(n))&&(this.os.version=new r({value:t[1].replace(/_/g,".")})),n.match("iPhone Simulator;")?this.device.type="emulator":n.match("iPod;")?(this.device.type="media",this.device.manufacturer="Apple",this.device.model="iPod Touch"):n.match("iPhone;")?(this.device.type="mobile",this.device.manufacturer="Apple",this.device.model="iPhone"):(this.device.type="tablet",this.device.manufacturer="Apple",this.device.model="iPad"),this.device.identified=!0):n.match("Mac OS X")&&(this.os.name="Mac OS X",(t=/Mac OS X (10[0-9\._]*)/.exec(n))&&(this.os.version=new r({value:t[1].replace(/_/g,".")}))),n.match("Windows")){if(this.os.name="Windows",t=/Windows NT ([0-9]\.[0-9])/.exec(n))switch(this.os.version=i(t[1]),t[1]){case"6.2":this.os.version=new r({value:t[1],alias:"8"});break;case"6.1":this.os.version=new r({value:t[1],alias:"7"});break;case"6.0":this.os.version=new r({value:t[1],alias:"Vista"});break;case"5.2":this.os.version=new r({value:t[1],alias:"Server 2003"});break;case"5.1":this.os.version=new r({value:t[1],alias:"XP"});break;case"5.0":this.os.version=new r({value:t[1],alias:"2000"});break;default:this.os.version=new r({value:t[1],alias:"NT "+this.os.version})}if((n.match("Windows 95")||n.match("Win95")||n.match("Win 9x 4.00"))&&(this.os.version=new r({value:"4.0",alias:"95"})),(n.match("Windows 98")||n.match("Win98")||n.match("Win 9x 4.10"))&&(this.os.version=new r({value:"4.1",alias:"98"})),(n.match("Windows ME")||n.match("WinME")||n.match("Win 9x 4.90"))&&(this.os.version=new r({value:"4.9",alias:"ME"})),(n.match("Windows XP")||n.match("WinXP"))&&(this.os.name=new r({value:"5.1",alias:"XP"})),n.match("WP7")&&(this.os.name="Windows Phone",this.os.version=new r({value:"7.0",details:2}),this.device.type="mobile",this.browser.mode="desktop"),(n.match("Windows CE")||n.match("WinCE")||n.match("WindowsCE"))&&(n.match(" IEMobile")?(this.os.name="Windows Mobile",n.match(" IEMobile 8")&&(this.os.version=new r({value:"6.5",details:2})),n.match(" IEMobile 7")&&(this.os.version=new r({value:"6.1",details:2})),n.match(" IEMobile 6")&&(this.os.version=new r({value:"6.0",details:2}))):(this.os.name="Windows CE",(t=/WindowsCEOS\/([0-9.]*)/.exec(n))&&(this.os.version=new r({value:t[1],details:2})),(t=/Windows CE ([0-9.]*)/.exec(n))&&(this.os.version=new r({value:t[1],details:2}))),this.device.type="mobile"),n.match("Windows Mobile")&&(this.os.name="Windows Mobile",this.device.type="mobile"),(t=/WindowsMobile\/([0-9.]*)/.exec(n))&&(this.os.name="Windows Mobile",this.os.version=new r({value:t[1],details:2}),this.device.type="mobile"),n.match("Windows Phone [0-9]")&&(this.os.name="Windows Mobile",this.os.version=new r({value:n.match(/Windows Phone ([0-9.]*)/)[1],details:2}),this.device.type="mobile"),n.match("Windows Phone OS")){this.os.name="Windows Phone",this.os.version=new r({value:n.match(/Windows Phone OS ([0-9.]*)/)[1],details:2}),this.os.version<7&&(this.os.name="Windows Mobile"),(t=/IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(n))&&(this.device.manufacturer=t[1],this.device.model=t[2]),this.device.type="mobile";var a=this.device.manufacturer,c=e(this.device.model);"undefined"!=typeof o[a]&&"undefined"!=typeof o[a][c]&&(this.device.manufacturer=o[a][c][0],this.device.model=o[a][c][1],this.device.identified=!0),"Microsoft"===a&&"XDeviceEmulator"===c&&(this.device.manufacturer=null,this.device.model=null,this.device.type="emulator",this.device.identified=!0)}}if(n.match("Android")&&(this.os.name="Android",this.os.version=null,(t=/Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(n.replace("-update",".")))&&(this.os.version=new r({value:t[1],details:3})),n.match("Android Eclair")&&(this.os.version=new r({value:"2.0",details:3})),this.device.type="mobile",this.os.version>=3&&(this.device.type="tablet"),this.os.version>=4&&n.match("Mobile")&&(this.device.type="mobile"),(t=/Eclair; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?) Build\/([^\/]*)\//.exec(n))?this.device.model=t[1]:(t=/; ([^;]*[^;\s])\s+Build/.exec(n))?this.device.model=t[1]:(t=/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; ([^;]*[^;\s]);\s+Build/.exec(n))?this.device.model=t[1]:(t=/\(([^;]+);U;Android\/[^;]+;[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(n))?this.device.model=t[1]:(t=/;\s?([^;]+);\s?[0-9]+\*[0-9]+;\s?CTC\/2.0/.exec(n))?this.device.model=t[1]:(t=/zh-cn;\s*(.*?)(\/|build)/i.exec(n))?this.device.model=t[1]:(t=/Android [^;]+; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; )?([^)]+)\)/.exec(n))?n.match(/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?/)||(this.device.model=t[1]):(t=/^(.+?)\/\S+/i.exec(n))&&(this.device.model=t[1]),this.device.model&&"Android"===this.device.model.substring(0,7)&&(this.device.model=null),this.device.model)){var l=e(this.device.model);"undefined"!=typeof s[l]&&(this.device.manufacturer=s[l][0],this.device.model=s[l][1],"undefined"!=typeof s[l][2]&&(this.device.type=s[l][2]),this.device.identified=!0),"Emulator"!==l&&"x86 Emulator"!==l&&"x86 VirtualBox"!==l&&"vm"!==l||(this.device.manufacturer=null,this.device.model=null,this.device.type="emulator",this.device.identified=!0)}if(n.match("MSIE")&&(this.browser.name="Internet Explorer",(n.match("IEMobile")||n.match("Windows CE")||n.match("Windows Phone")||n.match("WP7"))&&(this.browser.name="Mobile Internet Explorer"),(t=/MSIE ([0-9.]*)/.exec(n))&&(this.browser.version=new r({value:t[1]}))),n.match(/Opera/i)&&(this.browser.stock=!1,this.browser.name="Opera",(t=/Opera[\/| ]([0-9.]*)/.exec(n))&&(this.browser.version=new r({value:t[1]})),(t=/Version\/([0-9.]*)/.exec(n))&&(parseFloat(t[1])>=10?this.browser.version=new r({value:t[1]}):this.browser.version=null),this.browser.version&&n.match("Edition Labs")&&(this.browser.version.type="alpha",this.browser.channel="Labs"),this.browser.version&&n.match("Edition Next")&&(this.browser.version.type="alpha",this.browser.channel="Next"),n.match("Opera Tablet")&&(this.browser.name="Opera Mobile",this.device.type="tablet"),n.match("Opera Mobi")&&(this.browser.name="Opera Mobile",this.device.type="mobile"),(t=/Opera Mini;/.exec(n))&&(this.browser.name="Opera Mini",this.browser.version=null,this.browser.mode="proxy",this.device.type="mobile"),(t=/Opera Mini\/(?:att\/)?([0-9.]*)/.exec(n))&&(this.browser.name="Opera Mini",this.browser.version=new r({value:t[1],details:-1}),this.browser.mode="proxy",this.device.type="mobile"),"Opera"===this.browser.name&&"mobile"===this.device.type&&(this.browser.name="Opera Mobile",n.match(/BER/)&&(this.browser.name="Opera Mini",this.browser.version=null)),n.match("InettvBrowser")&&(this.device.type="television"),(n.match("Opera TV")||n.match("Opera-TV"))&&(this.browser.name="Opera",this.device.type="television"),n.match("Linux zbov")&&(this.browser.name="Opera Mobile",this.browser.mode="desktop",this.device.type="mobile",this.os.name=null,this.os.version=null),n.match("Linux zvav")&&(this.browser.name="Opera Mini",this.browser.version=null,this.browser.mode="desktop",this.device.type="mobile",this.os.name=null,this.os.version=null)),n.match("Firefox")&&(this.browser.stock=!1,this.browser.name="Firefox",(t=/Firefox\/([0-9ab.]*)/.exec(n))&&(this.browser.version=new r({value:t[1]})),"alpha"===this.browser.version.type&&(this.browser.channel="Aurora"),"beta"===this.browser.version.type&&(this.browser.channel="Beta"),n.match("Fennec")&&(this.device.type="mobile"),n.match("Mobile; rv")&&(this.device.type="mobile"),n.match("Tablet; rv")&&(this.device.type="tablet"),"mobile"!==this.device.type&&"tablet"!==this.device.type||(this.browser.name="Firefox Mobile")),(t=/(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(n))&&(this.browser.stock=!1,this.browser.name="Chrome",this.browser.version=new r({value:t[1]})),n.match("UCWEB")&&(this.browser.stock=!1,this.browser.name="UC Browser",(t=/UCWEB([0-9]*[.][0-9]*)/.exec(n))&&(this.browser.version=new r({value:t[1],details:3})),"Linux"===this.os.name&&(this.os.name=""),this.device.type="mobile",(t=/^IUC \(U;\s?iOS ([0-9\.]+);/.exec(n))&&(this.os.name="iOS",this.os.version=new r({value:t[1]})),t=/^JUC \(Linux; U; ([0-9\.]+)[^;]*; [^;]+; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(n))){var h=e(t[2]);this.os.name="Android",this.os.version=new r({value:t[1]}),"undefined"!=typeof s[h]&&(this.device.manufacturer=s[h][0],this.device.model=s[h][1],"undefined"!=typeof s[h][2]&&(this.device.type=s[h][2]),this.device.identified=!0)}if(n.match(/\) UC /)&&(this.browser.stock=!1,this.browser.name="UC Browser"),(t=/UCBrowser\/([0-9.]*)/.exec(n))&&(this.browser.stock=!1,this.browser.name="UC Browser",this.browser.version=new r({value:t[1],details:2})),t=/(M?QQBrowser)\/([0-9.]*)/.exec(n)){this.browser.name="QQ Browser";var d=t[2];d.match(/^[0-9][0-9]$/)&&(d=d[0]+"."+d[1]),this.browser.version=new r({value:d,details:2}),this.browser.channel="",this.os.name||"QQBrowser"!==t[1]||(this.os.name="Windows")}n.match("360EE")&&(this.browser.stock=!1,this.browser.name="360 Extreme Explorer",this.browser.version=null);for(var u=[{name:"Maxthon",regexp:/Maxthon[\/ ]([0-9.]*)/,details:3},{name:"Sogou Explorer",regexp:/SE 2.X MetaSr/},{name:"猎豹浏览器",regexp:/LBBROWSER/}],m=0;m<u.length;m++)(t=u[m].regexp.exec(n))&&(this.browser.name=u[m].name,this.browser.channel="",this.browser.stock=!1,t[1]?this.browser.version=new r({value:t[1],details:u[m].details||null}):this.browser.version=null);if((t=/WebKit\/([0-9.]*)/i.exec(n))&&(this.engine.name="Webkit",this.engine.version=new r({value:t[1]})),(t=/Browser\/AppleWebKit([0-9.]*)/i.exec(n))&&(this.engine.name="Webkit",this.engine.version=new r({value:t[1]})),(t=/KHTML\/([0-9.]*)/.exec(n))&&(this.engine.name="KHTML",this.engine.version=new r({value:t[1]})),/Gecko/.exec(n)&&!/like Gecko/i.exec(n)&&(this.engine.name="Gecko",(t=/; rv:([^\)]+)\)/.exec(n))&&(this.engine.version=new r({value:t[1]}))),(t=/Presto\/([0-9.]*)/.exec(n))&&(this.engine.name="Presto",this.engine.version=new r({value:t[1]})),(t=/Trident\/([0-9.]*)/.exec(n))&&(this.engine.name="Trident",this.engine.version=new r({value:t[1]}),"Internet Explorer"===this.browser.name&&(6===i(this.engine.version)&&parseFloat(this.browser.version)<10&&(this.browser.version=new r({value:"10.0"}),this.browser.mode="compat"),5===i(this.engine.version)&&parseFloat(this.browser.version)<9&&(this.browser.version=new r({value:"9.0"}),this.browser.mode="compat"),4===i(this.engine.version)&&parseFloat(this.browser.version)<8&&(this.browser.version=new r({value:"8.0"}),this.browser.mode="compat")),"Windows Phone"===this.os.name&&5===i(this.engine.version)&&parseFloat(this.os.version)<7.5&&(this.os.version=new r({value:"7.5"}))),this.options.detectCamouflage){if(t=/Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(n)){this.browser.name="",this.browser.version=null,this.browser.mode="desktop",this.os.name="Android",this.os.version=null,this.engine.name="Webkit",this.engine.version=null,this.device.model=t[1],this.device.type="mobile";var p=e(this.device.model);"undefined"!=typeof s[p]&&(this.device.manufacturer=s[p][0],this.device.model=s[p][1],"undefined"!=typeof s[p][2]&&(this.device.type=s[p][2]),this.device.identified=!0),this.features.push("foundDevice")}if(t=/Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(n)){this.browser.name="",this.browser.version=null,this.browser.mode="desktop",this.os.name="Android",this.os.version=null,this.engine.name="Webkit",this.engine.version=null,this.device.model=t[1],this.device.type="mobile";var v=e(this.device.model);"undefined"!=typeof s[v]&&(this.device.manufacturer=s[v][0],this.device.model=s[v][1],"undefined"!=typeof s[v][2]&&(this.device.type=s[v][2]),this.device.identified=!0),this.features.push("foundDevice")}"Safari"===this.browser.name&&("iOS"!==this.os.name&&/AppleWebKit\/([0-9]+.[0-9]+)/i.exec(n)[1]!==/Safari\/([0-9]+.[0-9]+)/i.exec(n)[1]&&(this.features.push("safariMismatch"),this.camouflage=!0),"iOS"!==this.os.name||n.match(/^Mozilla/)||(this.features.push("noMozillaPrefix"),this.camouflage=!0),/Version\/[0-9\.]+/.exec(n)||(this.features.push("noVersion"),this.camouflage=!0)),"Chrome"===this.browser.name&&(/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/.exec(n)||(this.features.push("wrongVersion"),this.camouflage=!0)),this.options.useFeatures&&(window.ActiveXObject&&(this.features.push("trident"),"undefined"!=typeof this.engine.name&&"Trident"!==this.engine.name&&(this.camouflage="undefined"==typeof this.browser.name||"Maxthon"!==this.browser.name)),window.opera&&(this.features.push("presto"),"undefined"!=typeof this.engine.name&&"Presto"!==this.engine.name&&(this.camouflage=!0),"Internet Explorer"===this.browser.name&&(this.camouflage=!0)),("getBoxObjectFor"in document||"mozInnerScreenX"in window)&&(this.features.push("gecko"),"undefined"!=typeof this.engine.name&&"Gecko"!==this.engine.name&&(this.camouflage=!0),"Internet Explorer"===this.browser.name&&(this.camouflage=!0)),("WebKitCSSMatrix"in window||"WebKitPoint"in window||"webkitStorageInfo"in window||"webkitURL"in window)&&(this.features.push("webkit"),"undefined"!=typeof this.engine.name&&"Webkit"!==this.engine.name&&(this.camouflage=!0),"Internet Explorer"===this.browser.name&&(this.camouflage=!0)),"Webkit"===this.engine.name&&{}.toString.toString().indexOf("\n")===-1&&(this.features.push("v8"),null!==this.browser&&"Safari"===this.browser.name&&(this.camouflage=!0)),"iPad"===this.device.model&&0!==screen.width&&0!==screen.height&&768!==screen.width&&1024!==screen.height&&1024!==screen.width&&768!==screen.height&&(this.features.push("sizeMismatch"),this.camouflage=!0),"iPhone"!==this.device.model&&"iPod"!==this.device.model||0!==screen.width&&0!==screen.height&&320!==screen.width&&480!==screen.height&&480!==screen.width&&320!==screen.height&&(this.features.push("sizeMismatch"),this.camouflage=!0),"iOS"===this.os.name&&this.os.version&&(this.os.version.isOlder("4.0")&&"sandbox"in document.createElement("iframe")&&(this.features.push("foundSandbox"),this.camouflage=!0),this.os.version.isOlder("4.2")&&"WebSocket"in window&&(this.features.push("foundSockets"),this.camouflage=!0),this.os.version.isOlder("5.0")&&window.Worker&&(this.features.push("foundWorker"),this.camouflage=!0),this.os.version.isNewer("2.1")&&!window.applicationCache&&(this.features.push("noAppCache"),this.camouflage=!0)),"iOS"!==this.os.name&&"Safari"===this.browser.name&&this.browser.version&&(this.browser.version.isOlder("4.0")&&window.applicationCache&&(this.features.push("foundAppCache"),this.camouflage=!0),this.browser.version.isOlder("4.1")&&window.history&&history.pushState&&(this.features.push("foundHistory"),this.camouflage=!0),this.browser.version.isOlder("5.1")&&document.documentElement.webkitRequestFullScreen&&(this.features.push("foundFullscreen"),this.camouflage=!0),this.browser.version.isOlder("5.2")&&"FileReader"in window&&(this.features.push("foundFileReader"),this.camouflage=!0)))}}},n}()},{}],9:[function(e,i,t){"use strict";i.exports=function(e){function i(){}function t(e){return 0>e?NaN:30>=e?0|Math.random()*(1<<e):53>=e?(0|1073741824*Math.random())+1073741824*(0|Math.random()*(1<<e-30)):NaN}function o(e,i){for(var t=e.toString(16),o=i-t.length,s="0";0<o;o>>>=1,s+=s)1&o&&(t=s+t);return t}return i.generate=function(){return o(t(32),8)+"-"+o(t(16),4)+"-"+o(16384|t(12),4)+"-"+o(32768|t(14),4)+"-"+o(t(48),12)},i}()},{}],10:[function(e,i,t){"use strict";var o=Object.prototype.hasOwnProperty,s=Object.prototype.toString,r=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===s.call(e)},n=function(e){if(!e||"[object Object]"!==s.call(e))return!1;var i=o.call(e,"constructor"),t=e.constructor&&e.constructor.prototype&&o.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!t)return!1;var r;for(r in e);return"undefined"==typeof r||o.call(e,r)};i.exports=function a(){var e,i,t,o,s,c,l=arguments[0],h=1,d=arguments.length,u=!1;for("boolean"==typeof l?(u=l,l=arguments[1]||{},h=2):("object"!=typeof l&&"function"!=typeof l||null==l)&&(l={});h<d;++h)if(e=arguments[h],null!=e)for(i in e)t=l[i],o=e[i],l!==o&&(u&&o&&(n(o)||(s=r(o)))?(s?(s=!1,c=t&&r(t)?t:[]):c=t&&n(t)?t:{},l[i]=a(u,c,o)):"undefined"!=typeof o&&(l[i]=o));return l}},{}],11:[function(e,i,t){"use strict";function o(e){this.core=e}function s(e){return new o(l,e)}var r=e("../lib/ua-device/index.js"),n=new r(navigator.userAgent),a=e("../core/tools.es6"),c=a.cookie,l=e("../core/core.es6");o.prototype.ready=function(){this.core.sendInfomation(this.collectBrowserInfo())},o.prototype.collectBrowserInfo=function(){return{osVersion:n.os.version.original,os:n.os.name,platform:navigator.platform,browser:n.browser.name,cookieSupport:c.support,browserVersion:n.browser.version&&n.browser.version.original,deviceManufacturer:n.device.manufacturer,deviceModel:n.device.model,deviceType:n.device.type,engineName:n.engine.name,engineVersion:n.engine.version&&n.engine.version.original,language:navigator.language,screenWidth:screen.width,screenHeight:screen.height,aScreenWidth:screen.availWidth,aScreenHeight:screen.availHeight,userAgent:navigator.userAgent}},i.exports=s},{"../core/core.es6":1,"../core/tools.es6":2,"../lib/ua-device/index.js":6}],12:[function(e,i,t){"use strict";var o=e("./plugins/collectBrowserInfo.es6"),s=e("./core/core.es6"),r=e("./core/util.es6");i.exports={tool:e("./core/tools.es6"),core:s,util:r},s.register({plugins:[o()]})},{"./core/core.es6":1,"./core/tools.es6":2,"./core/util.es6":4,"./plugins/collectBrowserInfo.es6":11}]},{},[12])(12)});