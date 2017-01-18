
$(document).ready(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $("form#transportation_survey").hide();

    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var mode= $(this).val();
      $("#work-responses").append(mode+"<br>");
      $("#work-responses").show();
    });
//displaying show before the each loop, unlike the previous each loop.
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var mode2= $(this).val();
      $("#fun-responses").append(mode2+"<br>");
    });

  });
});
