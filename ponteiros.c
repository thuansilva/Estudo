#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
#define TAM_SUPORTADO_FILA 7
#define QUANT_PARA_FILA 5

int vazia = -1;
int fila[QUANT_PARA_FILA] = {1, 2, 3, 4, 5};
int i, j;

// verificar se a fila está vazia;
// incrementar a fila;
// verificar se a fila está cheia;
// limitar a quantidade de pessoas na fila
// verificar se ha poucas pessoas para a fila

int main(int argc, char const *argv[])
{

    for (i = 0; i < QUANT_PARA_FILA; i++)
    {

        //verificar se a fila está cheia, é menos 1 pq inicia em 0
        if (TAM_SUPORTADO_FILA - 1 == vazia)
        {
            printf("fila CHEIA!\n");
        }
        else
        {
            //incrementar itens a fila colocar variavel para verificar se a fila está cheia
            vazia = vazia + 1;
            //apresentar a fila
            printf("%d\n", fila[i]);
        }
    }

    if (QUANT_PARA_FILA - TAM_SUPORTADO_FILA < 0)
    {
        printf("Quantidade de vagas nao preenchidas na fila: %d\n", TAM_SUPORTADO_FILA - QUANT_PARA_FILA);
    }
    else
    {
        printf("Quantidade fora da fila: %d\n", QUANT_PARA_FILA - TAM_SUPORTADO_FILA);
    }
}
