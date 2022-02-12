const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("getName", () => {
    it('should return a name', () => {
      const newManager = new Manager('Nano', 1234, 'Nano@gmail.com', 444)
      expect(newManager.getName()).toEqual('Nano')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newManager = new Manager('Nano', 1234, 'Nano@gmail.com', 444)
      expect(newManager.getId()).toEqual(1234)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newManager = new Manager('Nano', 1234, 'Nano@gmail.com', 444)
      expect(newManager.getEmail()).toEqual('Nano@gmail.com')
    })
  })

  describe("getOfficeNumber", () => {
    it("should return the object's Office Number value as a number", () => {
      const newManager = new Manager('Nano', 1234, 'Nano@gmail.com', 444)
      expect(newManager.getOfficeNumber()).toEqual(444)
    })
  })

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newManager = new Manager('Nano', 1234, 'Nano@gmail.com', 444)
      expect(newManager.getRole()).toEqual('Manager')
    })
  });

});