/**Экспорты */
var readlineSync = require('readline-sync');
var name = require("./main.js");
var Inventory = require("./inventory.js");
var Body = require("./character.js");

/**Создание нового героя */
const inv = new Inventory;
const status = new Body(name);

const levels ={
  
  1(){
    console.log(`\nВы зашли в комнату. Перед вами странный сундук и проход дальше. Открыть или идти дальше?\n`)
    const action = readlineSync.question("\nОткрыть сундук  /  Идти дальше\n").trim().toLowerCase();
  
    if(action === '1'){console.log('\nСундук оказался притаившимся мимиком. Одной жертвой этого замка больше...\n Вы умерли!\n'); 
    process.exit()}
    
    else if (action === '2') {console.log('\nВы пошли дальше по коридору\n'); 
    console.log(this[Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)]())}

    else{console.log('\nНеверный ввод\n'); console.log(this['1']())}
  },

  2(){
    console.log("\nВы зашли в комнату. Перед вами ржавая лесница наверх и явно ненадежная лесница в подвал\n")
    const action = readlineSync.question("Наверх   В подвал\n").trim().toLowerCase();
  
    if(action === '1'){console.log('Вы пошли дальше!\n'); 
    console.log(this[Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)]())}

    else if (action === '2') {console.log('\nЛесница вниз действительно оказалась ненадежной и сломалась под вашим весом. Вы падаете на пол.\n'); 
    status.hp -= 50
    console.log(`-50 HP. HP: ${status.hp}/100\n`)
    if (status.hp < 1) {{console.log('\nВы умерли!\n'); 
    process.exit()}}
    console.log(this[Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)]())
    }
  
    else{console.log('\nНеверный ввод\n');console.log(this['2']())}
    },
}

module.exports = levels;
