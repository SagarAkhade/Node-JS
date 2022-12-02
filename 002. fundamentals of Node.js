/*
* Fundamentals of NodeJS ->>>
- some basics of node js like functions, conditions, loops, etc
*/

// If-else statement ->>
let x = 20;
if (x === 20) {
    console.log("Matched!");
}
else {
    console.log("Not Matched!");
}
// Output: matched 

// for loop ->>
for (let i = 1; i < 4; i++) {
    console.log(i);
}
// Output: 1 2 3 -> each on next line 

// Array ->> 
const arr = [1, 5, 2, 9, 4];
console.log(arr);    // Output: [ 1, 5, 2, 9, 4 ]
console.log(arr[0]);  // Output: 1

// Import the values, functions from the other file in NodeJs->>
const values = require('./02_fundametals_of_node_for_module');
console.log(values);
// Output : { x: 10, y: 20, z: [Function: z] }

/*----------------------------------*/
// This is file for using module 
// ie. transfer data from one file to other
// - For transfering the data we add all values in Object 

module.exports = {
    x: 10,
    y: 20,
    z: function () {
        return 10;
    }
}
