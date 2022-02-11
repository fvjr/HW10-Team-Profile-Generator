const inquirer = require('inquirer');
const fs = require('fs');
// const manager = require('./lib/manager')
// const employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const generateHTML = require('./Assets/generateHTML')

//stores employee data
let employeeList = [];

//prompts for user input for team members and their information
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?"
  },
  {
    type: 'number',
    name: 'id',
    message: "What is the team manager's employee ID number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email address?"
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: "What is the team manager's office number?"
  },
]

//asks if user wants to complete team or add more members
const addTeamMembers = {
  type: 'list',
  name: 'addTeam',
  message: "What team member would you like to add?",
  choices: [
    `Engineer`,
    `Intern`,
    `None - my team is complete.`
  ]
}

//prompts for info on engineers
const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?"
  },
  {
    type: 'number',
    name: 'id',
    message: "What is the engineer's employee ID number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the engineer's email address?"
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the engineer's GitHub name?"
  },
]

//prompts for info on interns
const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?"
  },
  {
    type: 'number',
    name: 'id',
    message: "What is the intern's employee ID number?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the intern's email address?"
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school's name?"
  },
]


//function to create engineers
const engineerGenerator = () => {
  inquirer.prompt(engineerQuestions)
    .then((engineerData) => {
      let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
      // newEngineer.role = 'Engineer'
      employeeList.push(newEngineer);
      addMoreTeamMembers();
    })
}

//function to create interns
const internGenerator = () => {
  inquirer.prompt(internQuestions)
    .then((internData) => {
      let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school)
      // newIntern.role = 'Intern'
      employeeList.push(newIntern);
      addMoreTeamMembers();
    }
    )
}
//function to add more team members
const addMoreTeamMembers = () => {
  inquirer.prompt(addTeamMembers)
    .then((addTeamData) => {
      if (addTeamData.addTeam === `Engineer`) {
        engineerGenerator()
      }
      else if (addTeamData.addTeam === `Intern`) {
        internGenerator()
      }
      else if (addTeamData.addTeam === `None - my team is complete.`) {
        console.log('Done making team')
        employeeList.forEach(employee => {         
            writeToFile('employeeList.html', (employeeList), err => {
            if (err) {
              console.log(err);
            }
            console.log('Team generated')
          })
        });
}})}
    
//main function to make manager and start building team
const teamGenerator = () => {
  inquirer.prompt(managerQuestions)
    .then((managerData) => {
      const teamManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
      // teamManager.role = 'Manager'
      employeeList.push(teamManager)
      addMoreTeamMembers()
    })
}

//when application is exited, html is generated
const writeToFile = (fileName, employeeList) => {
  fs.writeFileSync(fileName, generateHTML(employeeList))
}

//initializes app
const init = () => {
  //start team builder prompts
  teamGenerator()
}
//function call to initialize app
init();

