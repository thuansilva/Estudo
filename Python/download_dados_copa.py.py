import io
import sys
import urllib.request as request

BUFF_SIZE = 1024

def download_length(response, output,length):
    times = length / BUFF_SIZE
    if length % BUFF_SIZE > 0:
        times =+1
        for time in range(times):
            output.write(response.read(BUFF_SIZE))
            print("Downloaded %d" % (((time * BUFF_SIZE)/length)*100))

def download(response,output):
    total_download = 0 
    while True:
        data = response.read(BUFF_SIZE)
        total_download +=len(data)
        if not data:
            break
        output.write(data)
        print('Downloaded {bytes}'.format(bytes=total_download))


def main():
    response = request.urlopen('http://livropython.com.br/dados.zip')
    out_file = io.FileIO("saida.zip", mode='w')

    content_lenght = response.getheader('Content_Length')
    if content_lenght:
        length = int(content_lenght)
        download_length(response, out_file, length)
    else:
        download(response,out_file)
    response.close()
    out_file.close()
    print("Finished")

if __name__ == "__main__":
    main()



