const firebaseConfig = {
    apiKey: "AIzaSyAl2X6UvoXbUg2BoHSrBppvWCnTgJFCeRI",
    authDomain: "chat-app-86d36.firebaseapp.com",
    databaseURL: "https://chat-app-86d36-default-rtdb.firebaseio.com",
    projectId: "chat-app-86d36",
    storageBucket: "chat-app-86d36.appspot.com",
    messagingSenderId: "740828201319",
    appId: "1:740828201319:web:4c46170089bc00e5776fc2",
    measurementId: "G-531W7122LR"
  };
  
  // Initialize Firebase
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     

    //End code
    });});}
getData();
