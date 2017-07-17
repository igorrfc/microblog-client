import React, { Component } from 'react';
import axios from 'axios';

class Notification extends Component {
  visualizeNotification() {
    const {
      notification,
      railsProps: { authenticity },
      visualizeNotification,
    } = this.props;

    axios.put('/users/' + notification.user_id + '/notifications/' + notification.id, {
        notification: {
          visualized: true,
        },
        access_token: authenticity,
      }
    ).then(() => visualizeNotification(notification.id));
  }

  render() {
    const { notification } = this.props;
    return (
      <a className={`notification col-md-12 col-xs-12`} onClick={this.visualizeNotification.bind(this)}>
        <span className={`font-default bold`}>{notification.message}</span>
      </a>
    )
  }
}

export default Notification;
