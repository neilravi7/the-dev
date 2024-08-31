import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILED, 
  AUTHENTICATE_USER, 
  LOGOUT_USER, 
  CLEAR_AUTH_STATE
} from "./actionType";

import { API_URL } from "../helpers/urls";
import { requestCreator } from "../helpers/utils";
import { getUser } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function successLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailed(errorMessage) {
  console.log("errorMessage: ", errorMessage);
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = API_URL.login();
    const requestOptions = requestCreator("POST", {
      email: email,
      password: password,
    });

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          // Handle different status codes
          if (response.status === 401) {
            throw new Error("Unauthorized: Invalid email or password");
          }
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        window.localStorage.setItem("access", data.access);
        window.localStorage.setItem("refresh", data.refresh);
        const { email, user_id, first_name, last_name } = getUser();
        const user = { email, user_id, first_name, last_name };
        dispatch(successLogin(user));
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(loginFailed(error.message));

        console.log('Resetting login state in 3 seconds...');

        setTimeout(() => {
            console.log('Resetting login state now...');
            dispatch(clearAuthState());
        }, 3000);
      });
  };
}

export function authenticateUser(user){
  return{
    type:AUTHENTICATE_USER,
    user
  }
}

export function logoutUser(){
  return{
    type:LOGOUT_USER
  }
}

export function clearAuthState(){
  return{
    type:CLEAR_AUTH_STATE,
  }
}

// fetch("http://127.0.0.1:8000/api/v1/users/login", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
