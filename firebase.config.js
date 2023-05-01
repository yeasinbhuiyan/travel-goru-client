// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLpjkqa02vnVPzdy0UaXrtAWQwUBslRf4",
  authDomain: "travel-goru-7f2f7.firebaseapp.com",
  projectId: "travel-goru-7f2f7",
  storageBucket: "travel-goru-7f2f7.appspot.com",
  messagingSenderId: "359808752348",
  appId: "1:359808752348:web:6f45aae12ed3fa95d6f219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app