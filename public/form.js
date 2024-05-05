// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, 
// measurementId is optional 
var firebaseConfig = {
    apiKey: "AIzaSyBRIJjlfZbGaoKmyy_c9sib8_-sX1Rd63o",
    authDomain: "user-authenticate-da2bd.firebaseapp.com",
    projectId: "user-authenticate-da2bd",
    storageBucket: "user-authenticate-da2bd.appspot.com",
    messagingSenderId: "875093219290",
    appId: "1:875093219290:web:3be746fa201a27080b52e3",
    measurementId: "G-8L3PE3C93M"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Signup function 
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(
        email.value,
        password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
}

// SignIN function 
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch((e) => alert(e.message));
}

// SignOut 
function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

// Active user to homepage 
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
    } else {
        alert("No Active user Found");
    }
});
