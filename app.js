window.addEventListener("load", function() {
  document.getElementById("bear-btn").addEventListener("click", startGame)
  document.getElementById("ninja-btn").addEventListener("click", startGame)
  document.getElementById("cowboy-btn").addEventListener("click", startGame)
})

function startGame() {
  let userPick = getUserPick(this)
  let browserPick = getBrowserPick()
  getResult(userPick, browserPick)
}

function getUserPick(e) {
  let userPick = e.getAttribute("data-user-pick")
  document.getElementById("user-pick").innerHTML = `You picked ${userPick}`
  renderPick(userPick, "user-pick")
  return userPick
}

function getBrowserPick() {
  let browserPick
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      browserPick = "Bear"
      break
    case 1:
      browserPick = "Ninja"
      break
    case 2:
      browserPick = "Cowboy"
  }
  document.getElementById(
    "browser-pick"
  ).innerHTML = `Browser picked ${browserPick}`
  renderPick(browserPick, "browser-pick")
  return browserPick
}

function getResult(userPick, browserPick) {
  let result
  if (userPick == browserPick) {
    result = "tie"
  } else {
    switch (userPick) {
      case "Bear":
        result = browserPick == "Ninja" ? "win" : "lose"
        break
      case "Ninja":
        result = browserPick == "Cowboy" ? "win" : "lose"
        break
      case "Cowboy":
        result = browserPick == "Bear" ? "win" : "lose"
    }
  }
  renderResult(result)
}

function renderPick(pick, elementID) {
  let location
  switch (pick) {
    case "Bear":
      location = "images/claws.png"
      break
    case "Ninja":
      location = "images/kapow.png"
      break
    case "Cowboy":
      location = "images/bang.png"
  }

  let image = document.createElement("img")
  image.setAttribute("src", location)
  image.setAttribute("alt", pick)
  let p = document.getElementById(elementID)
  p.appendChild(image)
}

function renderResult(result) {
  let resultStyle
  switch (result) {
    case "tie":
      resultStyle = "font-size: 15vw; color: red; font-family: BloodType"
      break
    case "win":
      resultStyle = "font-size: 20vw; color: green"
      break
    case "lose":
      resultStyle = "font-size: 20vw; color: red"
  }

  document.getElementById(
    "result"
  ).innerHTML = `<span id="result-span" style="${resultStyle}"> ${result}</span>`
  document.getElementById("overlay").style.display = "block"
  document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"
    document.getElementById("user-pick").innerHTML = ""
    document.getElementById("browser-pick").innerHTML = ""
  })
}