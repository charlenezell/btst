function ElementList(){}
let $=function(selector){
    return new ElementList(selector);
}
module.exports=$