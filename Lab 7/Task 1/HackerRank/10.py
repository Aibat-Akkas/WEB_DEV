# https://www.hackerrank.com/challenges/python-lists/problem?isFullScreen=true

if __name__ == '__main__':
    N = int(input())
    l = list()
    for i in range(N):
        inp =  input().split()
        if len(inp) == 2:
            s = inp[0]
            n = int(inp[1])
            if s=="append": l.append(n)
            else: l.remove(n)
        elif len(inp) == 1:
            s = inp[0]
            if s=="print": print(l)
            elif s=="sort": l.sort()
            elif s=="pop": l.pop()
            else: l.reverse()
        else:
            s = inp[0]
            p = int(inp[1])
            n = int(inp[2])
            l.insert(p, n)