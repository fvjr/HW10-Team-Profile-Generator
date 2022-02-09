const Employee = require('./employee');

class Manager extends Employee{
constructor(name, id, email, officeNumber){
super(name, id, email)
this.officeNumber = officeNumber
}


getRole(){
  console.log(`${this.name} is the team's Manager`)
  return `Manager`
}

}

// module.exports = Manager;

// const newManager = new Manager('Kyle', 123, 'ksyudam@fakeemail.com', 444)

// console.log(newManager)
// newManager.getRole()

module.exports = Manager;