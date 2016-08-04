/// <reference path="../typings/index.d.ts" />
function ElementList(){}
let $=function(selector){
    return new ElementList(selector);
}
module.exports=$