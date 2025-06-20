const gameContainer = document.querySelector(".game-container")
const score = document.querySelector(".score")
const play = document.querySelector(".play")

const gridSize = {
  cols: 30,
  rows: 30
}

let currentScore = 0

const music = new Audio("./sounds/GIMS - Ciel (Official Lyrics Video).mp3")
music.volume = 0.03


function updateScore() {
  currentScore++
  score.textContent = "Score: " + currentScore
}


function nathanGenerator() {
  const nathanX = Math.floor(Math.random() * gridSize.cols + 1)
  const nathanY = Math.floor(Math.random() * gridSize.rows + 1)

  const newNathan = document.createElement("img")
  newNathan.className = "nathan"
  newNathan.src = "./img/image0.jpg"
  newNathan.alt = "Nathan le goat"

  newNathan.style.gridColumnStart = nathanX
  newNathan.style.gridRowStart = nathanY

  gameContainer.appendChild(newNathan)

  newNathan.addEventListener("click", () => {
    updateScore()
    newNathan.remove()
    nathanGenerator() 
  })
}

function startGame() {
  currentScore = 0
  score.textContent = "Score : 0"
  nathanGenerator()
  music.play()
}


play.addEventListener("click", () => {
  startGame()
})