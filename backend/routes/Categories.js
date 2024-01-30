const express = require('express');
const router = express.Router();
const Categories = require("../models/Categories");

//ADD NEW Categories

router.post("/", async (req, res) => {
  const newCat = new Categories(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL Categories

router.get("/", async (req, res) => {
  try {
    const cats = await Categories.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;