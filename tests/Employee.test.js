const Employee = require('../lib/employee')

describe("Employee", () => {
  describe("getName", () => {
    it('should return a name', () => {
      const newEmployee = new Employee('Fernando', 1234, 'vasquezjrf@gmail.com')
      expect(newEmployee.getName()).toEqual('Fernando')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newEmployee = new Employee('Fernando', 1234, 'vasquezjrf@gmail.com')
      expect(newEmployee.getId()).toEqual(1234)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newEmployee = new Employee('Fernando', 1234, 'vasquezjrf@gmail.com')
      expect(newEmployee.getEmail()).toEqual('vasquezjrf@gmail.com')
    })
  })

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newEmployee = new Employee('Fernando', 1234, 'vasquezjrf@gmail.com')
      expect(newEmployee.getRole()).toEqual('Employee')
    })
  });

});