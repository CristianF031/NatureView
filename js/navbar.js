// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error cargando el navbar:", error));
});
