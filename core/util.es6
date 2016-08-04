let uuid = require('node-uuid');
let cookies = require('cookies-js')(window);
function sayHello() {
    var good = "world"
    return `hello${good}!`;
}

function each() {

}

function map() {

}

function extend() {

}

function template() {

}

function throttle() {

}

function bounce() {

}

function isFunction() {

}

function isNumber() {

}

function isString() {

}

function querySelectorAll() {

}
function getUuid(){
    return uuid.v1();
}
module.exports = {
    each,
    map,
    extend,
    template,
    throttle,
    bounce,
    isFunction,
    isNumber,
    isString,
    getUuid,
    cookies
}