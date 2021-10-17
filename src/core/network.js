const axios = require('axios');
const apiUrl = 'https://blog-uh.herokuapp.com/api/'
// const apiUrl = 'http://localhost:81/api/'


export default {

    get(url , params ) {

          return  axios.get(apiUrl + url , {params} )
        },

    put(url, data ) {

        return axios.put(apiUrl + url , data
        );
    },

    post(url ,data ){

        return axios.post(apiUrl+ url , data);
    },

    delete(url) {
        return axios.delete(apiUrl+ url );
    }
             
}

