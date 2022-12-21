// RPS game



const yourName = prompt("Enter Your Nick Name: ")
let score = 0
let userValue = 0
let compValue = 0

const nameDiv = document.getElementById("nameH3")
const rockDiv = document.getElementById("first")
const secDiv = document.getElementById("second")
const paperDiv = document.getElementById("third")
const scoreDiv = document.getElementById("score-div")
const resetDiv = document.getElementById("reset-div")
const title = document.getElementById("title")
const winnerDiv = document.getElementById("winner")
const actScore = document.getElementById("score")

title.innerHTML = `<h2>Lets Play  ${yourName}</h2>`
nameDiv.innerText = ` ${yourName} `




rockDiv.addEventListener("click", () => {

    console.log("Rock")
    title.innerHTML = `<h2>Rock is selected<h2>`
    userValue = 1
    compValue = Math.ceil(Math.random() * 3)

    if (compValue == 1) {
        title.innerHTML = `<h2>User: Rock - Comp: Rock</h2>`
    }
    else if (compValue == 2) {
        title.innerHTML = `<h2>User: Rock - Comp: Scissors</h2>`

    }
    else {
        title.innerHTML = `<h2>User: Rock - Comp: Paper</h2>`
    }



    if (userValue == compValue) {
        //draw
        winnerDiv.innerHTML = `<h1>Draw</h1>`
    }
    else if (userValue == 1 && compValue == 2) {
        //winner user
        score++;
        winnerDiv.innerHTML = `<h1>Winner: User</h1>`

    }
    else if (userValue == 1 && compValue == 3) {
        //win comp
        score--;
        winnerDiv.innerHTML = `<h1>Winner: Computer</h1>`

    }

    winnerDiv.classList.add("visDisp")
    actScore.innerText = `Score: ${score}`
    actScore.classList.add("visDisp")
})

secDiv.addEventListener("click", () => {

    console.log("Scissors")
    // title.innerHTML = `<h1>Scissors is selected</h1>`
    userValue = 2
    compValue = Math.ceil(Math.random() * 3)

    if (compValue == 1) {
        title.innerHTML = `<h2>User: Scissors - Comp: Rock</h2>`
    }
    else if (compValue == 2) {
        title.innerHTML = `<h2>User: Scissors - Comp: Scissors</h2>`
    }
    else {
        title.innerHTML = `<h2>User: Scissors - Comp: Paper</h2>`
    }


    //1 rock 2 sec
    if (userValue == compValue) {
        //draw
        winnerDiv.innerHTML = `<h1>Draw</h1>`
    }
    else if (userValue == 2 && compValue == 1) {
        //winner comp
        score--;
        winnerDiv.innerHTML = `<h1>Winner: Computer</h1>`
    }
    else if (userValue == 2 && compValue == 3) {
        //win user
        score++;
        winnerDiv.innerHTML = `<h1>Winner: User</h1>`
    }

    winnerDiv.classList.add("visDisp")
    actScore.innerText = `Score: ${score}`
    actScore.classList.add("visDisp")
})

paperDiv.addEventListener("click", () => {


    userValue = 3
    compValue = Math.ceil(Math.random() * 3)

    if (compValue == 1) {
        title.innerHTML = `<h2>User: Paper - Comp: Rock</h2>`
    }
    else if (compValue == 2) {
        title.innerHTML = `<h2>User: Paper - Comp: Scissors</h2>`
    }
    else {
        title.innerHTML = `<h2>User: Paper - Comp: Paper</h2>`
    }



    if (userValue == compValue) {
        winnerDiv.innerHTML = `<h1>Draw</h1>`
    }
    else if (userValue == 3 && compValue == 2) {
        //winner comp
        score--;
        winnerDiv.innerHTML = `<h1>Winner: Computer</h1>`
    }
    else if (userValue == 3 && compValue == 1) {
        //win user
        score++;
        winnerDiv.innerHTML = `<h1>Winner: User</h1>`

    }
    winnerDiv.classList.add("visDisp")
    actScore.innerText = `Score: ${score}`
    actScore.classList.add("visDisp")

})


const resetNow = () => {
    console.log("Clear")
    // console.log(title)
    title.innerHTML = `<h2>Lets Play Again ${yourName}</h2>`
    console.log(winnerDiv)
    winnerDiv.classList.remove("visDisp")

    actScore.classList.remove("visDisp")
    alert(`${yourName} your score : ${score}`)
    score = 0
}






// const clickAudio = () => {
//     var audio = new Audio("clcik.mp3")
//     audio.play()
// }
// const win = () => {
//     var audio = new Audio("win.mp3")
//     audio.play()
// }
// const lost = () => {
//     var audio = new Audio("lost.mp3")
//     audio.play()
// }