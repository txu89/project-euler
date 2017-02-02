var prev1 = 1;
var prev2 = 2;
var num = 2;
var sum = 0;

while (num < 4000000) {
  if (num % 2 == 0) {
    sum += num;
  }
  num = prev1 + prev2;
  prev1 = prev2;
  prev2 = num;
}

console.log(sum);
