import React from 'react';

import Notification from './Notification';

const NotificationsList = ({ notifications, railsProps, visualizeNotification }) => (
  <div className={`notifications-list`}>
    {
      notifications.map((notification, key) => {
        if (!notification.visualized) {
          return (
            <Notification
              key={key}
              notification={notification}
              railsProps={railsProps}
              visualizeNotification={visualizeNotification}
            />
          );
        }
      })
    }
  </div>
);

export default NotificationsList;
