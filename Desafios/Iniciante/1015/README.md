# 1015 - Distância Entre Dois Pontos

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1015)

## Solução

Vide problema [1015 - Distância Entre Dois Pontos](../1015/README.md).

### C99

```c
#include <stdio.h>
#include <math.h>
 
int main() {
 
    float x1,x2,y1,y2;
    scanf("%f %f",&x1,&y1);
    scanf("%f %f",&x2,&y2);
    printf("%.4f\n",sqrt(pow((x2-x1),2) + pow((y2-y1),2)));
    
    return 0;
}
```
