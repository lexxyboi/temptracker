// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDnAKRdk15rCOaiyK1S8m00YRHckpe8TU",
    authDomain: "cputemptracker.firebaseapp.com",
    projectId: "cputemptracker",
    storageBucket: "cputemptracker.appspot.com",
    messagingSenderId: "751453239310",
    appId: "1:751453239310:web:1d2665a64bd547c6c7245f",
    measurementId: "G-2WD18M3EHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
console.log(app);

// login functions
document.getElementById("login").addEventListener("click", function () {
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        swal({
            title: "Success!",
            text: user.email + " \n \n Login successful !",
            icon: "success",
            button: "OK",
        }).then(() => {
            window.location.replace("home.html");
        });
        // ...
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            swal("Error", errorMessage, "error");
        });
});

//For new registration
createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    swal({
        title: "Success!",
        text: "Account Created !",
        icon: "success",
        button: "OK",
    }).then(() => {
        window.location.replace("index.html");
    });
    // ...
})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
        swal("Error", errorMessage, "error");
    });		  		  