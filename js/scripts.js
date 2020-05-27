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
       event.preventDefault();
       var total = (getPizzaSize() + getPizzaTopping() + getPizzaFlavor() + getPizzaCrust() *getPizzaNumber());
       console.log(total);
       alert(
           "You have ordered " + getPizzaNumber() + " pizzas and the total amount is Ksh " + total + "." + " Should you want your order delivered kindly enter your location details in the form below. It was a pleasure to serve and thank you for choosing Pizza Africana as your Outlet of choice. Thank you and welcome again!!! "
       );
   }

$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing the pizzeria.");
    });
    
});