function Tree() {
  this.root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  } 
  //插入
  Tree.prototype.insert = function(key) {
    var newNode = new Node(key)

    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  Tree.prototype.insertNode = function(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    }else{
      if(node.right == null) {
        node.right = newNode
      }else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  //先序遍历
  Tree.prototype.proOrderTraversal = function(handle) {
    this.proOrderTraversalNode(this.root, handle)
  }
  Tree.prototype.proOrderTraversalNode = function(node, handle) {
    if(node != null) {
      handle(node.key)
      this.proOrderTraversalNode(node.left, handle)

      this.proOrderTraversalNode(node.right, handle)
    }
  }

  //中序遍历
  Tree.prototype.midOrderTraversal = function(handle) {
    this.midOrderTraversalNode(this.root, handle)
  }
  Tree.prototype.midOrderTraversalNode = function(node, handle) {
    if(node != null) {
      this.midOrderTraversalNode(node.left, handle)
      handle(node.key)
      this.midOrderTraversalNode(node.right, handle)
    }
  }

  //后序遍历
  Tree.prototype.postOrderTraversal = function(handle) {
    this.postOrderTraversalNode(this.root, handle)
  }
  Tree.prototype.postOrderTraversalNode = function(node, handle) {
    if(node != null) {
      this.postOrderTraversalNode(node.left, handle)
      this.postOrderTraversalNode(node.right, handle)
      handle(node.key)

    }
  }

  //最值
  Tree.prototype.min = function() {
    var node = this.root
    while(node.left != null) {
      node = node.left
    }
    return node
  }

  Tree.prototype.max = function() {
    var node = this.root
    while(node.right != null) {
      node = node.right
    }
    return node
  }
  //查找
  Tree.prototype.search = function(key) {
    return this.searchNode(this.root, key)
  }
  Tree.prototype.searchNode = function(node , key) {
    if(node == null) {
      return false
    }
    if(node.key > key) {
      searchNode(node.left, key)
    }else if(node.key < key) {
      searchNode(node.right, key)
    }else {
      return true
    }
  }

  //删除
  Tree.prototype.delete = function(key) {
    var current = this.root
    var parent = null
    var isLeftChild = true

    while( current.key != key) {
      parent = current
      if(key < current.key) {
        isLeftChild = true
        current = current.left
      }else {
        isLeftChild = false
        current = current.right
      }
      if(current == null) return false
    }
    //删除子节点
    if(current.left == null && current.right == null) {
      if(current == this.root) {
        this.root = null
      }else if (isLeftChild) {
        parent.left = null
      }else {
        parent.right = null
      }
    }
    //删除只有左节点
    else if(current.right == null) {
      if(current == this.root) {
        this.root = current.left
      }
      else if(isLeftChild) {
        parent.left = current.left
      }else {
        parent.right = current.left
      }
    }
    // 删除只有右节点
    else if (current.left == null) {
      if(current == this.root) {
        this.root = current.right
      }
      else if(isLeftChild) {
        parent.left = current.right
      }else {
        parent.right = current.right
      }
    }
    // 有两个节点
    else {
      var successor = this.getSuccssor(current)
      //节点的处理
      if (current == this.root) {
        this.root = successor
      }else if (isLeftChild) {
        parent.left = successor
      }else {
        parent.right = successor
      }
      //左子树
      successor.left = current.left
      
    }
  }
  //后继
  Tree.prototype.getSuccssor = function(delNode) {
    var successor = delNode
    var current = delNode.right
    var successorParent = delNode
    //查找
    while(current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    // 寻找到的后继是否是delNode的right
    if(successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}

//测试
var bst = new Tree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(8)
console.log(bst);

var result = ""

bst.midOrderTraversal(function(key) {
  result += key + ' '
})
console.log(result);