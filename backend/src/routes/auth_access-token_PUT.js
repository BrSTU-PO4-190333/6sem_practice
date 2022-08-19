const express = require('express');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareRefreshTokenCheck = require('../scripts/MiddlewareRefreshTokenCheck');
const { TP_Access_token } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/access-token/:
 *    put:
 *      tags:
 *        - /api/auth/access-token/
 *      description: Получаем новый access токен имея refresh токен
 *      responses:
 *        '200':
 *          description: Получили новый access токен
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                AccessToken:
 *                  type: string
 *        '401':
 *          description: Не авторизован refresh токен
 *          schema:
 *            $ref: '#/definitions/MiddlewareRefreshTokenCheck'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.put(
  '/auth/access-token/',
  MiddlewareRefreshTokenCheck,
  async (req, res) => {
    try {
      const RefreshToken = req.headers?.authorization?.split(' ')[1];
      const old_payload = JSON.parse(
        Buffer.from(RefreshToken.split('.')[1], 'base64').toString()
      );
      const { UserId } = old_payload;

      const payload = { UserId };
      const secret = appSettings.APP__JWT_SECRET;
      const options = {
        expiresIn: appSettings.APP__JWT_ACCESS_TOKEN_EXPIRES_IN,
      };

      const AccessToken = jwt.sign(payload, secret, options);
      TP_Access_token.create({ RBUserId: UserId, AccessToken });

      return res.status(200).json({
        message: 'New access token',
        AccessToken,
      });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
