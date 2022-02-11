const Employee = require('./employee')

class Intern extends Employee{
  constructor(name, id, email, school ){
  super(name, id, email)
  this.school = school;
}

getSchool() {
  return this.school
}

getRole(){
  return `Intern`
}

}

module.exports = Intern;

// const newIntern = new Intern('Nano', 999, 'nanofly@gmail.com', 'School of Flight' )

// newIntern.getId()