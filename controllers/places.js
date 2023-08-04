const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
      .then((places) => {
        res.render('places/index', {places})
      })
      .catch(err => {
        console.log(err)
        res.render('Error')
      })
})

router.get('/new', (req,res) => {
  res.render('places/new')
}) 

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('Error')
  })
})


router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  console.log(id);
  if (isNaN(id)) {
      res.render('Error')
  }
  else if (!places[id]) {
      res.render('Error')
  }
  else { 
    res.render('places/edit', { place: places[id], id: id })
  }
})



router.post('/', (req,res) => {
  db.Place.create(req.body)
   .then(() => {
    res.redirect('/places')
   })
   .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }console.log("validation error message", message)
        res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
   })
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('Error')
  }
  else if (!places[id]) {
      res.render('Error')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})



router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('Error')
  }
  else if (!places[id]) {
    res.render('Error')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router
