var restart = document.querySelector("#b");
var squares = document.querySelectorAll("td");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");



function clearBoard() {
    for(var i=0; i<squares.length; i++) {
        squares[i].textContent = "";
    }
    document.querySelector("h3").textContent= '';
    player1.value = "";
    player2.value = "";
}

restart.addEventListener('click',clearBoard);




function changeMarker() {
    if(this.textContent === '') {
        this.textContent = "X";
    } else if(this.textContent === "X") {
        this.textContent = "O";
    } else {
        this.textContent = '';
    }
}

for(var i=0;i<squares.length;i++) {
    squares[i].addEventListener('click',changeMarker);
}


function evaluating(){
let count=0;

for(var i=0;i<squares.length;i++) {
    if(squares[i].textContent==='X' || squares[i].textContent ==='O') {
        var m = declareWinner();
        if(m=="x"){
            if(player1.value === ''){
                document.querySelector("h3").textContent = "X is the winner!";
            }
            else {
                document.querySelector("h3").textContent = player1.value+" is the winner!";
            }
        } else if(m=="o") {
            if(player1.value === ''){
                document.querySelector("h3").textContent = "O is the winner!";
            }
            else {
                document.querySelector("h3").textContent = player2.value+" is the winner!";
            }
        }
        else {
            document.querySelector("h3").textContent = "";
        }
    }
}
}

for(var i=0;i<squares.length;i++) {
    squares[i].addEventListener('click',evaluating);
}



function declareWinner() {
    if((squares[0].textContent==='X' && squares[4].textContent==='X' && squares[8].textContent==='X')
    || (squares[2].textContent==='X' && squares[4].textContent==='X' && squares[6].textContent==='X')
    || (squares[0].textContent==='X' && squares[1].textContent==='X' && squares[2].textContent==='X')
    || (squares[3].textContent==='X' && squares[4].textContent==='X' && squares[5].textContent==='X')
    || (squares[6].textContent==='X' && squares[7].textContent==='X' && squares[8].textContent==='X')
    || (squares[0].textContent==='X' && squares[3].textContent==='X' && squares[6].textContent==='X')
    || (squares[1].textContent==='X' && squares[4].textContent==='X' && squares[7].textContent==='X')
    || (squares[2].textContent==='X' && squares[5].textContent==='X' && squares[8].textContent==='X') ) {
        return "x";
    }
    else if((squares[0].textContent==='O' && squares[4].textContent==='O' && squares[8].textContent==='O')
    || (squares[2].textContent==='O' && squares[4].textContent==='O' && squares[6].textContent==='O')
    || (squares[0].textContent==='O' && squares[1].textContent==='O' && squares[2].textContent==='O')
    || (squares[3].textContent==='O' && squares[4].textContent==='O' && squares[5].textContent==='O')
    || (squares[6].textContent==='O' && squares[7].textContent==='O' && squares[8].textContent==='O')
    || (squares[0].textContent==='O' && squares[3].textContent==='O' && squares[6].textContent==='O')
    || (squares[1].textContent==='O' && squares[4].textContent==='O' && squares[7].textContent==='O')
    || (squares[2].textContent==='O' && squares[5].textContent==='O' && squares[8].textContent==='O') ) {
        return "o";
    }
    else {
        return "none";
    }
}


