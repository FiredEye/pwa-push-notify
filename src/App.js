import { messaging, db } from "./firebase";
import { getToken} from "firebase/messaging";
import "./App.css";
import { collection, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
function App() {
  async function sendToken() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const localToken = localStorage.getItem("token");

      // If 'localToken' is present, return from the function
      if (localToken) {
        console.log("Token already generated");
        return;
      }

      // Generate a new one and set it in localStorage
      const newUid = uuidv4();

      try {
        // Generate Token
        const token = await getToken(messaging, {
          vapidKey:
            "BOEIwKmhzOtilrPFggR2PA2laWtE0Zjj2YH2XlBISv8KMCAoen9fP30j-6FGozJ5MqcKDg_CqBIEPN0C5sFmrT0",
        });
        localStorage.setItem("token", token);

        console.log("Token Gen", token);

        // Save this token to server (db)
        await setDoc(doc(collection(db, "devices"), newUid), {
          uid: newUid,
          deviceToken: token,
        });

        console.log("Token stored successfully");

        // // Delete Token
        // await deleteToken(messaging);
        // console.log("Token unsubscribed successfully");
      } catch (error) {
        console.error("Error generating or unsubscribing token:", error);
      }
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("permission granted!");

      // Send this token  to server ( db)
    } else if (permission === "denied") {
      console.log("You denied for the notification");
    }
  }
  const previewNotification = () => {
    // Check if the browser supports notifications
    if ("Notification" in window) {
      // Check if the user has granted permission
      if (Notification.permission === "granted") {
        // Create and show the notification
        const notification = new Notification("Hello, Notification!", {
          body: "This is a sample notification.",
        });

        // You can also handle click events on the notification
        notification.onclick = function () {
          console.log("Notification clicked!");
        };
      } else {
        console.warn("Permission for notifications not granted");
      }
    } else {
      console.warn("Notifications not supported in this browser");
    }
  };

  return (
    <div>
      <button onClick={requestPermission}>
        Request Notification Permission
      </button>
      <button onClick={sendToken}>Send Token</button>
      <button onClick={previewNotification}>Preview Notification</button>
    </div>
  );
}

export default App;
