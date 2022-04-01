def isPowerOfTwo (x):
    return (x and (not(x & (x - 1))) )

print("Yes" if isPowerOfTwo(int(input())) else "No")