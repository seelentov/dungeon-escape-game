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
    if(choose === 'M'){const chooseMenu = readlineSync.question('\n1.Рюкзак  2.Статус\n');
    chooseMenu === '1' ? console.log(inv.useInv()) :
    chooseMenu === '2' ? console.log(stats.checkStat()) :
    console.log('\nВыход из меню\n');
    readlineSync.question('Продолжить?')
    this.startroom()
  }
  else{
    if(this.options.hasOwnProperty(choose)) return this.options[choose]()
    else{console.log('\nНеверный ввод!\n'); this.startroom()}
  }
}
  
}
module.exports = Room;







