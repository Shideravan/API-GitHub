# Solução para o Teste de Frontend Developer para a Compasso-UOL

### Autor: José Marcio Rezende Franco

## Visão geral do projeto

Seja bem-vindo ao repositório do projeto do meu teste de _frontend developer_.

Trago neste _readme uma visão geral deste projeto. Eu preferi utilizar o português como idioma padrão para a documentação e nomes de variáveis, funções, classes e componentes, mas provavelmente num projeto real eu teria utilizado a língua inglesa, de forma a manter uma padronização.

Toda o projeto foi desenvolvido utilizando o **React 17.0.2** (https://reactjs.org/). Esta era a versão mais recente da biblioteca disponível durante o desenvolvimento deste projeto, portanto é recomendado que esta versão seja utilizada.

A implementação da solução foi pensada desde o início focando nos seguintes pilares: documentação, clareza de código (note que vários princípios do **Clean Code** foram utilizados neste projeto), integração aos testes e escalabilidade.
É importante notar que devido ao projeto ser pensado de forma a ser totalmente modular, a inserção de novos componentes de forma a fornecer novas funcionalidades, é facilitada.

Como plataforma de testes, resolvi utilizei o **Jest** através da **RTL - React Testing Library**, devido ao fato de já ser nativamente integrada ao _framework_ facilitando a execução dos testes em qualquer ambiente React. Maiores detalhes a respeito dos testes estão descritos em seção própria, logo abaixo.

De forma a cumprir com os requisitos, foram utilizados as seguintes _APIs_ nativas do **GitHub REST API** (https://docs.github.com/en/rest).

Foram utilizadas as API do Github: https://developer.github.com/v3/
Mais detalhes na seção própria, abaixo.

Para pré-processamento do CSS, foi utilizado o **SASS** (https://sass-lang.com/). Note que cada componente criado, possui um arquivo do SASS (scss) correspondente, no lugar de um .css comum. Deixei tudo devidamente modularizado para facilitar a manutenção. Note em cada componente, antes de se carregar a folha de estilos correspondente, primeiro carrega o arquivo _reset.css_ que está na raíz do diretório _components_. Ele serve para remover os padrões de cada browser a fim de ter uma experiência mais padronizada independente do browser ou do dispositivo utilizado. A partir disso, toda a estilização fica a cargo somente da folha de estilos expandida _style.scss_ correspondente a cada componente.

Está sendo utilizado diretamente, através do uso do **SASS 1.34.1**. Vale notar que foi utilizado também o **Node 16.3.0** e seu instalador NPM correspondente.

Como forma a organizar o conteúdo aberto nas páginas de _repos_ e _starred_ foi utilizado o **react-modal** (https://github.com/reactjs/react-modal).

Como linter, de forma a manter um padrão de codificação e evitar pequenos erros, foi utilizado o **ESlint** e para automatizar essa formatação, assegurando regras de estilo no design do código foi utilizado o **Prettier**.

Para gerenciamento de pacotes e build de projeto, foi utilizado o **Yarn v1.22.10** (https://yarnpkg.com/).

Notemos que todas as dependências foram instaladas como _dev dependencies_ e o _package.json_ contém as configurações com as dependências mais importantes.


## Nota a respeito do OAuth
Este projeto conta com autenticação através do OAuth. Os tokens de autenticação *client_id* e *client_secret* precisam constar na estrutura do arquivo _GiHub.js_ que está na pasta _services_.

## APIs
Foram utilizadas as seguintes _API_ fornecidas pelo _GitHub_:
* _API search users_: https://api.github.com/search/users
* _API Repos_: https://api.github.com/NOME_DO_USUARIO/repos
* _API Starred_: https://api.github.com/NOME_DO_USUARIO/starred


## Exemplo de navegação
1. Esta é a página inicial, ao buscar um termo em "buscar usuário" (que é um componente que funciona como um campo de buscas),  uma lista de usuários será exibida.
2. Em cada usuário, terei exibidos os botões "repos" e "starred". Você pode escolher uma das duas opções.
3. Ao clicar em "repos" todos os repositórios do usuário pesquisado serão listados.
4. Ao clicar em "starred", será exibido os repositórios mais visitados pelo usuário.


## Estrutura
Temos 3 diretórios principais que possuem a divisão de arquivos em 
* _services_: arquivos responsáveis pelo tratamento das chamadas de API;
* _style_: arquivos _.css_ e _.scss_ responsáveis pela estilização das interfaces de usuário;
* _components_: Onde se localizam os componentes da aplicação.

## Árvore de arquivos

De forma a modularizar o projeto, facilitando a manutenção e adição constante de novas features, optei por separar cada componente em um diretório próprio. Cada diretório possui seu arquivo _.jsx_ (código fonte do componente), seu teste associado (_.test.jsx_), uma folha de estilo expandida do SASS (usando o padrão de _style.scss_). Todos os componentes sempre carregam inicialmente a mesma folha de estilos de _reset_ (_reset.css_) que permite que as páginas sejam consistentes, independente do dispositivo ou browser utilizado para visualizar o projeto. Este arquivo se encontra na raíz do diretório _components_.

O _App.js_ que é o componente principal da aplicação, é o único componente que está na raíz do diretório _src_ (junto com seus arquivos associados), sendo que todos os arquivos presentes na pasta _src_ são os arquivos que renderizam a página principal e que chamam os componentes. Todos os outros componentes existem como pastas na estutura _components_.

Os _cards_ de mensagem que aparecem ao usuário de acordo com sua jornada de navegação (_CardCredito, CardNegociar, CardProtecaoRG_) estão organizados no diretório _cards_, dentro também de **components**.
Esta estrutura é pensada em facilitar ao máximo a leitura e organização do código, de forma a facilitar a manutenção.

```
src
  │   App.css
  │   App.js
  │   App.test.js
  │   index.css
  │   index.js
  │   setupTests.js
  │   
  ├───components
  │       Item.jsx
  │       Repos.jsx
  │       Starred.jsx
  │       
  ├───services
  │       Api.js
  │       GitHub.js
  │       
  └───style
          reset.css

```

Todos os caminhos foram pensados seguindo padrões modernos de manutenção de projetos no _framework_ **React**.

## Testes automatizados

Foram implementados diversos testes automatizados para verificar constantemente a estabilidade do sistema a cada atualização.
Para implementação destes testes foi utilizada a **RTL - React Testing Library**.
Primeiramente, todos os componentes verificam se renderizam corretamente o conteúdo, através de um teste de render, em todos os componentes.
Também implementei testes simples para verificar se o conteúdo esperado está devidamente sendo apresentado na view da aplicação.
São testes simples, mas essenciais de serem feitos, garantindo que estes comportamentos continuem funcionando adequadamente, mesmo com novos updates no código.
Obviamente num projeto maior e do "mundo real", implementaria mais testes e mais variados, mas para pelo menos garantir essas características mais básicas, os testes implementados já devam ser suficientes.
Perceba também, que a maioria dos testes contidos neste projeto são testes unitários. Geralmente, costumo utilizar testes de integração também e testes e2e, estes geralmente utilizando o **Cypress**, mas resolvi que devido a escala inicial deste projeto, esse tipo de solução não agregaria tanto valor na solução final e poderia aumentar desnecessariamente a complexidade e entendimento do mesmo. Mas em projetos maiores e do "mundo real", esses tipos de testes são bastante recomendados.


## Metodologia BEM
Buscou-se utilizar na produção do .css a metodologia **BEM - Block Element Modifier (Bloco Elemento Modificador)**. Na sequência temos um artigo interessante que explica melhor sobre a metodologia. 
https://medium.com/@fnandaleite/metodologia-bem-para-css-b0d3269b4853

## Detalhes adicionais

Mesmo se tratando de um teste, acho bastante relevante ter tomado todo o cuidado de apresentar essa solução o mais caprichada e profissional possível.
Acho importante num projeto, mesmo que simples, buscar sempre o profissionalismo e constantemente aprender durante esse processo. Certamente foi o caso neste trabalho.


Abaixo seguem-se a proposta de projeto fornecida e o texto do arquivo _"getting started"_ gerada automaticamente pelo _Yarn_, que fornece instruções de execução deste projeto utilizando este gerenciador de pacotes que podem ser úteis.

----------------------------
# ROTEIRO TESTE FRONTEND COMPASSO

## NÃO FAÇA FORK DESSE REPOSITÓRIO

Bem-vindo ao teste prático para os candidatos ao cargo de frontend na COMPASSO.

## OBJETIVO

Nosso objetivo com este passo do processo de recrutamento é conhecer melhor as suas habilidades técnicas.

Com isso, selecionaremos quais desafios passaremos para você e quais precisaremos prepará-lo para melhor para enfrentar.


## REQUISITOS DA ENTREGA

Para utilizar os Endpoints abaixo, você precisará estar autenticado, para isso você irá utilizar a autenticação do GITHUB:
- Guia Autenticação: https://docs.github.com/pt/developers/apps/building-oauth-apps

Gostaríamos nos entregasse uma aplicação utilizando a api do GITHUB https://developer.github.com/v3/ consumindo os seguintes endpoints:
- Endpoint user: https://api.github.com/users/NOME_USUARIO
- Endpoint repos: https://api.github.com/users/NOME_USUARIO/repos
- Endpoint starred: https://api.github.com/users/NOME_USUARIO/starred

A aplicação deverá constituir três componentes principais: 
- O campo de busca.
- Visualização de resultados.
- Dois botões para executar um determinado resultado.

Ao clicar nos botões de repos e starred, deverá mostrar uma lista simples de cada endpoint
apresentado anteriormente.

Dado um determinado usuário, deverá ser possível navegar diretamente até a página de
detalhe do usuário sem que seja necessário efetuar uma nova busca. Ex: http://localhost:3000/NOME_USUARIO

- Gostariamos de pesquisar por usuario.
- Gostariamos de ao clicar no botão de repos, listar repositorios do usuario pesquisado.
- Gostariamos de ao clicar no botão de starred, listar os repositorios mais visitados por aquele usuario.

Você poderá usar o framework css Bootstrap para construção dos componentes UI (Se preferir, os componentes poderão ser criados do zero, utilizando as boas práticas).

Você deverá usar o framework React para desenvolvimento da sua aplicação.

Você poderá utilizar Jest para testar os request feitos.



## STACK ESPERADA PARA O TESTE

- HTML 5 (Desejavel o uso de SEO, Semãntica, Usabilidade).
- JAVASCRIPT (React.js, Performance).
- CSS 3 (Desejavel o uso de SASS, LESS, Bootstrap, Escalabilidade, Responsivo, BEM CSS).



## CENÁRIO

Na página do campo de busca, deverá ser possível inserir nomes de usuários do github, repositórios e os mais visitados pelos os usuários.



## AVALIAÇÃO

A avaliação será feita da seguinte forma:

- Vamos analisar e compilar o seu código;
- Rodar sua aplicação e executar testes para validar o atendimento funcional dos itens acima;
- Verificar se o seu código é limpo (Clean Code), fácil de entender e de dar manutenção;
- Durante entrevista, poderemos simular uma revisão do seu código, percorremos o código junto com você para discutirmos sobre suas decisões de implementação, os pontos positivos e negativos;
- O saldo entre o que for positivo e o que for negativo vai determinar a recomendação do ponto de vista técnico ou não de sua contratação. (Se faltar pouco para atingir uma recomendação positiva, daremos um prazo para você corrigir e retornar);

Requisitos Obrigatórios:

- Verificar as boas práticas voltadas ao CSS 3 e a Metodologia BEM CSS;
- Verificar as boas práticas voltadas ao React;
- Verificar as boas práticas voltadas ao HTML 5;



## DICAS:

- Tenha em mente que o seu avaliador irá executar o código antes de falar com você;
- Procure fazer uma entrega simples mas consistente, usando a experiência e conhecimento adquiridos durante sua carreira;
- Não se preocupe em entregar algo extremamente completo ou rebuscado, não vamos usar este código em produção;
- Tudo será avaliado, dê o seu melhor!

----------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
