var readlineSync = require('readline-sync');
var inv = require('./inventory.js')
var stats = require("./character.js");
var figth = require('./figth.js')
var enemies = require('./enemies.js')

const Room = class {
  constructor(descbegin,descops,options){
  this.descbegin=descbegin,
  this.descops=descops,
  this.options=options}
  startroom(){
    let someSecretStuff = () => {
      console.log(`${stats.stats['Имя']} зашел в комнату и...\n`);
      console.log(`n": "0.4.0",\n
      "license": "ISC",\n
      "dependencies": {
        "readline-sync": "^1.4.10"\n
      },\n
      "devDependencies": {\n
        "esm": "^3.2.25"\n
      }\n
    },\n
    "node_modules/esm": {\n
      "version": "3\n`);
      console.log(`n": "0.4.0",\n
      "license": "ISC",\n
      "dependencies": {
        "readline-sync": "^1.4.10"\n
      },\n
      "devDependencies": {\n
        "esm": "^3.2.25"\n
      }\n
    },\n
    "node_modules/esm": {\n
      "version": "3\n`);
      console.log(`n": "0.4.0",\n
      "license": "ISC",\n
      "dependencies": {
        "readline-sync": "^1.4.10"\n
      },\n
      "devDependencies": {\n
        "esm": "^3.2.25"\n
      }\n
    },\n
    "node_modules/esm": {\n
      "version": "3\n`);
      console.log(`ЧТО?? КАК ТЫ СЮДА ПОПАЛ? ТЫ НЕ ДОЛЖЕН ЗДЕСЬ НАХОДИТЬСЯ!!\n`);
      for(let i=0;i<20;i++){
      console.log(`============================= Внимание! Субьект ПОКИНУЛ симуляцию =============================\n`);
      console.log(`===================================== СОЕДИНЕНИЕ ПОТЕРЯНО =====================================\n`);
      }
      process.exit()
    }
    if (Math.round(Math.random() * (1000 - 1) + 1) === 1) console.log(someSecretStuff())
    console.log(this.descbegin)
    let choose = readlineSync.question(this.descops);
    if(choose === 'M'){
    console.clear();
    const chooseMenu = readlineSync.question('Меню\n1.Рюкзак\n2.Статус\n');
    chooseMenu === '1' ? console.log(inv.useInv()) :
    chooseMenu === '2' ? console.log(stats.checkStat()) :
    console.log('\nВыход из меню\n');
    readlineSync.question('Продолжить?')
    console.clear();
    this.startroom()
  }
  else{
    if(this.options.hasOwnProperty(choose)) return this.options[choose]()
    else{console.log('\nНеверный ввод!\n'); this.startroom()}
  }
}
}
//}
module.exports = Room;







