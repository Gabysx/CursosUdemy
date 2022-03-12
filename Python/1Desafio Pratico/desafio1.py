"""
* Criar variáveis para nome(str), idade(int)
* Altura(float) e peso(float) de uma pessoa
* Criar variável com o ano atual(int)
* Obter o ano de nascimento da pessoa(baseado na idade e no ano atual)
* Obter o IMC da pessoa com 2 casa decimais (peso e na altura da pessoa)
* Exibir um texto com todos os valores na tela usando F-Strings(com chaves)
"""

nome = 'Gabriela Candido'
idade = 14
ano = 2022
altura = 1.73
peso = 120

imc = peso / altura ** 2
nasc = (ano - idade) - 1

print(f'{nome} tem {idade} anos, com {altura} de altura e pesa {peso}Kg.')
print(f'O IMC  de {nome} é {imc:.2f}')
print(f'{nome} nasceu em {nasc}')
