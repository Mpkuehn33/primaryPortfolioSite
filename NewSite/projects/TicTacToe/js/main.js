// Player is either X's or O's
var player;
var human;
var brains;


var blocks = {
    1:"topl",
    2:"topm",
    3:"topr",
    4:"midl",
    5:"midm",
    6:"midr",
    7:"botl",
    8:"botm",
    9:"botr"
};

    

var resetBoard = function(){
    //Displays the Modal on page load
    $('.modal').css('display', 'block');
    
    //Hides the modal after player chooses X or O
    $("#exes").click(function() {
        $('.modal').css('display', 'none');
        human = "X";
        brains = "O";
        player = "O";
        change(Math.floor((Math.random() * 9) + 1));
        player = "X";
        return;
    });
    
    $("#ohs").click(function() {
        $('.modal').css('display', 'none');
        human = "O";
        brains = "X";
        player = "X";
        change(Math.floor((Math.random() * 9) + 1));
        player = "O";
        return;
    });
    
    $("#close").click(function(){
        $('.modal').css('display', 'none');
    });
    
    if(Number.isInteger(parseInt(localStorage.getItem("playerwins")))){
        tracker.human = parseInt(localStorage.getItem("playerwins"));
    }
    if(Number.isInteger(parseInt(localStorage.getItem("pcwins")))){
        tracker.computer = parseInt(localStorage.getItem("pcwins"));
    }
}

$(document).ready(function($){
    resetBoard();
});

var tracker = {
    human: 0,
    computer: 0,
    winner: 0,
};

var endGame = function(){
    $('.endModal').css('display', 'block');
    $('#humanWins').text('You won ' + tracker.human + ' times!');
    $('#pcWins').text('The computer won ' + tracker.computer + ' times!');
    $('#whoWon').text( tracker.winner + " won!");
    $('#playAgain').click(function(){
        $('.endModal').css('display','none');
        localStorage.setItem("playerwins", tracker.human.toString());
        localStorage.setItem("pcwins", tracker.computer.toString());
        location.reload();
    });
    $("#close").click(function(){
        $('.endModal').css('display', 'none');
    });
}


var comp = function(){
    // The brains of the AI
    var topl = document.getElementById(blocks[1]).innerHTML;
    var topm = document.getElementById(blocks[2]).innerHTML;
    var topr = document.getElementById(blocks[3]).innerHTML;
    var midl = document.getElementById(blocks[4]).innerHTML;
    var midm = document.getElementById(blocks[5]).innerHTML;
    var midr = document.getElementById(blocks[6]).innerHTML;
    var botl = document.getElementById(blocks[7]).innerHTML;
    var botm = document.getElementById(blocks[8]).innerHTML;
    var botr = document.getElementById(blocks[9]).innerHTML;
    //Only executes if it's computers turn
    if(player === brains){
        //Try to win
        //Top row
        if(topl === brains && topl === topm && topr === ""){
            change(3);
            return;
        }
        else if(topm === brains && topm === topr && topl === ""){
            change(1);
            return;
        }
        else if(topl === brains && topl === topr && topm === ""){
            change(2);
            return;
        }
        //Middle row brains
        else if(midl === brains && midl === midm && midr === ""){
            change(6);
            return;
        }
        else if(midm === brains && midm === midr && midl === ""){
            change(4);
            return;
        }
        else if(midl === brains && midl === midr && midm == ""){
            change(5);
            return;
        }
        //Bottom row brains
        else if(botl === brains && botl === botm && botr === ""){
            change(9);
            return;
        }
        else if(botm === brains && botm === botr && botl === ""){
            change(7);
            return;
        }
        else if(botl === brains && botl === botr && botm === ""){
            change(8);
            return;
        }
        
        //Vertical brain sections
        //Left column
        else if(topl === brains && topl === midl && botl === ""){
            change(7);
            return;
        }
        else if(midl === brains && midl === botl && topl === ""){
            change(1);
            return;
        }
        else if(topl === brains && topl === botl && midl === ""){
            change(4);
            return;
        }
        //Middle column
        else if(topm === brains && topm === midm && botm === ""){
            change(8);
            return;
        }
        else if(midm === brains && midm === botm && topm === ""){
            change(2);
            return;
        }
        else if(topm === brains && topm === botm && midm === ""){
            change(5);
            return;
        }
        //Right column
        else if(topr === brains && topr === midr && botr === ""){
            change(9);
            return;
        }
        else if(midr === brains && midr === botr && topr === ""){
            change(3);
            return;
        }
        else if(topr === brains && topr === botr && midr === ""){
            change(6);
            return;
        }
        //Diagonal brains
        //Upper left to bottom right diagonal
        else if(topr === brains && topr === midm && botr === ""){
            change(9);
            return;
        }
        else if (midm === brains && midm === botr && topl === ""){
            change(1);
            return;
        }
        else if (topl === brains && topl === botr && midm === ""){
            change(5);
            return;
        }
        //Bottom left to upper right diagonal
        else if(botl === brains && botl === midm && topr === ""){
            change(3);
            return;
        }
        else if(midm === brains && midm === topr && botl === ""){
            change(7);
            return;
        }
        else if(botl === brains && botl === topr && midm === ""){
            change(5);
            return;
        }
        else{
            blockwinner();
        }
    }

}

