Array.prototype.asyncMap = function(transFunc, cb) {
  var self = this;
  var results = [];
  function job(i) {
    results[i] = transFunc(self[i]);
    if (i < self.length - 1) {
      setTimeout(job, 0, i + 1);
    } else {
      cb(results);
    }
  }

  setTimeout(job, 0, 0);
};



[1, 2, 3].asyncMap(item => (item + 1), result => console.log(result))