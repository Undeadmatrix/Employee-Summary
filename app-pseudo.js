const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
// create a variable [your_team_members] to store an empty array, later to be populated with your team members
const teamMembers = [];
​
// create variable [id_array] to store ids for the employees (not the office number)
const idArray = [];
​
function startApp() {
​
  function createEmpManager() {
    console.log("Please build your team");
​
    // inquriy prompt with array of questions for manager name, manager id, email, and office number
    inquirer
      .prompt([
        {
          // ask for manager's name
​
          // validate user input for not a empty string. return true or if false, return a message
​
        },
        {
          // ask for manager's id
 
          // validate user input for numbers; return true or if false, return a message
​
        },
        {
          // ask for manager's email
​
          // validate user input for correct email format; return true or if false, return a message
​
        },
        {
          // ask for manager's office number
​
          // validate user answer for number; return true or if false, return a message
​
        },
      ])
      .then((answers) => {
        // create a manager variable to store new manager object created with the imported Manager class
        // initialize it with user answers for name, id, email, office number.
​
​
        // push newly created manager object to [your_team_members]
​
​
        // push id from user answer to [id_array]
​
​
        // call createEmpTeam to start creat the team for the manager
        createEmpTeam();
      });
  }
​
  // create createEmpTeam function with logic to create manager's team
  function createEmpTeam() {
    // prompt with a list of choices for the types of employees to create - "Engineer", ""Intern", and "No more team member to add"
    inquirer
      .prompt([
        {
          // ask for choice for type of employee to create
          type: "list",
          name: "memberChoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((userChoice) => {
        //
        switch (userChoice.memberChoice) {
          case "Engineer":
            // call function to add engineer
            addEmpEngineer();
            break;
          case "Intern":
            // call function to add intern
            addEmpIntern();
            break;
          default:
            // call function to build team
            buildEmpTeam();
        }
      });
  }
​
  function addEmpEngineer() {
    inquirer
      .prompt([
        {
          // ask for engineer's name
​
          // validate the name is not empty; return true or if false, return a message
​
        },
        {
          // ask for engineer's id
​
​
          // validate the id is numbers and the id has not been taken; return true or 
          // if false, just return a reminder message
​
        },
        {
          // ask for engineer's email
​
          // validate email for correct email format
​
        },
        {
          // ask for gibhub user name
​
          // validate user name is not empty; return true or if false, just return a user friendly message
​
        },
      ])
      .then((answers) => {
        // create an engineer object with user answers and store it to a constant variable
​
​
        // push newly created engineer object to [your_team_members]
​
​
        // push engineer id to id array
​
​
        // call function createEmpTeam 
        createEmpTeam();
      });
  }
​
  function addEmpIntern() {
    inquirer
      .prompt([
        {
          // ask for intern's name
​
​
          // validate name is not empty; return true or if false, return a message
​
        },
        {
          // ask for intern's id
 
​
          // validate id is number and id has not been taken; return true or if false, return a message
​
        },
        {
          // ask for intern's email
​
          // validate email for correct email format; return trur or if false, return a message
​
        },
        {
          // ask for intern's school
​
​
          // validate school is not empty;  return true or if false, return a message
​
        },
      ])
      .then((answers) => {
​
        // create an intern object and intialize it wirh user's answers; assign it to a constant variable
​
​
        // push the newly created intern object to [your_team_members]
​
​
        // push id to id array
​
​
        // call function createEmpTeam
        createEmpTeam();
      });
  }
​
  function buildEmpTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
​
    // call function 'render' passing [your_team_members] array as input argument
    // use the return value from render function as data to fs.writeFileSync function
​
  }
​
  createEmpManager();
}
​
startApp();