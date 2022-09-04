function getComputerChoice() {
    let randomnum = Math.floor(Math.random() * 2);

    return (randomnum === 0) ? "paper":
           (randomnum === 1) ? "rock":
                                "scissors";
}