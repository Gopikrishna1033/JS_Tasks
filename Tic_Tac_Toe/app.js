let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turno = true; // playerx, playero

const winpattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was Clicked")
        if(turno){
            box.innerText = "O"
            turno = false
        }else{
            //player x
            box.innerText = "X"
            turno = true
        }
        box.disabled = "true"
        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true
    }  
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = " ";
    }  
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = ()=>{
    for (pattren of winpattrens){
        let pos1 = boxes[pattren[0]].innerText;
        let pos2 = boxes[pattren[1]].innerText;
        let pos3 = boxes[pattren[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1)
                showWinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)