// Praktikum 4
document.getElementById('addItemButton').addEventListener('click', function(event) {
    event.preventDefault();

    const itemField = document.getElementById('itemField');
    const itemText = itemField.value.trim();

    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        document.getElementById('itemList').appendChild(li);
        itemField.value = '';
    } else {
        alert('Please enter an item.');
    }
});