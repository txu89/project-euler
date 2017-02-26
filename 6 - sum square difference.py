def sumSquareDif(num):
  sumOfSquare, squareOfSum = 0, 0
  for i in range(1, num + 1):
    sumOfSquare += i * i
    squareOfSum += i

  squareOfSum *= squareOfSum

  result = squareOfSum - sumOfSquare
  return result

print(sumSquareDif(100))
