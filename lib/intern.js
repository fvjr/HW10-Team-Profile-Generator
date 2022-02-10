const Employee = require('./employee')

class Intern extends Employee{
  constructor(name, id, email, school ){
  super(name, id, email)
  this.school = school;
}

getSchool() {
  console.log(`Intern ${this.name} belongs to the following school: ${this.school}`)
  return `${this.school}`
}

getRole(){
  console.log(`Intern ${this.name} is an Intern`)
  return `Intern`
}

}

module.exports = Intern;

// const newIntern = new Intern('Nano', 999, 'nanofly@gmail.com', 'School of Flight' )

// newIntern.getId()