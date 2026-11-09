const Router = require("express").Router;
const router = new Router();

const deviceRouter = require("./deviceRouter");
const userRoter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");

router.use("/user", require("./userRouter"));
router.use("/type", require("./typeRouter"));
router.use("/brand", require("./brandRouter"));
router.use("/device", require("./deviceRouter"));

module.exports = router;
