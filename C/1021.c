#include <stdio.h>
 
int main() {
    float valor = 0.1f;
    double cedulas[] = {100,50,20,10,5,2};
    double moedas[] = {1,0.50,0.25,0.10,0.05,0.01};
    int qnt,x;
    scanf("%f",&valor);
    printf("NOTAS:\n");
    for ( x = 0; x < 6; x++)
    {
        qnt = (valor/cedulas[x]);
        valor = valor-(qnt * cedulas[x]);
        printf("%d nota(s) de R$ %.2f\n",qnt, cedulas[x]);
        
    }
    printf("MOEDAS:\n");
    for ( x = 0; x < 6; x++)
    {
        qnt = (valor/moedas[x]);
        valor = valor-(qnt * moedas[x]);
        printf("%d moeda(s) de R$ %.2f\n",qnt, moedas[x]);

    }    

    return 0;
}