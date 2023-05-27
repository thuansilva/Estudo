# 1020 - Idade em Dias

## [Descrição](https://www.beecrowd.com.br/judge/pt/problems/view/1020)

## Solução

Vide problema [1020 - Idade em Dias](../1020/README.md).

### C99

```c
#include <stdio.h>
 
int main() {
    int qnt,ano,mes,dia;
    scanf("%d",&qnt);
    ano = qnt/365;
    mes = (qnt%365)/30;
    dia = (qnt%365)%30;
    printf("%d ano(s)\n", ano);
	printf("%d mes(es)\n", mes);
	printf("%d dia(s)\n", dia);
    return 0;
}


```
