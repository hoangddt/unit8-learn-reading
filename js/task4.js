var AnswerKey = [
  'Students can use the internet to get more information for their researches',
  'Teachers can use the technology to enhance their teaching strategies',
  'Cell phones are a faster and more effective way to transfer information',
  'Teachers can use computers inside classroom',
  'We can use cell phones to access the internet anywhere'
];
var isStored = false;
var IsSubmitted = [false, false, false, false, false];
var NumberOfQuestion = AnswerKey.length;
var NumberOfCorrectAnswer = 0;

function check_question(question_number) {
  if (IsSubmitted[question_number-1]) 
  {
    return;
  } else {
    IsSubmitted[question_number-1] = true;
  }
  var eleId = "#" + "question-" + question_number;
  var inputEle = eleId + " input";
  var answer = $(inputEle).val().trim();
  console.log(inputEle, " Answer: ", answer);

  result = AnswerKey[question_number-1]
  answerMsg = "The answer is: " + result;

  if (answer.toLowerCase() === result.toLowerCase())
  {
    NumberOfCorrectAnswer++;
    console.log("Correct!");
    $('<p></p>', {
      text: "Correct! " + answerMsg,
      class: 'bg-success'
    }).appendTo(eleId);
  }
  else
  {
    console.log("Incorrect");
    $('<p></p>', {
      text: "Incorrect! " + answerMsg,
      class: 'bg-danger'
    }).appendTo(eleId);
  }

  $(inputEle).attr('disabled', 'disabled');
  $(eleId + " button").attr('disabled', 'disabled');
}

function check_all_question() {
  stopTimer();
  for (var i = 1; i <= AnswerKey.length; i++) {
    check_question(i);
  }
  store_result();
  show_popup_result();
}
// For pop-up
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
  timeOutCallback = check_all_question;
  bigTime = 600;
  startTimer();
});

function check_is_stored() {
  if (!isStored) {
    stopTimer();
    for (var i = 1; i <= AnswerKey.length; i++) {
      check_question(i);
    }
    store_result();
  }
}

function store_result() {
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("task4", [NumberOfCorrectAnswer, NumberOfQuestion]);
    isStored = true;
  }
}