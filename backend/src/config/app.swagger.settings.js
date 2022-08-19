const appSettings = require('./app.settings');

const host = `${appSettings.APP__HOST}:${appSettings.APP__PORT}/api`
  .replace('http://', '')
  .replace('https://', '');

const swaggerSettings = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      version: '0.1.0',
      title: 'Документация API',
      host,
      description: 'Расписал возможные эндпоинты.',
      contact: {
        name: 'Павел Иннокентьевич Галанин',
        email: 'Pavel.Innokentevich.Galanin@gmail.com',
      },
    },
    tags: [
      {
        name: '/api/',
        description: 'Документация API',
      },
      {
        name: '/api/auth/',
        description: 'Регистрация и авторизация',
      },
      {
        name: '/api/auth/access-token/',
        description: 'Манипуляции с access токеном',
      },
      {
        name: '/api/auth/refresh-token/',
        description: 'Манипуляции с refresh токеном',
      },
      {
        name: '/api/tasks/',
        description: 'CRUD операции с оперативным документом "Таски"',
      },
    ],
    schemes: ['http'],
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  apis: [
    'src/config/app.swagger.settings.js',
    'src/routes/swagger_GET.js',
    'src/routes/swagger.json_GET.js',
    'src/routes/redoc_GET.js',

    'src/scripts/MiddlewareTypeCheck.js',
    'src/scripts/MiddlewareAccessTokenCheck.js',
    'src/scripts/MiddlewareRefreshTokenCheck.js',

    'src/routes/auth_sign-up_POST.js',
    'src/routes/auth_sign-in_POST.js',

    'src/routes/auth_access-token_GET.js',
    'src/routes/auth_access-token_{id}_DELETE.js',
    'src/routes/auth_access-token_DELETE.js',
    'src/routes/auth_access-token_PUT.js',

    'src/routes/auth_refresh-token_GET.js',
    'src/routes/auth_refresh-token_{id}_DELETE.js',
    'src/routes/auth_refresh-token_DELETE.js',

    'src/models/tp_task.js',
    'src/routes/tasks_GET.js',
    'src/routes/tasks_POST.js',
    'src/routes/tasks_{id}_DELETE.js',
    'src/routes/tasks_{id}_PUT.js',
  ],
};

module.exports = swaggerSettings;

/**
 *  @openapi
 *  definitions:
 *    Message:
 *      properties:
 *        message:
 *          type: string
 */
