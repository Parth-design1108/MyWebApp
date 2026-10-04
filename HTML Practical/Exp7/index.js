// index.js
const os = require('os');
const math = require('./math.js');
 
console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);
console.log('2 + 3 =', math.add(2, 3));
console.log('4 squared =', math.square(4));
console.log(greetings.morningGreeting('Alice'));
console.log(greetings.eveningGreeting('Bob'));
