const expect = require('chai').expect;
const Promise = require('bluebird');

function dataPromise() {
  return Promise.resolve([0,1,2,3,4,5]);
}

// solution is prepare the data in a separate context, since examples are executed in order given arrow functions are used
let data = [];
describe('test with loops 2',() => {
  it('retrieves data successfully',async() => {
    data = await dataPromise();
    expect(data).to.not.be.undefined;
    expect(data).to.not.be.empty;
  });

  it('has the data across examples',() => {
    expect(data).to.not.be.undefined;
    expect(data).to.not.be.empty;
  });
});

describe('data is reset across contexts',() => {
  expect(data).to.be.empty;

  it('expects data to NOT be empty',() => {
    expect(data).to.not.be.undefined;
    expect(data).to.not.be.empty;
  });
});