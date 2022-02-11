const Employee = require('./employee');

class Manager extends Employee{
constructor(name, id, email, officeNumber){
super(name, id, email)
this.officeNumber = officeNumber
}

getOfficeNumber()
{
  return this.officeNumber
}

getRole(){
  return `Manager`
}

}

// module.exports = Manager;

// const newManager = new Manager('Kyle', 123, 'ksyudam@fakeemail.com', 444)

// console.log(newManager)
// newManager.getRole()

module.exports = Manager;

