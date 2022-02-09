const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager')
const employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')

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
  // {
  //   type: 'confirm',
  //   name: 'addMoreMembersPrompt',
  //   message: "Would you like to add more team members?"
  // }
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



//after adding team manager (ONLY BE ABLE TO ADD 1), then more team members will be able to be added via a loop

//when adding team member is done, you return to menu

//when application is exited, html is generated

//functions to ask prompt questions and return answers

const managerGenerator = () => {
  return inquirer.prompt(managerQuestions)
}

const addMoreTeamMembers = () => {
  return inquirer.prompt(addTeamMembers)
}

const engineerGenerator = () => {
  return inquirer.prompt(engineerQuestions)
}

//create a function to initialize app
// const init = () => {
//   managerGenerator()
//     .then((promptData) => {

//       if (managerQuestions.addMoreMembersPrompt === true){
//       addMoreTeamMembers()
//     }
//       else if (!managerQuestions.addMoreMembersPrompt) {console.log(`Didn't add more members.`)}
//       console.log(promptData)
//     }
//     )

// }

const init = () => {
  //start manager prompts
  let engineerArray = [];
  managerGenerator()
    .then((promptData) => {
      //build manager object according to prompts
      const teamManager = new Manager(promptData.name, promptData.id, promptData.email, promptData.officeNumber)
      //log manager object key values
      console.log(teamManager)
      console.log(teamManager.name)
      console.log(teamManager.id)
      console.log(teamManager.email)
      console.log(teamManager.officeNumber)
      //log manager object name 
      teamManager.getName()
      teamManager.getEmail()
      teamManager.getId()
      teamManager.getRole()
      //prompt to add team members
      addMoreTeamMembers()
        .then((promptData) => {
          //if user opts to not add more team members
          if (promptData.addTeam === 'None - my team is complete.') {
            //log team is complete
            console.log('Team is complete.')
            //else if user wants to add more team members
          }
          if (promptData.addTeam === 'Engineer'){
            engineerGenerator()
            .then((promptData) => {
            let engineer = new Engineer(promptData.name, promptData.id, promptData.email, promptData.github)
            console.log(engineer)
            console.log(engineer.name)
            console.log(engineer.id)
            console.log(engineer.email)
            engineerArray.push(engineer)
              console.log(engineerArray)
            })
          }
        }

        )
    }

    )
}

//if team is complete (loop is done), write team to file




//function call to initialize app
init();