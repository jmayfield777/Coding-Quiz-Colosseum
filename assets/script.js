// create quiz questions
let questions = [
    {
      prompt: "Which of the following is NOT a commonly used data type?",
      options: [
        "booleans",
        "strings",
        "numbers",
        "alerts"
      ],
      answer: "alerts"
    },
    {
      prompt: "Which of the following is a useful method to iterate over items inside an array?",
      options: [
        "do...while",
        "for loop",
        "concatenation",
        "recursive function"
       ],
       answer: "for loop"
    },
    {
      prompt: "Which scope will hold a variable declared inside a function?",
      options: [
        "global",
        "neighbor",
        "local",
        "home"
      ],
      answer: "local"
    },
    {
      prompt: "The condition inside an if/else statement is enclosed inside:",
      options: [
        "quotes",
        "square brackets",
        "curly brackets",
        "parenthesis"
      ],
      answer: "curly brackets"
    },
    {
      prompt: "Where do you usually link a Javascript file inside the HTML document?",
      options: [
        "inside the body but at the bottom",
        "at the top",
        "inside the head element",
        "inside the footer"
      ],
      answer: "inside the body but at the bottom"
    },
    {
      prompt: "Arrays in Javascript can be used to store:",
      options: [
        "strings",
        "numbers",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      prompt: "What does DOM stand for?",
      options: [
        "Download Order Mechanism",
        "Deputy of Movement",
        "Document Object Model",
        "Department of Music"
      ],
      answer: "Document Object Model"
    },
    {
      prompt: "What does the triple equals symbol mean?",
      options: [
        "equality operator",
        "not equal operator",
        "assignment operator",
        "strict equality operator"
      ],
      answer: "strict equality operator"
    },
    {
      prompt: "Which of the following is helpful for debugging code while working in a browser?",
      options: [
        "the console",
        "vs code editor",
        "terminal",
        "github"
      ],
      answer: "the console"
    },
    {
      prompt: "Which of the following can be used to declare a variable?",
      options: [
        "var",
        "let",
        "const",
        "all of the above"
      ],
      answer: "all of the above"
    }
];

// get dom elements for quiz
let questionEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let optionsEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// set Quiz inital score and timer
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// function to start quiz and hide start page
function quizStart() {
    // set timer
    timerId = setInterval(
        clockTick,
        1000
    );
    timerEl.textContent = time;

    // get start page and hide it
    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    
    // show quiz questions
    questionEl.removeAttribute("class");
    
    // call getQuestion function
    getQuestion();
}

// iterate through questions array and create questions as buttons
function getQuestion() {
    // store current question and options in variable
    let currentQuestion = questions[currentQuestionIndex];

    // stores question in variable
    let promptEl = document.getElementById("question-words");
    // makes promptEl match the current question when iterating through questions array
    promptEl.textContent = currentQuestion.prompt;
    
    // sets questions to blank strings so we can iterate through them adding content
    optionsEl.innerHTML = "";

    // sets function to create button for each option in questions array and trigger next question when button is clicked
    currentQuestion.options.forEach(
        function (option, i) {
            let optionBtn = document.createElement("button");

            optionBtn.setAttribute("value", option);

            optionBtn.textContent = i + 1 + ". " + option;

            optionBtn.onclick = questionClick;

            optionsEl.appendChild(optionBtn);
        }
    );
}