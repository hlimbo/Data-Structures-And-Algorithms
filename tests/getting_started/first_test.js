const expect = require('chai').expect;

describe('Array', () => {
  context('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.be.equal(-1);
    });
  });
});