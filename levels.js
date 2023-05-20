

 const levels ={
  1(){
    console.log("Вы зашли в комнату. Перед вами странный сундук и проход дальше. Открыть или идти дальше?")
    const action = readlineSync.question("Сундук  /  Вперед\n")
  
    if(action === 'Сундук'){console.log('Сундук оказался притаившимся мимиком. Одной жертвой этого замка больше...\n Вы умерли!'); 
    process.exit()}

    else if (action === 'Вперед') {console.log('Вы пошли дальше по коридору'); 
    console.log(this[Math.round(Math.random() * (2 - 1) + 1)]())}

    else{console.log('Неверный ввод\n\n\n\n'); console.log(this['1']())}
  },

  2(){
    console.log("Вы зашли в комнату. Перед вами ржавая лесница наверх и явно ненадежная лесница в подвал")
    const action = readlineSync.question("1.Наверх   2.В подвал").trim().toLowerCase();
  
    if(action === '1'){console.log('Вы пошли дальше!'); 
    process.exit()}

    else if (action === '2') {console.log('Лесница вниз действительно оказалась ненадежной и сломалась под вашим весом. Вы падаете на пол.'); 
    status.hp -= 50
    console.log(`-50 HP. HP: ${status.hp}/100`)
    if (status.hp < 1) {{console.log('Вы умерли!'); 
    process.exit()}}
    console.log(this[Math.round(Math.random() * (2 - 1) + 1)]())
    }
  
    else{console.log('Неверный ввод\n\n\n\n');console.log(this['2']())}
    },
}


var readlineSync = require('readline-sync');
module.exports = levels;


var Inventory = require("./inventory.js");
var Body = require("./character.js");

var inv = new Inventory;
var status = new Body;