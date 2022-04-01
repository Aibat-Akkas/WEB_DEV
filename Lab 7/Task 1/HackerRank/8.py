# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem?isFullScreen=true

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    arr.sort(reverse = True)
    m = arr[0]
    
    for i in arr:
        if i != m:
            print(i)
            break