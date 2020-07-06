#include <stdio.h>
#include <stdlib.h>

// Existem duas formas de usar Struct em C;

// A primeira usa typedef, e declara como ela será invocada ao final.Item [1]
typedef struct Dados
{
    int dia;
    int mes;
    int ano;
} Data;

// Na segunda,  a forma de chamar usa o tipo e nome.
//    (Ex: Struct <name da Struck>  <como ela será indicada no contexto>). Item [2]
struct Nome
{
    char nome;
};

int main(int argc, char const *argv[])
{

    Data aniversario; // [1]
    struct Nome Dado; //[2]

    aniversario.dia = 12;
    aniversario.mes = 04;
    aniversario.ano = 02;
    Dado.nome = 'c';
    printf("Letra do nome: %c \n", Dado.nome);
    printf("Dia: %d \nMês: %d \nAno: %d \n", aniversario.dia, aniversario.mes, aniversario.ano);
}
