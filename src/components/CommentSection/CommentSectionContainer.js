// You will add code to this file
import React, {useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const {comments} = props
  console.log(comments);
  
  const[currentComments, changeComments] = useState(comments);

  const updateComments = event => {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {currentComments.map(comment => {
        return <Comment key={comment.username} comment={comment}/>
      })}
      <CommentInput onClick={updateComments}/>
    </div>
  );
};

export default CommentSection;
