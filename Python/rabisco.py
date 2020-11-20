################################ Capitulo 1##################################################################


# Imutabilidade: Novas strings criadas a partir de outras strings

#    Uma String ja definida não pode ser mudada. Ex
# Exemplo com error


# minha_str = "livro python 3"
# minha_str[13] = '2'
# print(minha_str)


# Exemplo sem error

# minha_str = "livro python 3"
# print(minha_str[0:13])
# minha_str = minha_str[0:13] +"2"
# # print(minha_str)

#Alguns Métodos

# print(minha_str.capitalize())
# print(minha_str.split(" ")) 
# print(minha_str.count("p")) 

# print("Aceita um numero {} e um {} no print".format(100,'texto'))
# print("Posso jogar um {:>20} para 20 pixel para a esqueda/direita".format('valor'))

################################ Capitulo 3 - Manipulações básicas##################################################################

# O BASICO DE OPERADORES PRESENTE EM QUALQUER LINGUAGEM 

# CONDICIONAIS BASICAS



# salario = int(input('Salario? '))
# imposto = input('Imposto em % (ex: 27.5)? ')
# if imposto == '':
#     imposto = 27.5
# else:
#     imposto = float(imposto)
# print("Valor real: {0}".format(salario - (salario *
# (imposto * 0.01))))

# Realizando uma operação em uma lista 

tecnologias = ['react-native', 'nodejs']

# for item in tecnologias:
#     print(item)

# Com a palavra reservada 'Continue'

for item in tecnologias:
    if item.startswith('r'):
        continue
    print(item)

# criando um alias para um import 
import math as met

print(met.sqrt(81))

def sum(a,b):
    return a+b

print(sum(1,2))
