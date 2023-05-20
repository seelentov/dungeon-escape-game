/** Exports */

var readlineSync = require('readline-sync');
var levels = require("./levels.js");

/**Main */
console.log("Приветствую хуе мое потом продумаю\n")
const name = readlineSync.question('\nЧтобы начать игру введите имя и нажмите Enter\n');
module.exports = name

console.log(levels[Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)]())



