import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}

export const getDisabledBtn = (state) => {
    return state.usersPage.disabledBtn
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})