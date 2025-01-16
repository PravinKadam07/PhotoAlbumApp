const Photo = require("../models/Photo");
const path = require("path");

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const { title, category } = req.body;

    const imageUrl = `http://localhost:8000/uploads/${req.file.filename}`;

    const photo = new Photo({
      title,
      category,
      imageUrl,
    });

    await photo.save();

    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
