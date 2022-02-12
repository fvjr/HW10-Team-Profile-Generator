function addManagerCards(manager) {
  console.log(manager.getName())
  return `
  <div class="col">
  <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.getName()}</li>
      <li class="list-group-item">Role: ${manager.getRole()}</li>
      <li class="list-group-item">ID:${manager.getId()}</li>
      <li class="list-group-item">Email:${manager.getEmail()}</li>
      <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
  </div>
  </div>
  `
}

function addEngineerCards(engineer) {
  console.log(engineer.getName())
  return `
  <div class="col">
  <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${engineer.getName()}</li>
      <li class="list-group-item">Role: ${engineer.getRole()}</li>
      <li class="list-group-item">ID:${engineer.getId()}</li>
      <li class="list-group-item">Email:${engineer.getEmail()}</li>
      <li class="list-group-item">GitHub:${engineer.getGithub()}</li>
    </div>
    </div>
  `
}

function addInternCards(intern) {
  console.log(intern.getName())
  return `
  <div class="col">
  <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${intern.getName()}</li>
      <li class="list-group-item">Role: ${intern.getRole()}</li>
      <li class="list-group-item">ID:${intern.getId()}</li>
      <li class="list-group-item">Email:${intern.getEmail()}</li>
      <li class="list-group-item">School:${intern.getSchool()}</li>
    </div>
    </div>
  `
}

function insertTeamCards(employeeList) {
  let html = [];
  // employeeList.forEach(employee => {
  //   console.log(employee.getRole() === 'Manager')
  // });
  // console.log(employeeList)
  html.push(employeeList.filter(employee => employee.getRole() === 'Manager').map(manager => addManagerCards(manager)));
  html.push(employeeList.filter(employee => employee.getRole() === 'Engineer').map(engineer => addEngineerCards(engineer)).join(''));
  html.push(employeeList.filter(employee => employee.getRole() === 'Intern').map(intern => addInternCards(intern)).join(''));
  return html.join('')
}

function generateHTML(employeeList) {

  return `<!doctype html>
  <html lang="en">
  
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  
    <title>Team Generator</title>
  </head>
  
  <body>
    <!-- jumbotron start -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">My Team</h1>
      </div>
    </div>
    <!-- jumbotron end -->
  
    <!-- container start -->
    <div class="container">
      <div class="row" id = "card-rows">

${insertTeamCards(employeeList)}

      </div>
    
      
<!-- container end -->
    </div>
  
  
  
  </body>
  
  </html>`}

module.exports = generateHTML;