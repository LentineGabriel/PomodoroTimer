// variables
const pomodoroContainer = document.querySelector(".pomodoro-container");
const pomodoroChoice = document.querySelector(".pomodoro-choice");
const shortContainer = document.querySelector(".short-container");
const shortChoice = document.querySelector(".short-choice");
const longContainer = document.querySelector(".long-container");
const longChoice = document.querySelector(".long-choice");

let pomodoroInterval = null;
let shortInterval = null;
let longInterval = null;
let isPomodoroPaused = false;
let isShortPaused = false;
let isLongPaused = false;

// functions
function showContainer(container) {
  pomodoroContainer.classList.add("hide");
  shortContainer.classList.add("hide");
  longContainer.classList.add("hide");
  
  container.classList.remove("hide");
}

// switching colors
function pomodoroBg() {
  document.body.style.backgroundColor = "#640000";

  const pomodoroBtns = document.querySelectorAll(".pomodoro-btn");
  pomodoroBtns.forEach((btn) => {
    btn.style.backgroundColor = "#ff0000";
  });
}

function shortBg() {
  document.body.style.backgroundColor = "#002364";

  const startBtns = document.querySelectorAll(".pomodoro-btn");
  startBtns.forEach((btn) => {
    btn.style.backgroundColor = "#003eb1";
  });
}

function longBg() {
  document.body.style.backgroundColor = "#00641e";

  const startBtns = document.querySelectorAll(".pomodoro-btn");
  startBtns.forEach((btn) => {
    btn.style.backgroundColor = "#00b109";
  });
}

// buttons
function pomodoroStart() {
  if (pomodoroInterval) return;

  let pomodoroTimer = 25 * 60; // 1500s
  const timerElement = document.querySelector(".pomodoro-timer");
  const pomodoroBtn = document.querySelector(
    ".pomodoro-container .pomodoro-btn"
  );

  // pick up the current time if it was paused
  if (isPomodoroPaused) {
    const currentTime = timerElement.textContent;
    const [minutes, seconds] = currentTime.split(":").map(Number);
    pomodoroTimer = minutes * 60 + seconds;
  }

  pomodoroInterval = setInterval(() => {
    if (pomodoroTimer <= 0) {
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
      timerElement.textContent = "00:00";
      pomodoroBtn.innerHTML = "start";
      alert("Tempo do Pomodoro acabou!");
      return;
    }
    pomodoroTimer--;

    const minutes = Math.floor(pomodoroTimer / 60);
    const seconds = pomodoroTimer % 60;

    const formatTimer = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    timerElement.textContent = formatTimer;
  }, 1000);

  isPomodoroPaused = false;
  pomodoroBtn.innerHTML = "start";
}

function pomodoroPause() {
  if (pomodoroInterval) {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    isPomodoroPaused = true;

    const pomodoroBtn = document.querySelector(
      ".pomodoro-container .pomodoro-btn"
    );
    const pauseBtn = document.querySelector(".pomodoro-container .pause-btn");
    pomodoroBtn.innerHTML = "resume";
    pauseBtn.innerHTML = "restart";
  }
}

function pomodoroRestart() {
  const timerElement = document.querySelector(".pomodoro-timer");
  const pomodoroBtn = document.querySelector(
    ".pomodoro-container .pomodoro-btn"
  );
  const pauseBtn = document.querySelector(".pomodoro-container .pause-btn");

  // Reset timer to default
  timerElement.textContent = "25:00";

  // Reset button texts
  pomodoroBtn.innerHTML = "start";
  pauseBtn.innerHTML = "pause";

  // Reset pause state
  isPomodoroPaused = false;
}

function shortStart() {
  if (shortInterval) return;

  let shortTimer = 5 * 60; // 300s
  const timerElement = document.querySelector(".short-timer");
  const shortBtn = document.querySelector(".short-container .pomodoro-btn");

  // pick up the current time if it was paused
  if (isShortPaused) {
    const currentTime = timerElement.textContent;
    const [minutes, seconds] = currentTime.split(":").map(Number);
    shortTimer = minutes * 60 + seconds;
  }

  shortInterval = setInterval(() => {
    if (shortTimer <= 0) {
      clearInterval(shortInterval);
      shortInterval = null;
      timerElement.textContent = "00:00";
      shortBtn.innerHTML = "start";
      alert("Tempo do Short Break acabou!");
      return;
    }
    shortTimer--;

    const minutes = Math.floor(shortTimer / 60);
    const seconds = shortTimer % 60;

    const formatTimer = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    timerElement.textContent = formatTimer;
  }, 1000);

  isShortPaused = false;
  shortBtn.innerHTML = "start";
}

