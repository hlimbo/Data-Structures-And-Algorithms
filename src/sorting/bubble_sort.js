
const bubbleSort = (data, inDescendingOrder = false) => {
  const result = Object.assign([], data);

  for(let i = 0;i < result.length;i += 1) {
    for(let j = 0;j < result.length - 1;j += 1) {

      // decide which swap condition to use based on inDescendingOrder flag
      const isSwapConditionMet = inDescendingOrder ? result[j] < result[j + 1] : result[j] > result[j + 1];

      if(isSwapConditionMet) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

module.exports = bubbleSort;