function doubleLinkedList () {
  this.head = null
  this.tail = null
  this.length = 0

  function Node(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  doubleLinkedList.prototype.append = function(data) {
    var newNode = new Node(data)

    if(this.length == 0) {
      this.head = newNode
      this.tail = newNode
    }else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  //toString
  doubleLinkedList.prototype.toString = function() {
    var current = this.head
    var result = ""
    while(current) {
      result += current.data + ' '
      current = current.next
    }
    return result
  }

  doubleLinkedList.prototype.forwardString = function() {
    var current = this.tail
    var result = ""
    while(current) {
      result += current.data + ' '
      current = current.prev  
    }
    return result
  }

  doubleLinkedList.prototype.backwardtoString = function() {
    var current = this.head
    var result = ""
    while(current) {
      result += current.data + ' '
      current = current.next
    }
    return result
  }

  doubleLinkedList.prototype.insert = function(position, data) {
    if(position<0 || position > this.length) return false
    var newNode = new Node(data)
    var index = 0
    var current = this.head
    if(position == 0) {
      this.head = newNode
      newNode.next = current
      current.prev = newNode
      this.length += 1
      return
    }
    while(index++ < position) {
      current = current.next
    }
    newNode.next = current.next
    current.next = newNode
    newNode.prev = current
    this.length += 1
    return
  }
}

var list = new doubleLinkedList()

list.append('abc')
list.append('bcd')
list.append('cde')
console.log(list.toString());
console.log(list.forwardString());