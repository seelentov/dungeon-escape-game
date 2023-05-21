var readlineSync = require('readline-sync');
var stats = require("./character.js");

var inventory = {
  'Зелье здоровья': 2,
  }


module.exports.inventory = inventory;

var items ={
'Зелье здоровья':{
  desc:'Восстанавливает вашему герою 30 HP',
  use(){
    (stats.stats['HP'] + 30) < 100 ? stats.stats['HP'] += 30 :
    stats.stats['HP'] = 100;
    inventory['Зелье здоровья'] -= 1
    if (inventory['Зелье здоровья'] < 1) delete inventory['Зелье здоровья']

    console.log(`Зелье использованно \nHP: ${stats.stats['HP']}`)
  }
},
'Ключ':{
  desc:'Ключ для открытия СУНДУКОВ',
  use(){
    console.log('\nОтличный ключ, но без сундука пользы не имеет\n')
  }
}
}
module.exports.items = items;

var equip ={
  'Обычный меч':{
    type: 'weapon',
    stt: 10,
    'Описание': 'Обычный меч. Дешево и сердито'
  },
  'Необычный меч':{
    type: 'weapon',
    stt: 15,
    'Описание': 'На заказ. Для очередного барона'
  },
  'Редкий меч':{
    type: 'weapon',
    stt: 20,
    'Описание': 'Чистая сталь без примесей, отличный инструмент'
  },
  'Эпический меч':{
    type: 'weapon',
    stt: 25,
    'Описание': 'Эбонитовое совершенство. Идеально отточеный баланс'
  },
  'Легендарный меч':{
    type: 'weapon',
    stt: 30,
    'Описание': 'Лезвие из костей древних драконов. Ручка обшита кожей редких животных. Я готов..'
  },
  'Обычная броня':{
    type: 'armor',
    stt: 10,
    'Описание': 'Обычная броня. Дешевая сталь'
  },
  'Необычная броня':{
    type: 'armor',
    stt: 15,
    'Описание': 'Латы с гравировкой. Хорошая закалка'
  },
  'Редкая броня':{
    type: 'armor',
    stt: 20,
    'Описание': 'Двойная прослойка и дорогая сталь. То что нужно для одинокого путника в незнакомом подземелии'
  },
  'Эпическая броня':{
    type: 'armor',
    stt: 25,
    'Описание': 'Стекло. Такое хрупкое внешне, но на деле гораздо лучше стали, при правильной закалке.'
  },
  'Легендарная броня':{
    type: 'armor',
    stt: 30,
    'Описание': 'Материал этой брони - кость дракона, что защищала своего хозяина не одну тысячу лет, сейчас защищает меня'
  }
}
module.exports.equip = equip;

var checkInv = () => {
  console.log(`==================РЮКЗАК==================\n`)
  let n=1
  for(let i in inventory){
    equip.hasOwnProperty(i) === true && equip[i].type == 'weapon'?console.log(`${n})${i}: ${equip[i].stt} АТК\n"${equip[i]['Описание']}"\n`):
    equip.hasOwnProperty(i) === true && equip[i].type == 'armor'?console.log(`${n})${i}: ${equip[i].stt} ЗАЩ\n"${equip[i]['Описание']}"\n`):
    console.log(`${n})${i}: ${inventory[i]}\n"${items[i].desc}"\n`)
    n++
  }
  console.log(`==========================================\n`)
}

var useInv = () => {
  console.clear();
  checkInv();
  let choose = readlineSync.question(`\nНомер предмета в списке - использовать. Любое другой ввод - выход из рюкзака: `)
  if (choose > Object.keys(inventory).length || choose < 1) return '\nВыход из рюкзака\n'
  let curItem = Object.keys(inventory)[choose-1]
  if(equip.hasOwnProperty(curItem) && equip[curItem].type == 'weapon') {
    if(stats.stats.weapon.name !== 'Пусто') {inventory[stats.stats.weapon.name] = {...equip[stats.stats.weapon.name]}};
    stats.stats.weapon = {name: curItem, stt: equip[curItem].stt}
    console.log(`${curItem} теперь на вашем персонаже`)
    delete inventory[curItem] 
  }
  else if(equip.hasOwnProperty(curItem) && equip[curItem].type == 'armor') {
    if(stats.stats.armor.name !== 'Пусто') {inventory[stats.stats.armor.name] = {...equip[stats.stats.armor.name]}}
    stats.stats.armor = {name: curItem, stt: equip[curItem].stt}
    console.log(`${curItem} теперь на вашем персонаже`)
    delete inventory[curItem]
  }
  else if(items.hasOwnProperty(curItem)) items[curItem].use();
  return ''
}

module.exports.useInv = useInv;





