import React, { Component } from 'react';
import axios from 'axios';
import { contains } from 'ramda';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    const { user, logged } = props;

    let loggedUserFolloweesId = logged.followees.map((followee) => followee.id);
    loggedUserFolloweesId.push(logged.id);

    this.state = { followed: contains(user.id, loggedUserFolloweesId) };
  }

  followUser() {
    const {
      logged,
      user,
      followUser,
    } = this.props;

    axios.post('/users/follow', {
      id: user.id,
      follower_id: logged.id,
    }).then(() => {
      followUser(user);
      this.setState({ followed: true });
    });
  }

  showFollowButton() {
    return (
      <div className={`col-md-2 col-xs-2`}>
        <button type={`button`} className={`btn`} onClick={this.followUser.bind(this)}>
          <span className={`glyphicon glyphicon-plus font-default`}></span>
        </button>
      </div>
    );
  }

  render() {
    const { user } = this.props;

    return (
      <div className={`search-result`}>
        <div className={`col-md-12 col-xs-12`}>
          <div className={`col-md-4 col-xs-4`}>
            <span className="picture glyphicon glyphicon-user"></span>
          </div>
          <div className={`details col-md-4 col-xs-4`}>
            <span className={`font-default bold`}>{user.name}</span>
            <p className={`font-tiny font-mid-grey`}>@{user.nickname}</p>
          </div>
          { this.state.followed ? null : this.showFollowButton() }
        </div>
      </div>
    );
  }
}

export default SearchResult;
