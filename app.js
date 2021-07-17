$(document).ready(function () {
  // prevent from refresh after pressing the enter button
  $(".todo-input").keydown(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });
  // function to be executed when the field is being submitted by pressing the enter button
  $(".todo-input").on("keyup", function (e) {
    // will be triggered when the text field is not blank after pressing the enter button
    if (e.keyCode == 13 && $(".todo-input").val() != "") {
      // create a div and get the data from input field
      let todo = $("<div class='todo'></div>").text($(".todo-input").val());
      // create a complete button with animation
      let done = $("<i class='far fa-check-circle'></i>").click(function () {
        let p = $(this).parent();
        p.fadeOut(function () {
          $(".comp").append(p);
          p.fadeIn();
        });
      });
      // create a remove button with animation
      let del = $("<i class='fas fa-minus-circle'></i>").click(function () {
        let p = $(this).parent();
        p.fadeOut(function () {
          p.remove();
        });
      });
      // when getting the data, also get the done and del icon
      todo.append(done, del);
      // by default the task will go to "not completed" area first
      $(".not-comp").append(todo);
      // after the data is being transfer, clear the data from input field
      $(".todo-input").val("");
    }
  });
});
