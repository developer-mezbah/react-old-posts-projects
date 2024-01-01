import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import React, { createContext, useEffect, useState } from 'react';
import PostDetails from "./Components/PostDetails";
import NotMatching from "./Components/NotMatching";
export const UserContext = createContext()

function App() {
  const [postData, setPostData] = useState([])
  useEffect( () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        const newData = data.slice(0, 10)
        setPostData(newData)
      })
  }, [])
  return (
    <UserContext.Provider value={postData}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}/> 
          <Route exact path="/home" element={<Home></Home>}/>
          <Route exact path="/post-details/:postId" element={<PostDetails/>}/>
          <Route exact path="*" element={<NotMatching/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
