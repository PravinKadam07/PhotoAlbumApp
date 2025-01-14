const Photo = require('../models/Photo');

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().populate('user', 'username');
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.uploadPhoto = async (req, res) => {
  try {
    const { title, category, imageUrl } = req.body;
    const photo = new Photo({ user: req.user.id, title, category, imageUrl });
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
