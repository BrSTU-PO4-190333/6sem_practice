# README

**Menu**:

- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Project tree](#project-tree)
- [Folder structure](#folder-structure)

## How to run app

Start database:

```bash
cp backend/.env.example backend/.env
make db
```

Start backend:

```bash
cp backend/.env.example backend/.env
make back
```

## Application stack

- [Node JS](https://nodejs.org/en/)
- [Docker, docker-compose](https://www.docker.com/get-started/)
- [make](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows#comments-32127632)
- [VS Code](https://code.visualstudio.com/#alt-downloads)
- [VS Code Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VS Code Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [VS Code Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2)
- [VS Code Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project tree

```bash
tree --charset ascii -I "node_modules|docker"
```

```
.
|-- LICENSE
|-- Makefile
|-- README.md
|-- backend
|   |-- Makefile
|   |-- docker-compose.database.yml
|   |-- package-lock.json
|   |-- package.json
|   `-- src
|       |-- config
|       |   |-- app.settings.js
|       |   |-- app.swagger.settings.js
|       |   `-- config.js
|       |-- index.js
|       |-- migrations
|       |   |-- 20220819150641-create-rb-user.js
|       |   |-- 20220819161613-create-tp-access-token.js
|       |   |-- 20220819162301-create-tp-refresh-token.js
|       |   `-- 20220819182944-create-tp-task.js
|       |-- models
|       |   |-- index.js
|       |   |-- rb_user.js
|       |   |-- tp_access_token.js
|       |   |-- tp_refresh_token.js
|       |   `-- tp_task.js
|       |-- routes
|       |   |-- auth_access-token_DELETE.js
|       |   |-- auth_access-token_GET.js
|       |   |-- auth_access-token_PUT.js
|       |   |-- auth_access-token_{id}_DELETE.js
|       |   |-- auth_refresh-token_DELETE.js
|       |   |-- auth_refresh-token_GET.js
|       |   |-- auth_refresh-token_{id}_DELETE.js
|       |   |-- auth_sign-in_POST.js
|       |   |-- auth_sign-up_POST.js
|       |   |-- redoc_GET.js
|       |   |-- swagger.json_GET.js
|       |   |-- swagger_GET.js
|       |   |-- tasks_GET.js
|       |   |-- tasks_POST.js
|       |   |-- tasks_{id}_DELETE.js
|       |   `-- tasks_{id}_PUT.js
|       |-- scripts
|       |   |-- MiddlewareAccessTokenCheck.js
|       |   |-- MiddlewareRefreshTokenCheck.js
|       |   `-- MiddlewareTypeCheck.js
|       `-- seeders
|           |-- 20220819205613-RB_User.js
|           `-- 20220819210116-TP_Task.js
|-- frontend
|   |-- Makefile
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   |-- favicon.ico
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   `-- robots.txt
|   `-- src
|       |-- App.jsx
|       |-- components
|       |   |-- Error404Page
|       |   |   `-- Error404Page.jsx
|       |   |-- HomePage
|       |   |   `-- HomePage.jsx
|       |   |-- SignForm
|       |   |   |-- SignForm.jsx
|       |   |   `-- SignForm.module.css
|       |   |-- SignInPage
|       |   |   `-- SignInPage.jsx
|       |   `-- SignUpPage
|       |       `-- SignUpPage.jsx
|       |-- env
|       |   |-- colors.css
|       |   |-- font.css
|       |   `-- index.css
|       |-- index.js
|       `-- scripts
|           |-- PasswordController
|           |   |-- PasswordController.js
|           |   |-- PasswordController.passwordHasDownLetters.test.js
|           |   |-- PasswordController.passwordHasLanguageSymbols.test.js
|           |   |-- PasswordController.passwordHasNumbers.test.js
|           |   |-- PasswordController.passwordHasSpecialSymbols.test.js
|           |   `-- PasswordController.passwordHasUpLetters.test.js
|           |-- ToastController
|           |   `-- ToastController.js
|           `-- api
|               `-- rest
|                   |-- auth_signin_post.js
|                   `-- auth_signup_post.js
`-- report

24 directories, 70 files
```

## Folder structure

```bash
tree --charset ascii -I "node_modules|docker" -d
```

```
.
|-- backend
|   `-- src
|       |-- config
|       |-- migrations
|       |-- models
|       |-- routes
|       |-- scripts
|       `-- seeders
|-- frontend
|   |-- public
|   `-- src
|       |-- components
|       |   |-- Error404Page
|       |   |-- HomePage
|       |   |-- SignForm
|       |   |-- SignInPage
|       |   `-- SignUpPage
|       |-- env
|       `-- scripts
|           |-- PasswordController
|           |-- ToastController
|           `-- api
|               `-- rest
`-- report

24 directories
```
