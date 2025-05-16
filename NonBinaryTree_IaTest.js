console.log("Début du script");

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }

  display(level = 0) {
    console.log("  ".repeat(level) + this.value);
    for (let child of this.children) {
      child.display(level + 1);
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  setRoot(data) {
    this.root = new Node(data);
  }

  find(data, node = this.root) {
    if (!node) return null;

    if (data === node.value) return node;

    for (let child of node.children) {
      const found = this.find(data, child);
      if (found) return found;
    }

    return null;
  }
}


const tree = new Tree();
console.log("Tree created:", tree);
tree.setRoot(15);

tree.root.addChild(new Node(165));
tree.root.addChild(new Node(16));
tree.root.addChild(new Node(35));
tree.root.addChild(new Node(2030));


tree.root.display();


