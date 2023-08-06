const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return( 
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!' }</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className='edit-delete'>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     

                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
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
                <h2>{data.place.showEstablished()}</h2>
                <h3>Serving {data.place.cuisines}</h3>
            </div> 
            <div className='comments'>
                <h2>Comments</h2>
                <form method="POST" action={`/places/${id}?_method=PUT`}>
                    <div className="row"> 
                        <lable htmlFor="author">Author Name</lable>
                        <input className="form-control" id="author" name="author"/>                    </div>
                </form>
                {comments}
            </div>
          </main>
        </Def>
    )
}

module.exports = show
