const express = require('express');
const router = express.Router();

const user  = require('./user.router')

// colocar las rutas aquí

router.use(user)

module.exports = router;