import React from 'react';

const Post = ({ post }) => {
  return (
    <div className={`post`}>
      <div className={`col-md-12 col-xs-12`}>
        <h3>{post.title}</h3>
      </div>
      <div className={`description col-md-12 col-xs-12`}>
        <p>{post.description}</p>
      </div>
    </div>
  )
};

export default Post;
