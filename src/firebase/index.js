import { initializeApp } from "firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyCM8xHE9RHHi98REfbZzuhY7rRfbzBHBZk",
    authDomain: "atmayogashala-3485c.firebaseapp.com",
    databaseURL: "https://atmayogashala-3485c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "atmayogashala-3485c",
    storageBucket: "atmayogashala-3485c.appspot.com",
    messagingSenderId: "961587176450",
    appId: "1:961587176450:web:9c07e30a5798d1dec5b31b",
    measurementId: "G-B1PXC0TV69",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export {firebaseApp}