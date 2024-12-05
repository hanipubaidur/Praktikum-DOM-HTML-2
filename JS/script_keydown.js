// Praktikum 3
const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');

inputField.addEventListener('keydown', function(event) {
    displayText.textContent = "Karakter terakhir yang ditekan: " + event.key;
});