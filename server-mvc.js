const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/playGame", handlePlayGame);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});


function handlePlayGame(request, response) {
    console.log("Playing game...");

    const playerWeapon = request.query.playerWeapon;
    console.log("Player weapon: " + playerWeapon);

    playRPSGame(playerWeapon, function(params) {
        response.render("results", params);
    });
}

function handlePlayGameAsync(request, response) {
    const playerWeapon = request.query.playerWeapon;

    playRPSGame(playerWeapon, function(params) {
        response.json(params);
    });
}


/*********
 * Goes into models/rps.js
 **********/

function generateCPUChoice() {
    return "scissors";
}

function determineWinner(p1Choice, p2Choice) {
    return "Player";
}

function playRPSGame(playerWeapon, handleResult) {
    const cpuWeapon = generateCPUChoice();
    const winner = determineWinner(playerWeapon, cpuWeapon);

    const params = {
        playerWeapon: playerWeapon,
        cpuWeapon: cpuWeapon,
        winner: winner
    };

    handleResult(params);
}
