function largestPrime(num) {
  var i = 2;
  var pFactor;
  var largest = 0;

  while ((num / i) != 1) {
    if ((num % i) == 0) {
      pFactor = i;
      num = num / i;
      if (pFactor > largest) {
        largest = pFactor;
      }
      i = 2;
    }
    else {
      i++;
    }
  }

  if (num > largest) {
    largest = num;
  }

  return largest;
}

var answer = largestPrime(600851475143);

console.log(answer);
