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
        
        for (const anchor of navAnchors) {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substring(0,anchorString.length-5);

        if((title === "home") && (anchorString === "index") || (title === anchorString))
    {
        anchor.className = "nav-link active";
    }

        console.log(anchorString);
        }
        

    } 

    


    window.addEventListener("load", Start);

})();