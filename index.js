'use strict';
console.log("this is my js file");
var array = [{
        Question: "What does HTML stands for?",
        Option1: "HighText Machine Language",
        Option2: "HyperText and links Markup Language",
        Option3: "HyperText Markup Language",
        Option4: "None of these",
        correct: "3",
    },
    {
        Question: "The correct sequence of HTML tags for starting a webpage is -",
        Option1: "Head, Title, HTML, body",
        Option2: "HTML, Body, Title, Head",
        Option3: "HTML, Head, Body, Title",
        Option4: "HTML, Head, Title, Body",
        correct: "4",
    },
    {
        Question: " Which of the following element is responsible for making the text bold in HTML?",
        Option1: "<pre>",
        Option2: "<a>",
        Option3: "<b>",
        Option4: "<br>",
        correct: "3",
    },
    {
        Question: "How to create an unordered list (a list with the list items in bullets) in HTML?hat does HTML stands for?",
        Option1: "<ul>",
        Option2: "<ol>",
        Option3: "<li>",
        Option4: "<i>",
        correct: "1",
    },
    {
        Question: "How to add a background color in HTML?",
        Option1: "<marquee bg color: red>",
        Option2: "<marquee bg-color = red>",
        Option3: "<marquee bgcolor = red>",
        Option4: "<marquee color = red>",
        correct: "3",
    },
    {
        Question: "The property in CSS used to change the text color of an element is -    ",
        Option1: "color",
        Option2: "bgcolor",
        Option3: "background-color",
        Option4: "All of the above",
        correct: "1",
    },
    {
        Question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        Option1: "p {background-color : yellow;}",
        Option2: "p {background-color : #yellow;}",
        Option3: "all {background-color : yellow;}",
        Option4: "all p {background-color : #yellow;}",
        correct: "1",
    },
    {
        Question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        Option1: "a {text-decoration : underline;}",
        Option2: "a {text-decoration : none;}",
        Option3: "a {decoration : no-underline;}",
        Option4: "None of the above",
        correct: "2",
    },
    {
        Question: "Which of the following property is used as the shorthand property for the padding properties?",
        Option1: "padding-left",
        Option2: "padding-right",
        Option3: "padding",
        Option4: "padding-all",
        correct: "3",
    },
    {
        Question: "Are the negative values allowed in padding property?",
        Option1: "Yes",
        Option2: "No",
        Option3: "Only top and bottom",
        Option4: "May be",
        correct: "4",
    },
];

var sc = 0,
    incorrect = 0,
    correctans = 0;
var num = 0;

const op1 = document.getElementById('1');
const op2 = document.getElementById('2');
const op3 = document.getElementById('3');
const op4 = document.getElementById('4');


const startquiz = document.getElementById('startquiz');
const strt = document.getElementById('strt');
const cardbody = document.getElementById('cardbody');

function start() {
    startquiz.style.display = "none";
    strt.style.display = "none";
    cardbody.style.display = "block";
    run();
}
const submit = document.getElementById('submit').addEventListener('click', function() {
    let ans = confirm("Are you sure you want to exit the quiz ???");
    if (!ans) {
        run();
    } else {
        showscore();
    }
});

function showscore() {
    document.getElementById('cardbody').style.display = "none";
    document.getElementById('result').style.display = "block";
    document.getElementById('result').innerText = `Your score is  ${sc} in which number of correct answers are ${correctans} and incorrect are ${incorrect}`;
    console.log(sc);
}

function cal_score(ans) {

    if (op1.checked && ans == 1) {
        sc++;
        correctans++;
    } else if (op2.checked && ans == 2) {
        sc++;
        correctans++;
    } else if (op3.checked && ans == 3) {
        sc++;
        correctans++;
    } else if (op4.checked && ans == 4) {
        sc++;
        correctans++;
    } else
        incorrect++;
}

function run() {
    if (num === 10)
        showscore();
    else if (num < 10) {

        console.log(num+1);

        document.getElementById('cardtitle').innerText = `Question ${num+1}`;
        document.getElementById('cardtext').innerText = array[num].Question;
        document.getElementById('ans1').innerText = array[num].Option1;
        document.getElementById('ans2').innerText = array[num].Option2;
        document.getElementById('ans3').innerText = array[num].Option3;
        document.getElementById('ans4').innerText = array[num].Option4;
        let ans = array[num].correct;
		cal_score(ans);
    }
}

let next = document.getElementById("next").addEventListener('click', function() {
    num++;
    run();
});
