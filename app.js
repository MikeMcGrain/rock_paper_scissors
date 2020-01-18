document.getElementById("bear-btn").addEventListener("click", startGame)
document.getElementById("ninja-btn").addEventListener("click", startGame)
document.getElementById("cowboy-btn").addEventListener("click", startGame)

function startGame() {
    //get user's pick
    let userPick = this.getAttribute("data-user-pick")
    document.getElementById("user-pick").innerHTML = `You picked ${userPick}!`
    comparePicks(userPick,  getBrowserPick())
}

function getBrowserPick() {
    let browserPick
    switch (Math.floor(Math.random() * 3)) {
    case 0: browserPick = "Bear"; break
    case 1: browserPick = "Ninja"; break
    case 2: browserPick = "Cowboy"
    }
    document.getElementById("browser-pick").innerHTML = `Your browser picked ${browserPick}!`
    return browserPick
}

function comparePicks(userPick, browserPick) {
    let result
    if (userPick == browserPick) {result = "both die"} 
    else if (userPick == "Bear" && browserPick == "Ninja") {result = "win"} 
    else if (userPick == "Bear" && browserPick == "Cowboy") {result = "lose"}
    else if (userPick == "Ninja" && browserPick == "Cowboy") {result = "win"}
    else if (userPick == "Ninja" && browserPick == "Bear") {result = "lose"}
    else if (userPick == "Cowboy" && browserPick == "Bear") {result = "win"}
    else if (userPick == "Cowboy" && browserPick == "Ninja") {result = "lose"}
    document.getElementById("result").innerHTML = `You ${result}!`
}