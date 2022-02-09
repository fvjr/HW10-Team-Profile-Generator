const Employee = require('./employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github;
  }

getGithub(){
  console.log(`Engineer's gitHub name is:${this.github}`)
  return `${this.github}`
}

getRole(){
  console.log(`${this.name} is an Engineer`)
  return `Engineer`
}

}

module.exports = Engineer;

const newEngineer = new Engineer('Alec', 456, 'alech@gmail.com', `AH-GITHUB`)

console.log(newEngineer)