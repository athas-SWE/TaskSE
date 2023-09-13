// ------------ task 1.2 -----------------------
// Please order by Total 
// Develop a program which produces ordered array of sales. 
// Input: array of objects with the following structure {amount: 10000, quantity: 10}. 
// Output: new array of ordered sales. 
// Array element structure should be: {amount: 10000, quantity: 10, Total: 100000}, 
// where Total = amount * quantity. 
// Please order by Total and note that input array shall remain intact.

// ------------  initial data ------------------
let input_arr = [
    {amount: 10000, quantity: 10},
    {amount: 5555, quantity: 5},
    {amount: 4242, quantity: 12},
    {amount: 20000, quantity: 7},
    {amount: 7500, quantity: -42}
]
// let order = "asc"
let order = "desc"
// ----------------------------------------------

function countSales(arr, order) {
    if (!(arr instanceof Array)) {
        return "Input data is not Array\n"
    }

    if (order != "asc" && order != "desc") {
        return "Select sorting order: 'asc' for ascending or 'desc' for descending"
    }

    let inner_arr = JSON.parse(JSON.stringify(arr))

    inner_arr.forEach(element => {
        if (!(element instanceof Object)) {
            return "Element of input array is not object"
        }

        if (element.amount < 0 || 
            element.quantity < 0 || 
            !(typeof element.amount == 'number') || 
            !(typeof element.quantity == 'number')
            ) {
            console.log((`\x1b[31m \n"ERROR: Invalid values in object ${JSON.stringify(element)}, please check"\n \x1b[0m`))
        }

        element.Total = element.amount * element.quantity
    });
    
    if (order == "asc") {
        return inner_arr.sort(function(a, b) 
            {   
                return parseInt(a.Total) - parseInt(b.Total);
            })
    }
    if (order == "desc") {
        return inner_arr.sort(function(a, b) 
            {
                return parseInt(b.Total) - parseInt(a.Total);
            })
    }
    
}

let output_arr = countSales(input_arr, order)

console.log(`\x1b[36m Output_arr sorted by element.Total ${order}ending = 
            ${JSON.stringify(output_arr, null, 4)} \x1b[0m \n`)

// console.log(`${JSON.stringify(input_arr, null, 4)}`)
