a = int(input())

for i, b in enumerate(map(int, input().split())):
    if i % 2 == 0:
        print(b, end=" ")