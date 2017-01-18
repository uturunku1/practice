$(document).ready(function() {
  var flavors, text, fLen, i;
  flavors= ["vanilla", "chocolate", "coconut"];
  text= "<ul>";
  fLen= flavors.length;
  for(i=0;i<fLen;i++){
    text+="<li>"+flavors[i]+"</li>";
  }
  text+="</ul>";
  document.getElementById("demo").innerHTML= text;

  var numbers=[2,3,4];
  myArray= function() {
    var newnumbers = numbers.map(function(number) {
      return number* document.getElementById('multiplywith').value;
    });
    document.getElementById('newarray').innerHTML=newnumbers;
  }

  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var list=$("input#food").val();
    var items=list.split(",");
    items.sort();
    var itemsList="<ul>"
    items.forEach(function(item) {
      itemsList+="<li>"+item.toUpperCase();+"</li>";
    });
    itemsList+="</ul>"
    document.getElementById("list").innerHTML=itemsList;
    $(".special").text(items[0]);
    $("#shoppinglist").show();
  });



  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var countto = parseInt($("input#countto").val());
    var countby = parseInt($("input#countby").val());
    var x;

    for(x=0;x<countto;x+=countby){
      
      document.getElementById('output').innerHTML += "I count " +(x)+ " </br>";;
    }

  });

});
