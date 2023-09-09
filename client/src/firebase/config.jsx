import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBuKuie8BQk8xtvVeyLwOdd0MrzUPmp2Y",
  authDomain: "spm2023-2dabe.firebaseapp.com",
  projectId: "spm2023-2dabe",
  storageBucket: "spm2023-2dabe.appspot.com",
  messagingSenderId: "342496046772",
  appId: "1:342496046772:web:f19a597ecf22d000a1f1e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);