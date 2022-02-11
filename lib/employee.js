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
return this.name
}
//inquirer.prompt.getName?


  getId() {
    return this.id
  }
//inquirer.prompt.getID?
  getEmail() {
    return this.email
  }

  getRole() {
    return `Employee`
  }
}

module.exports = Employee;



