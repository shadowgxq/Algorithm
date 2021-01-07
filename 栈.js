function Stack () {
  this.items = []

  Stack.prototype.push = function (item) {
    this.items.push(item)
  }

  Stack.prototype.pop = function(item) {
    return this.items.pop()
  }

  Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
  }

  Stack.prototype.isEmpty = function() {
    return this.items.length == 0
  }

  Stack.prototype.size = function() {
    return this.items.length
  }

  Stack.prototype.toString = function() {
     var resultString = ''
     this.items.forEach(item => {
       resultString += item + ' '
     })
     return resultString
  }
}
//转为二进制数据
let s = new Stack()
s.push(1)
s.push(1)
console.log(s.toString());


function toBin(num) {
  let list = []
  let bin = ''
  while(num > 0) {
    list.push(num % 2)
    num = Math.floor(num / 2)
  }
  while(list.length !==0) {
    bin = bin + list.pop()
  }
  return bin
}

console.log(toBin(100));