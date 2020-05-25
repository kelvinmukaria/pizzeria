$(document).ready(function(){
   function getPizzaFlavor(){
       var flavor = document.getElementById("s1").value;
       return parseInt(flavor);
   }
   
   function getPizzaSize(){
       var size = document.getElementById("s2").value;
       return parseInt(size);
   }

   function getPizzaCrust(){
       var crust = document.getElementById("s3").value;
       return parseInt(crust);
   }

   function getPizzaTopping(){
       var topping = document.getElementById("s4").value;
       return parseInt(topping);
   }

   function getPizzaNumber(){
    var number = document.getElementById("s5").value;
    return parseInt(number);
   }

   function totalAmount(){
       var total = getPizzaSize() + getPizzaTopping() + getPizzaFlavor() + getPizzaCrust() *getPizzaNumber();
       alert(
           "You have ordered " + getPizzaFlavor("")
       )
   }
});