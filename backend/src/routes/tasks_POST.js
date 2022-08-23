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
 *  /api/tasks/:
 *    post:
 *      tags:
 *        - /api/tasks/
 *      description: Добавляем таску к определёному пользователю
 *      responses:
 *        '200':
 *          description: Добавили таску к определёному пользователю
 *          schema:
 *            $ref: '#/definitions/TP_Task'
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
router.post(
  '/tasks/',
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
      const { Name, Description, StartDate, EndDate, IsCompleted } = req.body;

      if (new Date(EndDate).getTime() < new Date(StartDate).getTime()) {
        return res.status(400).send({
          message: 'EndDate < StartDate',
        });
      }

      const AccessToken = req.headers?.authorization?.split(' ')[1];

      const secret = appSettings.APP__JWT_SECRET;
      const payload = jwt.verify(AccessToken, secret);

      const result = await TP_Task.create({
        RBUserId: payload.UserId,
        Name,
        Description,
        StartDate,
        EndDate,
        IsCompleted,
      });
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
