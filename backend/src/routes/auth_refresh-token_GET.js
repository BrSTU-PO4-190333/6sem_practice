const express = require('express');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Refresh_token } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/refresh-token/:
 *    get:
 *      tags:
 *        - /api/auth/refresh-token/
 *      description: Получаем список id'шников refresh токенов в БД (чтобы можно было удалить определённые)
 *      responses:
 *        '200':
 *          description: Получили список id'шников refresh токенов определённого пользователя
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                createdAt:
 *                  type: string
 *        '401':
 *          description: Не авторизован access токен
 *          schema:
 *            $ref: '#/definitions/MiddlewareAccessTokenCheck'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.get(
  '/auth/refresh-token/',
  MiddlewareAccessTokenCheck,
  async (req, res) => {
    try {
      const AccessToken = req.headers?.authorization?.split(' ')[1];
      const secret = appSettings.APP__JWT_SECRET;
      const payload = jwt.verify(AccessToken, secret);
      const { UserId } = payload;

      const result = await TP_Refresh_token.findAll({
        where: { RBUserId: UserId },
        attributes: ['id', 'createdAt'],
      });

      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
