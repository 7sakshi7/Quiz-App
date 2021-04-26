console.log("this is my js file");

var array = [
    {
        Question1: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question2: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question3: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question4: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question5: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question6: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question7: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question8: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question9: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
    {
        Question10: "What does HTML stands for?",
        optionn1:"",
        optionn2:"",
        optionn3:"",
        optionn4:"",
        correct:"",
    },
];

for(let i=0;i<10;i++){
   
}

function start(){
    document.getElementById('startquiz').style.display="none";
    document.getElementById('strt').style.display="none";
    document.getElementById('cardbody').style.display="block";
   
    document.getElementById('cardtitle').innerText = array[0];
    document.getElementById('cardtext').innerText = array[0].Question1;
    console.log("he")
}