import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8G0tLL7H6w9w3YqnjIGhbXAEMAiL9vNQ",
  authDomain: "mo-checklist-1af5a.firebaseapp.com",
  databaseURL:
    "https://mo-checklist-1af5a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mo-checklist-1af5a",
  storageBucket: "mo-checklist-1af5a.appspot.com",
  messagingSenderId: "631371770726",
  appId: "1:631371770726:web:c4188102090cd82e3cf6a7",
  measurementId: "G-VDMR617ED6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
