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
  .populate('comments')
  .then(place => {
    console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('Error')
  })
})


router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('')
   .then(place =>{
    res.render('places/edit', {place})
   })
   .catch(err => {
    console.log(err)
    res.render('Error')
   })
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
        res.render('Error')
      }
   })
})

router.post('/:id/comment', (req,res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.puch(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/plaes/${req.params.id}`)
      })
    })
    .catch(err => {
      res.render('Error')
    })
  })
  .catch(err => {
    res.render('Error')
  })
  req.body.rant = req.body.rant ? true : false
  res.send("GET /places/:id/comment stub")
})

router.put('/:id', (req, res) => {
  let id = db.Place.findById(req.params.id)
  .then(place =>{
    place.save()
    // Save the new data into places[id]
    places[id] = req.body
    res.redirect(`/places/${id}`)
  })
  .catch(err => {
   console.log(err)
   res.render('Error')
  })
})



router.delete('/:id', (req, res) => {
  let id = db.Place.findById(req.params.id)
  .then(place =>{
   place.deleteOne({_id: id})
   res.redirect('/places')
  })
  .catch(err => {
   console.log(err)
   res.render('Error')
  })
})


module.exports = router
