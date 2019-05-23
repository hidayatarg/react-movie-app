const pool = require('./pool')

const getMovies = (request, response) => {
        pool.query('SELECT * FROM movies', (error, results) => {
            if (error) {
                throw error
            }
            const res = {
                success: true,
                data: results.rows
            }
            response.status(200).json(res)
        });
}

const getMoviesById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
        // if remove return use if else
        if (error) {
            return response.status(500).json({ errors: { global: "Something went wrong" } });
        }
       return response.status(200).json(results.rows)
    });
}

const createMovie = (request, response) => {
    const { errors, isValid } = validate(request.body);

    if (isValid){
        const { title, cover } = request.body
        pool.query('INSERT INTO movies (title, cover) VALUES ($1, $2) RETURNING * ', [title, cover], (error, results) => {
            if (error) {
               return response.status(500).json({ errors: { global: "Something went wrong" } });
            }
          return  response.status(201).json(results.rows);
        })
    } else {
        response.status(400).json({ errors });
    }   
}

const validate = (data) => {
    let errors = {};
    if (data.title === '') errors.title = "Can't be empty";
    if (data.cover === '') errors.cover = "Can't be empty";
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
};

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