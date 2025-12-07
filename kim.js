// REGISTER VALIDATION
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass = document.getElementById("regPassword").value;
    let confirmPass = document.getElementById("regConfirmPassword").value;

    if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    alert("Account created successfully!");
    window.location.href = "login.html";
});

// LOGIN VALIDATION
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login successful (demo)");
});
