const router = require("express").Router();
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/test", isAuth, (req, res) => {
    res.send("Bravos ;)");
});

module.exports = router;
