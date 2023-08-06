const db = require('../models')
const places = require('../models/places')

// to use await, we need an async function
async function seed() {
    // get the place, h-thai
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    // create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing!'
    })

    // add that comment to the place's comment array
    places.comments.push(comment.id)

    // save the pace now with comment
    await place.save()

    // exit
    process.exit()
}

seed()