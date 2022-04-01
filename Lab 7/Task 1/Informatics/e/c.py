def Xor(a, b):
    return a != b

l = list(map(int, input().split()))
print(1 if Xor(l[0], l[1]) else 0)