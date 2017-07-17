import React from 'react';

import Post from './Post';

const PostsList = (props) => {
  const {
    activeProfile: { user: activeProfileUser },
    users: { logged: loggedUser }
  } = props;

  let userShown = loggedUser;

  if (activeProfileUser) {
    userShown = activeProfileUser;
  }

  if (!userShown || !userShown.posts) {
    return (<h3>Write something... ;*</h3>);
  }

  return (
    <div className={`block-component posts-list`}>
      <div className={`row`}>
        <div className={`col-md-12 col-xs-12`}>
          {
            userShown.posts.map((post, key) => (
              <Post post={post} key={key} />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default PostsList;
