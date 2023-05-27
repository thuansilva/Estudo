#include <stdio.h>
#include <stdlib.h>

// Para crair uma matriz, precisa-se crair um ponteiro de ponteiro.
// o primerio pointeiro aloca  a linha
// segundo aloca o ponteiro dentro do vetor criado com o ponteiro.
// cria  a matriz;

// ex: matriz [..(0)..,..(1).. ]; essa matriz tem as colunas;
//             O (0) e outros, vai ter dentro outra matriz que vai ter as linhas
// Dessa forma detnro de cada ceelual da coluna, tem as linhas;
// Isso é feito usando ponteiros;

int **matriz, i, j;
int linha = 3;
int coluna = 3;
//o ponteiro aponta para um lugar na mmemória para crair o vetor

int main(int argc, char const *argv[])
{
    matriz = (int **)malloc(coluna * sizeof(int *));

    // alocando memoria para os valores que estão dentro da célula da matriz.
    for (i = 0; i < linha; i++)
    {
        matriz[i] = (int *)malloc(linha * sizeof(int));
    }

    for (i = 0; i < linha; i++)
    {
        for (j = 0; j < linha; j++)
        {
            printf("%d", matriz[i][j] = j);
        }
        printf("\n");
    }

    free(matriz);
}
