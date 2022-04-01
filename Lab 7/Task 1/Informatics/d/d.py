a = int(input())
l = list(map(int, input().split()))
count = 0

for i, b in enumerate(l):
    if b > l[i - 1]:
        count += 1

print(count)