const p1ScoreDisplay =document.getElementById("p1Score");
const p2ScoreDisplay = document.getElementById("p2Score");
const wScoreDisplay = document.querySelector("h3 span");
const inputScore = document.getElementById("inputScore")
const p1Btn = document.getElementById("p1Btn");
const p2Btn = document.getElementById("p2Btn");
const resetBtn = document.getElementById("resetBtn");
let p1Score = 0; //change variable ar  jonno let use kori
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
inputScore.addEventListener('change', ()=>{
    console.log(typeof inputScore.value);
    winningScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = "";
    reset();
})

p1Btn.addEventListener('click' , () => {
    if(!gameOver){
        p1Score++;
        // if(p1Score == winningScore){
        //     gameOver = true;
        //     console.log("game over");
        //     p1Btn.setAttribute('disabled','disabled');
        //     p2Btn.setAttribute('disabled','disabled');
    
        // }
        winner(p1Score,winningScore);
         
        p1ScoreDisplay.textContent = p1Score;

    }
   
});
function winner(oldScore,winningScore){
    if(oldScore == winningScore){
        gameOver = true;
        console.log("game over");
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');

    }
}

p2Btn.addEventListener('click' , () => {
    if(!gameOver){
        p2Score++;
        // if(p2Score == winningScore){
        //     gameOver = true;
        //     console.log("game over");
        //     p1Btn.setAttribute('disabled','disabled');
        //     p2Btn.setAttribute('disabled','disabled');
    
        // }
        winner(p2Score,winningScore);
        p2ScoreDisplay.textContent = p2Score;

    }
   
});
function reset(){
  
        let p1Score = 0; //change variable ar  jonno let use kori
        let p2Score = 0;
        let gameOver = false;
        p1ScoreDisplay.textContent = 0;
        p2ScoreDisplay.textContent = 0;
        p1Btn.removeAttribute('disabled');
        p2Btn.removeAttribute('disabled');

}


resetBtn.addEventListener('click', reset);