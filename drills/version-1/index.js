var register = {
    transactions: []
 }
 
 function addTransaction(transaction){
    register.transactions.push(transaction)
    }
 
 function getTotal(){
    var total = 0
    for(let i = 0; i < register.transactions.length; i++ ){
        for(let j = 0; j < register.transactions[i].items.length; j++) {
            total += (register.transactions[i].items[j].price * register.transactions[i].items[j].quantity)
        }
    }
    return total
 }

 function getFormattedTotal(){
     return Number.parseFloat(getTotal().toString()).toFixed(2)
 }
 
 function reset(){
    register.transactions = []
 }
 
 module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    getTotal,
    getFormattedTotal,
    reset,
 };
 
//  ### Test 3 - Formatting the price

//  * Keep your code from the previous test
//  * Write a function named `getFormattedTotal` that returns the total formatted as a string with 2 decimal places
//      * Reuse your existing `getTotal` function