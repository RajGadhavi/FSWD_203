//3.1

var os = require('os');
console.log("Username : " + os.userInfo().username);
console.log("Home directory : " + os.userInfo().homedir);
console.log("Platform : " + os.platform());

//3.2
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const percentMemory = (freeMemory*100)/totalMemory;


console.log("Total memory : " + totalMemory);
console.log("Free memory : " + freeMemory);
console.log("Free memory in percentage : " + percentMemory);