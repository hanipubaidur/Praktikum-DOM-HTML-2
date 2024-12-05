// Latihan 4
const coordinates = document.getElementById('coordinates');

document.addEventListener('mousemove', function (event) {
  coordinates.textContent = `${event.clientX}, ${event.clientY}`;
});