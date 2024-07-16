class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if(this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    
    while (true) {
      if (val < current.val){
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val){
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
      if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    const insert = (node) => {
      if (val < node.val) {
        if(node.left === null){
          node.left = new Node(val);
        } else {
          insert(node.left);
        }
      } else if (val > node.val){
        if(node.right === null){
          node.right = new Node(val);
        }else {
          insert(node.right)
        }
      }
    };
    insert(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null) {
      return undefined;
    }

    let current = this.root;

    while(current) {
      if (current.val === val){
        return current;
      }
      current = val < current.val ? current.left : current.right
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const find = (node) => {
      if (node === null) return undefined; 
      if(node.val === val){
        return node
      }
      if (val < node.val) return find(node.left);
      if (val > node.val) return find(node.right);
      
    }
    return find(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];

    function traverse(node) {
      if(node){
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
      
    }
    
    traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    function traverse(node) {
      if(node){
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
      }
      
    }
    
    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    function traverse(node) {
      if(node){
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
      }
      
    }
    
    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];  
    let queue = []; 
    let node = this.root;
  
    queue.push(node);
  
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  
    return data; 
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
