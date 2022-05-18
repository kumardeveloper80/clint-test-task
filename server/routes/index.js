const express = require("express");
const router = express.Router();
const dataController = require('../controllers/data')

router.post("/store", dataController.new_data_store);

module.exports = router;