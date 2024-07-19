// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQAfivCYjvuADsCPcFgkWpH5bUXebrB4M",
  authDomain: "mern-auth-8b5f6.firebaseapp.com",
  projectId: "mern-auth-8b5f6",
  storageBucket: "mern-auth-8b5f6.appspot.com",
  messagingSenderId: "968809270416",
  appId: "1:968809270416:web:aca57d7d2958ff5e355c15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);