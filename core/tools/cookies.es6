const util= require("../util.es6");
function cookie(key, value, options) {
  if (arguments.length > 1 && String(value) !== "[object Object]") {
    options = util.extend({}, options);
    if (value === null || value === undefined) {
      options.expires = -1;
    }
    if (typeof options.expires === 'number') {
      var minute = options.expires,
        t = options.expires = new Date();
      t.setMinutes(t.getMinutes() + minute);
    }
    value = String(value);
    return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
  }
  options = value || {};
  var result, decode = options.raw ? function(s) {
    return s;
  } : decodeURIComponent;
  return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
}
cookie.support=(function(){
  let g=false;
  cookie("mytestofcookie","mytestofcookie");
  if(cookie("mytestofcookie")){
    g=true;
  }
  cookie("mytestofcookie",null,{
    expires:"1990-01-01"
  })
  return g;
})();

module.exports=cookie;
