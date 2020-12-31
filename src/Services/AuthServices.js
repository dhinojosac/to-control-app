
export const login = (t,u) => {
        window.localStorage.setItem("auth", true);
        window.localStorage.setItem("token", t);
        window.localStorage.setItem("user", u);

};

export const isAuthenticated = () => {
        let at = window.localStorage.getItem("auth")
        if (  at == null) {
            console.log(at)
            return false;
        } else {
            console.log(at)
            return true;
        }
};

export const  logout = () => {

    window.localStorage.removeItem("auth")
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("user");
    
};

export const getToken = () => {
    if (  window.localStorage.getItem("token") != null) {
        return window.localStorage.getItem("token") 
    } 
};

export const getUser= () => {
    if (  window.localStorage.getItem("user") != null) {
        return window.localStorage.getItem("user") 
    } 
};
