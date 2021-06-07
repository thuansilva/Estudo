#include <stdio.h>
 
int main() {
   float quilometro, hora; 
   scanf("%f", &quilometro);
   scanf("%f", &hora);
   printf("%.3f\n",((quilometro*hora)/12)); 
    return 0;
}

