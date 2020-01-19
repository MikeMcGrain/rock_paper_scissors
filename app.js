document.getElementById("bear-btn").addEventListener("click", getUserPick)
document.getElementById("ninja-btn").addEventListener("click", getUserPick)
document.getElementById("cowboy-btn").addEventListener("click", getUserPick)

function getUserPick() {
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
    else {
        switch (userPick) {
            case "Bear": result = (browserPick == "Ninja") ? "win" : "lose"; break
            case "Ninja": result = (browserPick == "Cowboy") ? "win" : "lose"; break
            case "Cowboy": result = (browserPick == "Bear") ? "win" : "lose"
        }
    } 
    document.getElementById("result").innerHTML = `You ${result}!`
}