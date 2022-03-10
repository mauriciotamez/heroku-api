const express = require('express')

// Controllers
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/users.controller')

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', createNewUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

router.post('/login', loginUser)

module.exports = { usersRouter: router }
