var inventory = {
  'Зелье здоровья': 2,
  }

var equip ={
  'Обычный меч':{
    'Урон': 10,
    'Описание': 'Обычный мечь. Дешево и сердито'
  },
  'Обычная броня':{
    'Урон': 10,
    'Описание': 'Обычный мечь. Дешево и сердито'
  }
}

let randItem = Object.keys(equip)[Math.round(Math.random(Object.keys(equip).length) * (Object.keys(equip).length - 1) + 1)-1]



console.log(randItem)
console.log(equip[randItem])

inventory.push(equip[randItem])
console.log(inventory)

