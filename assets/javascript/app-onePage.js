// game stats/scores variables here

var correctTally = 0;
var incorrectTally = 0;
var nullAnswerTally = 0;
var clockTime = 15000;
var quizBox = $("#quiz-area");
var showQuestion;



// trivia questions go here

var questionList = [{
    question: 'this is question 1',
    answer: 2,
    options: ['no','no','yes','no'] },
   {question: 'this is question 2',
    answer: 0,
    options: ['yes','no','no','no'] },
   {question: 'this is question 3',
    answer: 1,
    options: ['no','yes','no','no'] },
    {question: 'this is question 4',
    answer: 1,
    options: ['no','yes','no','no'] },
    {question: 'this is question 5',
    answer: 3,
    options: ['no','no','no','yes'] },
    {question: 'this is question 6',
    answer: 0,
    options: ['yes','no','no','no'] },
    {question: 'this is question 7',
    answer: 2,
    options: ['no','no','yes','no'] },
    {question: 'this is question 8',
    answer: 1,
    options: ['no','yes','no','no'] },
    {question: 'this is question 9',
    answer: 3,
    options: ['no','no','no','yes'] },
    {question: 'this is question 10',
    answer: 2,
    options: ['no','no','yes','no'] },
]

// document.onclick("#start-game-button").append("question-block")
$("#start-game-button").click(function(){
    
    function timer(){
        clockTime--;
        if (count <= 0) {
            clearInterval(clockTime);
            return;
            
        }
        $("#timer").html(`Time remaining: 00: ${clockTime} seconds`);
        console.log(clockTime)
        
    }

    for (let i = 0; i < questionList.length; i++) {
        $("#question-block").append("<h5>" + questionList[i].question + "</h5>");
        console.log(questionList[i])
            for (let j = 0; j < questionList[i].options.length; j++) {
                $("#question-block").append("<input type=radio name=answer-group-'j'>" + questionList[i].options[j] + " ");
                
            } 
    }
})





// $("#start-game-button").click(function(){
//     $(this).hide();
//     counter = setInterval(timer, 40000);
//     showQuestion();
//     });


//  clock stuff here




//  game functionality here
var QuestionBlock = "" 




// click + score functionality




// game score functionality here


// start game