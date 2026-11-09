const Router = require("express").Router;
const router = new Router();

router.post("/", (req, res) => res.json({ message: "create" }));
router.get("/", (req, res) => res.json({ message: "get all" }));
router.delete("/", (req, res) => res.json({ message: "delete" }));

module.exports = router;
