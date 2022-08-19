const express = require('express');
const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareTypeCheck = require('../scripts/MiddlewareTypeCheck');
const {
  sequelize,
  RB_User,
  TP_Access_token,
  TP_Refresh_token,
} = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/sign-in/:
 *    post:
 *      tags:
 *        - /api/auth/
 *      description: Авторизация
 *      responses:
 *        '200':
 *          description: Авторизовались
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *              Name:
 *                type: string
 *              Login:
 *                type: string
 *              AccessToken:
 *                type: string
 *              RefreshToken:
 *                type: string
 *        '400':
 *          description: Не верный формат
 *          schema:
 *            $ref: '#/definitions/MiddlewareTypeCheck'
 *        '401':
 *          description: Не авторизован
 *          schema:
 *            $ref: '#/definitions/Message'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.post(
  '/auth/sign-in',
  [
    check('Login', 'Field "Login" not string').isString(),
    check('Login', 'Field "Login" is empty').notEmpty(),

    check('Password', 'Field "Password" not string').isString(),
    check('Password', 'Field "Password" is empty').notEmpty(),
  ],
  MiddlewareTypeCheck,
  async (req, res) => {
    try {
      const { Login, Password } = req.body;

      const candidate = await RB_User.findOne({
        where: { Login },
      });

      if (candidate === null) {
        return res.status(401).json({ message: 'User not exist' });
      }

      const isEqualPassword = await bcrypt.compare(
        Password,
        candidate.HashPassword
      );

      if (!isEqualPassword) {
        return res.status(401).json({ message: 'Password not correct' });
      }

      const UserId = candidate.id;
      const payload = { UserId };
      const secret = appSettings.APP__JWT_SECRET;
      const options4AccessTooken = {
        expiresIn: appSettings.APP__JWT_ACCESS_TOKEN_EXPIRES_IN,
      };
      const options4ARefreshTooken = {
        expiresIn: appSettings.APP__JWT_REFRESH_TOKEN_EXPIRES_IN,
      };

      const AccessToken = jwt.sign(payload, secret, options4AccessTooken);
      const RefreshToken = jwt.sign(payload, secret, options4ARefreshTooken);

      const t = await sequelize.transaction();
      try {
        await TP_Access_token.create(
          { RBUserId: UserId, AccessToken },
          { transaction: t }
        );
        await TP_Refresh_token.create(
          { RBUserId: UserId, RefreshToken },
          { transaction: t }
        );
        await t.commit();
      } catch (error) {
        await t.rollback();
        res.status(500).json({ message: '' + error });
      }

      return res.status(200).json({
        message: 'Success sign in',
        Name: candidate.Name,
        Login,
        AccessToken,
        RefreshToken,
      });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
