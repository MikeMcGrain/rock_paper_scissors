const BEAR = "Bear"
const NINJA = "Ninja"
const COWBOY = "Cowboy"


window.addEventListener("load", function() {
  document.getElementById("bear-btn").addEventListener("click", startGame)
  document.getElementById("ninja-btn").addEventListener("click", startGame)
  document.getElementById("cowboy-btn").addEventListener("click", startGame)
})

function startGame() {
  let div = document.getElementById("btn-container")
  div.setAttribute("style" ,"margin: 3vw 0 1vw 0; transform: none")

  const userPick = this.getAttribute("data-user-pick")
  document.getElementById("user-pick").innerHTML = `You picked ${userPick}`
  renderPick(userPick, "user-pick")

  const browserPick = getBrowserPick()
  document.getElementById("browser-pick").innerHTML = `Browser picked ${browserPick}`
  renderPick(browserPick, "browser-pick")

  const result = getResult(userPick, browserPick)
  renderResult(result)
}

function getBrowserPick() {
  switch (Math.floor(Math.random() * 3)) {
    case 0: return BEAR
    case 1: return NINJA
    case 2: return COWBOY
  }
}

function getResult(userPick, browserPick) {
  if (userPick == browserPick) {return "tie"} 

  switch (userPick) {
    case BEAR: return (browserPick == NINJA) ? "win" : "lose"; break
    case NINJA: return (browserPick == COWBOY) ? "win" : "lose"; break
    case COWBOY: return (browserPick == BEAR) ? "win" : "lose"
  }
}

function renderPick(pick, elementID) {
  
  let imageLocation
  switch (pick) {
    case BEAR: imageLocation = "images/claws.png"; break
    case NINJA: imageLocation = "images/kapow.png"; break
    case COWBOY: imageLocation = "images/bang.png"
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