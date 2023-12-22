// Store our API endpoint as queryUrl
const queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create markers whose size increases with magnitude and color with depth
function createMarker(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 0.5,
        opacity: 0.5,
        fillOpacity: 1
    });
}

// Define function to run for each feature in the features array.
// Give each feature a popup that describes the time and place of the earthquake.
function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Location:</h3> ${feature.properties.place}<h3> Magnitude:</h3> ${feature.properties.mag}<h3> Depth:</h3> ${feature.geometry.coordinates[2]}`);
}

// Perform a GET request to the query URL using D3
d3.json(queryUrl).then(function (earthquakeData) {
    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // Run the onEachFeature function for each piece of data in the array.
    const earthquakes = L.geoJSON(earthquakeData.features, {
        onEachFeature: onEachFeature,
        pointToLayer: createMarker
    });

    // Create the base layer
    const street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Create map
    const myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [street, earthquakes]
    });

    // Create the baseMaps and overlayMaps variables
    const baseMaps = {
        "Street Map": street
    };

    const overlayMaps = {
        "Earthquakes": earthquakes
    };

    // Create a control
    // Pass in baseMaps and overlayMaps
    // Add the control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Create legend
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [-10, 10, 30, 60, 90];
        var colors = ['#1a9850','#91cf60', '#d9ef8b','#fee08b','#fc8d59','#d73027' ]
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + colors[i] + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    // Add legend to map
    legend.addTo(myMap);
});

// Increase marker size based on magnitude
function markerSize(magnitude) {
    return magnitude * 5;
}

// Change marker color based on depth
function markerColor(depth) {
    return depth > 90 ? '#d73027' :
        depth > 70 ? '#fc8d59' :
            depth > 50 ? '#fee08b' :
                depth > 30 ? '#d9ef8b' :
                    depth > 10 ? '#91cf60' :
                        '#1a9850';
}
