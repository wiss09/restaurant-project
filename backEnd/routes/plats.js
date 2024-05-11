const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const User = require('../models/user')
const bodyParser = require('body-parser');
const multer = require('multer')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const session = require('express-session');
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
const secretKey = 'myKey';
router.use(session({ secret: secretKey, }));

const store = multer.diskStorage({
    destination: function (req, file, cb) {
        
            cb(null, 'backend/uploads/pictures-plats')


    },
    filename: function (req, file, cb) {
        let idFileName = Date.now()

        const name = idFileName + '-' + file.originalname;

        cb(null, name);
    }
});
const upload = multer({ storage: store })

module.exports = router