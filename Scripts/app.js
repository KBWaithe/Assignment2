// IIFE -Immediately Ivoked Function Expression
(function(){

    


    // named function
    function Start()
    {
          console.log('%cApp Started...', "color:white; font-size: 24px;");

        let title = document.title;

        title = title.toLowerCase();

        console.log(`The title of the page is ${title}`);
        
        let navAnchors = document.querySelectorAll("li a");
        
        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substring(0,anchorString.length-5);

        if((title === "home") && (anchorString === "index") || (title === anchorString))
         {
            anchor.className = "nav-link active";
         }
        }
        // Step 1. Hook into the element
            let jumbotron = document.getElementsByClassName("jumbotron")[0];

            if(jumbotron)
            {
        // Adding content to biopage
        aboutMe();
        function aboutMe(){
        
            if(document.getElementById("myName"))  
            
            {let myName = "Kris Waithe";
                document.getElementById("myName").innerHTML = myName;
            }
    
            if(document.getElementById("welcomeMessage"))  
            
            {let welcomeMessage = "Welcome to my homepage";
                document.getElementById("welcomeMessage").innerHTML = welcomeMessage;
            }
if(document.getElementById("aboutText"))
{let aboutText = 
`I'm a second semester Software Engineering Tecnologies student looking to further my knowledge in the field of tech. I have always found interest in the tech side of everything
and I look forward to learning much more as a student at Centennial College!
 `;
document.getElementById("aboutText").innerText = aboutText;
}
            

        // Step 2. Create a new element
            let newParagraph = document.createElement("p");

        // Step 3. Configure the new element
            newParagraph.textContent = title;

        // Step 4. Attach the new element
        jumbotron.appendChild(newParagraph);
    }

    } 

    


    window.addEventListener("load", Start);

})();