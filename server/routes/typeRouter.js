const Router = require("express").Router;
const router = new Router();

router.post("/registration");
router.post("/login");
router.get("/auth");
router.delete("/");

module.exports = router;
