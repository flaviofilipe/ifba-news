# IFBA News
Aplicativo de notícias do IFBA - Vitória da Conquista

Este aplicativo é um complemento do projeto de crawler, responsável por baixar as notícias do site do IFBA de Vitóriq da Conquista e disponibilizar uma API Rest para o consumo:
https://github.com/flaviofilipe/ifba-crawler-services

## Informações e Pré Requisitos
Este app foi desenvolvido em React Native utilizando o Expo na linguagem Typescript.

Para executá-lo é necessário um emulador (android ou ios), ou um dispositivo físico.


## Execução no Emulador

### Emulador
Ao executar pela primeira vez em um emulador deverá especificar a plataforma:
```
  npm run android
```

Será instalado o app na máquina e será criado uma conexão com o servidor criado no terminal enquanto tiver em execução.

Futuramente poderá apenas executar o servidor e atualizar o app na máquina:
```
  npm start
```
> Apertando *"r"* enquanto estiver executando irá atualizar as máquinas conectadas.

## Execução no aparelho
Com o Expo o projeto poderá ser testado no aparelho físico, basta baixar o app do Expo para a plataforma desejada (Android ou IOS) e ler o QR Code gerado pelo comando a baixo:

```
  npm start
```
> O aparelho deverá estar na mesma rede do servidor.