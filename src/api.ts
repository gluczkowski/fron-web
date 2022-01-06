import axios from "axios";

const API_URL = 'http://localhost:8080';

export function  fetchColaboradores(){
    return axios(`${API_URL}/api/colaborador`)
}

