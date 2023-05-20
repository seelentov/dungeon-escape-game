/**Main */
console.log("Приветствую! Меня зовут Vladisluw и это мой первый проект!\n") 
console.log('В данной игре ты будешь ходить по комнатам подземелия в поисках выхода, участвовать в событиях, сражаться, \nсобирать предметы и находить им применение в будущем, с одной целью - сбежать из этого подземелия\n')
console.log("Часть игры еще в разработке и много вещей не имеет реализации. Следи за обновлениями.\n")
console.log("В планах реализовать:\n")
console.log("- Комнаты с разными событиями\n")
console.log("- Систему инвентаря и предметов, создать синнергию этих предметов с комнатами\n")
console.log("- Противники и систему боя\n")
console.log("- Систему экипировки персонажа\n")
console.log("- Создать систему крит. урона, брони\n")
console.log("- Перенести игру на интерфейс HTML документа\n\n")
console.log("*- Дополнить игру множеством разных противников, комнат, предметов и оружия\n")
console.log("*- Добавить концовку/концовки\n\n\n")


/** Exports */
var Room = require("./room.js");
var levels = require("./levels.js");

for(;;){
  const newroom = Math.round(Math.random() * (Object.keys(levels).length - 1) + 1)
  const startlv = new Room(levels[newroom].descbegin, levels[newroom].descops, levels[newroom].options)
  console.log(startlv.startroom())
  }