import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDJwoICI3Vkmq5iwcUz7Joehrp7SXdB6mE",
  authDomain: "watanstaff-prod.firebaseapp.com",
  projectId: "watanstaff-prod",
  storageBucket: "watanstaff-prod.firebasestorage.app",
  messagingSenderId: "346578008533",
  appId: "1:346578008533:web:ae0d4d3d44ab1083b4e55c",
  measurementId: "G-VCMW8M0NMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);

export default app;
