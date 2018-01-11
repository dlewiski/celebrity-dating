$(document).ready(function() {
  $("#info").submit(function(event) {
    var age = parseInt($("#Age").val());
  if(age > 21) {
    $("#result1").show();
  } else {
    alert("try again!");
  }
  event.preventDefault();
});
});
