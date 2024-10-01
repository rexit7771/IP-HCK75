const UserController = require("../controller/UserController");
const errorHandler = require("../middlewares/errorHandler");

const router = require("express").Router();

router.use("/login", UserController.login);
router.use("/register", UserController.register);

router.use(errorHandler)

module.exports = router;