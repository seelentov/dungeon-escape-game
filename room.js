var readlineSync = require('readline-sync');
var inv = require('./inventory.js')
var stats = require("./character.js");

const Room = class {
  constructor(descbegin,descops,options){
  this.descbegin=descbegin,
  this.descops=descops,
  this.options=options}
  startroom(){
    console.log(this.descbegin)
    let choose = readlineSync.question(this.descops);
    if(choose === 'Меню'){const chooseMenu = readlineSync.question('\n1.Рюкзак  2.Статус\n');
    chooseMenu === '1' ? console.log(inv.checkInv()) :
    chooseMenu === '2' ? console.log(stats.stats) :
    console.log('Назад');
    this.startroom()
  }
    if(this.options.hasOwnProperty(choose)) return this.options[choose]()
    else{console.log('Неверный ввод!'); this.startroom()}
  }
  
}
module.exports = Room;







