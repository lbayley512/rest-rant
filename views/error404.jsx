const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p> Oops, sorry, we cant find this page</p>
                <div>
                    <img src="/images/404Page.jpg" alt="Judging dog"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@charlesdeluvio">Charles Deluvio</a> on  <a href="https://unsplash.com/photos/MsTOg6rhRVk">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404