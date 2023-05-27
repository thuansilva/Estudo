import os 
import zipfile
import sys

extrair_arquivos = "./saida.zip"
endereço_entidade_txt = './data/meta-data/'

def main(path):
    if not os.path.exists(path):
        print("Arquivo {} não existe!".format(path))
        sys.exit(-1)
    else:
        zfile=zipfile.ZipFile(path)
        zfile.extractall()
        print("Arquivos extraidos!")

### Listar arquivos d um diretório

for meta_file in os.listdir(endereço_entidade_txt):
    print(meta_file)


def red_meta_data(path):
    local = endereço_entidade_txt + path
    data = open(local, "rt")
    meta_data = []

    for line in data:
        line_data =line.split('\t')
        meta_data.append((line_data[0],line_data[1],line_data[2]))

    data.close()
    print(meta_data)
    return meta_data
    

red_meta_data('Instituicao.txt')

# if __name__ == "__main__":
#     main(extrair_arquivos)

