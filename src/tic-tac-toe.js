class TicTacToe {
    constructor() {
        this.field = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.player = "x";
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === '') {
            this.field[rowIndex][columnIndex] = this.player;
            if (this.player === 'x') {
                this.player = 'o';
            } else {
                this.player = 'x';
            }
        }

    }

    isFinished() {
        let o = '';
        for (let i of this.field) {
            for (let n of i) {
                if (n === '') {
                    o = false;

                }
            }
        }
        if (0 == '') return true;
    }

    getWinner() {
        let winner;
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] == this.field[i][1] == this.field[i][2]) {
                winner = this.player;
                break;
            } else if (this.field[0][i] == this.field[1][i] == this.field[2][i]) {
                winner = this.player;
                break;
            };
        }
        if (this.field[0][0] == this.field[1][1] == this.field[2][2]) {
            winner = this.player;
        } else if (this.field[0][2] == this.field[1][1] == this.field[2][0]) {
            winner = this.player;
        }
        if (winner === 'x' || winner === 'o') {
            return this.player;
        } else {
            return null;
        }
    }

    noMoreTurns() {
        let count = 0;
        for (let i of this.field) {
            for (let c of i) {
                if (c !== '') {
                    count++;
                }
            }
        }
        if (count !== 9) {
            return false
        } else {
            return true
        }
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex] ? this.field[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;