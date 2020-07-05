// IIFE -Immediately Ivoked Function Expression
(function () {
    /* COMP125(Sec.004) - Assignment 2
        Student Name - Kristian Waithe
        App.Js used for Mini Portfolio functionality    
        */
      Start();
  });

  // named function
function Start() {
    console.log("%cApp Started...", "color:white; font-size: 24px;");
  
    let title = document.title;
  
    title = title.toLowerCase();
  
    console.log(`The title of the page is ${title}`);
  
    let navAnchors = document.querySelectorAll("li a");
  
    for (const anchor of navAnchors) {
      let anchorString = anchor.getAttribute("href");
      anchorString = anchorString.substring(0, anchorString.length - 5);
  
      if (
        (title === "home" && anchorString === "index") ||
        title === anchorString
      ) {
        anchor.className = "nav-link active";
      }
    }
  
    if (title === "About Me") {
      writeAboutMe();
    }
  
    window.addEventListener("load", Start);
  }

// Content for index (Landing / Bio) Page.
writeAboutMe();
function writeAboutMe(){
if(document.getElementById("myName"))  
{let myName = "My name is Kris Waithe";
document.getElementById("myName").innerHTML = myName;
}
if(document.getElementById("welcomeMessage"))  
{let welcomeMessage = "Welcome to my portfolio";
document.getElementById("welcomeMessage").innerHTML = welcomeMessage;
}
if(document.getElementById("aboutText"))
{let aboutText = 
`I'm a second semester Software Engineering Tecnologies student looking to further my knowledge in the field of tech. 
 I have always found interest in the tech side of everything and I look forward to learning much more as a student at Centennial College!
 `;
document.getElementById("aboutText").innerText = aboutText;
}
}

// Content for Projects page to be broken into 3 parts
mainProject();
function mainProject(){
if(document.getElementById("projects"))
{
  let projectHeading = "My Projects";
 document.getElementById("projects").innerHTML = projectHeading;
}
/*Description of all the projects*/
if(document.getElementById("projectsText"))
{
let projectDescription = 
`1st Project - Guitar
I'm a casual guitar player who's played many instruments since middle school. Recently my guitar colection has grown with the fender acoustic!
I've dabbled in music since I was a child and music as well as playing instruments is a gigantic part of who it is I am. 

2nd Project - Streaming
I've been a part time streamer for around 2 years now, first getting into it while competiting in a few online games. I've played competitively in multiple games over the years.
I look forward to having a better schedule that will allow me to grow my community further.

Third Project - Video Games
I imagine it doesn't come as a surprise that someone who streams also partakes in video games.
I've been playing games since I was a toddler when I got my first console (the NES).
Since then I've jumped from platform to platform finally landing on PC gaming. 
I'm also some what of a collector having memorabilia from all kinds of games and platforms!`;
document.getElementById("projectsText").innerText = projectDescription;
}
}
