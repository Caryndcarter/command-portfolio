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
      <link rel="stylesheet" href="/style.css">
      <style>
      * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
  }
  
  html{
    scroll-behavior: smooth;
  }
  
  header {
    justify-content: space-between;
    display: flex;
    padding: 20px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      background-color:black;
      color: #ffffff;
  }

  h1 {
    margin: 5px;
    display: inline-flex;
    font-size: 45px; font-style: italic; 
  }

  nav ul {
    padding: 20px;
    display: flex;
    flex-direction: row;
    list-style: none;
    text-decoration: none;
  }

  nav ul li a {
    margin: 15px;
    font-size: 23px; font-style: italic; 
    color: #ffffff;
  }

  ul li a:hover{
    background-color: rgb(88, 83, 83);
  }

  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(projectpics/pexels-jplenio-1133505.jpg);
    height: 650px; width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
 
  .hero-text {
    padding-top: 40px;
    text-align: center;
    font-size: 50px; font-style: italic;
    color: #ffffff;
  }

  .img123 {
    position: relative; top: 30px; left: 30px;
    width: 200px;
    border:#ffffff; border-style: double; border-width: 5px; border-radius: 100px;
  }

  .flex-container1 {
    height: 328.48px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color:black;
  }

  #About-me {
    height: 328.48px;
    padding: 0px;
    width: 100%;
    display: inline-flex;
      color: #ffffff;
  }

  .content-title1 {
    width: 30%;
    border-right-width: 8px; border-right-style: outset; border-right-color: #ffffff; height: 200px; margin-top: 66px; margin-bottom: 66px;
    padding: 85px; padding-left: 130px;
    font-size: 40px; font-style: italic;
  }

  .aboutmetext {
    text-align: center;
    width: 70%;
    padding: 120px;
    font-size: 23px; font-style: italic;
  }

  .flex-container2 {
    height: 328.48px;
    border-top-width: 1px; border-top-style: double; border-top-color:#ffffff85; 
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color:black; 
  }

  #My-work {
    padding: 0px;
    width: 100%;
    display: contents; 
      color: #ffffff;
  }

  .content-title2 {
    width: 30%;
    border-right-width: 8px; border-right-style: outset; border-right-color: #ffffff; height: 200px; margin-top: 66px; margin-bottom: 66px;
    padding: 85px; padding-left: 130px;
    font-size: 40px; font-style: italic;
  }

  .projects {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    padding: 80px;
    font-size: 23px; font-style: italic;
  }

  a {
    background-color: rgba(0, 0, 0, 0.274);
    color: #ffffff;
    text-decoration: none;
  }

  .First-Website .first-website-title {
    text-align: center;
    height: 140px; width: 140px;
    background-image: url(projectpics/firstwebpic.png); 
    background-size: 400px;
    border: #ffffff; border-style: groove; border-width: 5px; border-radius: 20px;
  }

  .first-website-title h4{
    padding-top: 140px;
  }

  .Survey-Website .survey-website-title {
    text-align: center;
    height: 140px; width: 140px;
    background-image: url(projectpics/surveywebpic.png); 
    background-size: 400px;
    border: #ffffff; border-style: groove; border-width: 5px; border-radius: 20px;
  }

  .survey-website-title h4{
    padding-top: 140px;
  }
  
  .RPS-Website .rps-website-title {
    text-align: center;
    height: 140px; width: 140px;
    background-image: url(projectpics/rockpaperscissors.png); 
    background-size: 400px;
    border: #ffffff; border-style: groove; border-width: 5px; border-radius: 20px;
  }

  .rps-website-title h4{
    padding-top: 140px;
  }

  .flex-container3 {
    height: 328.48px;
    border-top-width: 1px; border-top-style: double; border-top-color:#ffffff85; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color:black;
  }

  #Contact-me {
    padding: 0px;
    width: 100%;
    display: contents;
    width: 100%;
      color: #ffffff;
  }

  .content-title3 {
    width: 30%;
    border-right-width: 8px; border-right-style: outset; border-right-color: #ffffff; height: 200px; margin-top: 66px; margin-bottom: 66px;
    padding: 85px; padding-left: 130px;
    font-size: 40px; font-style: italic;
  }
   
  .contact-info {
    height: 328.48px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    width: 70%;
    padding: 150px;
    font-size: 23px; font-style: italic;
  }

  .github-link {
    font-weight: bold;
    color: #ffffff;
  }
  .github-link:hover{
    background-color: rgb(88, 83, 83);
  }
</style>
</head>

<body>
<header class="myname"> 
      <h1>${name}<h1>
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
    <div class="content-title1">
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
        <div class="content-title3">
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
