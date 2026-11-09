const Router = require("express").Router;
const router = new Router();

router.post("/registration", (req, res) =>
  res.json({ message: "registration" }),
);
router.post("/login", (req, res) => res.json({ message: "login" }));
router.get("/auth", (req, res) => {
  res.json({ message: "all working" });
});
router.delete("/", (req, res) => res.json({ message: "delete" }));

module.exports = router;
