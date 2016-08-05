let uuid = require("../lib/uuid.es6");
let class2type = {};
const toString = class2type.toString;
const hasOwn = class2type.hasOwnProperty;
let support = {};
let deletedIds = [];
let concat = deletedIds.concat;
// Populate the class2type map
each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

function isArrayLike(obj) {

    // Support: iOS 8.2 (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        _type = type(obj);

    if (_type === "function" || isWindow(obj)) {
        return false;
    }

    return _type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in obj;
}

// console.log(isArrayLike({}),
//     isArrayLike([]))

function each(obj, callback) {
    var length, i = 0;
    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], obj[i], i) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], obj[i], i) === false) {
                break;
            }
        }
    }
    return obj;
}

function map(elems, callback, arg) {
    var length, value,
        i = 0,
        ret = [];

    // Go through the array, translating each of the items to their new values
    if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
            value = callback(elems[i], i, arg);

            if (value != null) {
                ret.push(value);
            }
        }

        // Go through every key on the object,
    } else {
        for (i in elems) {
            value = callback(elems[i], i, arg);

            if (value != null) {
                ret.push(value);
            }
        }
    }
    // Flatten any nested arrays
    return concat.apply([], ret);
}

var extend = require("extend");

function generateNS(k, obj, context) {
    var e = k.split("."),
        f = context || window,
        g = null;
    while (g = e.shift()) {
        if (e.length) {
            f[g] === undefined && (f[g] = {});
            f = f[g]
        } else if (f[g] === undefined) {
            f[g] = obj;
        } else {
            throw "[" + k + "] : has been register";
        }
    }
}

function queryNS(expression, context) {
    //这里这样写的原因是为了躲开编译器的追捕
    //同时这里使用必须多家注意小心谨慎，因为expression是可以是任何javascript脚本的
    try {
        return eval(`
        with(context) {
            eval(expression)||""
        }
        `)
    } catch (e) {
        return ""
    }
}

function _template(str, data, regexp) {
    return str.replace(regexp || /\${([^{}]*)}/g, function(str, p1) {
        return queryNS(p1, data);
    });
}

function template(str, data, regexp) {
    return str.replace(regexp || /\${([^{}]*)}/g, function(str, p1) {
        return (data[p1] !== undefined && data[p1] !== null && data[p1].toString()) || "";
    });
}

function type(obj) {
    if (obj == null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[toString.call(obj)] || "object" :
        typeof obj;
}

function isWindow(obj) {
    return obj != null && obj == obj.window;
}
// console.log(type(""),
//     type({}),
//     type(2), type(new Date), type(null))

function isPlainObject(obj) {
    // console.log(isPlainObject(function() {}))
    // console.log(isPlainObject({}))
    // console.log(isPlainObject(window))
    // console.log(isPlainObject(document.createElement("div")))
    // console.log(isPlainObject([]))
    // var b = function() {}
    // var a = new b();
    // console.log(isPlainObject(a))
    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
        return false;
    }

    var ctor, prot;

    // If has modified constructor
    ctor = obj.constructor;
    if (typeof ctor !== 'function') return false;

    // If has modified prototype
    prot = ctor.prototype;
    if (type(prot) === false) return false;

    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
    }

    // Most likely a plain Object
    return true;
}

function isFunction(obj) {
    return type(obj) === "function";
}

function isNumeric(obj) {
    var realStringObj = obj && obj.toString();
    return !isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0;

}

function isArray(obj) {
    return type(obj) === "array";
}


function getUuid() {
    return uuid.generate();
}

let td=require("../lib/throttledebounce.es6");
module.exports = {
    each,
    map,
    extend,
    isFunction,
    isPlainObject,
    isNumeric,
    getUuid,
    generateNS,
    _template,
    template,
    debounce:td.debounce,
    throttle:td.throttle
}