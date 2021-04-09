const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router
	.get('/', adminController.getAdmin)
	.get('/add-match', adminController.getAddMatch)
	.post('/add-match', adminController.postAddMatch)
	.get('/edit-match/:id', adminController.getEditMatch)
	.post('/edit-match/:id', adminController.postEditMatch)
	.post('/remove-match/:id', adminController.postRemoveMatch);

module.exports = router;
