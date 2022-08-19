const express = require('express');
const bcrypt = require('bcrypt');
const { check } = require('express-validator');

const MiddlewareTypeCheck = require('../scripts/MiddlewareTypeCheck');
const { RB_User } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/auth/sign-up/:
 *    post:
 *      tags:
 *        - /api/auth/
 *      description: Регистрация
 *      responses:
 *        '200':
 *          description: Зарегистрировались
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *              Name:
 *                type: string
 *              Login:
 *                type: string
 *        '400':
 *          description: Не верный формат
 *          schema:
 *            $ref: '#/definitions/MiddlewareTypeCheck'
 *        '401':
 *          description: Не зарегистрирован
 *          schema:
 *            $ref: '#/definitions/Message'
 *        '500':
 *          description: Ошибка на сервере
 *          schema:
 *            $ref: '#/definitions/Message'
 */
router.post(
  '/auth/sign-up',
  [
    check('Name', 'Field "Name" not string').isString(),
    check('Name', 'Field "Name" is empty').notEmpty(),

    check('Login', 'Field "Login" not string').isString(),
    check('Login', 'Field "Login" is empty').notEmpty(),

    check('Password', 'Field "Password" not string').isString(),
    check('Password', 'Field "Password" is empty').notEmpty(),
    check('Password', 'Password length c [4;64]').isLength({ min: 4, max: 64 }),
  ],
  MiddlewareTypeCheck,
  async (req, res) => {
    try {
      const { Name, Login, Password } = req.body;

      const candidat = await RB_User.findOne({
        where: { Login },
      });

      if (candidat !== null) {
        return res.status(401).json({ message: 'Login exist' });
      }

      await RB_User.create({
        Name,
        Login,
        HashPassword: bcrypt.hashSync(Password, 7),
      });

      return res.status(200).json({
        message: 'Success sign up',
        Name,
        Login,
      });
    } catch (error) {
      res.status(500).json({ message: '' + error });
    }
  }
);

module.exports = router;
