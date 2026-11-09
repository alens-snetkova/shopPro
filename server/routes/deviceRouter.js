const Router = require("express").Router;
const router = new Router();

router.post("/");
router.get("/");
router.get("/:id");
router.delete("/");

module.exports = router;
