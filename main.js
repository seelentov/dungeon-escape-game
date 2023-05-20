/**Global */
var readlineSync = require('readline-sync');
var levels = require("./levels.js");
let random = Math.round(Math.random() * (2 - 1) + 1)


/**Main */
console.log("Приветствую хуе мое потом продумаю\n")
readlineSync.question('Чтобы начать игру нажмите Enter\n');


console.log(levels[random]())

