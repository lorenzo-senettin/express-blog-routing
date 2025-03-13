const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  res.send("Return all post");
});

// Show
router.get("/:id", (req, res) => {
  res.send(`Return post with ID: ${req.params.id}`);
});

// Create
router.post("/", (req, res) => {
  res.send("Store a new post");
});

// Update
router.put("/:id", (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
});

//Update
router.patch("/:id", (req, res) => {
  res.send(`Modify post with ID: ${req.params.id}`);
});

// Delete
router.delete("/:id", (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
});

module.exports = router;
