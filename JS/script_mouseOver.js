// Praktikum 2
const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', function() {
    message.textContent = "Mouse is over the button!";
});

button.addEventListener('mouseout', function() {
    message.textContent = "";
});