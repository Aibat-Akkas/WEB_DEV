from math import log, ceil

a = int(input())
i = 1
count = 0

while(i <= a):
    i *= 2
    count += 1
    if i >= a:
        print(count)
        break
    