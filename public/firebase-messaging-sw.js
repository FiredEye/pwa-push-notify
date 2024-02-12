importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCl_g6IT5mUqRe_I2Rgj13xDK6bYFl8xaM",
  authDomain: "push-notify-7819b.firebaseapp.com",
  projectId: "push-notify-7819b",
  storageBucket: "push-notify-7819b.appspot.com",
  messagingSenderId: "1022731595960",
  appId: "1:1022731595960:web:6d76205360c3d97a7d044d"
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

