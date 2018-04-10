# Organização de Projeto

Neste repositório está uma sugestão de organização de diretórios e arquivos de um projeto utilizando create-react-app.

### Diretórios

- _src
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


### Sugestões

Sugestões sempre são bem vindas!
