const express = require('express');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

const appSettings = require('../config/app.settings');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Refresh_token } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/refresh-token/{id}/:
 *    delete:
 *      tags:
 *        - /api/auth/refresh-token/
 *      description: Удаляем по id определённый refresh токен определённого пользователя
 *      responses:
 *        '200':
 *          description: Удалили по id определённый refresh токен определённого пользователя
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
  '/auth/refresh-token/:id/',
  MiddlewareAccessTokenCheck,
  async (req, res) => {
    try {
      const { id } = req.params;
      const AccessToken = req.headers?.authorization?.split(' ')[1];

      const secret = appSettings.APP__JWT_SECRET;
      const payload = jwt.verify(AccessToken, secret);
      const { UserId } = payload;

      const count = await TP_Refresh_token.destroy({
        where: {
          [Op.and]: [{ id, RBUserID: UserId }],
        },
      });

      return res.status(200).json({ message: `${count} elements deleted` });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
