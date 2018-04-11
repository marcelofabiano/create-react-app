# Create React App

Deixo através deste repositório como sugestão de organização de diretórios e arquivos de um projeto utilizando create-react-app.

## Diretórios

- _src
- __configs: Arquivos de configurações
- __assets: Arquivos estáticos como imagens, scss, css
- __components: Componentes fragmentados a serem reutilizados em um escopo global (layouts, UI)
- __screens: Componentes responsáveis por renderizar estrutura final da página completa
- ___Dashboard: Diretório contendo componentes do escopo da página em questão
- ____components: Componentes fragmentados a serem reutilizados no escopo da página em questão
- ____screens: Componente final da página (index, edit, create)
- ____routes.js: Arquivo contendo as rotas do escopo da página em questão
- __App.js: Componente de container de toda a aplicação
- __index.js Inicializador da aplicação
- __routes.js Arquivo responsável por agrupar todos os arquivos de rotas
- __api.js Arquivo com instância axios e suas configurações

## Instalação

- Como pré-requisito é necessário ter node, npm e yarn.
- Clone o repositório
- Execute em seu terminal

```bash
$ yarn
```

### API

Para utilizar do exemplo de API com json-server é necessário ter instalado global

```bash
$ npm install -g json-server
```

## Executando

Iniciando a API do json-server

```bash
$ json-server -w db.json -p 3001
```

Acesse pelo seu navegador "http://localhost:3001"

Iniciando a aplicação

```bash
$ yarn start
```

Acesse pelo seu navegador "http://localhost:3000"

## Exemplos

- Organização de diretórios e arquivos focando em "screens"
- React router com 404, 403 e withRouter
- Consumo de API com json-server "db.json"

### Sugestões

Sugestões sempre são bem vindas!
