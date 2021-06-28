import sys

N = int(input())

contab = 0 
laco = 0
valor_final = 0
m = 5
regioes_iteravel = []

def criar_array(N):
  for item in range(N):
    regioes_iteravel.append(item+1)
  return regioes_iteravel;


regioes = criar_array(N)


while (N >= 13 and N <=100):
  
  if laco == 0:
    regioes[0] = 0


  for item in range(len(regioes)):
    if(regioes[item] == 0):
      continue
    if(regioes[item] != 0 and contab < m - 1):
      contab += 1
      continue
    if(regioes[item]!= 0 and contab == m -1 ):
      regioes[item] = 0
      contab = 0

    if (regioes.count(0) == N-1):
      for n_item in regioes:
        if(n_item != 0):
          valor_final = n_item
          print(valor_final)
          quit()
      break


 
''' 
A primeira posicao do vetor de cidades recebera 0

Devera contar mais 5 posições  e recebera 0 .
  Verificar cada posição se ela tiver o conteudo 0 ela não sera contabilizada e será pulada para o
  pŕoximo valor

  A ultima regiao a ser desligada será a 13

  Se a posição for diferente de 0 e tiver dentro do range m ela sera contabilizada 
  se a posição for diferente de 0 e tiver contado 5 numeros anteriores diferentes de 0 ela virará 0.


Verificar quantos couteudos 0 ja temos. Essa quantidade tem que ser o valor de inicio -1
a quantidade de entrada.
  Caso seja igual o resultado será a saida do ultimo valor diferente de 0 array

 '''