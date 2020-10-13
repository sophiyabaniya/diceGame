var active=1;
//for the Rules...............................
var rules;
rules= document.querySelector('.right');
document.querySelector('.rules').style.display = 'none';
document.querySelector('.box').style.display = 'block';
rules.addEventListener('click' , function(){
    var content, game;
    content = document.querySelector('.rules');
    game = document.querySelector('.box');
    if(content.style.display == "none")
        {
            content.style.display = "block";
            game.style.display = "none";
        }
    else{
            content.style.display = "none";
            game.style.display = "block";
    }
})


var score1, score2, dicenumber,diceDOM,player1,player2;

//score1=score2=0;
//function of RESET button.........................
document.querySelector('#reset').addEventListener('click', function(){
    score1=score2=0;
    document.querySelector('.score1').textContent=score1;
    document.querySelector('.score2').textContent=score2;
    document.querySelector('.player1').classList.add('active');
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.vid').style.display = 'none';
    document.querySelector('.vidtext').style.display = 'none';
})
//function of ROLLING DICE..............................
document.querySelector('#roll').addEventListener('click', function(){
    
    if(score1===5){
        alert('Player1 is the winner!!!!!!!!!! To play again, click the reset button.');
    }
    else if(score2===5){
        alert('Player2 is the winner!!!!!!!!!! To play again, click the reset button.');
    }
    
    if(score1 < 5 && score2 < 5)
    {
        
        dicenumber = Math.floor((Math.random()*6)) +1; //console.log(dicenumber);
        diceDOM=document.querySelector('#dicepicture');
        diceDOM.src='./picture/dice-'+dicenumber+'.png';
        player1 = document.querySelector('.player1');
        player2 = document.querySelector('.player2');
        
        if(dicenumber===1 || dicenumber===6){
            if(active===1){
                score1=score1+1;
                active=2;
            }
            else if(active===2){
                score2=score2+1;
                active=1;
            }
            
            //-------------------changing active background
            player1.classList.toggle('active');
            player2.classList.toggle('active');
            
        }
        else{
            if(active===1){
                active=2;
            }
            else if(active===2){
                active=1;
            }
            //--------------------changing active background
            player1.classList.toggle('active');
            player2.classList.toggle('active');
        }
    
        
        
    }
    //writting scores....................................
    document.querySelector('.score1').textContent=score1;
    document.querySelector('.score2').textContent=score2;
    
    if(score1===5){
        console.log('Player1 is the winner!!!!!!!!!!');
        document.querySelector('.vid').style.display = 'block';
        document.querySelector('.vidtext').style.display = 'block'; document.querySelector('.vidtext').textContent='Player 1 wins!!!';
    }
    else if(score2===5){
        console.log('Player2 is the winner!!!!!!!!!!');
        document.querySelector('.vid').style.display = 'block';
        document.querySelector('.vidtext').style.display = 'block'; document.querySelector('.vidtext').textContent='Player 2 wins!!!';
    }
        
    
})



