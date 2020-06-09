//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import usersData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  const[users] = useState(usersData);
  return (
    
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {users.map(user => {
        return <Post key={user.username} post = {user}/>
      })}
    </div>
  );
};

export default PostsPage;
