import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/actionType";


const initialState = { 
    user:{},
    error:null,
    isLoggedIn:false,
    inProgress:false
}

export default function auth(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return{ 
                ...state, 
                inProgress:false,
            }
        
        case LOGIN_SUCCESS:
            return{ 
                ...state, 
                user:action.user,
                isLoggedIn:true,
                inProgress:false,
                error:null,
            }

        case LOGIN_FAILED:
            return{ 
                ...state, 
                inProgress:true,
                isLoggedIn:false,
                error:action.error,
        }
        default:
            return{
                ...state
            }
    }
}