a = int(input())
count = 0

for b in (map(int, input().split())):
    if b > 0:
        count += 1

print(count)