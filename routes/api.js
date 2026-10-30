
const express = require("express");
const router = express.Router();

const Todo = require("../models/todo");
const Internship = require("../models/Internship");

// ---------------- TODO ROUTES ----------------

router.get("/todos", async (req, res) => {
  try {
    const data = await Todo.find({}, "action");
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/todos", async (req, res) => {
  try {
    if (!req.body.action) {
      return res.status(400).json({
        error: "The input field is empty"
      });
    }

    const data = await Todo.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ---------------- INTERNSHIP ROUTES ----------------

// Get all internships
router.get("/internships", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get internship by ID
router.get("/internships/:id", async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);

    if (!internship) {
      return res.status(404).json({
        message: "Internship not found"
      });
    }

    res.json(internship);
  } catch (error) {
    res.status(400).json({ error: "Invalid internship ID" });
  }
});

// Add a new internship
router.post("/internships", async (req, res) => {
  try {
    const internship = await Internship.create(req.body);

    res.status(201).json({
      message: "Internship added successfully",
      internship
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
