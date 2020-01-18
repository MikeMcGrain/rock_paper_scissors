document.getElementById("bear-btn").addEventListener("click", startGame)
document.getElementById("ninja-btn").addEventListener("click", startGame)
document.getElementById("cowboy-btn").addEventListener("click", startGame)

function startGame() {
    //get user's pick
    let userPick = this.getAttribute("data-user-pick")
    document.getElementById("user-pick").innerHTML = `You picked ${userPick}!`

    getBrowserPick()

    comparePicks()
}

function getBrowserPick() {
    let browserPick
    switch (Math.floor(Math.random() * 3)) {
    case 0: browserPick = "Bear"; break
    case 1: browserPick = "Ninja"; break
    case 2: browserPick = "Cowboy"
    }
document.getElementById("browser-pick").innerHTML = `Your browser picked ${browserPick}!`
}

function comparePicks() {
    // let result = "win" || "lose"
    // document.getElementById("result").innerHTML = `You ${result}!`

}