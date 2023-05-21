var stats = require('./character.js')
var readlineSync = require('readline-sync');

const Fight = class{
  constructor(enName,enHP,enDamage){
    this.enName=enName,
    this.enHP=enHP,
    this.enDamage=enDamage}
  startFight(){
    console.clear();
    console.log(`БОЙ! Противник - ${this.enName}`)
    let action =  readlineSync.question('R - попытаться убежать(Шанс 50%). Enter - сражаться.\n')
    let runRand = Math.round(Math.random() * (10 - 1) + 1)
    return runRand > 5 && action === 'R' ? this.runGood() : this.confirmFight();
  }
  confirmFight(){
    console.log(`Бой начинается!`)
    for(;;){
    readlineSync.question('Enter - напасть.\n')
    let heroDMG = Math.round(Math.random() * ((stats.stats.weapon.stt+3) - (stats.stats.weapon.stt-3)) + (stats.stats.weapon.stt-3))
    let enDMG = Math.round(Math.random() * ((this.enDamage+3) - (this.enDamage-3)) + (this.enDamage-3))
    let heroBlockDMG = Math.round(enDMG/100 * stats.stats.armor.stt)

    console.log(`${stats.stats['Имя']} наносит ${this.enName} ${heroDMG} урона\n`)
    this.enHP -= heroDMG
    console.log(`${stats.stats['Имя']}: ${stats.stats['HP']} HP          ${this.enName}: ${this.enHP} HP\n\n`)
    if(this.enHP < 1) {console.log(`${this.enName} был повержен\n`)}
    console.log(`${this.enName} наносит ${stats.stats['Имя']} ${enDMG-heroBlockDMG} урона! Заблокированно ${heroBlockDMG} урона\n`)
    stats.stats['HP'] -= enDMG
    console.log(`${stats.stats['Имя']}: ${stats.stats['HP']} HP          ${this.enName}: ${this.enHP} HP\n\n`)
    if(stats.stats['HP'] < 1) {console.log(`${stats.stats['Имя']} погиб в бою с ${this.enName}\n`); process.exit()}
  }};
  runGood(){
  console.log(`${stats.stats['Имя']} избежал боя`)
  return ''
  }
}

module.exports = Fight;