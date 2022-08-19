# README

**Menu**:

- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
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

## Folder structure

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
`-- report

9 directories, 41 files
```
