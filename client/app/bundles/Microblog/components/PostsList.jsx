import React from 'react';

import Post from './Post';

const PostsList = (props) => {
  console.log(props);
  const { users: { logged } } = props;

  if (!logged) {
    return (<h3>Write something... ;*</h3>);
  }

  return (
    <div className={`block-component posts-list`}>
      <div className={`row`}>
        <div className={`col-md-12 col-xs-12`}>
          {
            logged.posts.map((post, key) => (
              <Post post={post} key={key} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default PostsList;
