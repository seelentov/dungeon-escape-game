var readlineSync = require('readline-sync');
var stats = require("./character.js");

var inventory = {
  'Зелье здоровья': 200,
  'Ключ': 200,
  'Яд': 200,
  'Сундучок со снаряжением': 200,
  'Сундучок с предметом': 200,
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
},
'Яд':{
  desc:'Наносит вашему герою 30 урона.',
  use(){
    let dead=()=>{
    
    console.log(`\n\n\n\n\n\n\n___________________ КОНЦОВКА: "ЛЕГКИЙ ПУТЬ" \n\n\n\n\n\n\n___________________\n`);
    console.log(`"Может не стоит бороться?..."\n${stats.stats['Имя']} сделал свой последний в жизни глоток и почил в этих холодных стенах\n`);
    process.exit();}
    (stats.stats['HP'] - 30) > 0 ? stats.stats['HP'] -= 30:
    dead()
    inventory['Яд'] -= 1
    if (inventory['Яд'] < 1) delete inventory['Яд']

    console.log(`Зелье использованно \nHP: ${stats.stats['HP']}`)
  }
},
'Сундучок со снаряжением':{
  desc:'Содержит в себе случайное снаряжение (или неприятный сюрприз)',
  use(){
    let dead = () =>{
      console.log(`\n\n\n\n\n\n\n___________________ КОНЦОВКА: "КОВАРНАЯ ЖАДНОСТЬ" \n\n\n\n\n\n\n___________________\n${stats.stats['Имя']} погиб от ловушки, установленной в сундучке`);
      process.exit()
    }
    let unfort = () =>{console.log(`АЙ! В лицо ${stats.stats['Имя']} брызнули иголки! ${stats.stats['HP']}/100 HP\n`);
    (stats.stats['HP'] - 15) > 0 ? stats.stats['HP'] -= 15 : dead();
  }
    let fortune = () =>{
    let randItem = Object.keys(equip)[Math.round(Math.random(Object.keys(equip).length) * (Object.keys(equip).length - 1) + 1)-1]
    console.log(`В сундучке лежал ${randItem}.\n`)
    inventory['Сундучок со снаряжением'] -= 1
    if (!inventory.hasOwnProperty(randItem)) {
    inventory[randItem] = (equip[randItem])
    return `РЮКЗАК: ${randItem} добавлен в рюкзак\n`}
    return (`${stats.stats['Имя']} уже имеет ${randItem} в своем рюкзаке, предмет был брошен на землю\n`)}

    (Math.round(Math.random(10) * (10 - 1) + 1)) > 5 ? console.log(fortune()) : console.log(unfort());
    inventory['Сундучок со снаряжением'] -= 1
    if (inventory['Сундучок со снаряжением'] < 1) delete inventory['Сундучок со снаряжением']
  }
},
'Сундучок с предметом':{
  desc:'Содержит в себе случайный предмет (или неприятный сюрприз)',
  use(){
    let dead = () =>{
      console.log(`\n\n\n\n\n\n\n___________________ КОНЦОВКА: "КОВАРНАЯ ЖАДНОСТЬ" \n\n\n\n\n\n\n___________________\n${stats.stats['Имя']} погиб от ловушки, установленной в сундучке`);
      process.exit()
    }
    let unfort = () =>{console.log(`АЙ! В лицо ${stats.stats['Имя']} брызнули иголки!`);
    (stats.stats['HP'] - 15) > 0 ? stats.stats['HP'] -= 15 : dead();
    console.log(`- 15 HP / ${stats.stats['HP']}/100\n`)
  }
    let fortune = () =>{
      let randCount = Math.round(Math.random() * (3 - 1) + 1)
      let randItem = Object.keys(items)[Math.round(Math.random(Object.keys(items).length) * (Object.keys(items).length - 1) + 1)-1]
      for(;;){
      if(randItem !== 'Сундучок с предметом'){
      console.log(`${stats.stats['Имя']} открыл сундучок и нашел там: ${randItem}: ${randCount}!\n`)
      inventory[randItem] ? inventory[randItem] += randCount : inventory[randItem] = randCount
      console.log(`РЮКЗАК: +${randCount} ${randItem}\n`)
      inventory['Сундучок с предметом'] -= 1}
      return ''
      }
      }

    (Math.round(Math.random(10) * (10 - 1) + 1)) > 5 ? console.log(fortune()) : console.log(unfort());
    
    if (inventory['Сундучок с предметом'] < 1) delete inventory['Сундучок с предметом']
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
  'Обычный меч с зазубриной':{
    type: 'weapon',
    stt: 11,
    'Описание': 'Обычный меч. Дешево и сердито'
  },
  'Обычный тяжелый меч':{
    type: 'weapon',
    stt: 12,
    'Описание': 'Обычный меч. Дешево и сердито'
  },
  'Обычный качественный меч':{
    type: 'weapon',
    stt: 13,
    'Описание': 'Обычный меч. Дешево и сердито'
  },
  'Необычный меч':{
    type: 'weapon',
    stt: 15,
    'Описание': 'На заказ. Для очередного барона'
  },
  'Необычный тяжелый меч':{
    type: 'weapon',
    stt: 17,
    'Описание': 'На заказ. Для очередного барона'
  },
  'Необычный качественный меч':{
    type: 'weapon',
    stt: 18,
    'Описание': 'На заказ. Для очередного барона'
  },
  'Необычный меч':{
    type: 'weapon',
    stt: 19,
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
  'Мифический меч':{
    type: 'weapon',
    stt: 35,
    'Описание': 'Меч из тех сказок, что мне рассказывали перед снов в детстве'
  },
  'Меч создателя':{
    type: 'weapon',
    stt: 71,
    'Описание': 'Меч с гравиговкой "Спасибо за тест игры"'
  },
  'Обычная броня':{
    type: 'armor',
    stt: 10,
    'Описание': 'Обычная броня. Дешевая сталь'
  },
  'Обычная рыцарская броня':{
    type: 'armor',
    stt: 11,
    'Описание': 'Обычная броня. Дешевая сталь'
  },
  'Обычная броня со шлемом':{
    type: 'armor',
    stt: 12,
    'Описание': 'Обычная броня. Дешевая сталь'
  },
  'Обычная качественная броня':{
    type: 'armor',
    stt: 13,
    'Описание': 'Обычная броня. Дешевая сталь'
  },
  'Необычная броня':{
    type: 'armor',
    stt: 15,
    'Описание': 'Латы с гравировкой. Хорошая закалка'
  },
  'Необычная броня с подкладками аристократа':{
    type: 'armor',
    stt: 16,
    'Описание': 'Латы с гравировкой. Хорошая закалка'
  },
  'Необычная броня рыцаря':{
    type: 'armor',
    stt: 17,
    'Описание': 'Латы с гравировкой. Хорошая закалка'
  },
  'Необычная качественная броня':{
    type: 'armor',
    stt: 18,
    'Описание': 'Латы с гравировкой. Хорошая закалка'
  },
  'Редкая броня':{
    type: 'armor',
    stt: 20,
    'Описание': 'Двойная прослойка и дорогая сталь. То что нужно для одинокого путника в незнакомом подземелии'
  },
  'Эпическая броня':{
    type: 'armor',
    stt: 30,
    'Описание': 'Стекло. Такое хрупкое внешне, но на деле гораздо лучше стали, при правильной закалке.'
  },
  'Легендарная броня':{
    type: 'armor',
    stt: 35,
    'Описание': 'Материал этой брони - кость дракона, что защищала своего хозяина не одну тысячу лет, сейчас защищает меня'
  },
  'Мифическая броня':{
    type: 'armor',
    stt: 50,
    'Описание': 'Меч из тех сказок, что мне рассказывали перед снов в детстве'
  },
  'Броня создателя':{
    type: 'armor',
    stt: 90,
    'Описание': 'Броня с гравировкой "Спасибо за тест игры"'
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





