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

//multer Config

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'application/pdf': 'pdf'
}
const store = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = MIME_TYPE[file.mimetype];

        if (isValid) {
            cb(null, 'backend/uploads')
        }



    },
    filename: function (req, file, cb) {
        let idFileName = Date.now()

        const name = idFileName + '-' + file.originalname;

        cb(null, name);
    }
});
const upload = multer({ storage: store })


//multer Config


router.post('/signup', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cv', maxCount: 1 }]), (req, reponse) => {
    console.log('signup BL is running ...');
    let newUser = req.body
    User.findOne({ email: newUser.email }).then((data) => {
        if (data) {
            reponse.json({ msg: 'try with another Email' })
        } else {
            Bcrypt.hash(newUser.password, 10).then((hashData) => {

                newUser.password = hashData
                newUser.cv = `http://localhost:3000/files/${req.files['cv'][0].filename}`
                newUser.avatar = `http://localhost:3000/files/${req.files['avatar'][0].filename}`
                addUser = new User(newUser)
                addUser.save().then((log) => {
                    if (log) {
                        reponse.json({ msg: 'Welcome' })
                    } else {
                        reponse.json({ msg: 'User did not save' })
                    }
                })

            })
        }
    })
})
router.get("/", (req, reponse) => {
    User.find().then((docs) => {
        reponse.json({ users: docs })
    })
    console.log('Here into Bisuness Logic : GET all users', req.body)

})


router.post('/login', (req, res) => {
    let loggedUser = req.body
    User.findOne({ email: loggedUser.email }).then((found) => {
        if (found) {
            console.log('here', found);
            Bcrypt.compare(loggedUser.password, found.password).then((isCrypted) => {
                console.log(isCrypted);
                if (isCrypted) {
                    const token = jwt.sign({
                        role: found.role,
                        fName: found.firstName,
                        lName: found.lastName,
                        userId: found._id
                    },
                        secretKey, { expiresIn: '1h' });
                    res.json({ msg: 'You are Logged', token: token })
                } else {
                    res.json({ msg: 'please check your Email and Password' })
                }
            })
        } else {
            res.json({ msg: 'please check your Email and Password' })
        }
    })
})
module.exports = router