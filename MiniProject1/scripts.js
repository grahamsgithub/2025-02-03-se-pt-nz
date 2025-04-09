function loginChecker() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "email@email.com" && password === "password") {
        alert("Login successful!");
        window.location.assign("index.html"); // Redirect to home.html
    } else {
        alert("Invalid username or password.");
    }
}