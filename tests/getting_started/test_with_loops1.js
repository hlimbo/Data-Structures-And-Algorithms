const expect = require('chai').expect;

describe('Test with loops 1',() => {
  let data = [0, 1, 2, 3, 4, 5];
  data.forEach((num) => {
    it(`test ${num}`, () => {
      expect(num).to.not.be.undefined;
    })
  });
});