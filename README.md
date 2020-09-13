# Key-Value-Store com gRPC

Desenvolver um Key-Value store in memory utilizando o gRPC.

As primitivas do Key-Value Store são:

- put(key, value)
- get(key) : value
- getAllKeys() : Key[]

## Alunos integrantes da equipe

* Laís Helena Oliveira de Paula
* Vitor Augusto Alves de jesus

## Professores responsáveis

* Hugo Bastos de Paula

## Instruções de utilização

Para rodar o sistema, seguir os seguintes passos:
* Instalar o grpc: npm install grpc @grpc/proto-loader
* Rodar o npm: npm init -y
* Rodar a classe server:  node server.js
* Rodar a classe client:  node client.js (Passando os argumentos comando e valor)

## Comandos:
* listarTodos: Mostra todas as chaves do sistema.
* ListarUm: Mostra o valor da chave desejada.
* Adicionar: Adiciona um valor específico no sistema.

