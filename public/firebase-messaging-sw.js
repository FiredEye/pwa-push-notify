importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
);

const firebaseConfig = {
 apiKey: "AIzaSyBu2emmod70NGOcDid_q81x3gP6FAW-Ro8",
  authDomain: "push-notify-b8795.firebaseapp.com",
  databaseURL: "https://push-notify-b8795-default-rtdb.firebaseio.com",
  projectId: "push-notify-b8795",
  storageBucket: "push-notify-b8795.appspot.com",
  messagingSenderId: "131374839398",
  appId: "1:131374839398:web:3fa637d133a5407c65dfa7",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
if(firebase.messaging.isSupported()){
  console.log('Browser supported!')

  messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });
}else{
  console.log('Browser not supported!')
}

