// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { collection, getFirestore} from "firebase/firestore"


import { 
  getAuth
} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBc27M5YYPnttiUEpuG4GDWE7nn74gi_Iw",
  authDomain: "minshop-c8dc4.firebaseapp.com",
  projectId: "minshop-c8dc4",
  storageBucket: "minshop-c8dc4.appspot.com",
  messagingSenderId: "482863752362",
  appId: "1:482863752362:web:b31ad18c973b89910e1cd3",
  measurementId: "G-7ZKWD36LYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const auth = getAuth()


export const productsRef = collection(db,"products");
export const usersRef = collection(db,"users");
export const storesNameRef = collection(db,"storesName");
export const storesRef = collection(db,"stores");
export const orderRef = collection(db,"orders");
export const pagesRef = collection(db,"pages");