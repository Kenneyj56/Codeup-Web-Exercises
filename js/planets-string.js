(function(){
    "use strict";

    var planetsString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
    var planetsArray = planetsString.split(',');

    // TODO: Convert planetsString to an array, save it to planetsArray.
    
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsBrString = planetsArray.join("<br>")
    
    console.log (planetsBrString)


    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var planetsBrStringg = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";
    console.log (planetsBrStringg)

})();