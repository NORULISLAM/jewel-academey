// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1uz5uRbu6XJ46lSm5ifV_aEg_usektFg",
    authDomain: "jewel-academey.firebaseapp.com",
    projectId: "jewel-academey",
    storageBucket: "jewel-academey.appspot.com",
    messagingSenderId: "879545905947",
    appId: "1:879545905947:web:e791807f71f8d7d60119be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;