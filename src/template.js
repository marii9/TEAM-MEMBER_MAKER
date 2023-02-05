const generateHTML = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  </head>
  <body>
    <div class="container mt-5">
      <div class="row">
        ${data.map(member => `
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h2 class="card-title">${member.Name}</h2>
                <h3 class="card-title">${member.Role}</h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${member.ID}</li>
                  <li class="list-group-item">Email: ${member.Email}</li>
                  ${member['Office Number'] ? `<li class="list-group-item">Office Number: ${member['Office Number']}</li>` : ''}
                  ${member.GitHub ? `<li class="list-group-item">GitHub: ${member.GitHub}</li>` : ''}
                  ${member.School ? `<li class="list-group-item">School: ${member.School}</li>` : ''}
                </ul>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </body>
  </html>`;
};

module.exports = {
  generateHTML: generateHTML
};