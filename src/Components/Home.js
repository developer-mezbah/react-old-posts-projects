import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import Post from './Post';
const Home = () => {
    const postData = useContext(UserContext)
    return (
        <>
            <div className='post-container'>
                <h1 style={{textAlign: 'center'}}>All post is Here</h1>
                {
                   postData.map( (postItem, index) => <Post postData={postItem} key={index}></Post>)
                }
            </div>
        </>
    );
};

export default Home;