$(function () {
  console.log("READY");

  $("#Btn-Paper").click(function () {
    console.log("Click al boton PAPER");
    const Selection = 0;
    const result = playGame(Selection);
    console.log(result);
  });

  $("#Btn-Scissors").click(function () {
    console.log("Click al boton SCISSORS");
    const Selection = 1;
    const result = playGame(Selection);
    console.log(result);
  });

  $("#Btn-Rock").click(function () {
    console.log("Click al boton ROCK");
    const Selection = 2;
    const result = playGame(Selection);
    console.log(result);
  });

  const playGame = (Selection) => {
    const selections = ["Paper", "Scissors", "Rock"];
    const userSelec = selections[Selection];
    const machineSelec = selections[Math.floor(Math.random() * 3)];

    console.log("Usuario seleccionó:", userSelec);
    console.log("Máquina seleccionó:", machineSelec);
    
    return checkWinner(userSelec, machineSelec)

  };

  const checkWinner = (userSelection, machineSelection) => {
    if (userSelection === machineSelection) {
      return "tie!";
    } else if (
      (userSelection === "Paper" && machineSelection === "Rock") ||
      (userSelection === "Scissors" && machineSelection === "Paper") ||
      (userSelection === "Rock" && machineSelection === "Scissors")
    ) {
      $("#Score-Points").text(parseInt($("#Score-Points").text()) + 1);
      return "Win!";
    } else {
      return "Lost :(";
    }
  };

  $("#Btn-Rules").click(function() {
    const modalTarget = $(this).data("modal-target");
    $(modalTarget).show();
  });

  $(".close-btn").click(function() {
    $(this).closest(".modal").hide();
  });
});
