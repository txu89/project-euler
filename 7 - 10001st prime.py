import math

def findNthPrime(n):
  num = 5
  primeList = [2, 3]

  def isPrime(x):
    i = 0

    if x == (2 or 3):
      return True
    while primeList[i] <= math.sqrt(x):
      if x % primeList[i] == 0:
        return False
      i += 1
    return True

  while len(primeList) < n:

    if isPrime(num):
      primeList.append(num)
    num += 1

  return primeList[n-1]

print findNthPrime(10001)
