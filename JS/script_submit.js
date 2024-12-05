// Praktikum 4
const myForm = document.getElementById('myForm');
const nameField = document.getElementById('nameField');
const errorMessage = document.getElementById('errorMessage');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameValue = nameField.value.trim();
    if (nameValue === '') {
        errorMessage.textContent = 'Name field cannot be empty!';
    } else {
        errorMessage.textContent = '';
        alert('Form submitted successfully!');
        myForm.reset();
    }
});