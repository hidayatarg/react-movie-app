const pool = require('./pool');
const bcrypt = require('bcryptjs');
const { tokenCreator } = require('./tokenCreator');

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



const login = (request, response) => {
    const { errors, isValid } = validate(request.body);
    if (isValid) {
        const { username, password } = request.body;
        pool.query('SELECT * FROM users WHERE username = $1', [username], (error, result) => {
            if (error) {
                return response.status(500).json({ errors: { global: "Something went wrong" } });
            }
            if (result.rows.length > 0){
                const dbPassword = result.rows[0].password;  
                bcrypt.compare(password, dbPassword, (err, results) => {
                    if (err) {
                        return response.status(401).json({
                            success: false
                        })
                    }
                    if (results) {
                        let token = tokenCreator(result.rows[0].id, result.rows[0].username, '24h')
                        return response.status(200).json({
                            success: true,
                            token: token,
                            // roles: '',,
                            message: 'Sign-in Successfully'
                        });
                    }
                })      
            }
            else {
                return response.status(401).json({
                    success: false,
                    message: 'User is not avaliable'
                })
            }
            
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