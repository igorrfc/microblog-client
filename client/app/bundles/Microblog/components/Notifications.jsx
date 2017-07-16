import React, { Component } from 'react'

import NotificationsList from './NotificationsList';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { openedNotifications: false };
  }

  handleClick() {
    this.setState({
      openedNotifications: !this.state.openedNotifications,
    });
  }

  renderNotificationsBadge() {
    const { user } = this.props;

    const notifications = user.notifications.reduce((acc, cur) => {
      if (!cur.visualized) { acc.push(cur); }
      return acc;
    }, []);

    return (
      <span className="badge red">{notifications.length}</span>
    );
  }

  renderNotifications() {
    const {
      user,
      railsProps,
      visualizeNotification,
    } = this.props;

    return (
      <NotificationsList
        railsProps={railsProps}
        notifications={user.notifications}
        visualizeNotification={visualizeNotification}
      />
    );
  }

  render() {
    const { user } = this.props;

    return(
      <div className={`notifications`}>
        <a className={`btn-icon`} onClick={this.handleClick.bind(this)}>
          <span className="glyphicon glyphicon-bullhorn"></span>
          { user && user.notifications.length > 0 ? this.renderNotificationsBadge() : null }
        </a>
        { this.state.openedNotifications ? this.renderNotifications() : null }
      </div>
    )
  }
}

export default Notifications;
