import axios from "axios";
import { BASE_ENDPOINT_LOGIN } from "../enviroments/Enviroments";


export default class LoginService {

    static BASE_ENDPOINT_LOGIN = BASE_ENDPOINT_LOGIN;

    checkLoging(user){
        return axios.post(BASE_ENDPOINT_LOGIN, user);
    }
    
}