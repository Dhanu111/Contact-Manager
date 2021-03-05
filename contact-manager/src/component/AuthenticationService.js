class AuthenticationService{
    registerSuccessfullLogin(username,password){
        console.log('registerSuccessfullLogin');
        sessionStorage.setItem('authenticateUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticateUser'); 
    }
    isUserLoggedIn(){     
        let user = sessionStorage.getItem('authenticateUser');
        if(null == user) return false
        else return true
    }
}

export default new AuthenticationService ()