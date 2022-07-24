const express = require('express');
const router = express.Router();
const { daftarUser, loginUser, getUser, forgotPassword, resetPassword, getWisata, getWisataId, addRating, totalRating, getRating, getNamaUser } = require('../controller/controller');
const { runValidation, validationDaftar, validationLogin } = require('../validation/validation')
const midle = require('../midleware/midle')

router.post('/daftar', validationDaftar, runValidation, daftarUser);
router.post('/login', validationLogin, runValidation, loginUser);
router.get('/getUser', midle, getUser);
router.get('/getWisata', getWisata);
router.get('/getWisataId/:id', getWisataId);
router.put('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.post('/addRating', addRating);
router.get('/getRating/:id', getRating);
router.get('/getNamaUser/:id', getNamaUser);
router.put('/totalRating/:id', totalRating);

module.exports = router