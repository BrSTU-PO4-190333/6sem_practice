const express = require('express');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Access_token } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/access-token/:
 *    delete:
 *      tags:
 *        - /api/auth/access-token/
 *      description: Удаляем все access токены определённого пользователя
 *      responses:
 *        '200':
 *          description: Удалили все access токены определённого пользователя
 *          schema:
 *            $ref: '#/definitions/Message'
 *        '401':
 *          description: Не авторизован access токен
 *          schema:
 *            $ref: '#/definitions/MiddlewareAccessTokenCheck'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.delete(
  '/auth/access-token/',
  MiddlewareAccessTokenCheck,
  async (req, res) => {
    try {
      const AccessToken = req.headers?.authorization?.split(' ')[1];

      const secret = appSettings.APP__JWT_SECRET;
      const payload = jwt.verify(AccessToken, secret);
      const { UserId } = payload;

      const count = await TP_Access_token.destroy({
        where: {
          RBUserID: UserId,
        },
      });

      return res.status(200).json({ message: `${count} elements deleted` });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
