var questions = [{
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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("time's up!");
            game.done();
        }
    },
    start(){
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">20</span>Seconds');
        $('#start').remove();

        // for (let i = 0; i < questions.length; i++) {
        //     $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
        //     for (let j = 0; j < questions[i].answers.length; j++){
        //         $('#subwrapper').append("<input type='radio' name='question-"+i"'>"  + questionList[i].options[j]);
        //     }
        //     }

        for (let i = 0; i < questions.length; i++) {
            this.$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
                $('#subwrapper').append("<input type='radio' name='question-' >" + questions[i].options[0]);
                
            }
            
            
        }


        }
    



    $('#subwrapper').append('<br><button id="end">DONE</button>')

    done: function(){[
        $.each($('input[name="question-1"]:checked'), function(){
            if($(this).val()== questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        }),
        $.each($('input[name="question-2"]:checked'), function(){
            if($(this).val()== questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        }),
        $.each($('input[name="question-3"]:checked'), function(){
            if($(this).val()== questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        }),
        $.each($('input[name="question-4"]:checked'), function(){
            if($(this).val()== questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
            console.log(this.value);
        })
    ]}
}

    result()
        // rules for scorecard
    

