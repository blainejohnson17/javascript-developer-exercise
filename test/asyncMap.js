var chai = require('chai')
  , spies = require('chai-spies');

chai.use(spies);

var expect = chai.expect;

require("../app/asyncMap");


describe("asyncMap", function() {
  it("should call callback with each mapped element", function(done) {
    var spy = chai.spy(result => {});

    [1, 2, 3].asyncMap(item => (item + 1), spy);

    setTimeout(function(){
      expect(spy).to.have.been.called.exactly(3);
      expect(spy).to.have.been.called.with(2);
      expect(spy).to.have.been.called.with(3);
      expect(spy).to.have.been.called.with(4);
      done();
    }, 1000);
  });
});