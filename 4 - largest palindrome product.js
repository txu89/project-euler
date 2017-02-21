function findPalindrome() {
  var product;
  var productSplit = [];
  var productReverse = [];
  var ans1, ans2;
  var palindrome = 0;


  for (let i = 999; i>99; i--) {
    for (let j=999; j>99; j--) {
      product = i * j;
      productSplit = product.toString().split('');
      productReverse = product.toString().split('').reverse();
      ans1 = productSplit.join('');
      ans2 = productReverse.join('');

      if ((ans1==ans2) && (product > palindrome)) {
        palindrome = product;
      }
    }
  }
  return palindrome;
}

console.log(findPalindrome());
