
var questionArray = [{
    question: "WHAT IS NEO'S REAL NAME?",
    answers: ["JOHN P. SMITH", "JAMES A. BURNS", "THOMAS A. ANDERSON", "JACK S. THOMPSON"],
    correctAnswer: "THOMAS A. ANDERSON"
}, {
    question: "WHAT IS THE FIRST MARTIAL ART THAT NEO LEARNS?",
    answers: ["KUNG FU", "AKIDO", "TAE KWON DO", "JU-JITSU"],
    correctAnswer: "JU-JITSU"
}, {
    question: "WHAT IS THE PHRASE ABOVE THE ORACLE'S KITCHEN DOOR?",
    answers: ["TEMET NOSCE", "BRUTUM FULMEN", "CARPE NOCTEM", "IGNOTUM PER IGNOTIUS"],
    correctAnswer: "TEMET NOSCE"
}, {
    question: "WHICH CHARACTER DOES NOT WEAR BLACK LIKE THE OTHERS?",
    answers: ["CYPHER", "SWITCH", "MORPHEUS", "TRINITY"],
    correctAnswer: "SWITCH" 
}, {
    question: "WHAT IS THE NAME OF MORPHEUS'S SHIP?",
    answers: ["PROMETHEUS", "MAGELLAN", "ICARUS", "NEBUCHADNEZZAR"],
    correctAnswer: "NEBUCHADNEZZAR"
}, {
    question: "WHAT IS CYPHER'S LAST NAME?",
    answers: ["CLINTON", "JOHNSON", "REAGAN", "FORD"],
    correctAnswer: "REAGAN"
}, {
    question: "WE KNOW AGENT SMITH. WHO ARE THE OTHER TWO?",
    answers: ["ANDERSON AND DAVIS", "JONES AND BROWN", "THOMPSON AND BLACK", "THEY ARE NEVER NAMED"],
    correctAnswer: "JONES AND BROWN"
}, {
    question: "WHAT OBJET DOES THE BOY BEND AT THE ORACLE'S APARTMENT?",
    answers: ["SPOON", "NAIL", "FORK", "CROSS"],
    correctAnswer: "SPOON"
}, {
    question: "WHAT ANIMALS ARE SHOWN ON THE TELEVISON IN THE ORACLE'S WAITING ROOM?",
    answers: ["KITTENS", "BIRDS", "RABBITS", "LIONS"],
    correctAnswer: "RABBITS"
}, {
    question: "IN THE OPENING SCENE, WHAT IS THE PHONE NUMBER THAT IS TRACED?",
    answers: ["312-555-1010", "212-555-0101", "312-555-1212", "312-555-0690"],
    correctAnswer: "312-555-0690"
}];

var correct = 0;
var incorrect = 0;
var timeOut = 0;
var questionCount = 0;
var currentQuestion = questionArray[questionCount];



$(document).ready(function() {


        $("#start-card").show();
        $("#clock-card").hide();
        $("#question-card").hide();
        $("#answer-card").hide();
        $("#correct-card").hide();
        $("#total-card").hide();
        correct = 0;
        incorrect = 0;
        timeOut = 0;


    function timerClock() {

    }
    

        time: 30,

        function start() {

            intervalId = setInterval(count, 1000);
        }
         
        function stop() {

            clearInterval(intervalId);

        }
        function count() {

            time--;
            var converted = timeConverter(time);
            $("#clock").text(converted);
        }

        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
        
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
        
            if (minutes === 0) {
              minutes = "00";
            }
            else if (minutes < 10) {
              minutes = "0" + minutes;
            }
        
            return minutes + ":" + seconds;
          }

    // produces and shows first question and answer choices
    function firstQuestion() {

        questionCount = 0;
        $("#question").text(currentQuestion.question);
        $("#btn-one").text(currentQuestion.answers[0]);
        $("#btn-two").text(currentQuestion.answers[1]);
        $("#btn-three").text(currentQuestion.answers[2]);
        $("#btn-four").text(currentQuestion.answers[3]);
        
    }

    //answer selection, shows if answer is correct or not and increments  //them. also increments questionCount and delays nextQuestion function 
    $(document).on("click", ".btn", function() {
        
        var guess = $(this).text();
        console.log(guess);
        var answer = currentQuestion.correctAnswer;
        console.log(answer);
        
        if (guess === answer) {
            $("#answer-card").hide();
            $("#correct").text("CORRECT");
            $("#correct-answer").text(answer);
            $("#correct-card").css({"background":"green", "border":"green"});
            $("#correct-card").show();
            correct ++;
            questionCount ++;
            setTimeout(nextQuestion, 3000);
        }
        else if (guess !== answer) {
            $("#answer-card").hide();
            $("#correct").text("INCORRECT")
            $("#correct-answer").text("[ANSWER IS] " + answer);
            $("#correct-card").css({"background":"red", "border":"red"});
            $("#correct-card").show();
            incorrect ++;
            questionCount ++;
            setTimeout(nextQuestion, 3000);
        }

    });

    //selects and shows following questions and answers after the first  
    function nextQuestion() {

        if (questionCount === questionArray.length) {
            gameTotals();
        }
        
        currentQuestion = questionArray[questionCount];
        $("#question").text(currentQuestion.question);
        $("#btn-one").text(currentQuestion.answers[0]);
        $("#btn-two").text(currentQuestion.answers[1]);
        $("#btn-three").text(currentQuestion.answers[2]);
        $("#btn-four").text(currentQuestion.answers[3]);
        $("#correct-card").hide();
        $("#answer-card").show();

       
    }

    //start that begins game and gets first question
    $(document).on("click", "#start", function(){

        $("#start-card").hide();
        $("#clock-card").show();
        $("#question-card").show();
        $("#answer-card").show();
        $("#correct-card").hide();
        firstQuestion();     
    });

    //ends game and shows the total of correct,incorrect and timed out
    function gameTotals() {
        $("#correct-total").text("CORRECT: " + correct);
        $("#incorrect-total").text("INCORRECT: " + incorrect);
        $("#time-out").text("TIMED-OUTS: " + timeOut);
        $("#question-card").hide();
        $("#answer-card").hide();
        $("#correct-card").hide();
        $("#total-card").show();
    }

    


   

});


