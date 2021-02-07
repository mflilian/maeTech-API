<h1 align="center">
  <img src="public/images/maeJPG" alt="mulher sentada na frente do computador, e logomarca MaeTech" width="500">
<p align="center">ProviHack Woman 2021 - Mudança de carreira e reinserção no mercado<p>
</h1>

#  MãeTech | 
Projeto desenvolvido para o hackaton da [ProviHack Woman 2021](https://marketing.provi.com.br/provi-hack-woman) com o objetivo de impulsionar a carreira de mulheres no mercado de tecnologia.

<p align="center">

Aplicação disponível [aqui](https://diversyhub.herokuapp.com/) :black_heart: 
<p>

## Objetivo

Existem muitas barreiras a serem enfrentadas por uma mulher no Brasil. Conforme dados do IBGE, as mulheres são a maioria no país, vivem mais e tem maior grau de escolaridade e ainda assim, ocupam apenas 46,2% das vagas registradas no país. 
Segundo o Google, as buscas por "congelamento de óvulos" cresceram 89% nos últimos cinco anos, onde podemos interpretar que ainda que as mulheres queiram ser mães, elas sentem a necessidade de adiar a maternidade por receio de perder oportunidades enquanto tentam conciliar carreira e família. 
Infelizmente, esse receio é real, e os efeitos da pandemia tornaram essa situação ainda pior com a diminuição de 14% de mulheres na força do trabalho em relação a 2019. 
Um dos fatores foi a jornada tripla que muitas mães precisaram encarar durante a pandemia, tendo que cuidar da casa, dos filhos e conciliar com o trabalho.
Por esse motivo, criamos a MãeTech, com a proposta de alinhar as empresas de tecnologia com mulheres da área tecnológica, ajudando as mulheres a se reinserirem no mercado. Em nosso serviço, mães formadas na área tech são direcionadas para oportunidades em empresas que estão abertas para acolher esse perfil.
Assim, construímos uma rede de apoio para apoiar mais mulheres e fazer uma ponte entre ela e a empresa.




### Funcionalidades:

- [x] O schema das candidatas deve possuir os seguintes campos: id (autogerado), nome completo, telefone/email para contato, data de nascimento, local de nascimento, escolaridade, objetivo, resumo profissional, cargo pretendido, flexibilidade, beneficios pretendidos, salario pretendido, regime pretendido (CLT ou PJ), area de experiência e local pretendido (home office ou presencial).
- [x] A API deve permitir o cadastro do currículo da candidata;
- [x] A API deve permitir a visualização dos currículos cadastrados;
- [x] A API deve permitir alterações nos currículos;
- [x] A API deve permitir que as candidatas visualizem empresas que estão contratando;
- [x] A API deve permitir a exclusão de currículos das candidatas do banco de dados.
- [x] Criação de usuário e login para a usuária com acesso sem restrição;
- [x] Criação de usuário e login para recrutador, somente visualização, seleção e postagem de vagas.

### Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/mflilian/maeTech-API

# Entrar na pasta do repositório
$ cd maeTech-API

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.


#### Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Git
- Mongo Atlas
- Heroku
- express
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken
- morgan
- cors
- helmet
- compression




#### Rotas/Endpoints

Rota API 
| GET/                                     | Rota inicial da API                                |
| ---------------------------------------  | -------------------------------------------------- |


| Rotas  Candidatas                        |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/candidatas/buscar/:id                | Encontra candidata pelo ID                         |
| GET/candidatas//buscar                   | Encontra as empresas cadastradas                   |
| POST/candidatas/                         | Registra nova candidata                            |
| POST/candidatas/login                    | Login candidata                                    |
| PATCH/candidatas/alterar/:id             | Alterar ou acrescentar dados currículo             |
| DELETE/candidatas/deletar/:id            | Excluir o currículo                                |


| Rotas Empresas                           |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/empresas                             | Acessar currículos cadastrados                     |
| GET/empresas/candidata/:id               | Acessar candidates pelo ID                         |
| POST/empresas/vaga                       | Cadastrar vagas                                    |
| POST/empresas/registrar                  | Cadastrar empresa                                  |
| POST/empresas/login                      | Login empresa                                      |
| DELETE/empresas                          | Excluir empresa cadastrada                         |


| Rotas Vagas                              |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/vagas                                | Acessar todas as vagas cadastradas                 |



### Contribua para o nosso projeto!

1. Faça o fork do projeto;
2. Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`
3. Commit as alterações feitas e abra um pull request


------------



<p align="center">
Desenvolvido com :black_heart: por Mayhhara Morais 
</p>

