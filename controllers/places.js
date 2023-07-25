const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Jamba Juice',
        city: 'Burbank',
        state: 'WA',
        cuisines: 'Smoothies',
        pic: 'https://www.jamba.com/-/media/jamba/app-images/electric-berry-lemonade/ebl_smoothie_306x235.png?v=1&d=20210224T084917Z'
    }, {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', { places })
})

router.get('/new', (req,res) => {
  res.render('places/new')
}) 

router.post('/', (req,res) => {
  console.log(req.body)
  res.send('POST/places')
})

module.exports = router
