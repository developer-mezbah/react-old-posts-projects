import React, { useContext } from 'react';
import { Link } from "react-router-dom";

const Post = (props) => {
    const {id, title, body} = props.postData
    return (
            <div className="post-item">
                <h3>Post Title : <span>{title}</span></h3>
                <span>Id : {id}</span>
                <p><small>{body}</small></p>
                <Link to={`/post-details/${id}`}>
                    <button>Continue reading...</button>
                </Link>
            </div>
    );
};

export default Post;