var blockwinner = function(){
    var topl = document.getElementById(blocks[1]).innerHTML;
    var topm = document.getElementById(blocks[2]).innerHTML;
    var topr = document.getElementById(blocks[3]).innerHTML;
    var midl = document.getElementById(blocks[4]).innerHTML;
    var midm = document.getElementById(blocks[5]).innerHTML;
    var midr = document.getElementById(blocks[6]).innerHTML;
    var botl = document.getElementById(blocks[7]).innerHTML;
    var botm = document.getElementById(blocks[8]).innerHTML;
    var botr = document.getElementById(blocks[9]).innerHTML;
    
        //Block the other player from winning
        //Horizontal brain sections
        //Top row brains
        if(topl !== "" && topl === topm && topr === ""){
            change(3);
            return;
        }
        else if(topm !== "" && topm === topr && topl  === ""){
            change(1);
            return;
        }
        else if(topl !== "" && topl === topr && topm  === ""){
            change(2);
            return;
        }
        //Middle row brains
        else if(midl !== "" && midl === midm && midr === ""){
            change(6);
            return;
        }
        else if(midm !== "" && midm === midr && midl === ""){
            change(4);
            return;
        }
        else if(midl !== "" && midl === midr && midm === ""){
            change(5);
            return;
        }
        //Bottom row brains
        else if(botl !== "" && botl === botm && botr === ""){
            change(9);
            return;
        }
        else if(botm !== "" && botm === botr && botl === ""){
            change(7);
            return;
        }
        else if(botl !== "" && botl === botr && botm === ""){
            change(8);
            return;
        }
        
        //Vertical brain sections
        //Left column
        else if(topl !== "" && topl === midl && botl === ""){
            change(7);
            return;
        }
        else if(midl !== "" && midl === botl && topl === ""){
            change(1);
            return;
        }
        else if(topl !== "" && topl === botl && midl === ""){
            change(4);
            return;
        }
        //Middle column
        else if(topm !== "" && topm === midm && botm === ""){
            change(8);
            return;
        }
        else if(midm !== "" && midm === botm && topm === ""){
            change(2);
            return;
        }
        else if(topm !== "" && topm === botm && midm === ""){
            change(5);
            return;
        }
        //Right column
        else if(topr !== "" && topr === midr && botr === ""){
            change(9);
            return;
        }
        else if(midr !== "" && midr === botr && topr === ""){
            change(3);
            return;
        }
        else if(topr !== "" && topr === botr && midr === ""){
            change(6);
            return;
        }
        //Diagonal brains
        //Upper left to bottom right diagonal
        else if(topl !== "" && topl === midm && botr === ""){
            change(9);
            return;
        }
        else if (midm !== "" && midm === botr && topl === ""){
            change(1);
            return;
        }
        else if (topl !== "" && topl === botr && midm === ""){
            change(5);
            return;
        }
        //Bottom left to upper right diagonal
        else if(botl !== "" && botl === midm && topr === ""){
            change(3);
            return;
        }
        else if(midm !== "" && midm === topr && botl === ""){
            change(7);
            return;
        }
        else if(botl !== "" && botl === topr && midm === ""){
            change(5);
            return;
        }
        else{
            change(Math.floor((Math.random() * 9) + 1));
        }
        
}


var change = function(num){
    //Each block when clicked calls change(num) - num determined by location of block
    var currentBlock = document.getElementById(blocks[num]);
    
    //If block already contains a letter function halts
    if (currentBlock.innerHTML === "X" || currentBlock.innerHTML === "O"){
        return; 
    }
    //If player X clicks the block, this will change block to "X" and change to player O's turn
    if(player === "X"){
        currentBlock.innerHTML = "X";
       player = "O";
    }
    //If player O clicks the block, this will chnage block to "O" and change to player X's turn
    else{
        currentBlock.innerHTML = "O";
       player = "X";
    }
    getWinner();
    comp();
    
}

var changetracker = function(input){
    if(input === human){
        tracker.human += 1;
        tracker.winner = "You";
        endGame();
        
    }
    else if(input === brains){
        tracker.computer += 1;
        tracker.winner = "The computer"
        endGame();
    }
}

//Determines if there is a winner
var getWinner = function(){
    //Gets X or O from each block
    var topl = document.getElementById(blocks[1]).innerHTML;
    var topm = document.getElementById(blocks[2]).innerHTML;
    var topr = document.getElementById(blocks[3]).innerHTML;
    var midl = document.getElementById(blocks[4]).innerHTML;
    var midm = document.getElementById(blocks[5]).innerHTML;
    var midr = document.getElementById(blocks[6]).innerHTML;
    var botl = document.getElementById(blocks[7]).innerHTML;
    var botm = document.getElementById(blocks[8]).innerHTML;
    var botr = document.getElementById(blocks[9]).innerHTML;
    //Gets winner horizontal
    if(topl !== "" && topl === topm && topm === topr){
        changetracker(topl);
        return;
    }
    else if(midl !== "" && midl === midm && midm === midr){
        changetracker(midl);
        return;
    }
    else if(botl !== "" && botl === botm && botm === botr){
        changetracker(botl);
        return;
    }
    //Gets winner diagonal
    else if(topl !== "" && topl === midm && midm === botr){
        changetracker(topl);
        return;
    }
    else if(topr !=="" && topr === midm && midm === botl){
        changetracker(topr);
        return;
    }
    //Gets winner vertical
    else if(topl !== "" && topl === midl && midl === botl){
        changetracker(topl);
        return;
    }
    else if(topm !== "" && topm === midm && midm === botm){
        changetracker(topm);
        return;
    }
    else if(topr !== "" && topr === midr && midr === botr){
        changetracker(topr);
        return;
    }
}

