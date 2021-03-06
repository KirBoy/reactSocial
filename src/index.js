import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 1000)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')
);


reportWebVitals();

