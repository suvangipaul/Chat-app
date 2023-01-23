const { register } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", reg);

module.exports = router;
