import axios from 'axios';
import { APP_PORT, APP_URL } from 'react-native-dotenv';

const Api = axios.create({
    baseURL: `${APP_URL}:${APP_PORT}`,
});
console.log(APP_URL);

export default Api;
