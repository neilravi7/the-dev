export function requestCreator (requestMethod, requestBody) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(requestBody); // expecting object { }
    const requestOptions = {
        method: requestMethod, // GET, POST, PUT, DELETE 
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
    return requestOptions;
}

export function getAccessToken(){
    return window.localStorage.getItem('access');
};


// Retrieve Player refresh token
export function getRefreshToken() {
    return window.localStorage.getItem('refresh');
};


// Decode User Token
export function getUser() {
    const userInfo = window.localStorage.getItem('access');
    if (userInfo) {
        const [, payload,] = userInfo.split('.');
        const decoded = window.atob(payload);
        return JSON.parse(decoded);
        
    }
    return undefined;
};