// 4.create a variable that shows where in the world we are:
//needs to things:
// a. where
// b. how far are you zoomed in?
// c. tiles (map background) -The map needs tiles – the map background
// showing the roads, buildings, rivers, labels….

//where: (twin cities metro)
//configured the map to be centered on the twin cities metro area:
//[latitude(north-south, longitude (east-west)]
let metroAreaCenterCoordinates= [44.96, -93.2]

//what if you adjust the latitude and longitude:
//centers around the island of Japan
// let metroAreaCenterCoordinates= [35, 139]
//need to also change the zoom level to see all of the country:
// let zoomLevel = 6


//set zoom level: (start at 1- whole world, max zoom is 20 a few city blocks)
// let zoomLevel = 9

//what happens if you change the zoom level to 11? (closer view)
// let zoomLevel = 11

//what happens if you set zoom level to 5? (zoom out)
// let zoomLevel = 5

//what happens if you zoom to 1? (zoom out more)
// let zoomLevel = 1

//back to the original value:
let zoomLevel = 9


//create the map:
//check out the leaflet .js file has some automatic things in it:
//(https://unpkg.com/leaflet@1.5.1/dist/leaflet.js)
//L is a variable found in the above package:
//needs one argument (the name of the div you are going to draw the map in:
//NOT hashtag, just college-map
//will tell leaflet where to draw the map on the page.
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

//     video 6: <!--Tiles are things that remain the same on a map:
//     rivers, roads, boundaries between counties, etc.
//
// **Blue upside down drops are markers.
// **Circular marker that outlines the entire metro city boundary. -->
//
// <!--THINGS ALREADY DONE:-->
// <!--
//     a. have a div in the body with name: "Where are Minnesota Colleges
// b. have javascript with maps.js, where the height of the div so
// it is greater than zero, so it's visible.
// c. have a stylesheet (css) link
//
// Future work:
//     **CSS file and html file WON'T need to be modified.
// **will work in map.js to draw the maps
// -where in the world is the map looking at
// -what annotations does that map have?
//     -->
//Several ways to get map tiles:
// mapbox: (docs.mapbox.com/vector-tiles/reference/)
//stamen: (maps.stamen.com/#terrain/12/37.7707/-122-3783)
//open street map: openstreetmap.org/#map=5/41.434/-100.965

//-Copy and paste the code from tile_layer_open_street_map.js
// to the end of your script https://git.io/JUCvV
//copy the js vv from the above link^^:

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //l is the leaflet object.
    //.tilelayer is setting the tile layer
    //leaflet will use the above url to request from openstreetsmap to request the correct images.

    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//    who has created the map = attribution.
}).addTo(map);
//tells leaflet to add a tile layer to your map.


//*************************separate college inputs begin*****

// //add a marker for Minneapolis College:
// //make an array with MCTC coordinates:
// let mctcCoordinates = [44.9724, -93.2844] //can find this on google-maps
//
// //make a marker:
// // let mctcMarker = L.marker(mctcCoordinates).addTo(map)
// //add a pop-up to a marker to give it identifying characteristics
// // (add in .bindPopup('string goes here'(Minneapolis College) before addTo.:
// // let mctcMarker = L.marker(mctcCoordinates)
// //     .bindPopup('Minneapolis College')
// //     .addTo(map)
// //could write HTML in the markers:
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)
//
// //add another marker for St. Paul College:
// let stPaulCoordinates = [44.9483, -93.1099]
// // let stPaulMarker = L.marker(stPaulCoordinates).addTo(map)
//
// //Add a popup and website to St. Paul college's marker as well:
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('St. Paul College<br><a href="https://www.saintpaul.edu/">Website</a>')
//     .addTo(map)
//
// /*Other types of markers you can draw on your maps:
// -draw polygons, shapes, angles (check out leaftlet's website: https://leafletjs.com/reference.html)
// */
//
// //draw a circle to the map around the twin cities metro area:
// // let metroAreaCircle = L.circle(metroAreaCenterCoordinates)
// //     .bindPopup('Twin Cities')
// //     .addTo(map)
// //results in a *tiny* blue circle in the center of the map, not useful.
//
// //Need to do more customization of circle:
// //add a second attribute: an object {}, use to set the properties of the circle:
// // let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
// //         // color: 'green', //can use any css color
// //         color: 'red',
// //         radius: 30000,  //meters
// //         // fillOpacity: 0.2 //how opaque it is. if set to 1 it's a solid circle.
// //         // if the opacity is set to 0, it's completely see-through.
// //         // fillOpacity: 0.1 //more faint
// //         // fillOpacity: 1 //completely filled in.
// //         //back to a rational opacity value:
// //         fillOpacity: 0.1
// //     } )
// //     .bindPopup('Twin Cities')
// //     .addTo(map)
//
// //add a bindPopUp to describe what's in the circle:
// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//     // color: 'green', //can use any css color
//     color: 'red',
//     radius: 30000,  //meters
//     // fillOpacity: 0.2 //how opaque it is. if set to 1 it's a solid circle.
//     // if the opacity is set to 0, it's completely see-through.
//     // fillOpacity: 0.1 //more faint
//     // fillOpacity: 1 //completely filled in.
//     //back to a rational opacity value:
//     fillOpacity: 0.1
// } )
//     .bindPopup('Twin Cities Metro Area<br><a href="https://en.wikipedia.org/wiki/Twin_cities">Wikipedia Link</a>')
//     .addTo(map)
//
// //Clara's reference: https://claraj.github.io/week5-examples/leaflet_maps/hello_leaflet_maps.html
//
// /* Your turn: Draw a marker for Normandale College
// Add a popUp that has a working link to their website
//  */
//
// let normandaleCoordinates = [44.8297, -93.3312]
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale College<br><a ref="https://www.normandale.edu/">Website</a>')
//     .addTo(map)
//

//*************************separate college inputs ends*****

//Write a loop to extract the data here to get markers and websites on a leaflet map:
//reference for the array of 5 different college objects below: https://git.io/JUCvV
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

//stopped video 6, 19:38




