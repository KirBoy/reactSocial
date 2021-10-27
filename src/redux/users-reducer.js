import {getStatusFollow, getUsers} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_NEW_PAGE = 'SET_NEW_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_STATUS_BTN = 'SET_STATUS_BTN';

const initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isLoading: true,
    disabledBtn: [],
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log(u)
                        return {...u, followed: true};
                    }
                    return u;
                }),
            }

        case SET_USERS:
            console.log(action)
            return {...state, users: [...action.users]};

        case SET_NEW_PAGE:
            console.log(action)

            return {...state, currentPage: action.page};

        case SET_TOTAL_USERS_COUNT:
            console.log(action)
            return {...state, totalUsersCount: action.count};

        case SET_IS_LOADING:
            console.log(action)
            return {...state, isLoading: action.isLoading};

        case SET_STATUS_BTN:
            console.log(action)
            return {
                ...state,
                disabledBtn: action.status ? [...state.disabledBtn, action.userId] : [state.disabledBtn.filter(id => id !== action.userId)]
            };

        default:
            return state;
    }


}


export const setNewUsers = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setNewPage = (page) => ({type: SET_NEW_PAGE, page})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const setNewIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const statusBtn = (status, userId) => ({type: SET_STATUS_BTN, status, userId})


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setNewIsLoading(true));
        dispatch(setNewPage(currentPage));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(setNewUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setNewIsLoading(false));
        })
    }
}


export const getFollow = (type, usersId) => {

    return (dispatch) => {
        switch (type) {
            case true:
                dispatch(statusBtn(true, usersId));
                getStatusFollow(true, usersId).then(response => {

                    if (response.resultCode === 0) {
                        dispatch(unfollowAC(usersId));
                        dispatch(statusBtn(false, usersId));
                    }
                })
                return;
            case false:
                dispatch(statusBtn(true, usersId));
                getStatusFollow(false, usersId).then(response => {

                    if (response.resultCode === 0) {
                        dispatch(followAC(usersId));
                        dispatch(statusBtn(false, usersId));
                    }
                })
        }
        return;
    }
}


export default usersReducer;





