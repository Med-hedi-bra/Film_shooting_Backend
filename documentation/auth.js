/**
 * @swagger
 * tags:
 *   name: Authentication Route
 *   description: API operations for authentication
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user or an admin
 *     tags:
 *       - Authentication Route
 *     description: This API is for getting a token for a user or an admin
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           $ref: '#/definitions/schemas/UserRequestToLogin'
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *             $ref: '#/definitions/schemas/UserResponse'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 * 
 * /auth/register:
 *   post:
 *     summary: Resigstration of new User
 *     tags:
 *       - Authentication Route
 *     description: This API is for adding a new User 
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           $ref: '#/definitions/schemas/UserRequest'
 *     responses:
 *       '201':
 *         description: OK
 *         schema:
 *              $ref: '#/definitions/schemas/UserResponse'
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * definitions:
 *   schemas:
 *     UserRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email address.
 *         password:
 *           type: string
 *           description: The user's password.
 *         nom:
 *           type: string
 *           description: The user's last name.
 *         fonction:
 *           type: string
 *           description: The user's job function.
 *         societe:
 *           type: string
 *           description: The user's company.
 *         interlocuteur:
 *           type: string
 *           description: The user's contact person.
 *         tel:
 *           type: string
 *           description: The user's telephone number.
 *         fax:
 *           type: string
 *           description: The user's fax number.
 * 
 *     UserResponse:
 *       type: object
 *       properties:
 *         idUser:
 *           type: integer
 *           description: The user's id.
 *         email:
 *           type: string
 *           description: The user's email address.
 *         password:
 *           type: string
 *           description: The user's password.
 *         nom:
 *           type: string
 *           description: The user's last name.
 *         fonction:
 *           type: string
 *           description: The user's job function.
 *         societe:
 *           type: string
 *           description: The user's company.
 *         interlocuteur:
 *           type: string
 *           description: The user's contact person.
 *         tel:
 *           type: string
 *           description: The user's telephone number.
 *         fax:
 *           type: string
 *           description: The user's fax number.
 *         token:
 *           type: string
 *           description: The user's token.
 * 
 *     UserRequestToLogin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email address.
 *         password:
 *           type: string
 *           description: The user's password.
 */
