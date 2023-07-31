const path = require('path')

//returns the last portion on the path 
console.log(path.basename(__filename));

// returns the extention name 
console.log(path.extname(__filename));

//returns a object with properties that reperesent a specific part of the path
console.log(path.parse(__filename));