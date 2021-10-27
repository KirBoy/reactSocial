import {authAPI, getAuth, getUrlUser, securityAPI} from "../API/api";
import {setNewIsLoading, setUserProfile} from "./posts-reducer";
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                captcha: null
            }

        case SET_CAPTCHA:
            return {
                ...state,
                captcha : action.captcha,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        },
    }
}

export const setCaptcha = (captcha) => {
    return {
        type: SET_CAPTCHA,
        captcha,
    }
}

export const getAuthUser = () => async (dispatch) => {
    let response = await authAPI.getAuth()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}


export const getLoginUser = (email, password, rememberMe, captcha) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthUser());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
            return {[FORM_ERROR]: response.messages[0]}
        }
    }

    return {[FORM_ERROR]: response.messages[0]}
}

export const getLogoutUser = () => async (dispatch) => {

    let response = await authAPI.logout()
    if (response.resultCode === 0) {
        dispatch(getAuthUser());
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {

    let response = await securityAPI.getСaptcha();
    dispatch(setCaptcha(response.data.url))
}


export default authReducer;