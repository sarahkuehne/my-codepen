// Initialize the map
const map = L.map('map', {
    minZoom: 6,
    maxZoom: 10
}).setView([54.5, -2], 6);

// Set bounds for the UK
const ukBounds = [
    [49.9, -10.5], // Southwest corner (latitude, longitude)
    [60.9, 2.1]    // Northeast corner (latitude, longitude)
];
map.fitBounds(ukBounds);
map.setMaxBounds(ukBounds);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Regions with coordinates and sample content
const regions = [
    {
        name: "East Midlands",
        coords: [52.9, -1.5],
        popupContent: "<b>East Midlands</b><br>Subjects: Maths, Science<br><a href='#'>Learn More</a>"
    },
    {
        name: "East England",
        coords: [52.2, 0.1],
        popupContent: "<b>East England</b><br>Subjects: English, History<br><a href='#'>Learn More</a>"
    },
    {
        name: "London",
        coords: [51.5, -0.1],
        popupContent: "<b>London</b><br>Subjects: All Subjects<br><a href='#'>Learn More</a>"
    },
    {
        name: "North East",
        coords: [54.9, -1.5],
        popupContent: "<b>North East</b><br>Subjects: Geography, Art<br><a href='#'>Learn More</a>"
    },
    {
        name: "North West",
        coords: [53.5, -2.3],
        popupContent: "<b>North West</b><br>Subjects: PE, Music<br><a href='#'>Learn More</a>"
    },
    {
        name: "South East",
        coords: [51.3, -0.9],
        popupContent: "<b>South East</b><br>Subjects: Business, Economics<br><a href='#'>Learn More</a>"
    },
    {
        name: "South West",
        coords: [50.7, -3.8],
        popupContent: "<b>South West</b><br>Subjects: IT, Design<br><a href='#'>Learn More</a>"
    },
    {
        name: "West Midlands",
        coords: [52.5, -1.9],
        popupContent: "<b>West Midlands</b><br>Subjects: Science, Maths<br><a href='#'>Learn More</a>"
    },
    {
        name: "Yorkshire and the Humber",
        coords: [53.9, -1.5],
        popupContent: "<b>Yorkshire and the Humber</b><br>Subjects: Languages, Drama<br><a href='#'>Learn More</a>"
    }
];

// Add markers for each region with tooltips and popups
regions.forEach(region => {
    const marker = L.marker(region.coords).addTo(map);
    marker.bindTooltip(region.name, { permanent: false, direction: 'top' });
    marker.bindPopup(region.popupContent);
});
