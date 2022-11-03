let counter=0;
let turns=0;
function play(value) {
    turns++;
    document.getElementById("turns").innerHTML = "Turns:"+turns;
    let computerMove = Math.floor(Math.random()*3)+1;
    switch (value) {
        case 1:
            if(computerMove == 2){
                document.getElementById("t1").innerHTML = "Computer chose Paper"
                lose();
                break;
            }
            if(computerMove == 3){
                document.getElementById("t1").innerHTML = "Computer chose Scissors"
                win();
                break;
            }
            document.getElementById("t1").innerHTML = "Computer chose Rock"
            break;
        case 2:
            if(computerMove == 1){
                document.getElementById("t1").innerHTML = "Computer chose Rock"
                win();
                break;
            }
            if(computerMove == 3){
                document.getElementById("t1").innerHTML = "Computer chose Scissors"
                lose();
                break;
            }
            document.getElementById("t1").innerHTML = "Computer chose Paper"
            break;
        case 3:
            if(computerMove == 1){
                document.getElementById("t1").innerHTML = "Computer chose Rock"
                lose();
                break;
            }
            if(computerMove == 2){
                document.getElementById("t1").innerHTML = "Computer chose Paper"
                win();
                break;
            }
            document.getElementById("t1").innerHTML = "Computer chose Scissors"
            break;
        
        default:
            break;
    }
}
function win() {
    counter++;
    document.getElementById("Result").innerHTML = "Result: Win";
    document.getElementById("winCtr").innerHTML = "Wins:"+counter;
    document.getElementById("turns").innerHTML = "Turns:"+turns;
}
function lose() {
    document.getElementById("Result").innerHTML = "Result: Lose";
}
function reset() {
    turns=0;
    counter=0;
    document.getElementById("t1").innerHTML = "Computer chose ";
    document.getElementById("winCtr").innerHTML = "Wins: 0";
    document.getElementById("turns").innerHTML = "Turns: 0";
    document.getElementById("Result").innerHTML = "Result: ";
}