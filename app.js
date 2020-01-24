window.addEventListener("load", function() {
  document.getElementById("bear-btn").addEventListener("click", startGame)
  document.getElementById("ninja-btn").addEventListener("click", startGame)
  document.getElementById("cowboy-btn").addEventListener("click", startGame)
})

function startGame() {
  const userPick = getUserPick(this)
  const browserPick = getBrowserPick()
  getResult(userPick, browserPick)
}

function getUserPick(e) {
  const userPick = e.getAttribute("data-user-pick")
  document.getElementById("user-pick").innerHTML = `You picked ${userPick}`
  renderPick(userPick, "user-pick")
  return userPick
}

function getBrowserPick() {
  let browserPick
  switch (Math.floor(Math.random() * 3)) {
    case 0: browserPick = "Bear"; break
    case 1: browserPick = "Ninja"; break
    case 2: browserPick = "Cowboy"
  }
  document.getElementById("browser-pick").innerHTML = `Browser picked ${browserPick}`
  renderPick(browserPick, "browser-pick")
  return browserPick
}

function getResult(userPick, browserPick) {
  let result
  if (userPick == browserPick) {result = "tie"} 
  else {
    switch (userPick) {
      case "Bear": result = (browserPick == "Ninja") ? "win" : "lose"; break
      case "Ninja": result = (browserPick == "Cowboy") ? "win" : "lose"; break
      case "Cowboy": result = (browserPick == "Bear") ? "win" : "lose"
    }
  }
  renderResult(result)
}

function renderPick(pick, elementID) {
  let imageLocation
  switch (pick) {
    case "Bear": imageLocation = "images/claws.png"; break
    case "Ninja": imageLocation = "images/kapow.png"; break
    case "Cowboy": imageLocation = "images/bang.png"
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
      p.setAttribute("style", "font-family: BloodType; font-size: 12vw; color: red; transform: translate(-50%,-50%)")
      break
    case "win":
      p.innerHTML = "YOU WIN!"
      p.setAttribute("style", "font-family: RubberStamp; font-size: 14vw; color: green; text-decoration: underline; top: 50%")
      break
    case "lose":
      p.innerHTML = "YOU LOSE!"
      p.setAttribute("style", "font-family: RubberStamp; font-size: 14vw; color: red; text-decoration: underline; transform: rotate(4deg) translate(-50%,-50%)")
  }
  document.getElementById("overlay").style.display = "block"
  document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"
    document.getElementById("user-pick").innerHTML = ""
    document.getElementById("browser-pick").innerHTML = ""
  })
}