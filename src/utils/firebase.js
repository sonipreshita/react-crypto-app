// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "*****",
//   authDomain: "*****",
//   databaseURL: "*****",
//   projectId: "*****",
//   storageBucket: "*****",
//   messagingSenderId: "*****",
//   appId: "*****",
//   measurementId: "*****",
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDgr17zRIw1dyAqWki9DR5yroyY36oG2PE",
//   authDomain: "my-react-app-c40f2.firebaseapp.com",
//   projectId: "my-react-app-c40f2",
//   storageBucket: "my-react-app-c40f2.appspot.com",
//   messagingSenderId: "153777421278",
//   appId: "1:153777421278:web:15ff2ba791874d4be27b4f",
//   measurementId: "G-G7CDL2SRQV"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAB9NqlMZXsDwZMBV5NDuaTSP_xcUXT6Kw",
    authDomain: "react-1f939.firebaseapp.com",
    databaseURL:"https://react-1f939-default-rtdb.firebaseio.com/",
    projectId: "react-1f939",
    storageBucket: "react-1f939.appspot.com",
    messagingSenderId: "785654782677",
    appId: "1:785654782677:web:962e5e20637116d9e4a05c",
    measurementId: "G-D2LVXXCXNY"
}  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);


