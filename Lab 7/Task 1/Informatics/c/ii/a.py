import math

def isPerfectSquare(x):

    if(x > 0):
        sr = int(math.sqrt(x))
        return ((sr*sr) == x)
    return False

a = int(input())
i = 0

while(i != a):
    if isPerfectSquare(i):
        print(i)
    i+=1