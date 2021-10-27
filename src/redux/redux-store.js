import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./posts-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: postReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;