let btn1Element = document.getElementById("btn1");
let btn2Element = document.getElementById("btn2");
let btn3Element = document.getElementById("btn3");

let questionElement = document.getElementById("question");

let questions = [
  "Which is the biggest country in Europe ?",
  "Which is the tallest building ?",
  "Which is the biggest ocean ?",
];
let question1Alternative = ["Italy", "Russia", "Albania"];
let question2Alternative = [
  "Empare State Building",
  "Burj Khalifa",
  "Shanghai Tower",
];
let question3Alternative = ["Atlantic Ocean", "North Ocean", "Pacific Ocean"];

questionElement.innerText = questions[0];
btn1Element.innerText = question1Alternative[0];
btn2Element.innerText = question1Alternative[1];
btn3Element.innerText = question1Alternative[2];

let questionNumber = 0;
let quizResult = 0;
let h1Element = document.getElementById("h1");
function onSelect(event) {
  btn1Element.classList.remove("selected");
  btn2Element.classList.remove("selected");
  btn3Element.classList.remove("selected");
  let selectedBtn = event.target;
  selectedBtn.classList.add("selected");
}

function onNext() {
  let selectedBtnElement;
  if (btn1Element.classList.contains("selected")) {
    selectedBtnElement = btn1Element;
  }
  if (btn2Element.classList.contains("selected")) {
    selectedBtnElement = btn2Element;
  }
  if (btn3Element.classList.contains("selected")) {
    selectedBtnElement = btn3Element;
  }
  //Checking result
  if (questionNumber == 0) {
    if (question1Alternative[1] == selectedBtnElement.innerText) {
      quizResult++;
    }
  }
  if (questionNumber == 1) {
    if (question2Alternative[1] == selectedBtnElement.innerText) {
      quizResult++;
    }
  }
  if (questionNumber == 2) {
    if (question3Alternative[2] == selectedBtnElement.innerText) {
      quizResult++;
    }
  }
  //Moving on to the next question
  questionNumber++;

  //Output
  if (questionNumber < 3) {
    questionElement.innerText = questions[questionNumber];
    let aleterantives;
    if (questionNumber == 1) {
      aleterantives = question2Alternative;
    }
    if (questionNumber == 2) {
      aleterantives = question3Alternative;
    }
    btn1Element.innerText = aleterantives[0];
    btn2Element.innerText = aleterantives[1];
    btn3Element.innerText = aleterantives[2];

    btn1Element.classList.remove("selected");
    btn2Element.classList.remove("selected");
    btn3Element.classList.remove("selected");
  } else if (questionNumber == 3) {
    //Show result
    //delete btns
    //show h1
    h1Element.innerText =
      "The result is: " + quizResult + " / " + questionNumber;
    btn1Element.remove();
    btn2Element.remove();
    btn3Element.remove();
  } else {
    window.location.href = "/";
  }
}
