//code start from here:
// https://raw.githubusercontent.com/claraj/week5-examples/master/chart_js/expenses_template/expenses_chart.js

/* Input elements */
//These find the 3 input elements:

let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and context  */
//Finds the chartCanvas and creating a context object:
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')

// 1. TODO create chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [ //array
            {
                data:[],
                backgroundColor: []

            }
        ],
        labels:[]
    },
    options:{} //fill in things later when the other code is written
})


// 4a. TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like
//array of colors, will be used to add to the donut:
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]
//How many colors do we need?
//**unknown because the number of inputs is unknown.
//-We have 6 listed above, so the first 6 inputs will be in the array above and then it will cycle back to
//the first listed in the array.

//This is called from the addExpenseButton event listener:
//the name (below vvv) will be added to the labels and the amount will be added to the data:
function addExpenseToChart(name, amount) {

    // 2. TODO add expense to chart
    expenseChart.data.labels.push(name) //will push into the labels array in the chart object
    expenseChart.data.datasets[0].data.push(amount) //will push into the data array above in the chart ojbect
//   ^^^tricky because the  data:[] *array* is an *object* within another *array* [],
//    so the zero object {} is labeled as [0] when we are trying to
//    dig into it, and then .data.push(amount because data is the name of the
//    array within the object.

//     4b.work on having the user input data be from the chartColors (above)

    //4b2.create a color counter, so we know when we have gone
    //through all the colors in the "chartColors"array (above)
    //This "colorCount" will start at zero by default:
    let colorCount = expenseChart.data.datasets[0].backgroundColor.length

    //4b1.create a color variable
    //use the modular operator (%)--- like division, but it only gives you the remainder back.
    //end result is that colorCount will be from 0 to the length of the chartColors. (above is 6)

    let color = chartColors[colorCount % chartColors.length]
    //^^^will always return a valid color from the above array no matter how
    //many colors you add to the array.

    console.log(colorCount, color)

    expenseChart.data.datasets[0].backgroundColor.push(color)//this *actually* adds the color
    //onto the background colors array.

    expenseChart.update()
}

addExpenseButton.addEventListener('click', function() {

    let errors = []

    //getting the names from the amount:
    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    //Checking that the expense amount has been input and the number is greater than zero:
    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors (from above), alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // 3. TODO call function to update chart
    //call the function "addExpenseToChart from above
    // vvv needs two arguments: name of the expense (from the user input)
    // 2nd argument: amount:
    addExpenseToChart(expenseName,expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// 5. TODO add event listener to click the Add Expense button when the enter key is pressed

//add window and an event listener. Listening for the keyup event:

window.addEventListener('keyup', function(){
//    is the user clicking the *enter* key specifically?
//    keyCode for the enter key is 13
    if (event.keyCode === 13){
        //make sure that the focus is on one of the input elements when
        //the user presses enter, click the addExpense button:
    //Make an array of our input elements:
        let inputElements = []

    //    pause video 8, 17:50


    }
})