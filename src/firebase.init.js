// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDV6-TLakyiYeH_6tW74FlcbappAsfx_g4",
    authDomain: "ema-john-simple-27f05.firebaseapp.com",
    projectId: "ema-john-simple-27f05",
    storageBucket: "ema-john-simple-27f05.appspot.com",
    messagingSenderId: "509820504410",
    appId: "1:509820504410:web:856ab059a205feb72c8b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;