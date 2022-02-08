const inquirer = require('inquirer')

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // getName() {
  //   console.log(`Name is ${this.name}`)
  //   inquirer.
  //   return `${this.name}`
  // }
//inquirer.prompt.getName?

getName() {
  console.log(`${this.name}`)
return `${this.name}`
}
//inquirer.prompt.getName?


  getId() {
    console.log(`Id number is ${this.id}`)
    return `${this.id}`
  }
//inquirer.prompt.getID?
  getEmail() {
    console.log(`Email is ${this.email}`)
    return `${this.email}`
  }

  getRole() {
    console.log(`Role is Employee`)
    return `Employee`
  }
}

module.exports = Employee;

const testEmployee = new Employee('Cool name', 123, 'coolemployee@cool.com')

console.log(testEmployee)



