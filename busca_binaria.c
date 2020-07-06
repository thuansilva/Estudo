#include <stdio.h>
#include <stdlib.h>

#define TAM 5;


int BuscaBinaria(int v_inicial, int v_final, int valor, int *vetor){

    // o valor inicial deve ser menor ou igual para continuar no loop
    while(v_inicial <= v_final )
       {
        //    encontrar o meio do vetor 
            int meio =  (v_final + v_inicial)/2;

            // verificação
            if(vetor[meio] == valor){
               return meio;
              
           }
           else 
           {
               if(vetor[meio]< valor )
               {
                   v_inicial = meio+1;
               
               }
               else
               {
                   v_final = meio -1;
               }
           }
           
           
       }
    
return -1 ;
}


int main(int argc, char const *argv[])
{
    int v_inicial = 0;
    int v_final = 5-1;
    int vetor[]= {10,20,30,40,50};
    int valor, res;

//  Inserir o valor buscado
    printf("VALOR PARA BUSCAR:");
    scanf("%d",&valor);

    // funcção que realiza uma busca binaria
     res= BuscaBinaria(v_inicial, v_final, valor, vetor);
/*       se o retorno da função for -1 o valor nao esta presente, 
    caso contrario, a posição eh apresentada */
     if(res == -1)
         printf("Valor nao encontrado!");
     else 
         printf("O valor encontrado encontra-se na posicão, %d \n", res);
     

    return 0;
}


