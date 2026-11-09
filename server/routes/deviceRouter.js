const Router = require("express").Router;
const router = new Router();

router.post("/", (req, res) => res.json({ message: "create" }));
router.get("/", (req, res) => res.json({ message: "get all" }));
router.get("/:id", (req, res) =>
  res.json({ message: "get one", id: req.params.id }),
);
router.delete("/", (req, res) => res.json({ message: "delete" }));

module.exports = router;
