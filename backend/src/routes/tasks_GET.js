const express = require('express');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Task } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/tasks/:
 *    get:
 *      tags:
 *        - /api/tasks/
 *      description: Получаем таски определённого пользователя
 *      responses:
 *        '200':
 *          description: Получили таски определённого пользователя
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/TP_Task'
 *        '401':
 *          description: Не авторизован access токен
 *          schema:
 *            $ref: '#/definitions/MiddlewareAccessTokenCheck'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.get('/tasks/', MiddlewareAccessTokenCheck, async (req, res) => {
  try {
    const AccessToken = req.headers?.authorization?.split(' ')[1];

    const secret = appSettings.APP__JWT_SECRET;
    const payload = jwt.verify(AccessToken, secret);

    const result = await TP_Task.findAll({
      where: { RBUserID: payload.UserId },
    });
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: '' + error });
  }
});

module.exports = router;
