#include <stdio.h>


void fibonacci(int posicao_buscada){
    int i, vetor[posicao_buscada];
    for(i = 0; i<posicao_buscada; i++){
        if(i==0) vetor[0] = 0;
        else if (i==1) vetor[1] = 1;
        else vetor[i] = vetor[i-1] + vetor[i-2];               
        printf("%d",vetor[i]); 
        if(i != posicao_buscada -1) printf(" ");     
     }
     printf("\n");
}

int main()
 {
    int posicao_buscada;
    scanf("%d",&posicao_buscada);
    if( posicao_buscada<=0 ||posicao_buscada>= 46){
    printf("Tente valor entre o intervalo de 0< N <46");
    return 0;
    }

    fibonacci(posicao_buscada);
    return 0;
 }
 


























// Outra forma de fazer, usando alocação dinamica 
//  #include <stdio.h>
// #include <stdlib.h>


//  void fibonacci( int posicao_buscada){
//     int *vetor;
//     vetor = (int *)malloc(posicao_buscada * sizeof(int));
//     for(int i = 0; i<posicao_buscada; i++){
//         if(i==0) vetor[0] = 0;
//         else if (i==1) vetor[1] = 1;
//         else {
//             vetor[i] = vetor[i-1] + vetor[i-2];               
//             }
//         printf("%.0f",vetor[i]); 
//         if(i != posicao_buscada -1){
//             printf(" ");     
//         } 
//      }   
//      free(vetor);
//      printf("\n");
// }

//  int main(int argc, char const *argv[])
//  {
//     int posicao_buscada;
//     scanf("%d",&posicao_buscada);
//     fibonacci(posicao_buscada);
//     return 0;
//  }