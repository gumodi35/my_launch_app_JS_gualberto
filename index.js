//importamos la clase 
// const MissionComander = require('./../app/missionCommander');
// const myMissionCommander = new MissionComander("Woopa")
// console.log(myMissionCommander.name);

// Importa la clase, instancia al menos 3 objetos e imprime los atributos name de todos.
const MissionComander = require('./app/missionCommander');
const gualberto = new MissionComander("Gualberto")
const beto = new MissionComander("Alberto")
const juan = new MissionComander("Juan")

console.log(gualberto.name);
console.log(beto.name);
console.log(juan.name);