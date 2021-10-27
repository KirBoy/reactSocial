import {getUrlUser, profileAPI} from "../API/api";
import {FORM_ERROR} from "final-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_STATUS = 'SET_STATUS';
const SET_NEW_PHOTO = 'SET_NEW_PHOTO';


const initialState = {
    post: [
        {id: 1, post: 'Hello guys!'},
        {id: 2, post: 'My first post'},
    ],
    profile: null,
    isLoading: false,
    status: '',
};

const postReducer = (state = initialState, action) => {
    if (action.type === ADD_POST && action.text === '') {
        return state
    }

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.text,
            };
            return {...state, post: [...state.post, newPost]}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_IS_LOADING:
            return {...state, isLoading: action.isLoading};

        case SET_STATUS:
            return {...state, status: action.status};

        case SET_NEW_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}};

        default:
            return state
    }
}


export const addNewPost = (text) => ({type: ADD_POST, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setNewIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const saveNewPhoto = (photo) => ({type: SET_NEW_PHOTO, photo})


export const setProfilePage = (userId) => {
    return (dispatch) => {
        dispatch(setNewIsLoading(true));
        getUrlUser(userId).then(response => {
            dispatch(setNewIsLoading(false));
            dispatch(setUserProfile(response.data));
        })
    }
}


export const setProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export const savePhoto = (Photo) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(Photo)
        if (response.data.resultCode === 0) {
            dispatch(saveNewPhoto(response.data.data.photos))
        }

    }
}

export const upDateProfile = (profileData) => async (dispatch, getState) => {

    const userId = getState().auth.userId
    let response = await profileAPI.updateProfile(profileData)

    let strContact = response.data.messages.map(i => i.substring(
        i.lastIndexOf(">") + 1,
        i.lastIndexOf(")")
    ))
   let  errorContact = strContact.join(', ');

    if (response.data.resultCode === 0) {
        dispatch(setProfilePage(userId))
    } else {
        if (response.data.resultCode === 10) {

            return {[FORM_ERROR]: response.data.messages[0]}

        }
    }
    return {[FORM_ERROR]: ' Invalid url format' + ' ' + errorContact}
}


export default postReducer;





