/// <reference path="./typings/index.d.ts" />
let st=require("./core/core.es6").st;
let cookies = require("./cookies.es6");
let p_collectBrowserInfo=require("./plugins/collectBrowserInfo.es6")
module.exports= {
    util:require("./core/core.es6").util,
    tool:{cookies}
    st
    // $:require("./core/core.es6").$,
    // event:require("./core/core.es6").event
};
st.register({
    plugins:[p_collectBrowserInfo()]//默认开启基本的浏览器信息收集模块
});