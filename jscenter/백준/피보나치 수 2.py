##https://www.acmicpc.net/problem/2748
##피보나치수 2
# 2m 29s

N = int(input())
dp = [0, 1, 1]
for i in range(3,N+1) :
    dp.append(dp[i-1] + dp[i-2])
print(dp[N])