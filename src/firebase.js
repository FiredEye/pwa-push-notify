import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCl_g6IT5mUqRe_I2Rgj13xDK6bYFl8xaM",
  authDomain: "push-notify-7819b.firebaseapp.com",
  projectId: "push-notify-7819b",
  storageBucket: "push-notify-7819b.appspot.com",
  messagingSenderId: "1022731595960",
  appId: "1:1022731595960:web:6d76205360c3d97a7d044d"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const db = getFirestore();