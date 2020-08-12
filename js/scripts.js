$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    const firstNameInput = $("input#firstName").val();
    const lastNameInput = $("input#lastName").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(LastNameInput);

    $("letter").show();

    event.preventDefault();
  }); 
});