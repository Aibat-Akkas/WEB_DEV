a = int(input())
l = list(map(int, input().split()))
s = set(l)

print("Yes" if len(l) == len(s) else "No")