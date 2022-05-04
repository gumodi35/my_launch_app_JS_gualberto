//importamos la clase 
const MissionComander = require('./../app/missionCommander');

// agregamos una prueba de unidad para probar esta clase
describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionComander("Woopa")
        expect(myMissionCommander.name).toBe("Woopa");
    })
})

// agregamos una prueba de unidad basica de Jest
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
        const result = 1 + 2
        expect(result).toBe(3);
    })
})