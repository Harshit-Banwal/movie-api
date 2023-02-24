const express = require('express');
const router = express.Router();
const Movie = require('../model/movie');

//add-movie API
router.post('/add-movie', async (req, res) => {
  const newMovie = new Movie(req.body);

  try {
    const saveMovie = await newMovie.save();
    res.status(201).json({ Status: 'Success', Data: saveMovie });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// get-all API
router.get('/get-all', async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.status(200).json({ Status: 'Success', Data: allMovies });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

//get-single API
router.get('/get-single', async (req, res) => {
  const movieId = req.query.id;
  try {
    const movieData = await Movie.findById(movieId);
    if (movieData) {
      res.status(200).json({ Status: 'Success', Data: movieData });
    } else {
      res.status(404).json({ Status: 'Failed', Error: 'Invalid Id' });
    }
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// get-paginated API
router.get('/get-paginated', async (req, res) => {
  const { page, size } = req.query;
  const skip = (page - 1) * size;
  try {
    const movieData = await Movie.find().skip(skip).limit(size);
    res.status(200).json({ Status: 'Success', Data: movieData });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = router;
