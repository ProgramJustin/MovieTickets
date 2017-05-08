function Ticket(age, time) {
  this.age = age;
  this.time = time;
  }


  Ticket.prototype.calCost = function(age, time) {

      if (age <= 17 && age >= 18 && age >= 65 && time === "11:00am") {



    } else if (age >= 65 || time === "11:00am") {

      return "7.00";

      return
    } else if (age <= 17 && "age" >= 18 &&  time === "11:00am") {

      return "7.00";

    }

  }


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userTime = $("input:radio[name=gumpUno]:checked").val();

    // var realTime = checkTime(userTime);

    alert(typeof userTime);

    var userAge = parseInt(prompt("Enter Age"));

    var newTicket = new Ticket(userAge, userTime);

    newTicket.cost = 7;

    newTicket.calCost(userAge, userTime);



    console.log(newTicket);



    // var userAge = parseInt(prompt("How old are you"));


  });
});
