import React from "react";
import Post from "./Post/Post";
import style from ".//posts.scss"

const Posts = (props) => {
    let postElement = props.posts.map(post => <Post message={post.message} likes={post.likes} name={post.name} topic={post.topic} city={post.city}/>)
    let newPostElement = React.createRef();
    let newNameElement = React.createRef();
    let newTopicElement = React.createRef();
    let newCityElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let name = newNameElement.current.value;
        let topic = newTopicElement.current.value;
        let city = newCityElement.current.value;
        props.updateNewPostText(text, name, topic, city);
    }
    return (
        <div className="posts__container">
            <h3>My posts</h3>
            <div className="posts__creator">
                <div className="inputs">
                    <div className="input__block1">
                        <div className="input-group">
                            <label className="label">Write your name</label>
                            <input onChange={onPostChange} type="text" value={props.newNameText} ref={newNameElement}  className="input"/>
                        </div>

                        <div className="input-group">
                            <label className="label">Topic</label>
                            <input onChange={onPostChange} type="text" value={props.newTopicText} ref={newTopicElement} className="input"/>
                        </div>
                    </div>

                    <div className="input__block2">
                        <div className="input-group">
                            <label className="label">City</label>
                            <input onChange={onPostChange} type="text" value={props.newCityText} ref={newCityElement}  className="input"/>
                        </div>
                    </div>




                    <div className="input-group">
                        <label className="label">Write your review!</label>
                        <textarea onChange={onPostChange} className="input" value={props.newPostText} ref={newPostElement}>Post</textarea>
                    </div>



                    {/*<input onChange={onPostChange} type="text" value={props.newNameText} ref={newNameElement}/>*/}
                    {/*<input onChange={onPostChange} type="text" value={props.newTopicText} ref={newTopicElement}/>*/}
                    {/*<input onChange={onPostChange} type="text" value={props.newCityText} ref={newCityElement}/>*/}
                    {/*<textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}>Post</textarea>*/}
                </div>
                <div className="button">
                    <button onClick={addPost}>Post</button>
                </div>
            </div>




            {postElement};
        </div>
    )
}

export default Posts;