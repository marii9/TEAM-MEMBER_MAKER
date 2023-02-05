const inquirer = require('inquirer');
const fs = require('fs');
const { generateHTML } = require('./src/template');
const path = require('path');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const distDirectory = path.join(__dirname, 'dist');

if (!fs.existsSync(distDirectory)) {
  fs.mkdirSync(distDirectory);
}

// const questions = [
//     {
//         type: 'input',
//         name: 'Name',
//         message: 'Enter the team manager’s name:'
//     },
//     {
//         type: 'input',
//         name: 'ID',
//         message: 'Enter the team manager’s ID:'
//     },
//     {
//         type: 'input',
//         name: 'Email',
//         message: 'Enter the team manager’s email address:'
//     },
//     {
//         type: 'input',
//         name: 'Office Number',
//         message: 'Enter the team manager’s office number:'
//     }
// ];

const team = [];

const askForTeamMember = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'Role',
        message: 'Select the role for the next team member:',
        choices: ['Engineer', 'Intern', 'Manager', 'No more team members'],
      },
      {
        type: 'input',
        name: 'Name',
        message: 'Enter the team member’s name:',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'Enter the team member’s ID:',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Enter the team member’s email address:',
      },
      {
        when: function (answers) {
          return answers.Role === 'Engineer';
        },
        type: 'input',
        name: 'GitHub',
        message: 'Enter the engineer’s GitHub username:',
      },
      {
        when: function (answers) {
          return answers.Role === 'Intern';
        },
        type: 'input',
        name: 'School',
        message: 'Enter the intern’s school:',
      },
      {
        when: function (answers) {
          return answers.Role === 'Manager';
        },
        type: 'input',
        name: 'Office Number',
        message: 'Enter the manager’s office number:',
      },
    ]);
  };

const askForTeamMembers = () => {
    inquirer
        .prompt(askForTeamMember)
        .then(answers => {
            team.push(answers);
            return askForTeamMember();
        })
        .then(answers => {
            if (answers.Role === 'No more team members') {
                const filePath = path.join(distDirectory, 'team.html');
                fs.writeFile(filePath, generateHTML(team), err => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
                return Promise.resolve();
            }
            if (answers.Name && answers.ID && answers.Email) {
                team.push(answers);
            }
            return askForTeamMembers();
        });
};

askForTeamMembers();