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

    const cpuWeapon = "Scissors";
    const winner = "Player";

    const params = {
        playerWeapon: playerWeapon,
        cpuWeapon: cpuWeapon,
        winner: winner
    };

    response.render("results", params);
}

function playRPSGame(playerWeapon) {
    
}
