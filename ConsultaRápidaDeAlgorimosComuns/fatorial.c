#include <stdlib.h>
#include <stdio.h>

int numero, fat;

int fatorial(int n);

int main(int argc, char const *argv[])
{
    printf("o fatorial de quanto:");
    scanf("%d", &numero);

    // função fatorial
    fat = fatorial(numero);

    // for (fat = 1; numero > 1; numero--)
    // {
    //     fat = fat * numero;
    // }

    printf("o fatorial eh: %d\n", fat);
}

int fatorial(int n)
{
    int resultado;
    if (n <= 1)
        return 1;
    else
    {
        resultado = n * fatorial(n - 1);
        return (resultado);
    }
}