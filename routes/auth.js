const express = require("express");
const router = express.Router();

// route   GET api/auth
// get logged in user
// private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// route   POST api/auth
// Authorize the user and get token
// public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
