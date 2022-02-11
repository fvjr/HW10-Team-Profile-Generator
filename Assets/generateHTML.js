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
      <!-- first row start -->
      <div class="row" id = "card-rows">
      TESTTTTTT11223151651
        <!-- first card start -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Role: Manager</li>
              <li class="list-group-item">ID:1</li>
              <li class="list-group-item">Email:sdfsdfsdf@fake.com</li>
              <li class="list-group-item">Office Number:1</li>
            </ul>
          </div>
        </div>
        <!-- first card end -->
        <!-- second card start -->
        <div class="col">
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: 2222222</li>
              <li class="list-group-item">Role: Engineer</li>
              <li class="list-group-item">ID:2</li>
              <li class="list-group-item">Email:sdfsdfsdf@fake.com</li>
              <li class="list-group-item">Office Number:2</li>
            </ul>
          </div>
          <!-- second card end -->
        </div>
        <!-- first row end -->
      </div>
      <!-- container end -->
    </div>
  
  $
  
  ${employeeList[0].name}
  ${employeeList[0].role}
  ${employeeList[0].officeNumber}
  ${employeeList[0].email}

  ${employeeList[1].name}
  ${employeeList[1].role}
  ${employeeList[1].id}
  ${employeeList[1].email}
  
  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"></script>
      <script src="./index.js"
  
  
  </body>
  
  </html>`}

module.exports = generateHTML;