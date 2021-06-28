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

