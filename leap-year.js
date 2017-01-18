//The code responsible for the interaction between the user and the application; handles tasks such as event listening, user input forms, DOM manipulation, display and styling. Even though we haven't written the leapYear() function yet, we already know from our specs that it must take a number and return true or false. This is yet another benefit to identifying and listing out anticipated behaviors before we begin coding.
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".year").text(year);

    if (!result) {  // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });

  //To start coding our business logic using the behavior-driven development process, we'll take our plain English specifications (also known as "specs" or "behavior examples") and implement code that does each of these behaviors. We always want to begin with the simplest possible example that requires the least amount of code to implement, and focus on only one behavior at a time.Often if we have a number of conditions that will be evaluated, the first behavior is what will ultimately be the else statement.
  var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
  };


});
