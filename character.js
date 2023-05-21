const stats = {
    "Имя": 'Геральд',
    "HP": 100,
    weapon:{
      name:'Обычный меч',
      stt: 10
    },
    armor:{
      name: 'Пусто',
      stt: 0
    }
  }
module.exports.stats = stats;

checkStat=()=> {console.clear();
console.log(`==============ХАРАКТЕРИСТИКИ==============\n
Имя: ${stats['Имя']}\n
HP: ${stats['HP']}\n
Оружие: ${stats.weapon.name} | ${stats.weapon.stt} ATK\n
Броня: ${stats.armor.name} | ${stats.armor.stt} ЗАЩ\n
==========================================\n`)}

module.exports.checkStat = checkStat;

