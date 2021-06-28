#include <stdio.h>

int main() {
   float distancia;
   scanf("%f", &distancia);
   printf("%.0f minutos\n", (distancia/30)*60);
   return 0;
}
