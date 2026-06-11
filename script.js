const map = L.map('map').setView([52.237049, 21.017532], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

document.getElementById('search-btn').addEventListener('click', () => {
    alert('Przycisk działa! Wpisany adres: ' + document.getElementById('address-input').value);
});
