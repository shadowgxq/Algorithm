function Queue() {
  this.items = []

  Queue.prototype.enQueue = function(item) {
    this.items.push(item)
  }
  
  Queue.prototype.deQueue = function() {
    return this.items.shift()
  }

  Queue.prototype.size = function() {
    return this.items.length
  }

  Queue.prototype.isEmpty = function() {
    return this.items.length == 0
  }

  Queue.prototype.get = function() {
    return this.items[0]
  }

  Queue.prototype.toString = function() {
    var resultString = ''
    for(var i = 0; i < this.items.length; i++) {
      resultString +=this.items[i] + ''
    }
    return resultString
  }
}

function passGame(nameList, num) {
  var queue = new Queue()

  for(var i = 0; i< nameList.length; i++) {
    queue.enQueue(nameList[i])
  }
  while(queue.size() > 1) {
   for( var i = 0; i< num-1; i++) {
     queue.enQueue(queue.deQueue())
   }
   queue.deQueue()
  }
}