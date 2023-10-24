
    function calculate()
   {

        const milk  = 0.2;
        const egg = 2;
        const sugar = 1;

        var num = document.getElementById('number1').value;
        
        var milkResult = num * milk;
        var eggResult = num * egg;
        var sugarResult = num * sugar;

       document.getElementById("milk").innerText = milkResult;
       document.getElementById("egg").innerText = eggResult;
       document.getElementById("sugar").innerText = sugarResult;
   }
   
   
   
