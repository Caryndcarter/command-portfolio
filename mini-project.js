import inquirer from 'inquirer';
import fs from 'fs';


inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'What is your bio?',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn?',
        name: 'LinkedIn',
      },
    {
      type: 'input',
      message: 'What is your Github?',
      name: 'Github',
    },
  ])
  .then((response) => {
    console.log(response);
    createHTML(response);
  }
  );


function createHTML(response) {
    let name = response.name; 
    let location = response.location; 
    let bio = response.bio; 
    //let linkedIn = response.LinkedIn; 
    //let github = response.Github; 
    let content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>${name}</h2>
   <h2>${location}</h2>
   <h2>${bio}</h2>


</body>
</html>`

    writeHTML(content)

};




function writeHTML (content) {

  fs.writeFile('/Users/caryncarter/text.html', content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

}; 
