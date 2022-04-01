def isPowerOfTwo (x):
    return (x and (not(x & (x - 1))) )

a = int(input())
i = 0

while(i != a):
    if isPowerOfTwo(i):
        print(i)
    i+=1