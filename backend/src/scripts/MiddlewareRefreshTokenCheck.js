const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const { TP_Refresh_token } = require('./../models');
const appSettings = require('./../config/app.settings');

/**
 *  @openapi
 *  definitions:
 *    MiddlewareRefreshTokenCheck:
 *      properties:
 *        message:
 *          type: string
 */
module.exports = async function MiddlewareRefreshTokenCheck(req, res, next) {
  try {
    const RefreshToken = req.headers?.authorization?.split(' ')[1];

    const secret = appSettings.APP__JWT_SECRET;
    let payload;
    try {
      payload = jwt.verify(RefreshToken, secret);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        await TP_Access_token.destroy({ where: { AccessToken } });
        return res.status(401).json({ message: `Token expired ${error}` });
      }
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ message: `${error}` });
      }
    }

    const candidate = await TP_Refresh_token.findOne({
      where: { RefreshToken },
    });

    if (candidate === null) {
      return res.status(401).json({
        message: 'Refresh token is fake',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: '' + error });
  }
};
