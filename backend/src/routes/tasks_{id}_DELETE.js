const express = require('express');
const jwt = require('jsonwebtoken');

const appSettings = require('../config/app.settings');
const MiddlewareAccessTokenCheck = require('../scripts/MiddlewareAccessTokenCheck');
const { TP_Task } = require('../models');

const router = express.Router();

/**
 *  @openapi
 *  /api/tasks/{id}/:
 *    delete:
 *      tags:
 *        - /api/tasks/
 *      description: Удаляем по id таску определённого пользователя
 *      responses:
 *        '200':
 *          description: Удалили по id таску определённого пользователя
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
router.delete('/tasks/:id/', MiddlewareAccessTokenCheck, async (req, res) => {
  try {
    const { id } = req.params;
    const AccessToken = req.headers?.authorization?.split(' ')[1];

    const secret = appSettings.APP__JWT_SECRET;
    const payload = jwt.verify(AccessToken, secret);

    const count = await TP_Task.destroy({
      where: { id, RBUserId: payload.UserId },
    });
    return res.status(200).json({ message: `${count} elements deleted` });
  } catch (error) {
    res.status(500).json({ message: '' + error });
  }
});

module.exports = router;
