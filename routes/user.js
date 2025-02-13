const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/user/getusers:
 *   get:
 *     summary: Returns a list of all users
 *     description: Fetches and returns a full list of all users
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:      
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   name:
 *                     type: string
 *                     example: "Oliver Twist"
 *                   email:
 *                     type: string
 *                     example: "oliver@gmail.com"
 *                   role:
 *                     type: string
 *                     example: "student"
 *       401:
 *         description: Unauthorized, token missing or invalid
 *       500:
 *         description: Internal server error
 */

// Get all users (admin only)
router.get('/getusers', auth, getAllUsers);
/**
 * @swagger
 * /api/user/getuserbyid/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Returns a user with a specific ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the user
 *         example: "64f7a9d8a123456"
 *     responses:
 *       200:
 *         description: User found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   example: "Oliver Twist"
 *                 email:
 *                   type: string
 *                   example: "example@gmail.com"
 *                 role:
 *                   type: string
 *                   example: "student"
 */

// Get a single user by ID
router.get('/getuserbyid/:id', auth, getUserById);

/**
 * @swagger
 * /api/user/updateuserbyid/{id}:
 *   put:
 *     summary: Update a user by id
 *     description: Update a user's details by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update
 *         example: "1"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [admin, teacher, student]
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   example: "Oliver Twist"
 *                 email:
 *                   type: string
 *                   example: "oliver@gmail.com"
 *                 role:
 *                   type: string
 *                   example: "student"
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

// Update a user
router.put('/updateuserbyid/:id', auth, updateUser);

/**
 * @swagger
 * /api/user/delete/{id}:
 *   delete:
 *     summary: Delete a user by id
 *     description: Deletes a user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete
 *         example: "1"
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */


// Delete a user (admin only)
router.delete('/delete/:id', auth, deleteUser);


module.exports = router;
