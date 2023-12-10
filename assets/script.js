let question = {
    title: "Which of the following is NOT a commonly used data type?",
    answer: "alerts",
    option: [
        "booleans",
        "strings",
        "numbers",
        "alerts"
        ]
};

    /*
    {
        title: 2,
        question: "Which of the following is a useful method to iterate over items inside an array?",
        answer: "for loop",
        options: [
            "do...while",
            "concatenation",
            "recursive function"
        ]
    },
    {
        title: 3,
        question: "Which scope will hold a variable declared inside a function?",
        answer: "local",
        options: [
            "global",
            "neighbor",
            "home"
        ]
    },
    {
        title: 4,
        question: "The condition in a if/else statement is enclosed inside:",
        answer: "curly brackets",
        options: [
            "square brackets",
            "parentheses",
            "quotes"
        ]
    },
    {
        title: 5,
        question: "Where do you link to a Javascript file inside the HTML document?",
        answer: "inside the body but at the bottom",
        options: [
            "at the top",
            "inside the head element",
            "inside the footer"
        ]
    },
    {
        title: 6,
        question: "Arrays in Javascript can be used to store:",
        answer: "all of the above",
        options: [
            "strings",
            "numbers",
            "booleans"
        ]
    },
    {
        title: 7,
        question: "What does DOM stand for?",
        answer: "Document Object Model",
        options: [
            "Download Order Mechanism",
            "Deputy Of Movement",
            "Department of Music"
        ]
    },
    {
        title: 8,
        question: "What does the triple equals symbol mean?",
        answer: "strict equality operator",
        options: [
            "equality operator",
            "not equal operator",
            "assignment operator"
        ]
    },
    {
        title: 9,
        question: "Which of the following is helpful for debugging code while using the browser:",
        answer: "the console",
        options: [
            "vs code editor",
            "terminal",
            "github"
        ]
    },
    {
        title: 10,
        question: "Which of the following can be used to declare a variable?",
        answer: "all of the above",
        options: [
            "var",
            "let",
            "const"
        ]
    },
];

*/

function showQuestion(q) {
    // select title element
    let titleDiv = document.getElementById('title');

    // modify title element
    titleDiv.textContent = q.title;

    let options = document.querySelectorAll('.options');
    
    options.forEach(function(element, index) {
        element.textContent = q.option[index];

        element.addEventListener('click', function() {
            // check for correct answer
            
        })
    })

};

showQuestion(question);