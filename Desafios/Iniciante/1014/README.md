# 1014 - Consumo

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1014)

## Solução

Vide problema [1014 - Consumo](../1014/README.md).

### C99

```c
#include <stdio.h>
#include <stdlib.h>
 
int main() {
 
    int a,b,c,maiorAB,maiorABC;
    scanf("%d %d %d",&a,&b,&c);
    maiorAB=(a+b+abs(a-b))/2;
    maiorABC=(maiorAB+c+abs(maiorAB-c))/2;
    printf("%d eh o maior\n",maiorABC);      
  
    return 0;
}
```
