const pool = require('./pool');
const bcrypt = require('bcryptjs');

const login = (request, response) => {
    const { errors, isValid } = validate(request.body);

    if (isValid) {
        const { username, password } = request.body
        pool.query('SELECT * users WHERE username = $1 AND password= $2', [username, password], (error, results) => {
            if (error) {
                return response.status(500).json({ errors: { global: "Something went wrong" } });
            }
            return response.status(201).json('gir is basarlidir');
        })
    } else {
        response.status(400).json({ errors });
    }
}

const register = (request, response) => {
    const { errors, isValid } = validate(request.body);

    if(isValid) {
        const { username, password } = request.body;
        bcrypt.hash(password, 8, async (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            } 
            pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING * ', [username, hash], (error, results) => {
                if (error) {
                    return response.status(500).json({ errors: { global: "Something went wrong" } });
                }
                return response.status(201).json(results.rows);
            }) 
            
        })
    } else {
        response.status(400).json({ errors });
    }   
}

const validate = (data) => {
    let errors = {};
    if (data.username === '') errors.username = "Can't be empty";
    if (data.password === '') errors.password = "Can't be empty";
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
};

module.exports = {
   login,
   register
}