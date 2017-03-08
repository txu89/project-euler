import math

def findNthPrime(N):
  firstPrime, secondPrime = 2, 3
  primeNumToCheck = 5
  primeList = [firstPrime, secondPrime]

  def isPrime(number):
    primeIndex = 1

    if number == (2 or 3):
      return True
    while primeList[primeIndex] <= math.sqrt(number):
      if number % primeList[primeIndex] == 0:
        return False
      primeIndex += 1
    return True

  while len(primeList) < N:

    if isPrime(primeNumToCheck):
      primeList.append(primeNumToCheck)
    primeNumToCheck += 2

  return primeList[N-1]

print findNthPrime(10001)
