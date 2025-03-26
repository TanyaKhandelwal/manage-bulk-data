const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/bulk-insert", userController.bulkInsert);
router.get("/bulk-fetch", userController.getAllUsers);

module.exports = router;
