// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFUQBSSsbmvOygybZKuMex1isMshgs-xg",
  authDomain: "login-13b4a.firebaseapp.com",
  projectId: "login-13b4a",
  storageBucket: "login-13b4a.appspot.com",
  messagingSenderId: "605193416695",
  appId: "1:605193416695:web:3a68c2564c6708565608f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const submit =  document.getElementById('submit');
submit.addEventListener("click", (event)=>{
event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    // ...
    alert("creating account")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });

})