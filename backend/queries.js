const pool = require('./pool')

const getMovies = (request, response) => {
        pool.query('SELECT * FROM movies ORDER BY "id" DESC', (error, results) => {
            if (error) {
                throw error
            }
            const res = {
                success: true,
                data: results.rows.sort(item =>item.as)
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
       return response.status(200).json(results.rows[0])
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
    const { title, cover } = request.body

    pool.query(
        'UPDATE movies SET title = $1, cover = $2 WHERE id = $3',
        [title, cover, id],
        (error, results) => {
            if (error) {
                return response.status(500).json({ errors: { global: "Something went wrong" } });
            }
            return response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteMovie = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
        if (error) {
            return response.status(500).json({ errors: { global: "Something went wrong" } });
        }
        return response.status(200).json('OK')
    });
}

module.exports = {
    getMovies,
    getMoviesById,
    createMovie,
    updateMovie,
    deleteMovie,
}