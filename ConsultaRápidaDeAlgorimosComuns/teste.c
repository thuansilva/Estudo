#include <stdio.h>

int main()
{
    float comprimento_pista, consumo_combustivel;
    float numero_reabastecimento, numero_voltas;
    float voltas_para_reabastecimento, reabastecimento;

    printf("Comprimento_pista (em metros):");
    scanf("%f", &comprimento_pista);
    printf("N_voltas:");
    scanf("%f", &numero_voltas);
    printf("N_Reabastecimento:");
    scanf("%f", &numero_reabastecimento);
    printf("Consumo de combustivel(KM/L):");
    scanf("%f", &consumo_combustivel);

    voltas_para_reabastecimento = numero_voltas / numero_reabastecimento;
    reabastecimento = voltas_para_reabastecimento * comprimento_pista;
    printf("Litro consmidos até o primeiro reabastecimento: %.3f", reabastecimento);
    return 0;
}