// GLOBAL VAR SET TO 5
  var x = 5

// FUNCTION 
  function myAlert() {
	  
// VAR X SET TO 4
    var x = 4;
	  
// GET ELEMENT FROM HTML AND DISPLAYS TEXT 'LOCAL VARIABLE' AND THE VAR
    document.getElementById("answer2").innerHTML = "Local variable: " + x;
}

// ENVOKING/CALLING ON THE GLOBAL VARIABLE  
   myAlert();       
   document.getElementById("answer").innerHTML = "Global variable: " + x;