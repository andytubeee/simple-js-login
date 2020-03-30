function login() {
    let username = document.getElementById("txtUsername").value;
    let password = document.getElementById("txtPassword").value;
    var usernameInput = document.getElementById("txtUsername");
    let passwordInput = document.getElementById("txtPassword");

    if (username == "Admin" && password == "helloworld") {
        window.alert("Successfully Logged In!")
        usernameInput.value = "";
        passwordInput.value = "";
    }
    else {
        window.alert("Invalid Creditdential!")
    }

    //window.alert("Username: " + username + "\nPassword: " + password);
}

var passwordInput = document.getElementById("txtPassword");

passwordInput.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btnLogin").click();
    }
});