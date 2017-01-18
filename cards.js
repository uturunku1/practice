$(document).ready(function() {

  $("h1.fadeinout").hover(function() {
    $(this).fadeOut(1000);
    $(this).fadeIn(1000);
  });

  $("#slidedown-body.panel-body").hide();
  $("#slidedown-head.panel-heading").click(function() {
    $("#slidedown-body.panel-body").slideDown("slow");
  });

  $(".panel-body.fadeout").hide();
  $(".panel-heading.fadeout").click(function() {
    $(".panel-body.fadeout").slideDown("slow");
  });

  $(".panel-body.append").hide();
  $(".panel-heading.append").click(function() {
    $(".panel-body.append").fadeToggle("slow");
  });

  $(".panel-heading.toggle").click(function() {
    $(".panel-body.toggle").fadeIn(2000);
  });
  $(".panel-heading.fadeto").click(function() {
    $(".panel-body.fadeto").toggle();
  });


});
