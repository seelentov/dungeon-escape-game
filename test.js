var inv = require("./inventory.js");


let randCount = Math.round(Math.random() * (3 - 1) + 1)
        let randItem = Object.keys(inv.items)[Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1]
        
console.log(randCount)
console.log(randItem)
console.log(Math.round(Math.random(Object.keys(inv.items).length) * (Object.keys(inv.items).length - 1) + 1)-1)