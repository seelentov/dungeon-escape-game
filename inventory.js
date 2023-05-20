var inventory = {
  ['Зелье здоровья']: 2,
  }


module.exports.inventory = inventory;

var items ={
'Зелье здоровья':'Восстанавливает вашему герою 20 HP',
'Ключ':'Открывает СУНДУКИ',
}
module.exports.items = items;

var checkInv = () => {
  console.log(inventory);
}

module.exports.checkInv = checkInv;


