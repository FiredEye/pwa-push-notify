importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCmW6Isd1XfaBOpxsp0or-mTIx0pLEijMA",
  authDomain: "push-notify-b651d.firebaseapp.com",
  projectId: "push-notify-b651d",
  storageBucket: "push-notify-b651d.appspot.com",
  messagingSenderId: "867556559896",
  appId: "1:867556559896:web:6c58b0f6335f929377c76d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

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
