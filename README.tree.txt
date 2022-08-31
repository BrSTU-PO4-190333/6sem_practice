.
|-- .dockerignore
|-- .github
|   `-- workflows
|       |-- docker-publish-backend.yml
|       `-- docker-publish-frontend.yml
|-- .gitignore
|-- Dockerfile.backend
|-- Dockerfile.frontend
|-- LICENSE
|-- Makefile
|-- README.md
|-- README.tree.txt
|-- backend
|   |-- .env
|   |-- .env.example
|   |-- .gitignore
|   |-- .prettierignore
|   |-- .prettierrc.json
|   |-- .sequelizerc
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
|       |   |-- tasks_{id}_GET.js
|       |   `-- tasks_{id}_PUT.js
|       |-- scripts
|       |   |-- MiddlewareAccessTokenCheck.js
|       |   |-- MiddlewareRefreshTokenCheck.js
|       |   `-- MiddlewareTypeCheck.js
|       `-- seeders
|           |-- 20220819205613-RB_User.js
|           `-- 20220819210116-TP_Task.js
|-- design
|   |-- ARIS
|   |   |-- ItDepartmentsDiagram.drawio
|   |   |-- OrganizationalChart.adf
|   |   `-- OrganizationalChart.adf.png
|   |-- EntityRelation
|   |   `-- EntityRelation.drawio
|   |-- UML
|   |   |-- ActivityDiagram-SignIn.drawio
|   |   |-- ActivityDiagram-Tasks.drawio
|   |   |-- ColloborationDiagram.drawio
|   |   |-- ComponentDiagram-Backend.drawio
|   |   |-- ComponentDiagram-Frontend.drawio
|   |   |-- DeploymentDiagram.drawio
|   |   |-- SequenceDiagram-SignIn.drawio
|   |   |-- SequenceDiagram-Tasks.drawio
|   |   |-- StatechartDiagram.drawio
|   |   `-- UseCaseDiagram.drawio
|   `-- UX
|       |-- DatePage.drawio
|       |-- HourPage.drawio
|       |-- MonthPage.drawio
|       `-- YearPage.drawio
|-- docker-compose.drawio.yml
|-- docker-compose.mysql.yml
|-- docker-compose.texlive.yml
|-- docker.frontend.nginx.default.conf
|-- frontend
|   |-- .browserslistrc
|   |-- .env
|   |-- .env.example
|   |-- .eslintrc.js
|   |-- .gitignore
|   |-- .prettierignore
|   |-- .prettierrc.json
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
|       |   |-- TasksPage
|       |   |   |-- EditTask
|       |   |   |   `-- EditTask.jsx
|       |   |   |-- NewTask
|       |   |   |   |-- NewTask.jsx
|       |   |   |   `-- NewTask.module.css
|       |   |   `-- TasksPage.jsx
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
|       |       |   |-- getMonthDays.drawio
|       |       |   |-- getMonthDays.js
|       |       |   `-- getMonthDays.test.js
|       |       |-- getNextDate
|       |       |   |-- getNextDate.drawio
|       |       |   |-- getNextDate.js
|       |       |   `-- getNextDate.test.js
|       |       |-- getNextMonth
|       |       |   |-- getNextMonth.drawio
|       |       |   |-- getNextMonth.js
|       |       |   `-- getNextMonth.test.js
|       |       |-- getNextYear
|       |       |   |-- getNextYear.drawio
|       |       |   |-- getNextYear.js
|       |       |   `-- getNextYear.test.js
|       |       |-- getPrevDate
|       |       |   |-- getPrevDate.drawio
|       |       |   |-- getPrevDate.js
|       |       |   `-- getPrevDate.test.js
|       |       |-- getPrevMonth
|       |       |   |-- getPrevMonth.drawio
|       |       |   |-- getPrevMonth.js
|       |       |   `-- getPrevMonth.test.js
|       |       |-- getPrevYear
|       |       |   |-- getPrevYear.drawio
|       |       |   |-- getPrevYear.js
|       |       |   `-- getPrevYear.test.js
|       |       |-- getStringDay
|       |       |   |-- getStringDay.drawio
|       |       |   |-- getStringDay.js
|       |       |   `-- getStringDay.test.js
|       |       |-- getStringMonth
|       |       |   |-- getStringMonth.drawio
|       |       |   |-- getStringMonth.js
|       |       |   `-- getStringMonth.test.js
|       |       |-- toStringDate
|       |       |   |-- toStringDate.drawio
|       |       |   |-- toStringDate.js
|       |       |   `-- toStringDate.test.js
|       |       `-- toStringTime
|       |           |-- toStringTime.drawio
|       |           |-- toStringTime.js
|       |           `-- toStringTime.test.js
|       `-- scripts
|           |-- CalendarController
|           |   |-- CalendarController.js
|           |   |-- getDateTasks
|           |   |   |-- getDateTasks.drawio
|           |   |   `-- getDateTasks.js
|           |   |-- getDictTasks
|           |   |   `-- getDictTasks.js
|           |   |-- getMonthTasks
|           |   |   |-- getMonthTasks.drawio
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
|                   |-- tasks_get.js
|                   |-- tasks_post.js
|                   |-- tasks_{id}_get.js
|                   `-- tasks_{id}_put.js
|-- prod
|   |-- .env
|   |-- .env.example
|   |-- .gitignore
|   |-- docker-compose.yml
|   |-- docker.backend.run.sh
|   `-- nginx.conf
`-- report
    |-- Makefile
    |-- config
    |   |-- env.practice.sty
    |   `-- env.sty
    |-- images
    |   |-- api-auth-access-token.png
    |   |-- api-auth-refresh-token.png
    |   |-- api-auth.png
    |   |-- api-tasks.png
    |   |-- api.png
    |   `-- screenshots
    |       |-- DatePage.png
    |       |-- GitHubActions.png
    |       |-- GitHubSecrets.png
    |       |-- HourPage.png
    |       |-- MonthPage.png
    |       |-- TaskPage.png
    |       `-- YearPage.png
    |-- include
    |   |-- practice_pz_0_introduction.tex
    |   |-- practice_pz_1_instruction.tex
    |   |-- practice_pz_2_organizational-chart.tex
    |   |-- practice_pz_3_work.tex
    |   |-- practice_pz_4_product.tex
    |   |-- practice_pz_5_design.tex
    |   |-- practice_pz_6_components.tex
    |   |-- practice_pz_7_standarts.tex
    |   |-- practice_pz_8_conclusion.tex
    |   |-- practice_pz_9_literature.tex
    |   |-- practice_title_page_authors.tex
    |   |-- practice_title_page_diagram.tex
    |   |-- practice_title_page_disk.tex
    |   |-- practice_title_page_pz.tex
    |   `-- practice_title_page_text.tex
    |-- main_practice_PZ.tex
    |-- main_practice_diagram.tex
    |-- main_practice_disk.tex
    |-- main_practice_text.tex
    `-- styles
        |-- SectionMargins.sty
        |-- TableOfContent.sty
        |-- bibliography.sty
        |-- fancyStyleWithCodeOnTop.sty
        |-- listing.sty
        |-- lists.sty
        |-- table.sty
        `-- url.sty

65 directories, 214 files
