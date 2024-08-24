import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionType";

export function startLogin () {
    return{
        type:LOGIN_START
    }
    
}

export function login(email, password){
    return (dispatch) => {
        const url = ""
        fetch(url);
    }
}
