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
|       |   |-- AppContainer
|       |   |   |-- AppContainer.jsx
|       |   |   `-- AppContainer.module.css
|       |   |-- AppFrame
|       |   |   |-- AppFrame.jsx
|       |   |   `-- AppFrame.module.css
|       |   |-- DatePage
|       |   |   |-- DatePage.jsx
|       |   |   |-- DatePage.module.css
|       |   |   |-- PrintTime
|       |   |   |   `-- PrintTime.jsx
|       |   |   `-- PrintTimeLines
|       |   |       `-- PrintTimeLines.jsx
|       |   |-- Error404Page
|       |   |   `-- Error404Page.jsx
|       |   |-- HomePage
|       |   |   `-- HomePage.jsx
|       |   |-- LogoutPage
|       |   |   `-- LogoutPage.jsx
|       |   |-- MonthPage
|       |   |   |-- MonthPage.jsx
|       |   |   `-- MonthPage.module.css
|       |   |-- Sign
|       |   |   |-- Sign.module.css
|       |   |   |-- SignInPage
|       |   |   |   `-- SignInPage.jsx
|       |   |   `-- SignUpPage
|       |   |       `-- SignUpPage.jsx
|       |   `-- YearPage
|       |       |-- YearPage.jsx
|       |       `-- YearPage.module.css
|       |-- env
|       |   |-- colors.css
|       |   |-- font.css
|       |   `-- index.css
|       |-- index.js
|       |-- package
|       |   `-- DateController
|       |       |-- DateController.js
|       |       |-- getMonthDays
|       |       |   |-- getMonthDays.js
|       |       |   `-- getMonthDays.test.js
|       |       |-- getNextDate
|       |       |   |-- getNextDate.js
|       |       |   `-- getNextDate.test.js
|       |       |-- getNextMonth
|       |       |   |-- getNextMonth.js
|       |       |   `-- getNextMonth.test.js
|       |       |-- getNextYear
|       |       |   |-- getNextYear.js
|       |       |   `-- getNextYear.test.js
|       |       |-- getPrevDate
|       |       |   |-- getPrevDate.js
|       |       |   `-- getPrevDate.test.js
|       |       |-- getPrevMonth
|       |       |   |-- getPrevMonth.js
|       |       |   `-- getPrevMonth.test.js
|       |       |-- getPrevYear
|       |       |   |-- getPrevYear.js
|       |       |   `-- getPrevYear.test.js
|       |       |-- getStringDay
|       |       |   |-- getStringDay.js
|       |       |   `-- getStringDay.test.js
|       |       |-- getStringMonth
|       |       |   |-- getStringMonth.js
|       |       |   `-- getStringMonth.test.js
|       |       `-- toStringTime
|       |           |-- toStringTime.js
|       |           `-- toStringTime.test.js
|       `-- scripts
|           |-- CalendarController
|           |   |-- CalendarController.js
|           |   |-- getDateTasks
|           |   |   `-- getDateTasks.js
|           |   |-- getDictTasks
|           |   |   `-- getDictTasks.js
|           |   |-- getMonthTasks
|           |   |   `-- getMonthTasks.js
|           |   `-- getYearTasks
|           |       `-- getYearTasks.js
|           |-- ToastController
|           |   `-- ToastController.js
|           `-- api
|               `-- rest
|                   |-- auth_access_token_put.js
|                   |-- auth_signin_post.js
|                   |-- auth_signup_post.js
|                   `-- tasks_get.js
`-- report

48 directories, 104 files
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
|       |   |-- AppContainer
|       |   |-- AppFrame
|       |   |-- DatePage
|       |   |   |-- PrintTime
|       |   |   `-- PrintTimeLines
|       |   |-- Error404Page
|       |   |-- HomePage
|       |   |-- LogoutPage
|       |   |-- MonthPage
|       |   |-- Sign
|       |   |   |-- SignInPage
|       |   |   `-- SignUpPage
|       |   `-- YearPage
|       |-- env
|       |-- package
|       |   `-- DateController
|       |       |-- getMonthDays
|       |       |-- getNextDate
|       |       |-- getNextMonth
|       |       |-- getNextYear
|       |       |-- getPrevDate
|       |       |-- getPrevMonth
|       |       |-- getPrevYear
|       |       |-- getStringDay
|       |       |-- getStringMonth
|       |       `-- toStringTime
|       `-- scripts
|           |-- CalendarController
|           |   |-- getDateTasks
|           |   |-- getDictTasks
|           |   |-- getMonthTasks
|           |   `-- getYearTasks
|           |-- ToastController
|           `-- api
|               `-- rest
`-- report

48 directories
```
