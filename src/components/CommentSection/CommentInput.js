// You do not need to do anything in this file
import React from 'react';

const CommentInput = props => {
  return (
    <form className="comment-form">
      <input
        type="text"
        placeholder="Add comment... "
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentInput;
