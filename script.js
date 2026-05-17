let xp = 0
let level = 1
let coins = 0
let bossHealth = 100
let username = "Player"

if (localStorage.getItem("xp")) {
  xp = Number(localStorage.getItem("xp"))
}

if (localStorage.getItem("level")) {
  level = Number(localStorage.getItem("level"))
}

if (localStorage.getItem("coins")) {
  coins = Number(localStorage.getItem("coins"))
}

if (localStorage.getItem("bossHealth")) {
  bossHealth = Number(localStorage.getItem("bossHealth"))
}

if (localStorage.getItem("username")) {
  username = localStorage.getItem("username")
}

function showNotification(message) {
  let notification =
    document.getElementById("notification")

  notification.innerText = message

  notification.classList.add("show")

  setTimeout(function () {
    notification.classList.remove("show")
  }, 2000)
}

function saveUsername() {
  let input =
    document.getElementById("usernameInput").value

  if (input != "") {
    username = input

    localStorage.setItem("username", username)

    showNotification("🎮 Player Saved!")

    updateUI()
  }
}

function updateUI() {
  document.getElementById("xp").innerText = xp

  document.getElementById("level").innerText = level

  document.getElementById("coins").innerText = coins

  document.getElementById("welcomeText").innerText =
    "Welcome " + username

  let progress = xp

  document.getElementById("xpFill").style.width =
    progress + "%"

  let rank = "Beginner"

  if (level >= 3) {
    rank = "Elite Learner"
  }

  if (level >= 5) {
    rank = "Focus Master"
  }

  document.getElementById("rank").innerText = rank

  let character = "Rookie Explorer"

  if (level >= 3) {
    character = "Quest Hunter"
  }

  if (level >= 5) {
    character = "Cyber Warrior"
  }

  document.getElementById("characterTitle").innerText =
    character

  if (level < 3) {
    document.getElementById("badge").innerText =
      "🥉 Beginner Adventurer"
  }

  if (level >= 3) {
    document.getElementById("badge").innerText =
      "🥈 Consistent Learner"
  }

  if (level >= 5) {
    document.getElementById("badge").innerText =
      "🏆 Focus Master"
  }

  document.getElementById("bossHealth").innerText =
    bossHealth

  document.getElementById("bossFill").style.width =
    bossHealth + "%"

  if (bossHealth <= 0) {
    document.getElementById("bossStatus").innerText =
      "🎉 Boss Defeated!"
  }
}

function completeTask(taskXP) {
  xp = xp + taskXP

  coins = coins + 10

  let randomBonus =
    Math.floor(Math.random() * 20)

  xp = xp + randomBonus

  let damage =
    Math.floor(Math.random() * 15) + 5

  bossHealth = bossHealth - damage

  if (bossHealth < 0) {
    bossHealth = 0
  }

  if (xp >= 100) {
    level = level + 1

    xp = xp - 100

    showNotification(
      "🎉 LEVEL UP! Level " + level)
  }

  if (randomBonus > 10) {
    showNotification(
      "✨ BONUS XP +" + randomBonus)
  }

  localStorage.setItem("xp", xp)

  localStorage.setItem("level", level)

  localStorage.setItem("coins", coins)

  localStorage.setItem("bossHealth", bossHealth)

  localStorage.setItem("username", username)

  updateUI()
}

updateUI()