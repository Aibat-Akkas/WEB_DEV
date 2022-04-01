def findMin(a, b, c, d):
    return min([a, b, c, d])

l = list(map(int, input().split()))

print(findMin(l[0], l[1], l[2], l[3]))