import axios from 'axios';

export default function setAuthorizationToken(token) {
    // token is avaliable
    // to each request the token is added
    if (token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // delete the header if token is not avaliable
        delete axios.defaults.headers.common['Authorization'];
    }
}


