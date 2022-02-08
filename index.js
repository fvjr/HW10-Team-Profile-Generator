const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager')

//prompts for user input for team members and their information


//team manager's name, employee id, email address, and office number

const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is the team manager's name?"
  },
  {
    type: 'input',
    name: 'managerID',
    message: "What is the team manager's employee ID number?"
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the team manager's email address?"
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is the team manager's office number?"
  },
  {
    type: 'confirm',
    name: 'addMoreMembersPrompt',
    message: "Would you like to add more team members?"
  }
]

// const addTeamMembers = {
//   type: 'confirm',
//   name: 'addMoreMembersPrompt',
//   message: "Would you like to add more team members?"
// }
//after adding team manager (ONLY BE ABLE TO ADD 1), then more team members will be able to be added via a loop
//menu with option (confirm y/n)

//when adding team member is done, you return to menu


//when application is exited, html is generated



//functions to ask prompt questions and return answers

const managerGenerator = () => {
  return inquirer.prompt(managerQuestions)
}

const addMoreTeamMembers = () => {
  return inquirer.prompt(addTeamMembers)
}

//create a function to initialize app
const init = () => {
  managerGenerator()
    .then((promptData) => {
      console.log(promptData)
    }
    )

}






//function call to initialize app
init();