const Employee = require('./employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github;
  }

getGithub(){
  return this.github
}

getRole(){
  return `Engineer`
}

}

module.exports = Engineer;

// const newEngineer = new Engineer('Alec', 456, 'alech@gmail.com', `AH-GITHUB`)

// console.log(newEngineer)