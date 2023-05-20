var readlineSync = require('readline-sync');
var stats = require("./character.js");

var inventory = {
  'Зелье здоровья': 2,
  }


module.exports.inventory = inventory;

var items ={
'Зелье здоровья':{
  desc:'Восстанавливает вашему герою 20 HP',
  use(){
    stats.stats['HP'] < 100 ? stats.stats['HP'] += 30 :
    stats.stats['HP'] = 100
    return `Зелье использованно \nHP: ${stats.stats['HP']}`
  }
},
'Ключ':{
  desc:'Восстанавливает вашему герою 20 HP',
  use(){
    console.log('\nОтличный ключ, но без сундука пользы не имеет\n')
  }
}
}
module.exports.items = items;

var equip ={
  'Обычный меч':{
    'Урон': 10,
    'Описание': 'Обычный меч. Дешево и сердито'
  },
  'Обычная броня':{
    'Урон': 10,
    'Описание': 'Обычный меч. Дешево и сердито'
  }
}
module.exports.equip = equip;

var checkInv = () => {
  console.log(`==================РЮКЗАК==================`)
  let n=1
  for(let i in inventory){
    console.log(`${n})${i}: ${inventory[i]}\n"${items[i].desc}"\n`)
    n++
  }
  console.log(`==========================================`)
   ''
}

var useInv = () => {
  checkInv();
  let choose = readlineSync.question(`\nНомер предмета в списке - использовать. Любое другой ввод - выход из рюкзака: `)
  if (choose > Object.keys(inventory).length || choose < 1) return '\nВыход из рюкзака\n'
  let curItem = Object.keys(inventory)[choose-1]
  return items[curItem].use();
}

module.exports.useInv = useInv;





