const expect = require('chai').expect;
const Promise = require('bluebird');

function dataPromise() {
  return Promise.resolve([0,1,2,3,4,5]);
}

// solution is prepare the data in a separate context, since examples are executed in order
let data = [];
describe.only('test with loops 2',() => {
  context('setting up data',() => {
    it('retrieves data successfully',async() => {
      data = await dataPromise();
      expect(data).to.not.be.undefined;
      expect(data).to.not.be.empty;
    });
  });

  context('data looper',() => {
    it('has the data across contexts',() => {
      expect(data).to.not.be.undefined;
      expect(data).to.not.be.empty;
      
      // aggregate all values awaited from previous context and place them in a set of expectations
      let results = [];
      for(num of data) {
        results.push(num);
      }

      results.pop(); // fails here
      console.log(results);
      expect(results).to.be.deep.equal(data);

    });
  });
});