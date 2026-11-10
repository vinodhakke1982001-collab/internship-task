function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("show");
}

function sendMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

    document.querySelector("form").reset();
}