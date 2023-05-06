// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNdYmK7nnQ9ypCYLZOnurlVloQJe59y0",
  authDomain: "clone-89424.firebaseapp.com",
  projectId: "clone-89424",
  storageBucket: "clone-89424.appspot.com",
  messagingSenderId: "566699038808",
  appId: "1:566699038808:web:5cf36e8b0f6ef996ce522d",
  measurementId: "G-GT03PMMWLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);