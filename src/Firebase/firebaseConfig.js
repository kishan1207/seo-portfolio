// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsfE4pbtp1haHNQjBJJo8GM483ecrwvms",
    authDomain: "chandni-dave.firebaseapp.com",
    projectId: "chandni-dave",
    storageBucket: "chandni-dave.appspot.com",
    messagingSenderId: "1054219989287",
    appId: "1:1054219989287:web:10f1deb9a95ee0b17bb902",
    measurementId: "G-JVL9DDQ5VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);