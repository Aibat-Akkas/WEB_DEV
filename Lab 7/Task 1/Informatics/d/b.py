a = int(input())

for b in (map(int, input().split())):
    if b % 2 == 0:
        print(b, end=" ")