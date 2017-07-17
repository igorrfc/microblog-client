import React, { Component } from 'react';

import PostsForm from './PostsForm';
import PresentationProfile from './PresentationProfile';

class PostsHeader extends Component {
  renderPresentationProfile() {
    const {
      leaveProfile,
      activeProfile: { user: activeProfileUser }
    } = this.props;

    return (
      <PresentationProfile leaveProfile={leaveProfile} user={activeProfileUser} />
    );
  }

  renderPostsForm() {
    return (
      <PostsForm {...this.props} />
    );
  }

  render() {
    const { updatePostAttribute, activeProfile: { user: activeProfileUser } } = this.props;

    return(
      <div className={`block-component posts-header text-ce`}>
        { activeProfileUser ? this.renderPresentationProfile() : this.renderPostsForm() }
      </div>
    );
  }
}

export default PostsHeader;
