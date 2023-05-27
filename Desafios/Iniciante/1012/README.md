# 1012 - ÁREA

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1012)

## Solução

Vide problema [1012 - Área](../1012/README.md).

### C99

```c
#include <stdio.h>
 
int main() {
    double A,B,C;
    scanf("%lf %lf %lf",&A,&B,&C);
    printf("TRIANGULO: %.3f\n", (A*C)/2);
    printf("CIRCULO: %.3f\n", C*C*3.14159);
    printf("TRAPEZIO: %.3f\n", ((A+B)*C)/2);
    printf("QUADRADO: %.3f\n", B*B);
    printf("RETANGULO: %.3f\n", A*B);    

    return 0;
}
```
