#include <stdio.h>
#include <stdlib.h>
#define TAM 10


void Imprime_Vetor(int *vetor ){

    for(int i = 0; i< TAM;i++){
        printf(" %d ", vetor[i]);
    }
   printf("\n");
}

void pilha_push(int *pilha, int *topo, int valor ){
  
    if (*topo == TAM -1 ){
       printf("pilha cheia! ");
    }else
    {
        *topo = *topo + 1;
        pilha[*topo]= valor;
    }
}

void pilha_pop(int *pilha, int *topo){
    if (*topo ==  -1 ){
       printf("pilha Vazia!\n");
    }else{

        printf("Retirando valor!: %d\n", pilha[*topo]);
        pilha[*topo]= 0;
        *topo = *topo - 1;

        

    }
}

int main(int argc, char const *argv[])
{
    int pilha [TAM]={0,0,0,0,0};
    int topo = -1;


    Imprime_Vetor(pilha);
    pilha_push(pilha,&topo, 5);
    pilha_push(pilha,&topo, 10);
    Imprime_Vetor(pilha);

    pilha_pop(pilha, &topo);
    Imprime_Vetor(pilha);


}
