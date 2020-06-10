import axios from 'axios';
import { APP_PORT, APP_URL } from 'react-native-dotenv';



const Api = axios.create({
baseURL: `${APP_URL}:${APP_PORT}`

});

export default Api;