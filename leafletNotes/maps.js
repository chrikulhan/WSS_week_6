//took code from mapsNotes.js:

// let metroAreaCenterCoordinates= [44.96, -93.2]
// let zoomLevel = 9
//
// let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

//Write a loop to extract the data here to get markers and websites on a leaflet map:
//reference for the array of 5 different college objects below: https://git.io/JUCvV
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function(collegeCampus){
    // console.log(collegeCampus)
    // console.log(collegeCampus.name)
    // console.log(collegeCampus.website)
    // console.log(collegeCampus.coordinates)
    let collegeMarker = collegeCampus.coordinates
    // console.log (collegeMarker)
    let collegeWebsite = collegeCampus.website
    // console.log(collegeWebsite)
    let collegeName = collegeCampus.name
    // console.log(collegeName)
})

