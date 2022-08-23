const express = require('express');
const jwt = require('jsonwebtoken');
const { check } = require('express-validator');

const appSettings = require('../config/app.settings');
const MiddlewareTypeCheck = require('../scripts/MiddlewareTypeCheck');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Task } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/tasks/{id}/:
 *    put:
 *      tags:
 *        - /api/tasks/
 *      description: Обновляем по id таску определённого пользователя
 *      responses:
 *        '200':
 *          description: Обновили по id таску определённого пользователя
 *          schema:
 *            $ref: '#/definitions/Message'
 *        '400':
 *          description: Не верный формат
 *          schema:
 *            $ref: '#/definitions/MiddlewareTypeCheck'
 *        '401':
 *          description: Не авторизован access токен
 *          schema:
 *            $ref: '#/definitions/MiddlewareAccessTokenCheck'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.put(
  '/tasks/:id/',
  [
    check('Name', 'Field "Name" not string').isString(),
    check('Name', 'Field "Name" is empty').notEmpty(),

    check('Description', 'Field "Description" not string').isString(),

    check('StartDate', 'Field "StartDate" not string').isString(),
    check('StartDate', 'Field "StartDate" is empty').notEmpty(),

    check('EndDate', 'Field "EndDate" not string').isString(),
    check('EndDate', 'Field "EndDate" is empty').notEmpty(),

    check('IsCompleted', 'Field "IsCompleted" not boolean').isBoolean(),
  ],
  MiddlewareTypeCheck,
  MiddlewareAccessTokenCheck,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { Name, Description, StartDate, EndDate, IsCompleted } = req.body;

      if (new Date(EndDate).getTime() < new Date(StartDate).getTime()) {
        return res.status(400).send({
          message: 'EndDate < StartDate',
        });
      }

      const AccessToken = req.headers?.authorization?.split(' ')[1];

      const secret = appSettings.APP__JWT_SECRET;
      const payload = jwt.verify(AccessToken, secret);

      await TP_Task.update(
        {
          Name,
          Description,
          StartDate,
          EndDate,
          IsCompleted,
        },
        {
          where: { id, RBUserId: payload.UserId },
        }
      );
      return res.status(200).json({ message: 'Success updated' });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
