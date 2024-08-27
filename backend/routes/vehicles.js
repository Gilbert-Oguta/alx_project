const router = require('express').Router();
let Vehicledata = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const service = req.body.service;
  const vehicleType = req.body.vehicleType;
  const contact = req.body.contact;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newVehicledata = new Vehicledata({
    username,
    service,
    vehicleType,
    contact,
    description,
    duration,
    date,
  });

  newVehicledata.save()
  .then(() => res.json('Vehicledata added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Vehicledata.findById(req.params.id)
    .then(vehicle => res.json(vehicle))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Vehicledata.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vehicledata deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Vehicledata.findById(req.params.id)
    .then(vehicle => {
      vehicle.username = req.body.username;
      vehicle.service = req.body.service;
      vehicle.vehicleType = req.body.vehicleType;
      vehicle.contact = req.body.contact;
      vehicle.description = req.body.description;
      vehicle.duration = Number(req.body.duration);
      vehicle.date = Date.parse(req.body.date);

      vehicle.save()
        .then(() => res.json('Vehicledata updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
