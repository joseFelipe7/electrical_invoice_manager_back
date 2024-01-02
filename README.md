<p align="center" backgroud="#000">
    <a href=" target="_blank"><img src="https://uploads-ssl.webflow.com/62f9249c43126cafce10bc33/62ffcb77b4351b3d229aa6a9_logo-lumi-green.svg" width="200" alt="Laravel Logo"></a>
    <h3 align="center">Impulsionamos os seus negócios, gerenciando a sua energia</h3>
</p>

<p align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">
</p>

# Leitor de faturas 📈

# Desafio Técnico - Desenvolvedor fullstack LUMI

## 🚀 API Rest desenvolvida em:<br/>
✔️**NODEJs 20+**<br/>
✔️**Express**<br/>
✔️**Prisma**<br/>
✔️**Postgres**<br/>
✔️**JWT**<br/>
✔️**AWS Textract** (para a leitura das faturas)<br/>
✔️**SOLID**<br/>
✔️**Documentação com Postman**<br/>

## 🚀 Deploy
-> Projeto foi hopedado em uma vps linux e pode ser encontrado no seguinte domínio electrical-invoice.if-developers.com.br

## 🚀 API
-> Endpoints **Fatura** :
list-invoice(lista todas as faturas e permite filtragens)<br/>
read-invoice(le uma fatura e retorna seus dados)<br/>
create-invoice(cadastra os dados de uma nova fatura)<br/>

-> Endpoints **Autenticação**
auth(realiza o login do usuario)


## 🚀 Sobre a Leitura
### Textract
_Foi utilizado o Textract, serviço da AWS para leitura de arquivos, foi treinado um "adpater" para permitir uma melhor leitura dos dados.

# 🚀 Como rodar o projeto:
> Primeiro certifique-se de ter o Nodejs, Postgres  instalado  em sua maquina.<br/><br/>

> crie o arquivo .env na raiz do seu projeto e preencha os seguintes campos:
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
SECRET_KEY="segredo"
TOKEN_EXPIRES_IN='1 days'
```
<br/><br/>
> Para que a leitura da AWS funcione é necessario configurar as suas credencias no .env:
```
#aws keys
ACCESS_KEY_ID='AAAAAAAAAAAAAAAAAAAA',
SECRET_ACCESS_KEY='aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA',
REGION='us-east-2'
#AWS Textract
ADAPTER_ID=""
ADAPTER_VERSION="1"
```
 <br/><br/>
> Para criar as tabelas e dados de seu banco de dados rode os seguintes comandos:
```
npm install
npx prisma migrate dev --name init
npx prisma db seed
 ```
<br/><br/>
> Agora para executar seu projeto apenas rode:
```
npm run dev
```
<br/><br/>
# 🚀 Acesse...
- [Documentação Postman aqui](https://documenter.getpostman.com/view/12476316/2s9YsDmFf1).
- [Hospedado aqui](https://electrical-invoice.if-developers.com.br)

<p align="center">
    <a href="" target="_blank"><img src="https://uploads-ssl.webflow.com/62f9249c43126cafce10bc33/62ffcb77b4351b3d229aa6a9_logo-lumi-green.svg" width="150" alt="Laravel Logo"></a>
    <h5 align="center">Desenvolvido com ♥ por JF - 2023</h5>
</p>
