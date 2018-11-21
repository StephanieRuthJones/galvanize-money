
var register = {transactions: []}

function addTransaction(transaction){
    register.transactions.push(transaction)
}

function reset(){
    transactions = 0
}

function countSalesOfType(){

}
module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    // countSalesOfType,
    // getTransactionsBetween,
    // reset,
};


// * Write a function called `reset` that empties the `transactions` array

// ### Test 2 - Counting the sales of a particular item

// * Keep your code from the previous test
// * Write a function named `countSalesOfType` to get the sales count of all the items matching a passed in parameter like "Mittens"
//     * Note that items have a quantity!
//     * Reference the format of the above object

// ### Test 3 - Getting the transactions between two dates

// * Keep your code from the previous test
// * Write a function named `getTransactionsBetween` that returns an array of all transactions between two dates
//     * The function should accept two parameters
//     * These parameters will be Dates passed in as strings in `YYYY-MM-DD` format
//     * Reference the format of the above object
