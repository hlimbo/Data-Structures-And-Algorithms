const expect = require('chai').expect;
const Promise = require('bluebird');

function dataPromise() {
  return Promise.resolve([0,1,2,3,4,5]);
}

function validateAllDataElementsExist(data) {
  for(const num of data) {
    context('data elements are all defined', () => {
      it(`data in array is expected to be ${num}`, () => { // better for logging purposes but the trade off is that the code doesn't look "nice" to read
        expect(num).to.not.be.undefined;
      });
    });
  }
}

let data;
describe('my setup', () => {

  before(async () => { 
    data = await dataPromise();
    expect(data).to.not.be.undefined;
    expect(data).to.not.be.empty;
    console.log('ELLO');
  });

  it('example', () => { 
    console.log(data);
    validateAllDataElementsExist(data);
  });

  after(() => { 
    expect(data).to.not.be.undefined;
    expect(data).to.not.be.empty;
    console.log('BYE');
  });
});
