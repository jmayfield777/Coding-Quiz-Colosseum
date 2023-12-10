let question = {
    title: "Which of the following is NOT a commonly used data type?",
    answer: 3,
    options: [
        "booleans",
        "strings",
        "numbers",
        "alerts"
        ]
};

let questions = [
    {
        title: "Which of the following is NOT a commonly used data type?",
        answer: 3,
        options: [
            "booleans",
            "strings",
            "numbers",
            "alerts"
            ]
    },
    {
        title: "Which of the following is a useful method to iterate over items inside an array?",
        answer: 1,
        options: [
            "do...while",
            "for loop",
            "concatenation",
            "recursive function"
        ]
    },
    {
        title: "Which scope will hold a variable declared inside a function?",
        answer: 2,
        options: [
            "global",
            "neighbor",
            "local",
            "home"
        ]
    },
    {
        title: "The condition in a if/else statement is enclosed inside:",
        answer: 3,
        options: [
            "square brackets",
            "parentheses",
            "quotes",
            "curly brackets"
        ]
    },
    {
        title: "Where do you link to a Javascript file inside the HTML document?",
        answer: 0,
        options: [
            "inside the body but at the bottom",
            "at the top",
            "inside the head element",
            "inside the footer"
        ]
    },
    {
        title: "Arrays in Javascript can be used to store:",
        answer: 3,
        options: [
            "strings",
            "numbers",
            "booleans",
            "all of the above"
        ]
    },
    {
        title: "What does DOM stand for?",
        answer: 2,
        options: [
            "Download Order Mechanism",
            "Deputy Of Movement",
            "Document Object Model",
            "Department of Music"
        ]
    },
    {
        title: "What does the triple equals symbol mean?",
        answer: 3,
        options: [
            "equality operator",
            "not equal operator",
            "assignment operator",
            "strict equality operator"
        ]
    },
    {
        title: "Which of the following is helpful for debugging code while using the browser:",
        answer: 0,
        options: [
            "the console",
            "vs code editor",
            "terminal",
            "github"
        ]
    },
    {
        title: "Which of the following can be used to declare a variable?",
        answer: 3,
        options: [
            "var",
            "let",
            "const",
            "all of the above",
        ]
    },
];

    /*
    {
        title: "Which of the following is a useful method to iterate over items inside an array?",
        answer: "for loop",
        options: [
            "do...while",
            "concatenation",
            "recursive function"
        ]
    },
    {
        title: "Which scope will hold a variable declared inside a function?",
        answer: 2,
        options: [
            "global",
            "neighbor",
            "local",
            "home"
        ]
    },
    {
        title: "The condition in a if/else statement is enclosed inside:",
        answer: 3,
        options: [
            "square brackets",
            "parentheses",
            "quotes",
            "curly brackets"
        ]
    },
    {
        title: "Where do you link to a Javascript file inside the HTML document?",
        answer: 0,
        options: [
            "inside the body but at the bottom"
            "at the top",
            "inside the head element",
            "inside the footer"
        ]
    },
    {
        title: "Arrays in Javascript can be used to store:",
        answer: 3,
        options: [
            "strings",
            "numbers",
            "booleans",
            "all of the above"
        ]
    },
    {
        title: "What does DOM stand for?",
        answer: 2,
        options: [
            "Download Order Mechanism",
            "Deputy Of Movement",
            "Document Object Model",
            "Department of Music"
        ]
    },
    {
        title: "What does the triple equals symbol mean?",
        answer: 3,
        options: [
            "equality operator",
            "not equal operator",
            "assignment operator",
            "strict equality operator"
        ]
    },
    {
        title: "Which of the following is helpful for debugging code while using the browser:",
        answer: 0,
        options: [
            "the console",
            "vs code editor",
            "terminal",
            "github"
        ]
    },
    {
        title: "Which of the following can be used to declare a variable?",
        answer: 
        options: [
            "var",
            "let",
            "const",
            "all of the above",
        ]
    },
];

*/

let quizApp = {
    startQuiz: function() {
        // get options to quiz question
        let options = document.querySelectorAll('.options');
    
        // options.forEach(function(element, index) {
        //     element.addEventListener('click', function() {
        //     // check for correct answer
           
        //     });
        // });

        options.forEach((element, index) => {
            element.addEventListener('click', () => {
            // check for correct answer
            this.checkAnswer(index);
            });
        });

    // show first question
    this.showQuestion(question);
    },

    showQuestion: function(q) {

        // track current question
        this.currentQuestion = q;

        // select title element
        let titleDiv = document.getElementById('title');

        // modify title element
        titleDiv.textContent = q.title;

        let options = document.querySelectorAll('.options');
    
        options.forEach(function(element, index) {
        element.textContent = q.options[index];

        });
    },

    checkAnswer(userSelect) {
        if (this.currentQuestion.answer == userSelect ) {
            // correct answer
            console.log('correct');
        } 
        else {
            // wrong answer
            console.log('incorrect');
        }
    }
};



quizApp.startQuiz();