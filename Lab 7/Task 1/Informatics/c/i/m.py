n = int(input())
count = 0

for i in range(n):
    count+=(1 if int(input())==0 else 0)

print(count)