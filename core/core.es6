let util=require("./util.es6");
let event=require("./event.es6");
let $=require("./selector.es6");
function env(){

}
function register(config){
// console.log(config);
config.plugins[0].ready();
// var beforeloadFunc = window.onbeforeunload;
//     if(typeof beforeloadFunc != 'function'){
//       window.onbeforeunload = func;
//     }else{
//       window.onbeforeunload = function(){
//         beforeloadFunc();
//         func();
//       }
//     }
}
function sendInfomation(data){
    window.onload=function(){
        document.getElementById("hehe").innerHTML=JSON.stringify(data,null,"\t")+`\n${navigator.userAgent}`;
    }
}
let st={
    register,
    sendInfomation
};

module.exports={util,st,event,$};