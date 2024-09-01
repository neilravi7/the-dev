import { UPDATE_USER_DETAILS } from "./actionType";
import { API_URL } from "../helpers/urls";
import { requestCreator } from "../helpers/utils";

export function userDetails(user){
    return{
        type:UPDATE_USER_DETAILS,
        user,
    }
}

export function updateUser(userId, userData){
    return(dispatch) => {
        const url = API_URL.updateUserDetails(userId);
        console.log("API_URL: ", url);
        const requestOptions = requestCreator(
            "PUT", 
            userData,
            true // needs authentication add token in request
        );
        fetch(url, requestOptions)
        .then((response) => {
            if (!response.ok) {
                // Handle different status codes
                if (response.status === 400) {
                  throw new Error("Bad Request: Invalid request parameters.");
                }
                
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            dispatch(userDetails(data));
        })
        .catch((error) => {
            console.error(error.message);
        });
    }
}