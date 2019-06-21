const express = require("express");
const router = express.Router();

// route   GET api/contacts
// get all users contacts
// private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// route   POST api/contacts
// Add new contact
// private
router.post("/", (req, res) => {
  res.send("Add contacts");
});

// route   PUT api/contacts/:id
// update contact
// private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// route   DELETE api/contacts/:id
// Delete contact
// private
router.delete("/", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
