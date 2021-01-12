function Set() {
  this.items = {}

  Set.prototype.add = function (value) {
    if(this.has(value)) return false

    this.items[value] = value
    return true
  }

  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  Set.prototype.remove = function (value) {
    if(!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }

  Set.prototype.clear = function() {
    this.items = {}
    return true
  }

  Set.prototype.Size = function () {
    return Object.keys(this.items).length
  }
  //返回一个数组
  Set.prototype.values = function() {
    Object.keys(this.items)
  }
  //并集
  Set.prototype.union = function (otherSet) {
    var unionSet = new Set()
    
    var value = this.values()
    value.forEach(item => {
      unionSet.add(item)
    });
    
    value = otherSet.values()
    value.forEach( item => {
        unionSet.add(item)
    })
    return unionSet
  }
  //差集
  Set.prototype.defsection = function(otherSet) {
    var defsection = new Set()

    var value = this.values()
    value.forEach(item => {
      defsection.add(item)
    })
    value = otherSet.values()
    value.forEach( item => {
      if(defsection.has(item)) {

      }else{
        defsection.remove(item)
      }
    })
  }
  //交集
  Set.prototype.intersection = function (otherSet) {
    var intersection = new Set()
    var empty = new Set()
    var value = this.values()
    value.forEach(  item => {
      empty.add(item)
    })
    value = otherSet.values()
    value.forEach( item => {
      if(empty.has(item)) {
        intersection.add(item)
      }
    })
  }

  //子集
  Set.prototype.childsection = function (otherSet) {
    var length = 0
    if(this.Size() > otherSet.Size()) {
       otherSet.values().forEach( item => {
        if(this.has(item)) {
          return otherSet.values()
        }else{
          return false
        }
      })
    }else {
      this.values().forEach( item => {
        if(otherSet.has(item)) {
          return this.values()
        }else{
          return false
        }
      })
    }
  }
}
