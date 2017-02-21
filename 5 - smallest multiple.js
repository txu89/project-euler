function findMultiple(num) {
  var numList = [];
  var multiple = 1;
  var temp;
  for (let i = 0; i <num; i++) {
    numList[i] = i +1;
  }

  for (let i = 1;  i < numList.length; i++) {
    multiple  *= numList[i];
    temp = numList[i];
    for (let j = 1; j < numList.length; j++) {
      if (numList[j] % temp == 0) {
        numList[j] /= temp;
      }
    }
  }
  return multiple;
}

console.log(findMultiple(20));
