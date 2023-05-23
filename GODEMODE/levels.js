var readlineSync = require('readline-sync');
var stats = require("./character.js");
var inv = require("./inventory.js");
var Fight = require('./figth.js')
var enemies = require('./enemies.js')

const randomEnc = ()=>{
    console.log(`${stats.stats['Имя']} пошел в следующую комнату и на его пути возник монстр...\n`);
    let randEnemy = Math.round(Math.random(enemies.length) * (enemies.length - 1) + 1)-1
    let newEnemy = new Fight(...enemies[randEnemy])
    console.log(newEnemy.startFight())
    return ' '}


var name = readlineSync.question('Чтобы начать игру нажмите Enter\n');
let yourName = stats.stats['Имя']
console.clear();
const levels = {
  1:{
    
    descbegin:`\n\n\n\n${yourName} зашел в комнату. Перед ним странный СУНДУК и проход в следующую КОМНАТУ. Открыть СУНДУК или идти дальше?\n`,
    descops:'1.Открыть сундук  /  2.Идти дальше  \n',
    options:{
      
      '1'(){
        const good = () =>{
          let randCount = Math.round(Math.random() * (3 - 1) + 1)
          let randItem = Object.keys(inv.items)[Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1]
          console.log(`${stats.stats['Имя']} открыл сундук и нашел там: ${randItem}: ${randCount}! ${stats.stats['Имя']} пошел дальше...\n`)
          inv.inventory[randItem] ? inv.inventory[randItem] += randCount : inv.inventory[randItem] = randCount
          console.log(`РЮКЗАК: +${randCount} ${randItem}\n`);return ' '
  }
  
        const bad = () =>{
          console.log('\n\n\n\n\n\n\n___________________ КОНЦОВКА: "...ХОРОШО, ЧТО НИКТО НЕ ВИДЕЛ" ___________________\n')
          console.log(`СУНДУК оказался притаившимся мимиком. Одной жертвой этого подземелья стало больше...\n ${yourName} умер!\n`); 
          process.exit()}
          Math.round(Math.random() * (10 - 1) + 1) > 2 ? good() : bad()
          return ' '
      },
      '2'(){
        Math.round(Math.random() * (10 - 1) + 1) > 2 ? console.log(`${yourName} пошел дальше по коридору..\n`) : randomEnc();
        return ' '
      }
    }
  },
  2:{
    descbegin:`\n\n\n\n${yourName} зашел в комнату. Перед ним ржавая лестница НАВЕРХ и явно ненадежная лестница в ПОДВАЛ.\n`,
    descops:'1.Наверх  /  2.В подвал\n',
    options:{
      '1'(){
        const good = () =>{
          let randCount = Math.round(Math.random() * (3 - 1) + 1)
          let randItem = Object.keys(inv.items)[Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1]
          console.log(`${stats.stats['Имя']} открыл сундук и нашел там: ${randItem}: ${randCount}! ${stats.stats['Имя']} пошел дальше...\n`)
          inv.inventory[randItem] ? inv.inventory[randItem] += randCount : inv.inventory[randItem] = randCount
          console.log(`РЮКЗАК: +${randCount} ${randItem}\n`)
        }
        console.log(`\n${yourName} прошел наверх! В этой комнате был сундук!\n`)
        inv.inventory['Ключ'] > 0 ? good() : console.log(`${yourName} к сожалению не имеет ключа от СУНДУКА на данный момент! Грустный он пошел в следующую комнату.\n`);
        inv.inventory['Ключ'] > 0 ? inv.inventory['Ключ'] -= 1 : delete inv.inventory['Ключ']
        return ' '
      },
      '2'(){
        let randDmg = Math.round(Math.random() * (50 - 35) + 35)

        
        let good = () => {console.log(`${yourName} спустился в подвал\n`);return ' '}

        let bad = () => {console.log(`Лестница в ПОДВАЛ действительно оказалась ненадежной и сломалась под вашим весом. ${yourName} падает на пол.\n`);
        stats.stats['HP'] -= randDmg;
        console.log(`-${randDmg} HP. HP: ${stats.stats['HP']}/100\n`);
        if (stats.stats['HP'] < 1) {console.log('\n\n\n\n\n\n\n___________________ КОНЦОВКА: "...ХОРОШО, ЧТО НИКТО НЕ ВИДЕЛ" ___________________\n'); 
        console.log('\nВы умерли! Как неаккуратно..\n'); process.exit()}
        return ' '}
        
        return Math.round(Math.random() * (10 - 1) + 1) > 4 ? good() : bad();

      }
    }
  },
  3:{
    descbegin:`\n\n\n\n${yourName} зашел в комнату. За столом спала незнакомая и неясная фигура, около которой был ключ от сундука, который очень удобно стоял рядом с Вами. Стоит ли рискнуть?\n`,
    descops:'1.Идти дальше  /  2.Взять ключ и открыть сундук\n',
    options:{
      '2'(){
        let good = () =>{
        let randCount = Math.round(Math.random() * (3 - 1) + 1)
        let randItem = Object.keys(inv.items)[Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1]
        console.log(`${yourName} открыл сундук и нашли там: ${randItem}: ${randCount}!\n`)
        inv.inventory[randItem] ? inv.inventory[randItem] += randCount : inv.inventory[randItem] = randCount
        console.log(`РЮКЗАК: +${randCount} ${randItem}\n`)
        return ' '}
        let bad = () =>{
          console.log(`${yourName} был очень аккуратен и уже почти забрал ключ. Но в комнату послышались шаги. ${yourName} решает аккуратно уйти, оставляя сундук нетронутым\n`)
          if(Math.round(Math.random() * (10 - 1) + 1) > 4) return randomEnc()
          return ' '
        }
        
        return (Math.random() * (10 - 1) + 1) > 4 ? good():bad()

      },
      '1'(){
        const good = () =>{let randDmg = Math.round(Math.random() * (45 - 5) + 5)
        console.log(`${yourName} прошел дальше, но не заметил маленькой лезки под своими ногами и...\n`);
        console.log(`сзади от ${yourName} открылся ящик, внутри которого лежало снаряжения бывшего жителя этой комнаты... Где он сейчас?\n`);
        let randItem = Object.keys(inv.equip)[Math.round(Math.random(Object.keys(inv.equip).length) * (Object.keys(inv.equip).length - 1) + 1)-1]
        console.log(`На стойке лежал ${randItem}. Следующая комната...`)
        if (!inv.inventory.hasOwnProperty(randItem)) {
        inv.inventory[randItem] = (inv.equip[randItem])
        return `РЮКЗАК: ${randItem} добавлен в рюкзак\n`}
        return (`${yourName} уже имеет ${randItem} в своем рюкзаке, поэтому он решил оставить это там, где оно лежало\n`)
      
      }
        const bad = () =>{let randDmg = Math.round(Math.random() * (45 - 5) + 5)
        console.log(`${yourName} прошел дальше, но не заметил маленькой лезки под своими ногами и...\n`);
        console.log('Ничего не произошло?? Странно.. Скоро буду! *рассказчик ушел кое что уточнить у копирайтера*\n');
        console.log('..но сверху, в связи с движением лески, упало 2 кирпича! Ай!\n');
        stats.stats['HP'] -= randDmg;
        console.log(`-${randDmg} HP. HP: ${stats.stats['HP']}/100\n`);
        if (stats.stats['HP'] < 1) {console.log('\n\n\n\n\n___________________ КОНЦОВКА: "В СЛЕДУЮЩИЙ РАЗ ВОЗЬМУ КАСКУ" ___________________\n');
        console.log(`\n${yourName} умер! ...от кирпича\n`); process.exit()}
        return ' '}

        return (Math.random() * (10 - 1) + 1) > 4 ? good():bad()
      }
    }
  },
  4:{
    descbegin:`\n\n\n\n${yourName} зашел в комнату. На вид - обычная оружейная, но вот только выглядела она так, будто кто то в спешке решил ее всю обобрать.\nОсмотревшись он увидел, что на стойке у входа лежало оружие.\n"Лишним не будет" - подумал ${yourName}\n`,
    descops:'1.Взять  /  2.Идти дальше\n',
    options:{
      '1'(){
        let randItem = Object.keys(inv.equip)[Math.round(Math.random(Object.keys(inv.equip).length) * (Object.keys(inv.equip).length - 1) + 1)-1]
        console.log(`На стойке лежал ${randItem}. Следующая комната...\n`)
        if (!inv.inventory.hasOwnProperty(randItem)) {
        inv.inventory[randItem] = (inv.equip[randItem])
        return `РЮКЗАК: ${randItem} добавлен в рюкзак\n`}
        return (`${yourName} уже имеет ${randItem} в своем рюкзаке, поэтому он решил оставить это там, где оно лежало\n`)
      },
      '2'(){
        Math.round(Math.random() * (10 - 1) + 1) > 5 ? console.log(`\nСледующая комната...`) : randomEnc()
        return ' '
    }
  },
},
  5:{
    descbegin:`\n\n\n\n${yourName} вдруг заметил ВЫХОД! 'ЭТО ОН?' - сказал ${yourName}, но счастье никогда не приходит так легко..\nВдруг ${yourName} почуствовал, как его застилает тень. Обернувшись он увидел огромного КРУШИТЕЛЯ(30/200). Бегство или все таки бороться за победу, которая так близка?\n`,
    descops:'1.Сражаться  /  2.Попытаться убежать\n',
    options:{
      '1'(){
        console.log('В любом случае... он уже близко\n')
        let newEnemy = new Fight(...enemies[5])
        newEnemy.startFight()
        console.clear();
        console.log('\n\n\n\n\n___________________ КОНЦОВКА: "ПОБЕГ ИЗ ПОДЗЕМЕЛИЯ" ___________________\n')
        console.log(`Крушитель был повержен, и уставший ${yourName} уже движется к выходу!\n`)
        console.log('Уверен, у нашего героя все будет хорошо.\n')
        console.log('История окончена, а мне лишь отстается сказать спасибо за тест моей поделки <3\n')
        console.log('Надеюсь, что игра была увлекательна для Вас, а ее код натолкнет Вас на какие то мысли в Ваших проектах.\n')
        console.log('Вопросы и предложения можете отправлять на мою личную почту komkov222111@gmail.com.\n')
        console.log('Удачи и встретимся еще.\n'); process.exit()
      },
      '2'(){
        crushEnc = () =>{
        let newEnemy = new Fight(...enemies[5])
        console.log(newEnemy.startFight())
        return ' '
        }
        (Math.random() * (10 - 1) + 1) > 5 ? console.log(`${yourName} убежал от противника, сверкая пятками..и...это было УДАЧНО!\n`) : crushEnc();
        return ' '
      }
    }
  }
}
module.exports = levels;



/**
...:{
    descbegin:`\n\n\n\n...\n',
    descops:'...\n',
    options:{
      '1'(){
        let good = () = {
          

          return " "
        }
        let bad = () = {
        

          return " "
        }
        return Math.random() * (10 - 1) + 1) > ... ? good : bad;
      },
      '2'(){
        let good = () = {
          

          return " "
        }
        let bad = () = {
        

          return " "
        }
        return Math.random() * (10 - 1) + 1) > ... ? good : bad;
      }
    }
  }
*/
