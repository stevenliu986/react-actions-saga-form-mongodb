const express = require("express");
const router = express.Router();

router.get("/api/hello", (req, res) => {
  res.send("Hello, React-Actions");
});

module.exports = router;
