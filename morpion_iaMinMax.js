class Morpion {
	humanPlayer = 'J1';
	iaPlayer = 'J2';
	gameOver = false;
	gridMap = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];

	constructor(firstPlayer = 'J1') {
		this.humanPlayer = firstPlayer;
		this.iaPlayer = (firstPlayer === 'J1') ? 'J2' : 'J1';
		this.initGame();
	}

	initGame = () => {
		this.gridMap.forEach((line, y) => {
			line.forEach((cell, x) => {
				this.getCell(x, y).onclick = () => {
					this.doPlayHuman(x, y);
				};
			});
		});

		if (this.iaPlayer === 'J1') {
			this.doPlayIa();
		}
	}

	getCell = (x, y) => {
		const column = x + 1;
		const lines = ['A', 'B', 'C'];
		const cellId = `${lines[y]}${column}`;
		return document.getElementById(cellId);
	}

    getBoardWinner = (board) => {
        const isWinningRow = ([a, b, c]) => (
            a !== null && a === b && b === c
        );

        let winner = null;

        // Horizontal
        board.forEach((line) => {
            if (isWinningRow(line)) {
                winner = line[0];
            }
        });

        // Vertical
        [0, 1, 2].forEach((col) => {
            if (isWinningRow([board[0][col], board[1][col], board[2][col]])) {
                winner = board[0][col];
            }
        });

        if (winner) {
            return winner;
        }

        // Diagonal
        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];
        if (isWinningRow(diagonal1) || isWinningRow(diagonal2)) {
            return board[1][1];
        }

        const isFull = board.every((line) => (
			line.every((cell) => cell !== null)
		));
        return isFull ? 'tie' : null;
    }

	checkWinner = (lastPlayer) => {
        const winner = this.getBoardWinner(this.gridMap);
        if (!winner) {
            return;
        }

        this.gameOver = true;
        switch(winner) {
            case 'tie':
			    this.displayEndMessage("Vous êtes à égalité !");
                break;
            case this.iaPlayer:
                this.displayEndMessage("L'IA a gagné !");
                break;
            case this.humanPlayer:
                this.displayEndMessage("Tu as battu l'IA !");
                break;
        }
	}

	displayEndMessage = (message) => {
		const endMessageElement = document.getElementById('end-message');
		endMessageElement.textContent = message;
		endMessageElement.style.display = 'block';
	}

	drawHit = (x, y, player) => {
		if (this.gridMap[y][x] !== null) {
			return false;
		}

		this.gridMap[y][x] = player;
		this.getCell(x, y).classList.add(`filled-${player}`);
		this.checkWinner(player);
		return true;
	}

	doPlayHuman = (x, y) => {
		if (this.gameOver) {
			return;
		}

		if (this.drawHit(x, y, this.humanPlayer)) {
			this.doPlayIa();
		}
	}
	
	doPlayIa = () => {
	if (this.gameOver) return;

	const bestMove = this.getBestMove(this.gridMap);
	if (bestMove) {
		this.drawHit(bestMove.x, bestMove.y, this.iaPlayer);
	}
	};

	cloneGrid(grid) {
	return grid.map(row => row.slice());
	}

	evaluateBoard(board) {
	const winner = this.getBoardWinner(board); 

	if (winner === this.iaPlayer) return 10;
	else if (winner === this.humanPlayer) return -10;
	else return 0;
	}

	minimax(board, isMaximizing) {
	const result = this.getBoardWinner(board);
	if (result !== null) {
		return this.evaluateBoard(board);
	}

	const scores = [];

	for (let y = 0; y < 3; y++) {
		for (let x = 0; x < 3; x++) {
		if (board[y][x] === null) {

			board[y][x] = isMaximizing ? this.iaPlayer : this.humanPlayer;

			const score = this.minimax(board, !isMaximizing);

			board[y][x] = null;

			scores.push(score);
		}
		}
	}

	return isMaximizing ? Math.max(...scores) : Math.min(...scores);
	}

	getBestMove(board) {
	let bestScore = -Infinity;
	let move = null;

	for (let y = 0; y < 3; y++) {
		for (let x = 0; x < 3; x++) {
		if (board[y][x] === null) {

			board[y][x] = this.iaPlayer;

			const score = this.minimax(board, false); 

			board[y][x] = null;

			if (score > bestScore) {
			bestScore = score;
			move = { x, y };
			}
		}
		}
	}

	return move;
	}

}
