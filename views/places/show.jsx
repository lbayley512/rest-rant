const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='edit-delete'>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     

                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 

            </div>
           <div className='data'>
                <h1>{data.place.name}</h1>
                    <img src={data.place.pic}/>
                <h2>Rating</h2>
                    <p>Currently Unrated</p>
                <h2>Description</h2>
                    <p>Located in  {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            </div> 
            <div className='comments'>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
