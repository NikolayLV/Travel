const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    posts:[
        {id: 1, message: 'India is a diverse and fascinating country with a rich history, vibrant culture, and stunning landscapes.\n' +
                '\n' +
                'From the bustling cities like Delhi, Mumbai, and Kolkata, to the serene backwaters of Kerala, India offers a unique and memorable travel experience for all kinds of travelers. The country is also home to many UNESCO World Heritage Sites, such as the Taj Mahal, the ancient city of Hampi, and the Ajanta and Ellora Caves.', name: "Alex", topic: "A Wonderful Journey to India", city: "Mumbai, India", likeCount: 2},
        {id: 2, message: 'Europe is a home to stunning natural landscapes like the Swiss Alps, the Norwegian fjords, and the beaches of the Mediterranean coast. The European countries are well-connected through a vast network of trains, making it easy to travel across the continent.\n' +
                '\n' +
                'The art, architecture, and cuisine in each of these cities reflect their unique cultural heritage., are popular tourist attractions, offering visitors a glimpse of the rich history and artistry of these cities.', name: "Alex", topic: "A Solo Trip Across Europe", city: "Barcelona, Spain", likeCount: 20},
        {id: 3, message: 'I recently spent two weeks in Nepal and it was one of the most memorable trips of my life. The people were incredibly friendly and welcoming, and I was amazed by the beauty of the natural landscape. The highlight of my trip was trekking in the Himalayas. The views were simply breathtaking and the experience of reaching the Everest Base Camp was truly unforgettable.\n' +
                '\n' +
                'I also spent a day in Chitwan National Park.', name: "Alex", topic: "11 Best Places to visit in Nepal", city: "Kathmandu, Nepal", likeCount: 12},
    ],
    newPostText: '',
    newNameText: '',
    newTopicText: "",
    newCityText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                name: state.newNameText,
                topic: state.newTopicText,
                city: state.newCityText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            state.newNameText = '';
            state.newTopicText = '';
            state.newCityText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            state.newNameText = action.newName;
            state.newTopicText = action.newTopic;
            state.newCityText = action.newCity;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text, name, topic, city) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
        newName: name,
        newTopic: topic,
        newCity: city
    }
}

export default profileReducer;