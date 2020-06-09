import axios from 'axios';



const Api = axios.create({
    baseURL: 'http://192.168.100.108:3333'

});

export default Api;