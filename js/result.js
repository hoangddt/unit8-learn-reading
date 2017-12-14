function show_popup_result() {
  var popup_wrapper = $('.popup');// $('<div></div>', {class: 'popup'});
  var msg1 = $('<h2></h2>', {
    text: 'You have answered ' + NumberOfCorrectAnswer + '/' + NumberOfQuestion + ' correctly!'
  });
  var msg2 = $('<h3></h3>', {
    text: 'Your score is: ' + Math.round(NumberOfCorrectAnswer*100/NumberOfQuestion) + "%!"
  });
  popup_wrapper.prepend(msg1).prepend(msg2);
  popupOpenClose(popup_wrapper);
}

function popupOpenClose(popup) {
  
  /* Add div inside popup for layout if one doesn't exist */
  if ($(".wrapper").length == 0){
    $(popup).wrapInner("<div class='wrapper'></div>");
  }
  
  /* Open popup */
  $(popup).show();

  /* Close popup if user clicks on background */
  $(popup).click(function(e) {
    if ( e.target == this ) {
      if ($(popup).is(':visible')) {
        $(popup).hide();
      }
    }
  });

  /* Close popup and remove errors if user clicks on cancel or close buttons */
  $(popup).find("button[name=close]").on("click", function() {
    if ($(".formElementError").is(':visible')) {
      $(".formElementError").remove();
    }
    $(popup).hide();
  });
}

$(document).ready(function () {
  t1 = localStorage.getItem('task1');
  t2 = localStorage.getItem('task2');
  t3 = localStorage.getItem('task3');
  var t1Msg = "Task 1: " + t1[0] + "/" + t1[2] + " Score: " + Math.round(100*parseInt(t1[0])/parseInt(t1[2])) + "%";
  var t2Msg = "Task 2: " + t2[0] + "/" + t2[2] + " Score: " + Math.round(100*parseInt(t2[0])/parseInt(t2[2])) + "%";
  var t3Msg = "Task 3: " + t3[0] + "/" + t3[2] + " Score: " + Math.round(100*parseInt(t3[0])/parseInt(t3[2])) + "%";
  
  $('#result').append('<h5>' + t1Msg + '</h5>');
  $('#result').append('<h5>' + t2Msg + '</h5>');
  $('#result').append('<h5>' + t3Msg + '</h5>');
});
