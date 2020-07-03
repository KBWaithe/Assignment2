// IIFE -Immediately Ivoked Function Expression
(function(){

    


    // named function
    function Start()
    {
        console.log('%cApp Started...', "color:white; font-size: 24px;");

        Second();
    } 

    function Second()
    {
        console.log("This is second function");
    }



    window.addEventListener("load", Start);

})();