# 1018 - Cédulas

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1018)

## Solução

Vide problema [1018 - Cédulas](../1018/README.md).

### C99

```c
#include <stdio.h>
 
int main() {
    int cedulas[]={100,50,20,10,5,2,1};
    int valor,x;
    int quantidade_cedulas[7];
    scanf("%d", &valor);
    printf("%d\n", valor);
    for( x=0; x < 7; x ++){
         quantidade_cedulas[x] = valor/cedulas[x];
         valor = valor-(quantidade_cedulas[x] * cedulas[x]);   
        printf("%d nota(s) de R$ %d,00\n", quantidade_cedulas[x], cedulas[x]);
    }

    return 0;
}

```
