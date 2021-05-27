/**
 * Author: Lakshman Veti
 * Type: Service
 * Objective: Serve common functionality for auth/login
 * Associated Route/Usage: "#/login"
*/

import config from '../config';
import commonService from './commonService';

const authService = {
    login,
    logout,
    clear,
    hasLoggedIn,
    throwBack,
    getUser
};

export default authService;


/**
   * User login method
   * @userCode : string
   * @password : string
   * @remeber  : boolean
*/
function login(username, password, remember) {
    return commonService.restCall({
        url: `${config.apiUrl.node}/user/login`,
        method:'POST',
        data:{username,password, authType:config.authType}
    });
}



/**
   * User logout method, removes user object from browser localstorage and reloads page
   * @void
*/
function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    //window.location.reload();
    window.location = '#/home'
}

/**
   * Removes user object from browser localstorage
   * @void
*/
function clear() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

/**
   * Returns flag if the user is already logged in
   * @void
*/
function hasLoggedIn(){
  return localStorage.getItem('user')?true:false;
}

/**
   * Removes user object from browser localstorage and redirects to login page
   * @void
*/
function throwBack(){
    if(!localStorage.getItem('user')){
        window.location = '#/login';
    }
}


function getUser(){
    if(localStorage.getItem('user'))
        return JSON.parse(localStorage.getItem('user'));
    return null;    
}

