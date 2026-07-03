import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOoVUlJQg5G-trHwgX3sU0HW7pYfXIIjU",
  authDomain: "digitalbotsolutionsapp.firebaseapp.com",
  projectId: "digitalbotsolutionsapp",
  storageBucket: "digitalbotsolutionsapp.firebasestorage.app",
  messagingSenderId: "11076595811",
  appId: "1:11076595811:web:51bf20be34ea01e460c856",
  measurementId: "G-GQNK6WN6FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);

export default app;
