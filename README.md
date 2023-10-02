# Backend Task Manager

## Descrição

Este é o backend de uma aplicação de gerenciamento de tarefas. Ele fornece endpoints para criar, listar, editar e excluir tarefas.

## Autor

- **Christian Gall**

## Licença

Este projeto está sob a licença **UNLICENSED**.

## Scripts

- `npm run build`: Compila o projeto NestJS.
- `npm run format`: Formata o código usando Prettier.
- `npm start`: Inicia o servidor NestJS.
- `npm run start:dev`: Inicia o servidor NestJS em modo de desenvolvimento com observação de alterações.
- `npm run start:prod`: Inicia o servidor NestJS em modo de produção.
- `npm run lint`: Executa o linter ESLint e corrige problemas.
- `npm test`: Executa os testes usando Jest.
- `npm run test:watch`: Executa os testes em modo de observação.
- `npm run test:cov`: Executa os testes e gera relatórios de cobertura.
- `npm run test:debug`: Executa os testes em modo de depuração.
- `npm run test:e2e`: Executa testes de ponta a ponta usando Jest.

## Dependências Principais

- `@nestjs/class-validator`: Validador de classes para NestJS.
- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`: Framework NestJS.
- `@nestjs/swagger`: Integração Swagger para documentação da API.
- `@nestjs/typeorm`: Integração TypeORM para NestJS.
- `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- `pg`: Driver PostgreSQL.
- `typeorm`: ORM para Node.js e TypeScript.

## Dependências de Desenvolvimento

- `@nestjs/cli`, `@nestjs/schematics`, `@nestjs/testing`: Ferramentas de desenvolvimento para NestJS.
- `@types/express`, `@types/jest`, `@types/node`, `@types/supertest`: Tipos TypeScript para express, Jest, Node.js e Supertest.
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`: Ferramentas de linting e formatação de código.
- `jest`, `ts-jest`: Framework de testes Jest e configuração TypeScript.
- `prettier`: Formatador de código.
- `source-map-support`: Adiciona suporte a source maps.
- `supertest`: Biblioteca para testes de API HTTP.
- `ts-loader`, `ts-node`, `tsconfig-paths`, `typescript`: Ferramentas TypeScript.
- `Para desenvolvimento`: docker-compose -f docker-compose.dev.yml up -d
- `Para produção`: docker-compose -f docker-compose.prod.yml up -d

## Configuração

Certifique-se de configurar o banco de dados PostgreSQL e ajustar as variáveis de ambiente conforme necessário para conectar o backend ao banco de dados.

## Execução

Para executar o projeto, utilize os scripts fornecidos no arquivo `package.json`.

## Contribuição

Contribuições são bem-vindas. Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests).

---

Criado por **Christian Gall**.



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
