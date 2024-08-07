const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const button=document.querySelector(".btn");
let currentPlayerMove=["X","O"];
let gameGrid;
const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
function start(){
    let randomIndex = Math.floor(Math.random() * currentPlayerMove.length);
    let currentMove = currentPlayerMove[randomIndex];
    currentPlayerMove=currentMove;
    
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.textContent="";
        boxes[index].style.pointerEvents="all";
        boxes[index].classList.remove("win");
    });
    gameInfo.innerText=`Current Move - ${currentMove}`;
    
    button.classList.remove("active");
}
start();
function swapTurn(){
    if(currentPlayerMove==="X"){
        currentPlayerMove="O";
    }else{
        currentPlayerMove="X";
    }
    gameInfo.innerText=`Current Move -${currentPlayerMove}`;
}
function checkWin(){
    let answer="";
    winningPositions.forEach((positions)=>{
        if((gameGrid[positions[0]] !=="" || gameGrid[positions[1]] !="" || gameGrid[positions[2]] !="") && (gameGrid[positions[0]] === gameGrid[positions[1]]) && (gameGrid[positions[1]] === gameGrid[positions[2]])){
            if(gameGrid[positions[0]]==="X"){
                answer="X";
            }else{
                answer="O";
            }
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })
            boxes[positions[0]].classList.add("win");
            boxes[positions[1]].classList.add("win");
            boxes[positions[2]].classList.add("win");
        }
    });
    if(answer !==""){
        gameInfo.innerText=`Winner Player - ${answer}`;
        button.classList.add("active");
        return;
    }
    let empty=0;
    gameGrid.forEach((box)=>{
        if(box!==""){
            empty++;
        }
    });
    if(empty===9){
        gameInfo.innerText="It's a Tie!";
        button.classList.add("active");
    }
}
function handleClick(index){
    if(gameGrid[index]===""){
        boxes[index].innerText=currentPlayerMove;
        gameGrid[index]=currentPlayerMove;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        checkWin();
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    });
});
button.addEventListener("click",start);