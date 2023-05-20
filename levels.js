var readlineSync = require('readline-sync');
var stats = require("./character.js");
var inv = require("./inventory.js");


var name = readlineSync.question('\nЧтобы начать игру введите ИМЯ своего ГЕРОЯ и нажмите Enter\n');
if(name !== '') stats.stats['Имя'] = name;
let yourName = stats.stats['Имя']

const levels = {
  1:{
    
    descbegin:`\n${yourName} зашел в комнату. Перед ним странный СУНДУК и проход в следующую КОМНАТУ. Открыть СУНДУК или идти дальше?\n`,
    descops:'\n1.Открыть сундук  /  2.Идти дальше  \n',
    options:{
      
      '1'(){
        console.log('\nСУНДУК оказался притаившимся мимиком. Одной жертвой этого подземелья стало больше...\n Вы умерли!\n'); 
        process.exit()
      },
      '2'(){
        console.log('\nВы пошли дальше по коридору\n');
        return ''
      }
    }
  },
  2:{
    descbegin:`\n${yourName} зашел в комнату. Перед ним ржавая лесница НАВЕРХ и явно ненадежная лесница в ПОДВАЛ\n`,
    descops:'1.Наверх  /  2.В подвал\n',
    options:{
      '1'(){
        console.log('Вы пошли дальше!\n')
        return ''
      },
      '2'(){
        console.log('\nЛесница в ПОДВАЛ действительно оказалась ненадежной и сломалась под вашим весом. Вы ПАДАЕТЕ на пол.\n');
        stats.stats['HP'] -= 50;
        console.log(`-50 HP. HP: ${stats.stats['HP']}/100\n`);
        if (stats.stats['HP'] < 1) {console.log('\nВы умерли! Как неаккуратно..\n'); process.exit()}
        return ''
      }
    }
  },
  3:{
    descbegin:`\n${yourName} зашел в комнату. С сундуком и ключом, который лежал рядом.\n`,
    descops:'1.Идти дальше  /  2.Взять ключ и открыть сундук\n',
    options:{
      '2'(){
        let randCount = Math.round(Math.random() * (3 - 1) + 1)
        let randItem = Object.keys(inv.items)[Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1]
        console.log(`Вы открыли сундук и нашли там: ${randItem}: ${randCount} ! Интересный менеджмент ресурсов от прошлого хозяина...\n`)
        inv.inventory[randItem] ? inv.inventory[randItem] += randCount : inv.inventory[randItem] = randCount
        console.log(`РЮКЗАК: +${randCount} ${randItem}\n`)
        return ''
      },
      '1'(){
        console.log(`\n${yourName} прошел дальше, но не заметил маленькой лезки под своими ногами и...\n`);
        console.log('\nНичего не произошло?? Странно.. Скоро буду! *рассказчик ушел кое что уточнить у копирайтера*\n');
        console.log('\n..но сверху, в связи с движением лески, упало 2 кирпича! Ай!\n');
        stats.stats['HP'] -= 12;
        console.log(`-12 HP. HP: ${stats.stats['HP']}/100\n`);
        if (stats.stats['HP'] < 1) {console.log('\nВы умерли! ...от кирпича\n'); process.exit()}
        return ''
      }
    }
  },
  4:{
    descbegin:`\n${yourName} зашел в комнату. На вид - обычная оружейная, но вот только выглядела она так, будто кто то в спешке решил ее всю обобрать.\nОсмотревшись он увидел, что на стойке у входа лежало.\n "Лишним не будет" - подумал ${yourName}\n`,
    descops:'1.Взять предмет /  2.Идти дальше\n',
    options:{
      '1'(){
        console.log('Вы взяли экипировку и положили в свой инвентарь\n')
        inv.inventory.push(Object.keys(inv.equip)[Math.round(Math.random() * (Object.keys(inv.equip).length - 1) + 1)-1])
        console.log('РЮКЗАК: +2 КЛЮЧ\n')
      },
      '2'(){
        console.log(`\n${yourName} пошел в следующую комнату и на его пути возник монстр...\n`);
      }
    }
  },
   /**
  5:{
    descbegin:`\n${status.name} вдруг заметил ВЫХОД! 'ЭТО ОН?' - сказал ${status.name}, но счастье никогда не приходит так легко..\nВдруг ${status.name} почуствовал, как его застилает тень. Обернувшись он увидел огромного КРУШИТЕЛЯ(30/2000). Бегство или все таки бороться за победу, кторая так близка?`,
    descops:'Сражаться  /  Убежать(шанс 70%)\n',
    options:{
      '1'(){
        console.log('Вы победили крушителя и, уставшесь, движетесь к выходу!\n')
        console.log('Уверен, у нашего героя все будет хорошо.\n')
        console.log('История окончена, а мне лишь отстается сказать спасибо за тест моей поделки <3\n')
        console.log('Надеюсь, что игра была увлекательна для Вас, а ее код натолкнет Вас на какие то мысли в Ваших проектах.\n')
        console.log('Вопросы и предложения можете отправлять на мою личную почту komkov222111@gmail.com.\n')
        console.log('Удачи и встретимся еще.\n'); process.exit()
      },
      '2'(){
        console.log('\nВы убежали от противника, сверкая пятками..и...это было УДАЧНО!\n');
        status.hp -= 50;
        console.log(`-50 HP. HP: ${status.hp}/100\n`);
        if (status.hp < 1) {console.log('\nВы умерли!\n')}
      }
    }
  }*/
}
module.exports = levels;
