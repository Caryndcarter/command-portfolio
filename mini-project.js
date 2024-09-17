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
    {
      type: 'input',
      message: 'What is your phone number?',
      name: 'phone',
    },
    {
      type: 'input',
      message: 'Where do you want to store the files?',
      name: 'files',
    }
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
    let linkedIn = response.LinkedIn; 
    let github = response.Github; 
    let phone = response.phone;
    let content = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Portfolio</title>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
    <header class="myname"> 
          <h1>${name}/h1>
            <nav>
            <ul>
                <li>
                    <a href="#About-me">About Me</a>
                </li> 
                <li>
                    <a href="#My-work">My Work</a>
                </li> 
                <li>
                    <a href="#Contact-me">Contact Me</a>
                </li> 
            </ul>
        </nav>
    </header>
    
    <section class="hero">
        <div class="hero-text">
            <h2>I am ${name}</h2>
            <p>I'm looking to become a Full-Stack Developer!</p>
        </div>
    </section>
    
        <main>
    
        <div class="flex-container1">
        <section id="About-me">
        <div class="content-title1"
        <h3>About me</h3> 
        </div> 
        <div class="aboutmetext">
            <p>Location: ${location}</p> 
            <p>Bio: ${bio}</p>
        </div>
        </section>
        </div>
          
    
          <div class="flex-container3">
          <section id="Contact-me">
            <div class="content-title3"
            <h3>Contact Me</h3>
            </div>
            <div class="contact-info">
                
                <section>
                <h4>My LinkedIn</h4>
                <a href="${linkedIn}" target="_blank" class="github-link">LinkedIn</a>
                </section>
            
                <section>
                <h4>My phone number</h4>
                <p>${phone}</p>
                </section>
                
                <section>
                <a href="${github}" target="_blank" class="github-link">Git Hub</a>
                </section>
                
            </div>
          
            </div>
        </section>
            </div>
    
        </section>
        
    </main>
    <script src="script.js"></script>
    </body>
    
    </html>`

    writeHTML(content, response.files)

};




function writeHTML (content, location) {


  fs.writeFile(`${location}`, content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

}; 
