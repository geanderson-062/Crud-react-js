# Aplicação CRUD de Usuários

Esta é uma aplicação web CRUD (Create, Read, Update, Delete) para gerenciar usuários. Ela foi desenvolvida utilizando React.js e React Router para a criação de rotas, e faz uso da biblioteca SweetAlert2 para exibir notificações interativas.

A API utilizada por esta aplicação pode ser encontrada no seguinte repositório: [API para CRUD com Python e Flask](https://github.com/geanderson-062/api-para-crud-com-python-flask). Certifique-se de configurar e executar a API em conjunto com esta aplicação para o correto funcionamento das funcionalidades de CRUD.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Listagem de usuários
- Adição de novo usuário
- Edição de usuário existente
- Exclusão de usuário

## Configuração

Siga as etapas abaixo para configurar e executar a aplicação em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Faça o download ou clone este repositório.

3. No diretório raiz do projeto, abra o terminal e execute o seguinte comando para instalar as dependências:

```
npm install
```

4. Após a instalação das dependências, execute o comando abaixo para iniciar a aplicação:

```
npm start
```

5. Acesse a aplicação em seu navegador através do seguinte endereço: [http://localhost:3000](http://localhost:3000)

## Estrutura de Arquivos

- `src/App.js`: Arquivo principal da aplicação que configura as rotas.
- `src/pages/lista_de_usuarios.js`: Componente da página de listagem de usuários.
- `src/pages/criar_novo_usuario.js`: Componente da página de criação de novo usuário.
- `src/pages/editar_usuario.js`: Componente da página de edição de usuário.
- `src/components/navbar.js`: Componente da barra de navegação.

## Dependências

A aplicação utiliza as seguintes dependências:

- `react`: Biblioteca principal do React.js.
- `react-dom`: Responsável pela renderização dos componentes React no navegador.
- `react-router-dom`: Biblioteca para o roteamento de páginas no React.
- `bootstrap`: Framework CSS para estilização da aplicação.
- `sweetalert2`: Biblioteca para exibição de notificações interativas.

## Considerações Finais

Esta aplicação é apenas um exemplo e pode ser utilizada como ponto de partida para o desenvolvimento de um sistema mais completo de gerenciamento de usuários. Sinta-se à vontade para personalizar e expandir de acordo com suas necessidades.

Espero que esta documentação seja útil!