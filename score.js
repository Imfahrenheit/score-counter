let p1 = document.getElementById("one");
let p2 = document.getElementById("two");
let resetButton = document.getElementById("reset");
let p1Score = 0;
let p2Score = 0;
let p1Dis = document.getElementById("p1Display");
let p2Dis = document.getElementById("p2Display");
let gameOver = false;
let winningScore = 5;
let changeScore = document.querySelector("p span");

let numInput = document.querySelector("input");

p1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Dis.classList.add("winner");
      gameOver = true;
    }
    p1Dis.textContent = p1Score;
  }
});

p2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Dis.classList.add("winner");
      gameOver = true;
    }

    p2Dis.textContent = p2Score;
  }
});
resetButton.addEventListener("click", function() {
  res();
});

function res() {
  p1Score = 0;
  p2Score = 0;
  p1Dis.textContent = p1Score;
  p2Dis.textContent = p2Score;
  p1Dis.classList.remove("winner");
  p2Dis.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function() {
  !numInput.value
    ? (changeScore.textContent = "no range set")
    : (changeScore.textContent = numInput.value);

  winningScore = Number(numInput.value);
  res();

  numInput.value = "";
});
