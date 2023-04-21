import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text, name, topic, city) => {
        let action = updateNewPostTextActionCreator(text, name, topic, city);
        props.store.dispatch(action);
    }

    return (
        <Posts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} newNameText={state.profilePage.newNameText} newCityText={state.profilePage.newCityText} newTopicText={state.profilePage.newTopicText}/>
    )
}
export default PostsContainer;