function shortPause() {
  if (shortInterval) {
    clearInterval(shortInterval);
    shortInterval = null;
    isShortPaused = true;

    const shortBtn = document.querySelector(".short-container .pomodoro-btn");
    const pauseBtn = document.querySelector(".short-container .pause-btn");
    shortBtn.innerHTML = "resume";
    pauseBtn.innerHTML = "restart";
  }
}

function shortRestart() {
  const timerElement = document.querySelector(".short-timer");
  const shortBtn = document.querySelector(".short-container .pomodoro-btn");
  const pauseBtn = document.querySelector(".short-container .pause-btn");

  // Reset timer to default
  timerElement.textContent = "05:00";

  // Reset button texts
  shortBtn.innerHTML = "start";
  pauseBtn.innerHTML = "pause";

  // Reset pause state
  isShortPaused = false;
}

function longStart() {
  if (longInterval) return;

  let longTimer = 15 * 60; // 900s
  const timerElement = document.querySelector(".long-timer");
  const longBtn = document.querySelector(".long-container .pomodoro-btn");

  // pick up the current time if it was paused
  if (isLongPaused) {
    const currentTime = timerElement.textContent;
    const [minutes, seconds] = currentTime.split(":").map(Number);
    longTimer = minutes * 60 + seconds;
  }

  longInterval = setInterval(() => {
    if (longTimer <= 0) {
      clearInterval(longInterval);
      longInterval = null;
      timerElement.textContent = "00:00";
      longBtn.innerHTML = "start";
      alert("Tempo do Long Break acabou!");
      return;
    }
    longTimer--;

    const minutes = Math.floor(longTimer / 60);
    const seconds = longTimer % 60;

    const formatTimer = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    timerElement.textContent = formatTimer;
  }, 1000);

  isLongPaused = false;
  longBtn.innerHTML = "start";
}

function longPause() {
  if (longInterval) {
    clearInterval(longInterval);
    longInterval = null;
    isLongPaused = true;

    const longBtn = document.querySelector(".long-container .pomodoro-btn");
    const pauseBtn = document.querySelector(".long-container .pause-btn");
    longBtn.innerHTML = "resume";
    pauseBtn.innerHTML = "restart";
  }
}

function longRestart() {
  const timerElement = document.querySelector(".long-timer");
  const longBtn = document.querySelector(".long-container .pomodoro-btn");
  const pauseBtn = document.querySelector(".long-container .pause-btn");

  // Reset timer to default
  timerElement.textContent = "15:00";

  // Reset button texts
  longBtn.innerHTML = "start";
  pauseBtn.innerHTML = "pause";

  // Reset pause state
  isLongPaused = false;
}

// events
pomodoroChoice.addEventListener("click", () => {
  showContainer(pomodoroContainer);
  pomodoroBg();
});
shortChoice.addEventListener("click", () => {
  showContainer(shortContainer);
  shortBg();
});
longChoice.addEventListener("click", () => {
  showContainer(longContainer);
  longBg();
});

// start-btn
document
  .querySelector(".pomodoro-container .pomodoro-btn")
  .addEventListener("click", () => {
    pomodoroStart();
  });
document
  .querySelector(".short-container .pomodoro-btn")
  .addEventListener("click", () => {
    shortStart();
  });
document
  .querySelector(".long-container .pomodoro-btn")
  .addEventListener("click", () => {
    longStart();
  });

// pause-btn
document
  .querySelector(".pomodoro-container .pause-btn")
  .addEventListener("click", () => {
    if (isPomodoroPaused) {
      pomodoroRestart();
    } else {
      pomodoroPause();
    }
  });

document
  .querySelector(".short-container .pause-btn")
  .addEventListener("click", () => {
    if (isShortPaused) {
      shortRestart();
    } else {
      shortPause();
    }
  });

document
  .querySelector(".long-container .pause-btn")
  .addEventListener("click", () => {
    if (isLongPaused) {
      longRestart();
    } else {
      longPause();
    }
  });
