var names = [];
var scores = [];

var $ = function (id) {
  return document.getElementById(id);
};

var addScore = function () {
  // get user entries
  var name = $("name").value;
  var score = parseInt($("score").value);

  // check entries for validity
  if (name == "" || isNaN(score) || score < 0 || score > 100) {
    alert("You must enter a name and a valid score");
  } else {
    names[names.length] = name;
    scores[scores.length] = score;
    $("name").value = "";
    $("score").value = "";
  }
  $("name").focus();
};

var displayScores = function () {
  var scoreDisplay = "<h2>Scores</h2>";
  scoreDisplay += "<tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
  for (var i = 0; i < scores.length; i++) {
    scoreDisplay +=
      "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
  }
  $("scores_table").innerHTML = scoreDisplay;
};

var displayResult = function () {
  var resultDisplay = "<h2>Results</h2>";
  let scoreSum = 0;
  for (var i = 0; i < scores.length; i++) {
    scoreSum += scores[i];
  }
  let avg = scoreSum / scores.length;
  let highScore = scores[0];
  let j = 0;
  for (var i = 0; i < scores.length - 1; i++) {
    if (highScore < scores[i + 1]) {
      highScore = scores[i + 1];
      j = i + 1;
    }
  }

  resultDisplay += "<p>Average Score= " + avg + "</p>";
  resultDisplay +=
    "<p>High score = " + names[j] + " with a score of " + highScore + "</p>";

  $("result").innerHTML = resultDisplay;
};

window.onload = function () {
  $("add").onclick = addScore;
  $("display_scores").onclick = displayScores;
  $("display_results").onclick = displayResult;
  $("name").focus();
};