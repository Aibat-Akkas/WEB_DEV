# https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true

if __name__ == '__main__':
    n = int(input().strip())
    if n % 2 == 0 and (n > 20 or 2 <= n <= 5): print("Not Weird")
    else: print("Weird") 