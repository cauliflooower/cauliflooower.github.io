const state = {
    profilePage: {
        post: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: "It's my first post", likesCount: 23 },
        ]
    },

    messagesPage: {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Max" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sacha" },
            { id: 5, name: "Andrey" },
        ],
        
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello" },
            { id: 3, message: "Yow are you?" },
            { id: 4, message: "Yo" },
            { id: 5, message: "I'm tired" },
        ]
    }
}

export default state;