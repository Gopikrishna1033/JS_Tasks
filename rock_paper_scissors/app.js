let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
let userscorep = document.querySelector("#user-score")
let compscorep = document.querySelector("#comp-score")

const gencompscore = ()=>{
const options = ["rock","paper","Scissors"];
const radindex = Math.floor(Math.random()*3);
return options[radindex]
}

const drawgame = ()=>{
    //console.log("game is draw");
    msg.innerText = "Game was Draw. Please try again!"
    msg.style.backgroundColor = "blue"

}

const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorep.innerText = userscore;
        //console.log("You Win")
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compscore++;
        compscorep.innerText = compscore;
        //console.log("You Lose")
        msg.innerText = `You lose!${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "Red"
    }
}

const playgame = (userchoice)=>{
    console.log("user choice",userchoice);
    //generating Computer Chooice 
    const compchoice = gencompscore();
    console.log("Comp choice ",compchoice)

    if(userchoice === compchoice){
        drawgame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            // comp choices are scissors paper
            userwin = compchoice === "paper"?false:true;
        }
        else if(userchoice === "paper"){
            // comp choices are rock scissors
            userwin = compchoice === "Scissors"?false:true;
        }
        else{
            // comp choices are rock paper
            // user choice was scissors
            userwin = compchoice === "rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
    });
});