# 1030 - A Lenda de Flavious Josephus

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1030)

## Solução

Vide problema [1030 - A Lenda de Flavious Josephus](../1030/README.md).

### Python

```py
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

```
