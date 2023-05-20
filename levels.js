

 const levels ={
  random(){return Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)},
  1(){
    let random = Math.round(Math.random() * (Object.keys(levels).length - 1) + 1);
    console.log("Вы зашли в комнату. Перед вами странный сундук и проход дальше. Открыть или идти дальше?\n")
    const action = readlineSync.question("Открыть сундук  /  Идти дальше\n").trim().toLowerCase();
  
    if(action === '1'){console.log('Сундук оказался притаившимся мимиком. Одной жертвой этого замка больше...\n Вы умерли!\n'); 
    process.exit()}
    
    else if (action === '2') {console.log('Вы пошли дальше по коридору'); 
    console.log(this[this.random()]())}

    else{console.log('Неверный ввод\n'); console.log(this['1']())}
  },

  2(){
    let random = Math.round(Math.random() * (Object.keys(levels).length - 1) + 1);
    console.log("Вы зашли в комнату. Перед вами ржавая лесница наверх и явно ненадежная лесница в подвал\n")
    const action = readlineSync.question("Наверх   В подвал\n").trim().toLowerCase();
  
    if(action === '1'){console.log('Вы пошли дальше!\n'); 
    console.log(this[this.random()]())}

    else if (action === '2') {console.log('Лесница вниз действительно оказалась ненадежной и сломалась под вашим весом. Вы падаете на пол.\n'); 
    status.hp -= 50
    console.log(`-50 HP. HP: ${status.hp}/100\n`)
    if (status.hp < 1) {{console.log('Вы умерли!\n'); 
    process.exit()}}
    console.log(this[this.random()]())
    }
  
    else{console.log('Неверный ввод\n');console.log(this['2']())}
    },
}


var readlineSync = require('readline-sync');
module.exports = levels;


var Inventory = require("./inventory.js");
var Body = require("./character.js");

var inv = new Inventory;
var status = new Body;