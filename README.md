# README

**Menu**:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Project structure](#project-structure)

## Task

- попробовать ORM sequelize (создание моделек, миграций и сидов)
- использовать в Express http коды
- задокументтировать эндпоинты в Swagger
- сделать автоматическую документацию Redoc из Swagger
- реализовать запросы к бэку на React JS и нарисовать разные календари (на год, месяц, день)
- попробовать валидировать форму через react-hook-form
- сделать вывод сообщений через toastr
- создать Dockerfile'ы для бэкэнда и фронтенда
- реализовать автоматическую сборку образа на GitHub и выгрузку на DockerHub
- написать отчет в TeX'e

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

Create report:

```bash
make drawio
make tex
```

Production:

```bash
cd prod
cp .env.example .env
docker-compose up -f
docker-compose ps
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

## Project structure

```bash
tree --charset ascii -a -I ".git|node_modules|docker|export|*.dtmp|*.bkp" > README.tree.txt
```

[View project tree](README.tree.txt)
