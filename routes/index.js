const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');

router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.render('flights/index', { flights });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', (req, res) => {
  res.render('flights/new');
});


router.post('/', async (req, res) => {
  try {
    // Retrieve form data from req.body and create a new flight
    const newFlight = new Flight({
      airline: req.body.airline,
      airport: req.body.airport,
      flightNo: req.body.flightNo,
      departs: req.body.departs,
    });

    // Save the new flight to the database
    await newFlight.save();

    // Redirect to the index page after creating the flight
    res.redirect('/flights');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
