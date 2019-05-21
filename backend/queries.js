const pool = require('./pool')

const getMovies = (request, response) => {

    setTimeout(() => {
        pool.query('SELECT * FROM movies', (error, results) => {
            if (error) {
                throw error
            }
            const res = {
                success: true,
                data: results.rows
            }
            response.status(200).json(res)
        })
    }, 2000);

   
}

const getMoviesById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createMovie = (request, response) => {
    const {
        title,
        cover
    } = request.body

    pool.query('INSERT INTO movies (title, cover) VALUES ($1, $2)', [title, cover], (error, results) => {
        if (error) {
            res.status(400).json(error);
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateMovie = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        email
    } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteMovie = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getMovies,
    getMoviesById,
    createMovie,
    updateMovie,
    deleteMovie,
}