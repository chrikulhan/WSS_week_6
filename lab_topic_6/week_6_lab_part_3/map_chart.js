// 4a.Find the canvas
let canvas = document.querySelector('#map-chart')
//4b. Create a context:
let context = canvas.getContext('2d')

//5. Make a chart object (where Chart has an uppercase C):
//5b. ctx is the context
//5c. {} will hold many arguments:
let chart = new Chart(context, {
    //type of chart:
    type: 'bar',
    //data will be an object:
    data:{
        //    need labels (will be an array)
        labels: ['Bridge 1', 'Bridge 2', 'Bridge 3', 'Bridge 4', 'Bridge 5'], //one label for each bar
        //    need data that will go on the chart, these names are important, another array:
        //    **can have many lines on the bar graph, this is only one bar per label:
        datasets: [{
            label: 'Span length',
            data: [1000, 800, 600, 400, 200],
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
