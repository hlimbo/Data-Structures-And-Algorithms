const expect = require('chai').expect;
const _ = require('lodash');

const bubbleSort = require('../../src/sorting/bubble_sort');

const randomNumberInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomPositiveNumbers = (min, max, dataLength = 1000) => {
  const data = [];
  for(let i = 0;i < dataLength; i += 1) {
    data.push(randomNumberInclusive(min, max));
  }

  return data;
};

describe('Bubble Sort Tests', function() {

  specify('sort numerical data in ascending order',function() {
    const data = [5,4,3,2,1]; // descending order
    const sortedData = bubbleSort(data); // behavior under test

    data.sort();
    expect(data).to.be.deep.equal(sortedData);
  });

  specify('sort numerical data in descending order', function() {
    const data = [1, 2, 3, 4, 5]; // ascending order
    const inDescendingOrder = true;
    const sortedData = bubbleSort(data, inDescendingOrder); //behavior under test

    data.sort((a,b) => a < b);
    expect(data).to.be.deep.equal(sortedData);
  });
});

describe('Bubble Sort Tests 2', function() {
  const testIterations = 1000;
  const dataLength = 1000;
  const min = 0;
  const max = 1000;

  for(let i = 0;i < testIterations;i += 1) {
    specify(`sort RANDOM numerical data in ascending order ${i}`, function() {
      const data = generateRandomPositiveNumbers(min, max, dataLength);
      console.log('random data');
      console.log(data);

      const sortedData = bubbleSort(data); //behavior under test

      const lodashSortedData = _.sortBy(data, (value) => value);

      expect(lodashSortedData).to.be.deep.equal(sortedData);
    });

    specify(`sort RANDOM numerical data in descending order ${i}`, function() {
      const data = generateRandomPositiveNumbers(min, max, dataLength);

      const inDescendingOrder = true;
      const sortedData = bubbleSort(data, inDescendingOrder); // behavior under test

      const lodashSortedData = _.orderBy(data, value => value, ['desc']);

      expect(lodashSortedData).to.be.deep.equal(sortedData);
    });
  }
});