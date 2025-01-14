const express = require('express');
const { getPhotos, uploadPhoto } = require('../controllers/photoController');
const router = express.Router();

router.get('/', getPhotos);
router.post('/', uploadPhoto);

module.exports = router;
