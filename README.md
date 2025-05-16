# 🎮 Morpion avec Intelligence Artificielle (Minimax)

[![JS](https://img.shields.io/badge/Made%20with-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
![Status](https://img.shields.io/badge/status-En%20cours-blue)

> Une implémentation du jeu **Tic-Tac-Toe** avec une **IA intelligente** grâce à l'algorithme **Minimax**, en JavaScript natif.

---

## 📸 Aperçu

![Aperçu du jeu](./morpion_iaMinMax/preview.png)
> *(Ajoute un screenshot de ton jeu ici dans le dossier `morpion_iaMinMax`)*

---

## 🧠 Objectifs pédagogiques

- Structurer un projet JavaScript en couches : UI, logique, IA.
- Explorer la manipulation d’arbres (non binaires) pour simuler des coups.
- Implémenter et comprendre l’algorithme **Minimax**.
- Créer une IA **imbattable** au Morpion !

---

## 🗂️ Structure du projet

📦 morpion-ia/
├── morpion-IaRdm/ # Version avec IA aléatoire
│ └── morpion.js
├── morpion_iaMinMax/ # Version finale avec IA Minimax
│ ├── index.html
│ ├── style.css
│ ├── morpion.js
│ └── preview.png # (Capture d'écran optionnelle)
├── NonBinaryTree_IaTest.js # Fichier de recherche sur les arbres non binaires
└── README.md # Ce fichier

yaml
Copier
Modifier

---

## 🚀 Lancer le jeu

### En local

```bash
git clone https://github.com/ton-pseudo/morpion-ia.git
cd morpion_iaMinMax
open index.html
ou double-clique simplement sur index.html

📜 Étapes de développement
✅ 1. Version IA aléatoire – morpion-IaRdm/
Le joueur humain joue contre une IA qui choisit ses coups de manière aléatoire.

Pas de stratégie, juste de l’aléatoire.

🧪 2. Arbre non binaire – NonBinaryTree_IaTest.js
Classe Node et Tree pour modéliser des arbres non binaires.

Chaque nœud représente un état du jeu.

Utilisé pour explorer la logique nécessaire à Minimax.

js
Copier
Modifier
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
🧠 3. Version IA intelligente – morpion_iaMinMax/
Interface graphique (HTML/CSS).

L’IA prend toujours la meilleure décision.

Basée sur Minimax, un algorithme de prise de décision parfait pour les jeux à somme nulle comme le morpion.

🧮 L’algorithme Minimax
L’IA simule tous les coups possibles et évalue leur "valeur" :

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
👀 Fonctions principales du jeu
drawHit(x, y, player) : Joue un coup sur le plateau.

checkWinner() : Vérifie si la partie est terminée.

getBoardWinner(board) : Renvoie le gagnant ou une égalité.

doPlayIa() : Appelle Minimax pour faire jouer l’IA.

displayEndMessage() : Affiche le résultat de la partie.

📚 Technologies utilisées
Technologie	Description
JavaScript	Logique de jeu, IA, interactions DOM
HTML	Structure de la grille
CSS	Design du plateau
Minimax	Algorithme de prise de décision

✨ Améliorations futures
Ajouter un mode 2 joueurs.

Interface responsive et plus stylisée.

Sélecteur de difficulté IA (aléatoire / stratégique).

Animations de victoire ou effets visuels.

👨‍💻 Auteur
✍️ Maxime Saint-Joannis
Développeur full-stack & musicien, passionné par l’algorithmique, l’IA et les projets interactifs.

📄 Licence
Ce projet est open-source. Tu peux le réutiliser ou le modifier librement.

🧠 Bonus : Qu’est-ce qu’un arbre non binaire ?
Un arbre non binaire permet de représenter un ensemble de décisions où chaque nœud peut avoir plus de deux enfants. C’est l’outil parfait pour modéliser les coups d’un jeu comme le Morpion.

Merci de m’avoir lu 🙏 – N'hésitez pas à cloner, tester et améliorer !