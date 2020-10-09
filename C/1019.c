#include <stdio.h>
 
int main() {
    int tempo, hora;
    float segundo, minuto;
    scanf("%d", &tempo);
    hora = tempo/3600;
    minuto= (tempo-(hora*3600))/60;
    segundo = tempo%60;
    printf("%d:%.0f:%.0f\n", hora,minuto,segundo);
    return 0;
}