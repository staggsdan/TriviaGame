var timer = 0;
var questionHolder = 0;  
// questionHolder holds the object position from the questionList array
var activeAnswer = "";
var responseTrue = "";
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


var questionList = [{
    question: 'this is question 1',
    options: ['no','no','yes','no'],
    answer: 2 },
    {question: 'this is question 2',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 3',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 4',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 5',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 6',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 7',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 8',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 9',
    options: ['yes','no','no','no'],
    answer: 0 },
    {question: 'this is question 10',
    options: ['yes','no','no','no'],
    answer: 0 },
];


function showStartButton (){
    $("#start-game-button").append("<button> New Game</button>");
    $("#start-game-button").on("click", newGame());
}
function hideStartButton (){
    $("#start-game-button").hide();
}



function renderQuestion(){
    $("#timer-block").text("Time Remaining: 20 Seconds");
    $("#question-block").append("<h5>" + questionList[questionHolder].question + "</h5>");
    for (let i = 0; i < questionList[questionHolder].options.length; i++) {
        $("#answer-block").append("<input type=radio name=answer-group 'id=answer-radio'>" + questionList[questionHolder].options[i] + "<br>");
        
    }
    
    activeAnswer = questionList[questionHolder].answer;
    timer = 20;
    // countdown();
}

function nextQuestion(){
    if (questionHolder === questionList.length){
        showScorecard()
    } else {
        questionHolder++;
        renderQuestion();
    }
};



function countdownDisplay(){
    $("#timer-block").text(`Time Remaining: ${timer} seconds`);
}


function newGame(){
    hideStartButton()

    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    questionHolder = 0;
    currentAnswer = "";
    correctResponse = false;
    renderQuestion()
}
// click controls


console.log(questionList)
                                        
                                        
                                        