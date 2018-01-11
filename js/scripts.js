$(document).ready(function() {
  $("#info").submit(function(event) {
    var age = parseInt($("#Age").val());
    var gender = $("#gender").val();
    var genre = $("#genre").val();

    if(age > 21 && gender === "female" && genre === "Comedy") {
      $("#result1").show();
    } else if (age < 21) {
      $("#result2").show();
    } else if (gender === "male" && genre === "Action/Adventure") {
      $("#result4").show();
    } else {
      alert("try again!");
    }
    event.preventDefault();
  });
});
