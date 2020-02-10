const BEAR = "Bear"
const NINJA = "Ninja"
const COWBOY = "Cowboy"

const BEAR_ATTACK_IMG = "images/claws.png"
const NINJA_ATTACK_IMG = "images/kapow.png"
const COWBOY_ATTACK_IMG = "images/bang.png"

window.addEventListener("load", function() {
  document.getElementById("bear-btn").addEventListener("click", startGame)
  document.getElementById("ninja-btn").addEventListener("click", startGame)
  document.getElementById("cowboy-btn").addEventListener("click", startGame)
})

function startGame() {
  let div = document.getElementById("btn-container")
  div.setAttribute("style" ,"margin: 3vw 0 1vw 0; transform: none")

  const USER_PICK = this.getAttribute("data-user-pick")
  renderPick(USER_PICK, "user-pick")

  const BROWSER_PICK = getBrowserPick()
  renderPick(BROWSER_PICK, "browser-pick")

  const RESULT = getResult(USER_PICK, BROWSER_PICK)
  renderResult(RESULT)
}

function getBrowserPick() {
  switch (Math.floor(Math.random() * 3)) {
    case 0: return BEAR
    case 1: return NINJA
    case 2: return COWBOY
  }
}

function getResult(USER_PICK, BROWSER_PICK) {
  if (USER_PICK == BROWSER_PICK) {return "tie"} 

  switch (USER_PICK) {
    case BEAR: return (BROWSER_PICK == NINJA) ? "win" : "lose"; break
    case NINJA: return (BROWSER_PICK == COWBOY) ? "win" : "lose"; break
    case COWBOY: return (BROWSER_PICK == BEAR) ? "win" : "lose"
  }
}

function renderPick(pick, elementID) {
  elementID == "user-pick" 
    ? document.getElementById(elementID).innerHTML = `You picked ${pick}`
    : document.getElementById(elementID).innerHTML = `Browser picked ${pick}`

  let imageLocation
  switch (pick) {
    case BEAR: imageLocation = BEAR_ATTACK_IMG; break
    case NINJA: imageLocation = NINJA_ATTACK_IMG; break
    case COWBOY: imageLocation = COWBOY_ATTACK_IMG
  }
  let img = document.createElement("img")
  img.setAttribute("id", "action-image")
  img.setAttribute("src", imageLocation)
  img.setAttribute("alt", pick)
  let p = document.getElementById(elementID)
  p.appendChild(img)
}

function renderResult(result) {
  let p = document.getElementById("result")
  switch (result) {
    case "tie":
      p.innerHTML = "You both die!"
      p.setAttribute("style", "font-family: BloodType; font-size: 12vw; color: red; top: 14vw")
      break
    case "win":
      p.innerHTML = "YOU WIN!!!"
      p.setAttribute("style", "font-family: RubberStamp; color: green; text-decoration: underline; transform: rotate(-5deg)")
      break
    case "lose":
      p.innerHTML = "YOU LOSE!"
      p.setAttribute("style", "font-family: RubberStamp; color: red; text-decoration: underline; transform: rotate(5deg)")
  }
  document.getElementById("overlay").style.display = "block"
  document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"
    document.getElementById("user-pick").innerHTML = ""
    document.getElementById("browser-pick").innerHTML = ""
    let div = document.getElementById("btn-container")
    div.setAttribute("style" ,"margin: 16vw 0 1vw 0; transform: scale(2.75, 2.75)")
  })
}