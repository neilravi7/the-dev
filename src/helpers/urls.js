const API_ROOT = 'http://127.0.0.1:8000/api/v1'

export const API_URL = {
    login:() => `${API_ROOT}/users/login`,
    signUp:()=> `${API_ROOT}/users/signup`,
    fetchPost:() => `${API_ROOT}/posts`,
}