import React from 'react';

import PostsForm from './PostsForm';

const PostsHeader = (props) => {
  const { updatePostAttribute } = props;

  return (
    <div className={`block-component posts-header text-ce`}>
      <PostsForm {...props} />
    </div>
  )
};

export default PostsHeader;
