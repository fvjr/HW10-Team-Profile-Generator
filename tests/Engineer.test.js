const Engineer = require('../lib/engineer');

describe("Engineer", () => {
describe ("getName", () => {
  it('should return the name of the created object', () => {
    const newEngineer = new Engineer ('Kyle', 1234, 'kyle@gmail.com', 'kyleGit')
 
expect(newEngineer.getName()).toEqual('Kyle')
 })
})




});