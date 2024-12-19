"use strict";

const userLevel = document.getElementById("level");
const submitButton = document.querySelector("#submit");
const invalidMessage = document.querySelector(".hidden");

const addGradeButton = document.getElementById("add-grade");
const gradesContainer = document.getElementById("grades-container");

const levelList = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  "Phd",
  "Masters",
  "Diploma",
];

// Action once the submit button is clicked
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Validate  Form
  if (levelList.includes(Number(userLevel.value))) {
    table.classList.remove("hidden");
    generateTableRows(8);
  } else {
    invalidMessage.classList.remove("hidden");
  }
});

// grading system

// default grading system
const defaultGrading = function (score) {
  if (score >= 0 && score <= 39) {
    grade = "F";
  }
  if (score >= 40 && score <= 44) {
    grade = "E";
  }
  if (score >= 45 && score <= 49) {
    grade = "D";
  }
  if (score >= 50 && score <= 59) {
    grade = "C";
  }
  if (score >= 60 && score <= 74) {
    grade = "B";
  }
  if (score >= 75 && score <= 100) {
    grade = "A";
  }
};
const defaultCalcGP = function () {
  if (grade === "F") gp = 0;
  if (grade === "E") gp = 1;
  if (grade === "D") gp = 2;
  if (grade === "C") gp = 3;
  if (grade === "B") gp = 4;
  if (grade === "A") gp = 5;
};

document.getElementById("add-grade-btn").addEventListener("click", function () {
  // Select the existing grade entry
  const gradeEntry = document.querySelector(".grade-entry");

  // Clone the grade entry
  const newGradeEntry = gradeEntry.cloneNode(true);

  // Clear all input fields in the cloned entry
  const inputs = newGradeEntry.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  // Append the cloned and cleared grade entry to the container
  document.getElementById("grades-container").appendChild(newGradeEntry);
});

document.getElementById("save-btn").addEventListener("click", function () {
  const customgradesdata = document.querySelectorAll(".grade-entry");
  console.log(customgradesdata);
});
