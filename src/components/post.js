import React from 'react';

const Post = ({message, author, date}) => {
  console.log(message, author, date);
  return (
    <div>
      {message} by {author} on {date.toString()}
    </div>
  );
};

export default Post;
