// import { useEffect } from "react";
// // import { messaging } from "./firebase";
// // import { getToken } from "firebase/messaging";
// // import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   // async function requestPermission() {
//   //   const permission = await Notification.requestPermission();
//   //   if (permission === "granted") {
//   //     // Generate Token
//   //     const token = await getToken(messaging, {
//   //       vapidKey:
//   //         "",
//   //     });
//   //     console.log("Token Gen", token);
//   //     // Send this token  to server ( db)
//   //   } else if (permission === "denied") {
//   //     alert("You denied for the notification");
//   //   }
//   // }

//   useEffect(() => {
//     // Req user for notification permission
//     // requestPermission();
//   }, []);
 
  
//   const requestNotificationPermission = () => {
//     // Check if the browser supports notifications
//     if ('Notification' in window) {
//       Notification.requestPermission().then((permission) => {
//         if (permission === 'granted') {
//           console.log('Notification permission granted');
//         } else {
//           console.warn('Permission for notifications denied');
//         }
//       });
//     } else {
//       console.warn('Notifications not supported in this browser');
//     }
//   };

//   const sendNotification = () => {
//     // Check if the browser supports notifications
//     if ('Notification' in window) {
//       // Check if the user has granted permission
//       if (Notification.permission === 'granted') {
//         // Create and show the notification
//         const notification = new Notification('Hello, Notification!', {
//           body: 'This is a sample notification.',
//         });

//         // You can also handle click events on the notification
//         notification.onclick = function () {
//           console.log('Notification clicked!');
//         };
//       } else {
//         console.warn('Permission for notifications not granted');
//       }
//     } else {
//       console.warn('Notifications not supported in this browser');
//     }
//   };

//   return (
//     <div>
//       <button onClick={requestNotificationPermission}>
//         Request Notification Permission
//       </button>
//       <button onClick={sendNotification}>Send Notification</button>
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted');
        } else {
          console.warn('Permission for notifications denied');
        }
      });
    } else {
      console.warn('Notifications not supported in this browser');
    }
  }, []);

  const sendNotification = () => {
    // Check if the browser supports notifications
    if ('Notification' in window) {
      // Check if the user has granted permission
      if (Notification.permission === 'granted') {
        // Create and show the notification
        const notification = new Notification('Hello, Notification!', {
          body: 'This is a sample notification.',
        });

        // You can also handle click events on the notification
        notification.onclick = function () {
          console.log('Notification clicked!');
        };
      } else {
        console.warn('Permission for notifications not granted');
      }
    } else {
      console.warn('Notifications not supported in this browser');
    }
  };

  return (
    <div>
      <button onClick={sendNotification}>Send Notification to iOS</button>
    </div>
  );
};

export default App;
