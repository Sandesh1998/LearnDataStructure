class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class binarysearchtree{
  constructor(){
    this.root == null;

  }
  insert(value){
    const newnode = new Node(value);
    if(!this.root){
      this.root = newnode;
    }
    else{
      let currentnode = this.root;
      while(true){
        if(value < currentnode.value){
          if(!currentnode.left){
            currentnode.left =newnode;
            return this;
          }
          currentnode =currentnode.left;
        }else{
          if(!currentnode.right){
            currentnode.right = newnode;
             return this;
          }
          currentnode = currentnode.right;
        }
       
      }
    }
  }
}

//this method gives the inorder traversal of the BST.
traverse = function(tree){
  if(tree){
    traverse(tree.left);
     console.log(tree.value);
     traverse(tree.right);
  }
}

//this method gives the inorder traversal of the BST.
traversepreorder = function(tree){
  if(tree){
    console.log(tree.value);
    traverse(tree.left);
     traverse(tree.right);
  }
}

traversepostorder = function(tree){
  if(tree){
    console.log(tree.value);
    traverse(tree.left);
     traverse(tree.right);
  }
}

const tree = new binarysearchtree();
tree.insert(34);
tree.insert(8);
tree.insert(89);
tree.insert(9);
traverse(tree.root)
console.log("preorder");
traversepreorder(tree.root);
console.log("postorder");
traversepostorder(tree.root);

