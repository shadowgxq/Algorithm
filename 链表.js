function LinkedList() {

  //内部类
  function Node(data) {
    this.data = data
    this.next = null
  }
  //属性
  this.head = null
  //长度
  this.length = 0
  //添加
  LinkedList.prototype.append = function (data) {
    if(this.length == 0) {
      var newNode = new Node(data)
      this.head = newNode
    }else{
      var newNode = new Node(data)

      var current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  //toString
  LinkedList.prototype.toString = function() {
    var current = this.head
    var result = ''

    while(current) {
      result += current.data + " "
      current = current.next

    }
    return result
  }

  //插入
  LinkedList.prototype.insert = function(position, data) {
    if(position < 0 || position > this.length) return false

    var newNode = new Node(data)

    if(position == 0) {
      newNode.next = this.head
      this.head = newNode
    }else{
      index = 0
      var current = this.head
      var previous = null
      while(index++ < position) {
        previous = current
        current = current.next
      }
     
      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
    return true
  }

  //查找
  LinkedList.prototype.get = function(position) {
    if(position < 0 || position >= this.length) return false

    var current = this.head
    var index = 0
    //获取对相应的数据
    while(index++ < position) {
      current = current.next
    }
    return current.data

  }

  //索引
  LinkedList.prototype.indexOf = function (data) {
    var current = this.head
    var index = 0
    while(current) {
      if(current.data == data) {
        return index
      }
      index++
      current = current.next
    }
    return false
  }

  //更新
  LinkedList.prototype.update = function(position, data) {
    if(position < 0 || position >= this.length) return false

    var current = this.head
    var index = 0
    while(current.next) {
      if(index == position) {
        current.data = data
      }
      current = current.next
      index += 1
    }
    return false
  }
}

//移除
LinkedList.prototype.removeAt = function(position) {
  var current = this.head
  var index = 0
  var previous = null
  if(position == 0) {
    this.head = current.next
    this.length--
    return 
  }
  while(current) {
    if(position == index) {
      previous.next = current.next
      this.length--
      return 
    }
    previous = current
    current = current.next
    index ++
  }
}

//移除最后一项
LinkedList.prototype.remove = function() {
  this.removeAt(this.length-1)
  this.length--
}
//测试代码
var list = new LinkedList()

list.append('abc')
list.append('bcd')
list.append('cde')
list.append('cde')
list.append('cde')
list.update(1, "shadow")
list.remove()
list.remove()
console.log(list.indexOf('ss'));
console.log(list.toString());