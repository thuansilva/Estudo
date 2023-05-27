#include <stdio.h>
#include <stdlib.h>


 void fibonacci( int posicao_buscada){
    int *vetor;
    vetor = (int *)malloc(posicao_buscada * sizeof(int));
    for(int i = 0; i<posicao_buscada; i++){
        if(i==0) vetor[0] = 0;
        else if (i==1) vetor[1] = 1;
        else {
            vetor[i] = vetor[i-1] + vetor[i-2];               
            }
        printf("%d",vetor[i]); 
        if(i != posicao_buscada -1){
            printf(" ");     
        } 
     }   
     free(vetor);
     printf("\n");
}

 int main(int argc, char const *argv[])
 {
    int posicao_buscada;
    scanf("%d",&posicao_buscada);
    fibonacci(posicao_buscada);
    return 0;
 }
 