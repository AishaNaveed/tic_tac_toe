function ticTacToeGame(basicBoard)
{
    if(basicBoard === undefined) throw new Error("board is required");

    let symbol = null;
    let tempBoard = new Array();
    tempBoard.push("0");
    tempBoard.push("X");

    tempBoard.forEach(position => {
        if(basicBoard[0][0] === position){
            if(basicBoard[0][0] === basicBoard[0][1] && basicBoard[0][0] === basicBoard[0][2]){
                symbol = position;     
            }
            else if(basicBoard[0][0] === basicBoard[1][0] && basicBoard[0][0] === basicBoard[2][0]){
                symbol = position;
            }
            else if (basicBoard[0][0] === basicBoard[1][1] && basicBoard[1][1] === basicBoard[2][2]){
                symbol = position;
            }
            else if (basicBoard[1][0] === basicBoard[1][1] && basicBoard[1][1] === basicBoard[1][2]){
                symbol = position;
            }
            else if (basicBoard[2][0] === basicBoard[2][1] && basicBoard[2][1] === basicBoard[2][2]){
                symbol = position;
            }
            else if (basicBoard[0][1] === basicBoard[1][1] && basicBoard[1][1] === basicBoard[2][1]){
                symbol = position;
            }
            else if (basicBoard[0][2] === basicBoard[1][2] && basicBoard[1][2] === basicBoard[2][2]){
                symbol = position;
            }
            else if (basicBoard[0][2] === basicBoard[1][1] && basicBoard[1][1] === basicBoard[2][0]){
                symbol = position;
            }
            symbol = null;
        }
        else{
            symbol = null;
        }
    });

    return symbol === null ? "no one wins" : `${symbol} is the winner`;
}

module.exports = ticTacToeGame;