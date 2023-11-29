/**
 * @swagger
 * tags:
 *   name: Chat Support
 *   description: APIs for managing users, messages, and chats in a chat support system
 * 
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       userId:
 *         type: integer
 *       username:
 *         type: string
 *       profilePicture:
 *         type: string
 * 
 *   Message:
 *     type: object
 *     properties:
 *       messageId:
 *         type: integer
 *       user:
 *         $ref: '#/definitions/User'
 *       content:
 *         type: string
 *       timestamp:
 *         type: string
 * 
 *   Chat:
 *     type: object
 *     properties:
 *       chatId:
 *         type: integer
 *       users:
 *         type: array
 *         items:
 *           $ref: '#/definitions/User'
 *       messages:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Message'
 */

/**
 * @swagger
 * /chats:
 *   post:
 *     summary: Create a new chat
 *     tags:
 *       - Chat Support
 *     description: Endpoint for creating a new chat
 *     parameters:
 *       - in: body
 *         name: chat
 *         description: The chat object to be created
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Chat'
 *     responses:
 *       200:
 *         description: Chat created successfully
 * 
 *   get:
 *     summary: Get all chats
 *     tags:
 *       - Chat Support
 *     description: Endpoint for retrieving all chats
 *     responses:
 *       200:
 *         description: Successfully retrieved all chats
 */

/**
 * @swagger
 * /chats/{chatId}/messages:
 *   post:
 *     summary: Send a new message in a chat
 *     tags:
 *       - Chat Support
 *     description: Endpoint for sending a new message in a specific chat
 *     parameters:
 *       - in: path
 *         name: chatId
 *         description: ID of the chat where the message will be sent
 *         required: true
 *         type: integer
 *       - in: body
 *         name: message
 *         description: The message object to be sent
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Message'
 *     responses:
 *       200:
 *         description: Message sent successfully
 * 
 *   get:
 *     summary: Get all messages in a chat
 *     tags:
 *       - Chat Support
 *     description: Endpoint for retrieving all messages in a specific chat
 *     parameters:
 *       - in: path
 *         name: chatId
 *         description: ID of the chat
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved all messages in the chat
 */
