const express = require('express');
const router = express.Router();
const {list, detail}= require('../../controllers/api/genresApiController');


router

.get('/', list)
.get('/:id', detail)

module.exports = router;