function addManagerCards(manager){
  console.log(manager.getName())
  return `
  <li> ${manager.getName()}</li>
  `

}

function addEngineerCards(engineer){
  console.log(engineer.getName())
  return `
  <li> ${engineer.getName()}</li>
  `

}

function addInternCards(intern){
  console.log(intern.getName())
  return `
  <li> ${intern.getName()}</li>
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
      <div class="row">

${insertTeamCards(employeeList)}

      </div>
    
      
<!-- container end -->
    </div>
  
  
  
  </body>
  
  </html>`}

module.exports = generateHTML;