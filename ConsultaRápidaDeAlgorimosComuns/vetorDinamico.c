#include <stdio.h>
#include <stdlib.h>

// o vetor usa ponteiros
// usuario responde qual o tam
//usar alocação dinamica para reservar os bytes do array;
// exibir os itens do array

int tamanho, *vetor;

int main(int argc, char const *argv[])
{
    printf("Qual o tamanho do vetor:");
    scanf("%d", &tamanho);

    vetor = (int *)malloc(tamanho * sizeof(int));

    for (int i = 0; i < tamanho; i++)
    {

        printf("%d\n", vetor[i] = i);
    }
}
