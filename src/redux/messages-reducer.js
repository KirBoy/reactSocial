const initialState = {
    dialogs: [
        {id: 1, name: 'Sava'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Kirill'},
        {id: 6, name: 'Tamara'},
    ],
    messages: {
        message: [
            {id: 1, message: 'Hello my friend'},
            {id: 2, message: 'My name is Sasha\''},
            {id: 3, message: 'Nice to meet you'},
        ],
        messageText: '',
    }
};

const messagesReducer = (state = initialState, action) => {


    if (action.type === 'ADD-MESSAGE' && action.text !== '') {
        let newMessage = {
            id: 4,
            message: action.text,
        }
        return {...state, messages: {message: [...state.messages.message, newMessage], messageText: ''}};

    } else if (action.type === 'ON-MESSAGE-CHANGE') {

        return {...state, messages: {message: state.messages.message, messageText: action.text}};
    }

    return state;
}


export const updateMessageCreator = (text) => {

    return {
        type: 'ON-MESSAGE-CHANGE',
        text: text,
    }
}

export const addMessageCreator = (text) => {
    return {
        type: 'ADD-MESSAGE',
        text: text,
    }
}

export default messagesReducer;