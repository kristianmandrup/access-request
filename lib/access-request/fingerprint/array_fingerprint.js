// Generated by LiveScript 1.2.0
(function(){
  var Fingerprint, ArrayFingerprint, toString$ = {}.toString;
  Fingerprint = require('./fingerprint');
  module.exports = ArrayFingerprint = (function(superclass){
    var prototype = extend$((import$(ArrayFingerprint, superclass).displayName = 'ArrayFingerprint', ArrayFingerprint), superclass).prototype, constructor = ArrayFingerprint;
    prototype.fingerprint = function(){
      return this.none() || this.string() || this.joined();
    };
    prototype.joined = function(){
      if (toString$.call(this.value).slice(8, -1) === 'Array') {
        return this.value.join('.');
      }
    };
    function ArrayFingerprint(){
      ArrayFingerprint.superclass.apply(this, arguments);
    }
    return ArrayFingerprint;
  }(Fingerprint));
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);