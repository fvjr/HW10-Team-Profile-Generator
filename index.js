const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager')
const employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')

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



//after adding team manager (ONLY BE ABLE TO ADD 1), then more team members will be able to be added via a loop

//when adding team member is done, you return to menu

//when application is exited, html is generated

//functions to ask prompt questions and return answers

const teamGenerator = () => {
  inquirer.prompt(managerQuestions)
    .then((managerData) => {
      const teamManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
      //log manager object key values
      // console.log(teamManager)
      //log manager object name 
      //prompt to add team members
      employeeList.push(teamManager)
      console.log(employeeList)
      addMoreTeamMembers()
    })


}

const addMoreTeamMembers = () => {
  inquirer.prompt(addTeamMembers)
    .then((addTeamData) => {
      if (addTeamData.addTeam === `Engineer`) {
        engineerGenerator()
      }
      else if (addTeamData.addTeam === `Intern`){
        internGenerator()
      }
      else if (addTeamData.addTeam === `None - my team is complete.` ) {
        console.log('Done making team')
        console.log(employeeList)
      }
    })
}

// const engineerGenerator = () => {
//  addMoreTeamMembers(); 
//  return inquirer.prompt(engineerQuestions)

// }

//refactoring
const engineerGenerator = () => {
  inquirer.prompt(engineerQuestions)
    .then((engineerData) => {
      let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
      employeeList.push(newEngineer);
      console.log(employeeList);
      addMoreTeamMembers();
    })
}

const internGenerator = () => {
  inquirer.prompt(internQuestions)
    .then((internData) => {
      let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school)
      employeeList.push(newIntern);
      console.log(employeeList);
      addMoreTeamMembers();
    }
    )
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

// const init = () => {
//start manager prompts

//trying more promises
//   let engineerArray = [];
//   managerGenerator()
//     .then((promptData) => {
//       //build manager object according to prompts
//       const teamManager = new Manager(promptData.name, promptData.id, promptData.email, promptData.officeNumber)
//       //log manager object key values
//       console.log(teamManager)
//       //log manager object name 
//       //prompt to add team members
//     })
//   addMoreTeamMembers()
//     .then((promptData) => {
//       //if user opts to not add more team members 
//       const teamNotDone = promptData.addTeam !== 'None - my team is complete.';
//       if (promptData.addTeam === 'None - my team is complete.') {
//         //log team is complete
//         console.log('Team is complete.')
//         //else if user wants to add more team members
//       }
//       if (promptData.addTeam === 'Engineer') {
//         engineerGenerator()
//           .then((promptData) => {
//             let engineer = new Engineer(promptData.name, promptData.id, promptData.email, promptData.github)
//             console.log(engineer)
//             engineerArray.push(engineer)
//             console.log(engineerArray)
//           })
//       }
//     if (teamNotDone){
//       addMoreTeamMembers()
//     } }
//     )
// }

//if team is complete (loop is done), write team to file


//trying with new promises
const init = () => {
  //start manager prompts
  teamGenerator()
}





//function call to initialize app
init();