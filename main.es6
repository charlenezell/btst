let p_collectBrowserInfo=require("./plugins/collectBrowserInfo.es6");
let core=require("./core/core.es6");
let util=require("./core/util.es6");
module.exports= {
    tool:require("./core/tools.es6"),
    core,
    util
    // $:require("./core/core.es6").$,
    // event:require("./core/core.es6").event
};
core.register({
    plugins:[p_collectBrowserInfo()]//默认开启基本的浏览器信息收集模块
});


//p_collectBrowserInfo()返回的是一个plugin对象
// Class Plugin{
//     beforeUnload():void{
//         //do something on beforeUnload
//     }
//     unload():void{
//         //do something on unload
//     }
//     canRun(runingInfo:RuningInfo):boolean{
//         //if(runingInfo satisfy some condition){
//             //return boolean
//         //}
//     }
//     ready():void{
//         //do something on domReady
//     }
// }

//Class RuningInfo{
    // url:string
    // phase:Phase
//}

//enum Phase{
    // Ready,
    // Unload,
    // Beforeunload,
//}