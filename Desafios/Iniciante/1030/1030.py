import sys
sys.setrecursionlimit(100000000)


NC=int(input('NC: '))
def josephus(n,k):
  if (n > 1):
     return (josephus(n-1,k)+k-1)%n+1
  else: 
    return 1

for item in range(NC):
  n = int(input())
  k = int(input())
  result = josephus(n,k)
  print('Case %d: %d'%(item+1, result))
1030