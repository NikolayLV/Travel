import React from "react";
import style from ".//Post.scss"
const Post = (props) => {
    return (
        <div className="post">
            <div className="post__left">
                <p className="post__name">{props.name}</p>
                <p className="post__city">{props.city}</p>
            </div>
            <div className="post__right">
                <p className="post__topic">{props.topic}</p>
                <p className="post__message">{props.message}</p>
            </div>


            {/*<button>Likes: {props.likes}</button>*/}
        </div>
    )
}

export default Post;