# 1017 - Gasto de Combustível

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1017)

## Solução

Vide problema [1017 - Gasto de Combustível](../1017/README.md).

### C99

```c
#include <stdio.h>
 
int main() {
   float quilometro, hora; 
   scanf("%f", &quilometro);
   scanf("%f", &hora);
   printf("%.3f\n",((quilometro*hora)/12)); 
    return 0;
}

```
