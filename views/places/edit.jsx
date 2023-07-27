const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
                  <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input value={data.place.name} className="form-control" id="name" name="name" required/>
                    </div>
                    <div  className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input type="url" className="form-control" id="pic" name="pic"/>
                    </div>
                    <div  className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input value={data.place.city} className="form-control" id="city" name="city"/>
                    </div>
                    <div  className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input value={data.place.state} className="form-control" id="state" name="state"/>
                    </div>
                    <div  className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input value={data.place.cuisines} className="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                </div>
                    <input className="btn btn-primary" type="submit" value="Add Place"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form