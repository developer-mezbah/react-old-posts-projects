import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ComentDetails from './ComentDetails';
import { UserContext } from '../App';

const PostDetails = () => {
    const {postId} = useParams()
    const globalUser = useContext(UserContext)
    const NumPosetId = parseInt(postId)
    const [commentData, setCommentData] = useState([])

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => {
            const newData = data;
            setCommentData(newData)
         });
     },[]);
     
     const postItem = globalUser.find(pd => pd.id === NumPosetId)
    return (
        <div className='post-container'>
            <div className="post-item">{
                
            }
                <h3>Post Title : <span>{postItem?.title}</span></h3>
                <span>Id : {postItem && postItem.id}</span>
                <p>Content : <small>{postItem?.body}</small></p>
                {
                    commentData.map(cm => <ComentDetails commentData={cm} key={cm.id}/> )
                }
                <Link to={`/home`}>
                    <button style={{margin: '0 auto',display: 'block'}}>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PostDetails;