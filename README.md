# Projeto MyReads

No projeto MyReads, você criará uma aplicação de estante de livros que permite selecionar e classificar os livros que você já leu, está lendo ou quer ler. O projeto enfatiza o uso de React para criar a aplicação e fornece um servidor de API e uma biblioteca cliente, que você usará para armazenar informações à medida que interage com a aplicação.

## Instalação

Siga os passos abaixo:

- Na raiz do projeto utilize o comando `npm install`
- Para iniciar o projeto rode o comando `yarn start`

## Estrutura do Projeto (Orientado DDD)

```bash
├── README.md - arquivo atual.
├── public
│   ├── index.html #
│   └── index.css # CSS global
└── src
    ├── App
        ├── index.js
        ├── Spinner # Componente loader.
          ├── index.js
    ├── BookSearch # Componente que realiza a busca dos livros.
        ├── __mocks__ # Folder que mantêm com os mocks de testes.
        ├── __stories__ # Folder que contêm as UAT's.
        ├── __testes__ # Testes do componente.
        ├── index.js # index.js do componente.
    ├── Bookshelf # Componente que renderiza as estantes.
        ├── __mocks__ # Folder que mantêm com os mocks de testes.
        ├── __stories__ # Folder que contêm as UAT's.
        ├── __testes__ # Testes do componente.
        ├── index.js # index.js do componente.
        ├── Book # Componente que renderiza um Livro.
            ├── Changer # Componente que realiza a troca de estantes de cada livro.
              ├── __mocks__ # Folder que mantêm com os mocks de testes.
              ├── __stories__ # Folder que contêm as UAT's.
              ├── __testes__ # Testes do componente.
              ├── index.js # index.js do componente.
            ├── Search # Componente que realiza a busca de livros.
              ├── __mocks__ # Folder que mantêm com os mocks de testes.
              ├── __stories__ # Folder que contêm as UAT's.
              ├── __testes__ # Testes do componente.
              ├── index.js # index.js do componente.
    └── index.js # Index.js da aplicação.
```
