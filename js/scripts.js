function Ticket(age, time) {
  this.age = age;
  this.time = time;
  }



  Ticket.prototype.calCost = function(age, time) {

      if (age <= 17 && age >= 18 && age >= 65 && time === "11:00am") {

    } else if (age >= 65 || time === "11:00am") {

      return "7.00";


    } else if (age <= 17 && age >= 18 &&  time === "11:00am") {

      return "7.00";

    } else if (age <= 17 && age >= 18 && time === "12:00pm" || time === "5:00pm" || time === "5:30pm" || time === "6:00pm" || time === "9:00pm" || time === "9:30pm") {
      return "11.00";


    }
  }

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    // var userTime = $("input:radio[name=gumpUno]:checked").val();

    this.time = $("input:radio:checked").val();


    // var realTime = checkTime(userTime);

    alert(typeof this.time);

    var userAge = parseInt(prompt("Enter Age"));

    var newTicket = new Ticket(userAge, this.time);



    newTicket.calCost(userAge, this.time);

    console.log(newTicket);

    // var userAge = parseInt(prompt("How old are you"));


  });
});
