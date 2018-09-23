import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


export const authStart = () =>
        {
            return {
                type:actionTypes.AUTH_START

            };
        };

        export const authSuccess = (token, userId) =>
        {
            return {
                type:actionTypes.AUTH_SUCCESS,
                idToken:token,
                userId:userId
            };
        };

        export const authFail = (error) =>
         {
            return {
                type:actionTypes.AUTH_FAIL,
                error:error
            };
        };


        export const logout = () => {
            return {
                type:actionTypes.AUTH_LOGOUT,

            }

        }



        export const authCheckTimeout = (expirationTime) => {

            return dispatch => {
                setTimeout(() => {
               dispatch(logout())

                }, expirationTime * 1000);

            };

        }


export const auth = (email, password, isSignup) => {
    return dispatch => {
       dispatch(authStart());
       const signupData = {
           email:email,
           password:password,
           returnSecureToken:true
       };

let url= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6b0QEdi57X5XdwE1IySeuTobD0rwRO2g'
if(!isSignup) {
    url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6b0QEdi57X5XdwE1IySeuTobD0rwRO2g'
}

       axios.post(url,signupData)
       .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(authCheckTimeout(response.data.expiresIn))
       })
       .catch(error => {
            // console.log(error);
            dispatch(authFail(error.response.data.error));
       })


    };

}


export const setAuthRedirectPath = (path) => {
 return {
     type:actionTypes.SET_AUTH_REDIRECT_PATH,
     path:path

 }
}






