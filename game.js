var buttonColors = ['red','blue','green','yellow'];

var gamePattern = [];

var started = false;

var level = 0;

var userChoices = [];

$('.btn').click(function (e) { 

var userChosenColor = e.target.id;

playSound(userChosenColor)

$('#'+userChosenColor).fadeOut(100).fadeIn(100);
userChoices.push(userChosenColor)


   checkAnswer(userChoices.length-1) 

});



function checkAnswer(currentLevel){

if(gamePattern[currentLevel] === userChoices[currentLevel]){

  

  if(userChoices.length === gamePattern.length){

    setTimeout(function(){
        nextSequence()
    }, 1000)
  }
 
  
}
else{ 
  
playSound('wrong')
    $('body').addClass('game-over'); 
    
    setTimeout(function(){

       $('body').removeClass('game-over'); ;
    }, 200)
 $('h1').text('Game Over, Press Any Key To Restart');
   startOver();
  }
}

function startOver(){

gamePattern = [];
level = 0;
started = false;

$(document).keypress(function (e) { 

    if(!started){
        $('h1').text('Level ' + level)
        nextSequence();
        started = true;
            }
    
    });

}

function nextSequence(){
userChoices = []
level++

$('h1').text('Level ' + level);

 
var rando = Math.floor((Math.random() * 4)) ;
var randomChosenColor = buttonColors[rando];
gamePattern.push(randomChosenColor);

$('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
playSound(randomChosenColor)


}

function playSound(name){

var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

};

$(document).keypress(function (e) { 

if(!started){
    $('h1').text('Level ' + level)
    nextSequence();
    started = true;
        }

});



