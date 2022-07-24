const express = require('express');
const router = express.Router();
const { daftarAdmin, LoginAdmin, uploadData, getSingleImage, getDataWisata, getKategori, updateWisata, deleteWisata, getMember } = require('../controller/controller');

router.post('/daftar', daftarAdmin);
router.post('/login', LoginAdmin);
router.post('/upload', uploadData);
router.get('/getSingleImage/:namaImage', getSingleImage);
router.get('/getDataWisata', getDataWisata);
router.get('/getKategori', getKategori);
router.put('/updateWisata/:id', updateWisata);
router.delete('/deleteWisata/:id', deleteWisata);
router.get('/getMember', getMember);



module.exports = router