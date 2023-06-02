import axios from "axios";
import { BASE_ENDPOINT_SALTING } from "../enviroments/Enviroments";


export default class LoginService {

    static BASE_ENDPOINT_SALTING = BASE_ENDPOINT_SALTING;

    getSalting(userName){
        return axios.get(BASE_ENDPOINT_SALTING + "?userName="+userName);
    }
}