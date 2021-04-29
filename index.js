console.log("this is my js file");
var sc = 0,incorrect=0,correctans = 0;
var array = [
    {
        Question1: "What does HTML stands for?",
        Option1:"HighText Machine Language",
        Option2:"HyperText and links Markup Language",
        Option3:"HyperText Markup Language",
        Option4:"None of these",
        correct:"3",
    },
    {
        Question2: "The correct sequence of HTML tags for starting a webpage is -",
        optionn1:"Head, Title, HTML, body",
        optionn2:"HTML, Body, Title, Head",
        optionn3:"HTML, Head, Body, Title",
        optionn4:"HTML, Head, Title, Body",
        correct:"4",
    },
    {
        Question3: " Which of the following element is responsible for making the text bold in HTML?",
        optionn1:"<pre>",
        optionn2:"<a>",
        optionn3:"<b>",
        optionn4:"<br>",
        correct:"3",
    },
    {
        Question4: "How to create an unordered list (a list with the list items in bullets) in HTML?hat does HTML stands for?",
        optionn1:"<ul>",
        optionn2:"<ol>",
        optionn3:"<li>",
        optionn4:"<i>",
        correct:"1",
    },
    {
        Question5: "How to add a background color in HTML?",
        optionn1:"<marquee bg color: red>",
        optionn2:"<marquee bg-color = red>",
        optionn3:"<marquee bgcolor = red>",
        optionn4:"<marquee color = red>",
        correct:"3",
    },
    {
        Question6: "The property in CSS used to change the text color of an element is -    ",
        optionn1:"color",
        optionn2:"bgcolor",
        optionn3:"background-color",
        optionn4:"All of the above",
        correct:"1",
    },
    {
        Question7: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        optionn1:"p {background-color : yellow;}",
        optionn2:"p {background-color : #yellow;}",
        optionn3:"all {background-color : yellow;}",
        optionn4:"all p {background-color : #yellow;}",
        correct:"1",
    },
    {
        Question8: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        optionn1:"a {text-decoration : underline;}",
        optionn2:"a {text-decoration : none;}",
        optionn3:"a {decoration : no-underline;}",
        optionn4:"None of the above",
        correct:"2",
    },
    {
        Question9: "Which of the following property is used as the shorthand property for the padding properties?",
        optionn1:"padding-left",
        optionn2:"padding-right",
        optionn3:"padding",
        optionn4:"padding-all",
        correct:"3",
    },
    {
        Question10: "Are the negative values allowed in padding property?",
        optionn1:"Yes",
        optionn2:"No",
        optionn3:"Only top and bottom",
        optionn4:"May be",
        correct:"4",
    },
];
let op1 = document.getElementById('1');
let op2 = document.getElementById('2');
let op3 = document.getElementById('3');
let op4 = document.getElementById('4');

// var num = 0;
function start(){
    document.getElementById('startquiz').style.display="none";
    document.getElementById('strt').style.display="none";
    document.getElementById('cardbody').style.display="block";
//    run(num); 
start_run();
}
let submit = document.getElementById('submit').addEventListener('click',function(){
        let ans = confirm("Are you sure you want to exit the quiz ???");
        if(!ans){
            run(num);
        }
        else{
           showscore();
        }
});
function showscore(){
    document.getElementById('cardbody').style.display="none";
    document.getElementById('result').style.display="block";
    let t = document.getElementById('result').innerText;
    t+=""+sc;
    document.getElementById('result').innerText=t;
    console.log(sc);
}

function start_run(){
    
//   array.forEach(function(item, index){ 
    for(var num = 0;num<array.length;num++){
          console.log(num)
    //   const it = Object.keys(item[index]);
      const it = Object.keys(array[num]);
      
      document.getElementById('cardtitle').innerText =it[0];
      document.getElementById('cardtext').innerText = array[num].Question1;
      document.getElementById('ans1').innerText = it[1] + "  " + array[num].Option1;
      document.getElementById('ans2').innerText = it[2] + "  " + array[num].Option2;
      document.getElementById('ans3').innerText = it[3] + "  " + array[num].Option3;
      document.getElementById('ans4').innerText = it[4] + "  " + array[num].Option4;
      
      let val = array[num].correct;
      let op1 = document.getElementById('1');
    let op2 = document.getElementById('2');
    let op3 = document.getElementById('3');
    let op4 = document.getElementById('4');
      let next = document.getElementById("next").addEventListener('click',function(){
          // console.log("hjg")
          cal_score(op1,op2,op3,op4,val);
        
    });
    
};
    
}
function cal_score(op1,op2,op3,op4,ans){
    
  if(op1.checked && ans==1){
      sc++;
      correctans++;
  }
  else if(op2.checked && ans==2){
      sc++;
      correctans++;
  }
  else if(op3.checked && ans==3){
      sc++;
      correctans++;
  }
  else if(op4.checked && ans==4){
      sc++;
      correctans++;
  }
  else
  incorrect++;
}

// function run(num){
//     if(num==10)
//     showscore();

//     const it = Object.keys(array[num]);
   
//     document.getElementById('cardtitle').innerText =it[0];
//     document.getElementById('cardtext').innerText = array[num].Question1;
//     document.getElementById('ans1').innerText = it[1] + "  " + array[num].Option1;
//     document.getElementById('ans2').innerText = it[2] + "  " + array[num].Option2;
//     document.getElementById('ans3').innerText = it[3] + "  " + array[num].Option3;
//     document.getElementById('ans4').innerText = it[4] + "  " + array[num].Option4;
    

//     let next = document.getElementById("next").addEventListener('click',function(){
//         // console.log("hjg")
//         let op1 = document.getElementById('1');
//         let op2 = document.getElementById('2');
//         let op3 = document.getElementById('3');
//         let op4 = document.getElementById('4');
//         if(op1.checked && array[num].correct==1){
//             sc++;
//             correctans++;
//         }
//        else if(op2.checked && array[num].correct==2){
//             sc++;
//             correctans++;
//         }
//         else if(op3.checked && array[num].correct==3){
//             sc++;
//             correctans++;
//         }
//         else if(op4.checked && array[num].correct==4){
//             sc++;
//             correctans++;
//         }
//         else
//         incorrect++;
//     });
// }
