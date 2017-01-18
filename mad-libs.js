$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var names=["person1", "person2", "animal","exclamation","verb","noun"];

    names.forEach(function(name) {
      var input= $("input#"+name).val();
      $("."+name).text(input);
    });
    $("#story").show();
    event.preventDefault();
  });

});
