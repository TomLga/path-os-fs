
const os = require('os')

//returns the os CPU 
console.log(os.arch());

//returns a object with info on each CPU core
console.log(os.cpus());

//shows the amount of free memory in bytes as a int
console.log(os.freemem());