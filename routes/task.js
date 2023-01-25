const express = require('express');
const router = express.Router();

const { getAllHash, createHash, getHash } = require('../controllers/tasks');
router.route('/').get(getAllHash).post(createHash);
router.route('/:id').get(getHash);
module.exports = router;
