def is_square(apositiveint):
  x = apositiveint // 2
  seen = set([x])
  while x * x != apositiveint:
    x = (x + (apositiveint // x)) // 2
    if x in seen: return False
    seen.add(x)
  return True

a = int(input())
b = int(input())

for i in range(a, b):
    if is_square(i):
        print(i, end=" ")