const form = document.querySelector("form");
const header = document.querySelector("h2");
// Player type buttons
const strikerBtn = document.querySelector("#striker-btn");
const midfielderBtn = document.querySelector("#midfielder-btn");
const defenderBtn = document.querySelector("#defender-btn");
// displaying playername in another div
const playerName = document.querySelector("#playername"); // the input field where the player name is inputted
const playerNameDisplay = document.querySelector("#playerNameDisplay"); // the div where the player name will be displayed
// params input
const goalsInput = document.querySelector("#goals");
const assistsInput = document.querySelector("#assists");
const motmInput = document.querySelector("#motm");
const yellowCardsInput = document.querySelector("#yellow-cards");
const redCardsInput = document.querySelector("#red-cards");
const cleanSheets = document.querySelector("#cleansheets");
const numOfTrophies = document.querySelector("#trophies");
const averageRating = document.querySelector("#avg-rating");
// calculate
const calculateButton = document.querySelector("#calculate-button");
const totalGoals = document.querySelector("#totalgoals");

// to show flex 2
const hidden = document.querySelector(".hidden");

let playerType = "";
// Add event listeners to the player type buttons
strikerBtn.addEventListener("click", function () {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");
  // Show the player name output
  const text = playerName.value;
  header.textContent = `Striker: ${text}`;
  playerName.value = ""; // Clear input field

  playerType = "Striker";
  // Hide the clean sheets input
  cleanSheets.style.display = "none";
});

midfielderBtn.addEventListener("click", function () {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");

  // Show the player name output
  const text = playerName.value;
  header.textContent = `Midfielder: ${text}`;
  playerName.value = ""; // Clear input field

  playerType = "midfielder";
  // Show the clean sheets input
  cleanSheets.style.display = "block";
});

defenderBtn.addEventListener("click", function () {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");

  // Show the player name output
  const text = playerName.value;
  header.textContent = `Defender: ${text}`;

  playerName.value = ""; // Clear input field

  playerType = "defender";
  // Show the clean sheets input
  cleanSheets.style.display = "block";
});

calculateButton.addEventListener("click", () => {
  hidden.classList.remove("hidden");

  let goals =
    Number(goalsInput.value) *
    (playerType === "defender" || playerType === "midfielder" ? 3 : 2);
  let assists =
    Number(assistsInput.value) *
    (playerType === "defender" || playerType === "midfielder" ? 2 : 1);
  let motm = Number(motmInput.value) * (playerType === "defender" ? 4 : 3);
  let yellowCards =
    Number(yellowCardsInput.value) *
    (playerType === "defender" || playerType === "midfielder" ? -1 : -2);
  let redCards =
    Number(redCardsInput.value) *
    (playerType === "defender" || playerType === "midfielder" ? -2 : -3);
  const trophies = Number(numOfTrophies.value) * 6;
  let totalCleanSheets =
    Number(cleanSheets.value) *
    (playerType === "defender" ? 2 : playerType === "midfielder" ? 1 : 0);

  let avgRatingPoints = 0;
  const avgRating = Number(averageRating.value);
  if (avgRating >= 6.0 && avgRating < 7.0) {
    avgRatingPoints = 1;
  } else if (avgRating >= 7.0 && avgRating < 8.0) {
    avgRatingPoints = 3;
  } else if (avgRating >= 8.0 && avgRating <= 9.5) {
    avgRatingPoints = 4;
  }

  let totalScore =
    goals +
    assists +
    motm +
    yellowCards +
    redCards +
    totalCleanSheets +
    avgRatingPoints +
    trophies;
  // const text = playerName.value;
  // console.log(`${text}`);
  // console.log(`${text} ${totalScore} pts`);
  totalGoals.textContent = `${totalScore} pts`;
});
