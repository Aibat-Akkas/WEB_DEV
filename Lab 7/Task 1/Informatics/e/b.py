def power(a, b):
    return a**b

l = list(map(int, input().split()))
print(power(l[0], l[1]))