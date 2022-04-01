a = input()
b = int(input())

print("Yes" if ((True if (len(a)==4 and str(a) == str(a)[::-1]) else False) if b==1 else not (True if (len(a)==4 and str(a) == str(a)[::-1]) else False)) else "No")
