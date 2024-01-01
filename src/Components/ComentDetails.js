import React from 'react';

const ComentDetails = (props) => {
    const {name, postId, email, body, id} = props.commentData
    return (
        <>
            
            <div className="comment-section">
                <div className="img">
                    <img src={`https://picsum.photos/200/300?random=${id}`}alt="" />
                </div>
                <div className="content-section">
                    <h3>Name : {name}</h3>
                    <p>Post Id : {postId}</p>
                    <p>Email : {email}</p>
                    <p>Comments : {body}</p>
                </div>
            </div>
        </>
    );
};

export default ComentDetails;