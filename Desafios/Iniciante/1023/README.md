# 1023 - Estiagem

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1023)

## Solução

Vide problema [1023 - Estiagem](../1023/README.md).

### C99

```c
#include <stdio.h>
#include <math.h>
int main() {
 
    double A,B,C,r1,r2,delta;
    scanf("%le %le %le",&A, &B, &C);
    delta = sqrt(pow(B,2)-4*A*C);
    r1 = (-B+delta)/(2*A);
    r2 =  (-B-delta)/(2*A);
    if (delta >= 0 && A!=0){
        printf("R1 = %.5f\nR2 = %.5f\n",r1,r2);
    }else{
        printf("Impossivel calcular\n");
    }
    
    return 0;
}
```
