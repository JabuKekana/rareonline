import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKWHqMpoIFfENfDuOZUlg4lWMes5VIK4w",
  authDomain: "shop-data-20f4d.firebaseapp.com",
  projectId: "shop-data-20f4d",
  storageBucket: "shop-data-20f4d.appspot.com",
  messagingSenderId: "49655823575",
  appId: "1:49655823575:web:fbbf4571e6103aacf88492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;