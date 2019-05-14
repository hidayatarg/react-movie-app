const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const config = require('./config');
const cors = require('cors')


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

const db = require('./queries')
app.get('/api/movies', db.getMovies)
app.get('/api/movies/:id', db.getMoviesById)
app.post('/api/movies', db.createMovie)
app.put('/api/movies/:id', db.updateMovie)
app.delete('/api/movies/:id', db.deleteMovie)

app.use((req, res) => {
    res.status(404).json({
        errors: {
            global: "Still working on it. Please try again later when we implement it."
        }
    });
});


// port listening
app.listen(config.port, () => {
    console.log(`App running on port ${config.port}.`)
})