// Generated by LiveScript 1.2.0
(function(){
  var Fingerprint, toString$ = {}.toString;
  module.exports = Fingerprint = (function(){
    Fingerprint.displayName = 'Fingerprint';
    var prototype = Fingerprint.prototype, constructor = Fingerprint;
    function Fingerprint(value){
      this;
      this.value = value;
    }
    prototype.fingerprint = function(){
      return this.none() || this.string();
    };
    prototype.string = function(){
      if (toString$.call(this.value).slice(8, -1) === 'String') {
        return this.value;
      }
    };
    prototype.none = function(){
      if (this.value === void 8) {
        return 'x';
      }
    };
    return Fingerprint;
  }());
}).call(this);