// a function to return to the hub page
function leave(){
    location.replace("index.html");
}



//code for the audio
{
    //play a custom sound
    function playLofi(){
        mysound = new sound("stream_error.mp3");
        mysound.play();
    
    }
    
    //add sound to to the website
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.play = function() {
            this.sound.play();
        }
    }
    }
    
    
    // craps
    function craps() {
    //variables to set up the dice
    var die1 = Math.ceil( Math.random()*6);
    var die2 = Math.ceil( Math.random()*6);
    var sum = die1+die2;
    
    
    //presenting to the user
    
    //die 1
    document.getElementById("die1Result").innerHTML = "Die 1: "+ die1;
    //die 2
    document.getElementById("die2Result").innerHTML = "Die 2: "+ die2;
    //sum
    document.getElementById("sumResult").innerHTML = "The sum of the dice is: " + sum;
    
    
    //Loss
    if(sum == 7 || sum ==11){
        document.getElementById("conclusion").innerHTML = "CRAPS - You Lose! <br/> Try again?";
    }else if(die1 == die2 && die1%die2 == 0){//Win 
        document.getElementById("conclusion").innerHTML = "DOUBLES - You Win! <br/> Try for more?";
    }else{//Continue
        document.getElementById("conclusion").innerHTML = "Nothing gained, nothing lost. <br/> Try again?";
    }
    
    }
    
    // higher or lower
    {
    function high(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 < p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else if (d1 > p1){
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }else{
            document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
        }
    
    }
    
    function low(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 > p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else if (d1 < p1){
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }else{
            document.getElementById("concHi").innerHTML = "Nothing gained, Nothing lost. <br/> Try again?";
        }
    
    }
    
    function even(){
        var d1 = Math.ceil( Math.random()*20 );
        var p1 = Math.ceil( Math.random()*20 );
    
    
        document.getElementById("dealer").innerHTML = "Dealer: "+ d1 ;
        document.getElementById("player").innerHTML = "Player: "+ p1 ;
    
        if (d1 == p1){
            document.getElementById("concHi").innerHTML = "You Win! <br/> Try for more?";
        }else{
            document.getElementById("concHi").innerHTML = "You Lose! <br/> Try again?";
        }
    
    }
    }
    
    //Coin Toss
    {
    function heads(){
        //to flip the coin
        var coin = Math.ceil(Math.random()*20);
    
        //the results
        if(coin <= 10){
            document.getElementById("coin").innerHTML = "Heads: You Win! <br/> Try for more?";
        }else{
            document.getElementById("coin").innerHTML = "Tails: You Lose! <br/> Try Again?";
        }
    }
    
    function tails(){
        //to flip a coin
        var coin = Math.ceil(Math.random()*20);
    
        //The results
        if(coin >= 10){
            document.getElementById("coin").innerHTML = "Tails: You Win! <br/> Try for more?";
        }else{
            document.getElementById("coin").innerHTML = "Heads: You Lose! <br/> Try Again?";
        }
    }
    }