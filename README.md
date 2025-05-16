
markdown
Copier
Modifier
# 🎮 Tic-Tac-Toe with AI (Minimax)

[![JS](https://img.shields.io/badge/Made%20with-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
![Status](https://img.shields.io/badge/status-In%20Progress-blue)

> A **Tic-Tac-Toe** game implementation with a smart **AI opponent** using the **Minimax algorithm**, built in vanilla JavaScript.

---

## 📸 Preview

![Game Preview](./morpion_iaMinMax/preview.png)
> *(Add a screenshot of your game inside the `morpion_iaMinMax` folder)*

---

## 🧠 Learning Goals

- Structurer un projet JavaScript en couches : UI, logique, IA.
- Explorer la manipulation d’arbres (non binaires) pour simuler des coups.
- Implémenter et comprendre l’algorithme **Minimax**.
- Créer une IA **imbattable** au Morpion !

---

## 🚀 How to Run

### Locally

```bash
git clone https://github.com/your-username/morpion-ia.git
cd morpion_iaMinMax
open index.html
Or simply double-click on index.html to launch it in your browser.

📜 Development Steps
✅ 1. Random AI Version – morpion-IaRdm/
The human player plays against an AI that makes random moves.

No strategy involved, purely chance-based.

🧪 2. Non-Binary Tree Exploration – NonBinaryTree_IaTest.js
Node and Tree classes to model non-binary trees.

Each node represents a game state.

Used to build the logic necessary for Minimax.

js
Copier
Modifier
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
🧠 3. Intelligent AI Version – morpion_iaMinMax/
Fully functional UI (HTML/CSS).

The AI always picks the best move.

Based on the Minimax algorithm, perfect for zero-sum games like Tic-Tac-Toe.

🧮 Minimax Algorithm
The AI simulates all possible moves and assigns a score to each outcome:

js
Copier
Modifier
function minimax(board, isMaximizing) {
  const winner = getBoardWinner(board);
  if (winner) return score(winner);

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const move of possibleMoves) {
      const score = minimax(newBoard, false);
      bestScore = Math.max(score, bestScore);
    }
    return bestScore;
  } else {
    let bestScore = +Infinity;
    for (const move of possibleMoves) {
      const score = minimax(newBoard, true);
      bestScore = Math.min(score, bestScore);
    }
    return bestScore;
  }
}
👀 Key Game Functions
drawHit(x, y, player) — Draws a move on the board.

checkWinner() — Verifies if the game has ended.

getBoardWinner(board) — Returns the winner or a tie.

doPlayIa() — Triggers the AI to play using Minimax.

displayEndMessage() — Shows the final result message.

📚 Tech Stack
Technology	Purpose
JavaScript	Game logic, AI, DOM interaction
HTML	Game board structure
CSS	Board styling
Minimax	AI decision-making algorithm

✨ Future Improvements
Add two-player mode.

Make the UI responsive and more polished.

Add difficulty selector (random / strategic).

Include win animations or sound effects.

👨‍💻 Author
✍️ Maxime Saint-Joannis
Full-stack developer & electronic music producer, passionate about algorithms, AI, and creative digital experiences.

📄 License
This project is open-source. Feel free to fork, modify, and share it!

🧠 Bonus: What’s a Non-Binary Tree?
A non-binary tree is a tree data structure where each node can have more than two children. It’s ideal for representing decision trees, like in Tic-Tac-Toe, where each node corresponds to a possible game state and leads to multiple future states.

Thanks for reading 🙏 — Feel free to clone, play, and improve the project!
