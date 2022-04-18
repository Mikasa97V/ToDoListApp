import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './PopUpWindow.css';
 
class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
          default:
                  break;
      }
    }
}
render() {
    return (
      <div>
        <NotificationContainer/>
        </div>)
}}
export default Example;