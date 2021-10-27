// import postReducer from "./posts-reducer";
// import messagesReducer from "./messages-reducer";
//
// let store = {
//     _state: {
//         pageDialogs: {
//             dialogs: [
//                 {id: 1, name: 'Sava'},
//                 {id: 2, name: 'Sveta'},
//                 {id: 3, name: 'Masha'},
//                 {id: 4, name: 'Dasha'},
//                 {id: 5, name: 'Kirill'},
//                 {id: 6, name: 'Tamara'},
//             ],
//             messages: {
//                 message: [
//                     {id: 1, message: 'Hello my friend'},
//                     {id: 2, message: 'My name is Sasha\''},
//                     {id: 3, message: 'Nice to meet you'},
//                 ],
//                 messageText: '',
//             }
//         },
//         pageProfile: {
//             post: [
//                 {id: 1, post: 'Hello guys!'},
//                 {id: 2, post: 'My first post'},
//             ],
//             newPostText: 'new Post',
//         }
//     },
//     _render() {
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.pageProfile = postReducer(this._state.pageProfile, action);
//         this._state.pageDialogs = messagesReducer(this._state.pageDialogs, action);
//         this._render(this._state);
//     },
//     subscribe(observer) {
//         this._render = observer;
//
//     }
// }
//
//
// window.store = store;
// export default store;