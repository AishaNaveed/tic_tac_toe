const ticTacToeGame = require("./TicTacToe");

const basicBoard = [
  [null, "0", null],
  ["X", "X", "0"],
  ["X", null, "0"]
]
/*[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]*/

describe('ticTacToeGame', () => {
  test("function throws an error if array board is not passed", () => {
    expect(() => {
      ticTacToeGame()
    }).toThrow("board is required");
  });

  test('you get no winner', () => {
    expect(ticTacToeGame(basicBoard)).toBe("no one wins");
  });

});