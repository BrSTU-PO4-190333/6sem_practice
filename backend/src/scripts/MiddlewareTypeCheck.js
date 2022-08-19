const { validationResult } = require('express-validator');

/**
 *  @openapi
 *  definitions:
 *    MiddlewareTypeCheck:
 *      properties:
 *        message:
 *          type: string
 *        errors:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              msg:
 *                type: string
 *              param:
 *                type: string
 *              location:
 *                type: string
 */
module.exports = function MiddlewareTypeCheck(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Format not right',
        ...errors,
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: '' + error });
  }
};
