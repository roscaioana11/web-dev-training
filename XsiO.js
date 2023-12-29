var player = "player1";
var divs = document.getElementsByClassName("gridelement");
document.addEventListener("DOMContentLoaded", function(){
    for(var i = 0; i < divs.length; i++){
        divs[i].onclick = function(event){
            event.stopPropagation();
            if(player === "player1"){
                this.innerHTML = "X";
                player = "player2";
            }else{
                this.innerHTML = "O";
                player = "player1";
            }
            checkwin();
        }             
    } 
});

function checkwin(){
    for(var i = 0; i < 3; i++){
        var countX = 0;
        var countO = 0;
        for(var j = 0; j < 3; j++){
            if(divs[3 * i + j].innerHTML === "X"){
                countX++;
            }else if(divs[3 * i + j].innerHTML === "O"){
                countO++;
            }
        }
        if(countX === 3){
            alert("Player 1 Won");
            clear();
        }else if(countO === 3){
            alert("Player 2 Won");
            clear();
        }
    }

    for(var i = 0; i < 3; i++){
        var countX = 0;
        var countO = 0;
        for(var j = 0; j < 3; j++){
            if(divs[3 * j + i].innerHTML === "X"){
                countX++;
            }else if(divs[3 * j + i].innerHTML === "O"){
                countO++;
            }
        }
        if(countX === 3){
            alert("Player 1 Won");
            clear();
        }else if(countO === 3){
            alert("Player 2 Won");
            clear();
        }
    }

    var countX = 0;
    var countO = 0;
    for(var i = 0; i < 3; i++){
        if(divs[3 * i + i].innerHTML === "X"){
            countX++;
        }else if(divs[3 * i + i].innerHTML === "O"){
            countO++;
        }

    }
    if(countX === 3){
        alert("Player 1 Won");
        clear();
    }else if(countO === 3){
        alert("Player 2 Won");
        clear();
    }

    countX = 0;
    countO = 0;
    for(var i = 0; i < 3; i++){
        if(divs[3 * i + (2 - i)].innerHTML === "X"){
            countX++;
        }else if(divs[3 * i + (2 - i)].innerHTML === "O"){
            countO++;
        }

    }
    if(countX === 3){
        alert("Player 1 Won");
        clear();
    }else if(countO === 3){
        alert("Player 2 Won");
        clear();
    }
}

function clear(){
    for(var i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
    player = "player1";
}