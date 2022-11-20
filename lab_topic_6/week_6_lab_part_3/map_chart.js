// 4a.Find the canvas
let canvas = document.querySelector('#map-chart')
//4b. Create a context:
let context = canvas.getContext('2d')

let shortListOfBridges = [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": "1298.4", "coordinates": [ 40.6066, -74.0447 ] },
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": "1280.2", "coordinates": [ 37.8199, -122.4783 ] },
    {"name": " Mackinac Bridge ", "location": " Mackinaw and St Ignace, MI ", "span": "1158.0", "coordinates": [ 45.8174, -84.7278 ] },
    {"name": " George Washington Bridge ", "location": " New York, NY and New Jersey, NJ ", "span": "1067.0", "coordinates": [ 40.8517, -73.9527 ] },
    {"name": "Tacoma Narrows Bridge", "location": " Tacoma and Kitsap, WA ", "span": "853.44", "coordinates": [ 47.2690, -122.5517 ] },]

// console.log(shortListOfBridges)
// console.log(shortListOfBridges[0].name)
// console.log(shortListOfBridges[0].location)
// console.log(shortListOfBridges[0].coordinates)

let names = []
let spans = []

shortListOfBridges.forEach(function(bridge){
    let bridgeName = bridge.name
    let bridgeSpan = bridge.span
    mapChart.data.name.push(names)
    mapChart.data.span.push(spans)
})
//
// console.log(names)
// console.log(spans)

//5. Make a chart object (where Chart has an uppercase C):
//5b. ctx is the context2
//5c. {} will hold many arguments:
let mapChart = new Chart(context, {
    //type of chart:
    type: 'bar',
    //data will be an object:
    data:{
        //    need labels (will be an array)
        labels: names,
            // ['Bridge 1', 'Bridge 2', 'Bridge 3', 'Bridge 4', 'Bridge 5'], //one label for each bar
        //    need data that will go on the chart, these names are important, another array:
        //    **can have many lines on the bar graph, this is only one bar per label:
        datasets: [{
            label: 'Span length',
            data: spans.sort(),
                // [1000, 800, 600, 400, 200],
            //    set some colors to the bars (this is an array:)
            backgroundColor: ['green', 'red', 'yellow', 'blue']
        }]
    },
    //If you want to address the y axes, add attributes AFTER the data closed curly brace here vvv:
    //all the words have to be exactly like this:
    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
})


