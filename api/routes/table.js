const express = require('express');

const controller = require('../controllers/table');

const router = express.Router();

// localhost:5000/table
router.get('/', controller.getAll);

router.post('/', controller.create);

router.delete('/:id', controller.remove);

router.delete('/', controller.removeAll);

module.exports = router;