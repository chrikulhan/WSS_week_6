//code start from here:
https://raw.githubusercontent.com/claraj/week5-examples/master/chart_js/expenses_template/expenses_chart.js

/* Input elements */
//These find the 3 input elements:
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
//Finds the chartCanvas and creating a context object:
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')

// TODO create chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [ //array
            {
                data:[],
                backgroundColors: []

            }
        ],
        labels:[]
    },
    options:{} //fill in things later when the other code is written
})

//paused at 7:39 video 8


// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like
//array of colors, will be used to add to the donut:
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


//This is called from the addExpenseButton event listener:
function addExpenseToChart(name, amount) {

    // TODO add expense to chart

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

    // TODO call function to update chart


    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// TODO add event listener to click the Add Expense button when the enter key is pressed