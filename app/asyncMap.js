Array.prototype.asyncMap = function(transFunc, cb) {
  this.forEach(function(e) {
    setTimeout(function() {
      cb(transFunc(e))
    }, 0)
  });
};
