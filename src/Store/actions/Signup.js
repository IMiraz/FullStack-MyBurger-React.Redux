import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'


export const signupStart = () =>
        {
            return {
                type:actionTypes.SIGNUP_START

            };
        };

        export const signupSuccess = (signupData) =>
        {
            return {
                type:actionTypes.SIGNUP_SUCCESS,
                signupData:signupData
            };
        };

        export const signupFail = (error) =>
         {
            return {
                type:actionTypes.SIGNUP_FAIL,
                error:error
            };
        };

export const signup = (email, password) => {
    return dispatch => {
       dispatch(signupStart());
       const signupData = {
           email:email,
           password:password,
           returnSecureToken:true
       };
       axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6b0QEdi57X5XdwE1IySeuTobD0rwRO2g',signupData)
       .then(response => {
            console.log(response);
            dispatch(signupSuccess(response.data));
       })
       .catch(error => {
            console.log(error);
            dispatch(signupFail(error));
       })


    };

}






