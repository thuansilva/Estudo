# 1022 - TDA Racional

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1022)

## Solução

Vide problema [1022 - TDA Racional](../1022/README.md).

### C99

```c
#include <stdio.h>
 
int main() {
 int A,B,C,D;
 scanf("%d %d %d %d", &A,&B,&C,&D);

if((B>C && D>A) && (C+D > A+B) && (C && D > 0) && (A%2 == 0)){
    printf("Valores aceitos\n");
}else{
    printf("Valores nao aceitos\n");
}
    return 0;
}
```
