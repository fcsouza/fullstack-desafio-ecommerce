<h1 align="center">
    <img alt="fabricio" title="#Projeto" src=".github/logo1.svg" width="250px" />
    <p>Projeto Desafio Ecommerce</p>
</h1>

<h4 align="center"> 
	Projeto de Desafio
</h4>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/fullstack-desafio-ecommerce)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/fullstack-desafio-ecommerce)]()
[![Made By](https://img.shields.io/badge/Made%20By-Fabricio%20Cavalcante-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## 📝 Conteúdo
<p align="center">
<a href="#fabricio">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#getting_started">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#installing">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#authors">Autor</a>
</p>


## 🧐 Sobre <a name = "fabricio"></a>

Projeto de backend e frontend.


## 🏁 Iniciando <a name = "getting_started"></a>
Instruções de como acessar as rotas e instalação.


### ⚒ Instalando <a name = "installing"></a>
```bash

Instalar o Mysql caso queira executar o projeto em máquina local.

docker run --name database-mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3500 -d mysql:8.0
docker run start database-mysql
create a database name => desafio

Go into the backend repository
$ cd fullstack-desafio-ecommerce/backend

$ npm i || yarn install

# Run Migrations

$ npx typeorm migration:run || yarn typeorm migration:run 
$ npm run dev:server || yarn dev:server

# Go into the frontend repository

$ cd fullstack-desafio-ecommerce/frontend

$ npm i || yarn install
$ npm run start || yarn start
```

--

## ✍️ Autor <a name = "authors"></a>

- [@fcsouza](https://github.com/fcsouza)

## 🗒 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.