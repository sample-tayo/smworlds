const form = document.querySelector("form");
const header = document.querySelector("h2");
// Player type buttons
const strikerBtn = document.querySelector("#striker-btn");
const midfielderBtn = document.querySelector("#midfielder-btn");
const defenderBtn = document.querySelector("#defender-btn");
const goldenGloveBtn = document.querySelector("#golden-glove-btn");
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
const cleanSheetLabel = document.getElementById("cleansheets-label");
const goalsInputLabel = document.getElementById("goalsInput-label");
const assistInputLabel = document.getElementById("assistInput-label");
const numOfTrophies = document.querySelector("#trophies");
const averageRating = document.querySelector("#avg-rating");
const avgRatingLabel = document.querySelector("#avgRating-label");
// calculate
const calculateButton = document.querySelector("#calculate-button");
const totalGoals = document.querySelector("#totalgoals");

//displaying results
const totalGoalsDisplay = document.querySelector("#totalGoalsDisplay");
const totalAssistDisplay = document.querySelector("#totalAssistDisplay");
const totalmotmDisplay = document.querySelector("#totalmotmDisplay");
const totalYellowCard = document.querySelector("#totalYellowCard");
const totalRedCardDisplay = document.querySelector("#totalRedCard");
const avgRatingsDisplay = document.querySelector("#avgRatingsDisplay");
const totalTrophiesDisplay = document.querySelector("#totalTrophiesDisplay");
const playerDisplay = document.querySelector("#player-name-display");

// to show flex 2
const hidden = document.querySelector(".hidden");

let playerType = "";
// Add event listeners to the player type buttons
strikerBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");
  // Show the player name output
  const text = playerName.value;
  header.textContent = `Striker: ${text}`;
  playerName.value = ""; // Clear input field

  playerType = "Striker";
  // Hide the clean sheets input
  cleanSheets.style.display = "none";
  cleanSheetLabel.style.display = "none";
  averageRating.style.display = "none";
  avgRatingLabel.style.display = "none";
});

midfielderBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");

  // Show the player name output
  const text = playerName.value;
  header.textContent = `Midfielder: ${text}`;
  playerName.value = ""; // Clear input field

  playerType = "midfielder";
  // Show the clean sheets input
  cleanSheets.style.display = "none";
  cleanSheetLabel.style.display = "none";
  averageRating.style.display = "block";
  avgRatingLabel.style.display = "inline";
});

defenderBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");

  // Show the player name output
  const text = playerName.value;
  header.textContent = `Defender: ${text}`;

  playerName.value = ""; // Clear input field

  playerType = "defender";
  // Show the clean sheets input
  cleanSheetLabel.style.display = "inline";
  cleanSheets.style.display = "block";
  averageRating.style.display = "block";
  avgRatingLabel.style.display = "inline";
});

goldenGloveBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  hidden.classList.remove("hidden");

  // Show the player name output
  const text = playerName.value;
  header.textContent = `Keeper: ${text}`;

  playerName.value = ""; // Clear input field

  playerType = "keeper";
  // Show the clean sheets input
  cleanSheetLabel.style.display = "inline";
  cleanSheets.style.display = "block";
  goalsInput.style.display = "none";
  goalsInputLabel.style.display = "none";
  assistsInput.style.display = "none";
  assistInputLabel.style.display = "none";
  averageRating.style.display = "none";
  avgRatingLabel.style.display = "none";
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
    (playerType === "defender" || playerType === "midfielder"
      ? -1
      : playerType === "keeper"
      ? -1
      : -2);
  let redCards =
    Number(redCardsInput.value) *
    (playerType === "defender" || playerType === "midfielder"
      ? -2
      : playerType === "keeper"
      ? -2
      : -3);
  const trophies = Number(numOfTrophies.value) * 6;
  let totalCleanSheets =
    Number(cleanSheets.value) *
    (playerType === "defender" ? 2 : playerType === "keeper" ? 3 : 0);

  const avgRating = Number(averageRating.value);
  let avgRatingPoints = 0;
  if (
    avgRating >= 6.0 &&
    avgRating < 7.0 &&
    (playerType === "keeper" ||
      playerType === "defender" ||
      playerType === "striker" ||
      playerType === "midfielder")
  ) {
    avgRatingPoints = 1;
  } else if (
    avgRating >= 7.1 &&
    avgRating < 8.0 &&
    (playerType === "keeper" || playerType === "defender")
  ) {
    avgRatingPoints = 3;
  } else if (
    avgRating >= 7.1 &&
    avgRating < 8.0 &&
    (playerType === "striker" || playerType === "midfielder")
  ) {
    avgRatingPoints = 2;
  } else if (
    avgRating >= 8.1 &&
    avgRating <= 9.5 &&
    (playerType === "keeper" || playerType === "defender")
  ) {
    avgRatingPoints = 4;
  } else if (
    avgRating >= 8.1 &&
    avgRating <= 9.5 &&
    (playerType === "striker" || playerType === "midfielder")
  ) {
    avgRatingPoints = 3;
  }

  console.log(avgRatingPoints);
  console.log("playerType:", playerType);
  console.log("avgRating:", avgRating);

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
  playerDisplay.textContent = `${playerName.value}`;
  totalGoals.textContent = `Total-points: ${totalScore}pts`;
  totalGoalsDisplay.textContent = `Goals: ${goalsInput.value} || ${goals}pts `;
  totalAssistDisplay.textContent = `Assists: ${assistsInput.value} || ${assists}pts`;
  totalmotmDisplay.textContent = `MOTM: ${motmInput.value} || ${motm}pts`;
  totalmotmDisplay.textContent = `Yellow-Card: ${yellowCardsInput.value} || ${yellowCards}pts`;
  totalRedCardDisplay.textContent = `Red-Card: ${redCardsInput.value} || ${redCards}pts`;
  avgRatingsDisplay.textContent = `Avg-Ratings: ${averageRating.value} || ${avgRatingPoints}pts`;
  totalTrophiesDisplay.textContent = `Trophies: ${numOfTrophies.value}|| ${trophies}pts`;
});
