function HashTable() {
  //属性
  this.storage = []
  this.count = 0
  this.limit = 7
  //方法  
  //哈希函数
  HashTable.prototype.hashFunc = function(str, size) {
    var hashCode = 0
  
    for(var i = 0 ; i<str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    var index = hashCode % size 
    return index
  }
  //插入和修改方法
  HashTable.prototype.put = function(key, value) {
    var index = this.hashFunc(key, this.limit)

    var bucket = this.storage[index]
    //是否为null
    if(bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    //修改
    for(var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if(tuple[0] == key) {
        tuple[1] = value
        return 
      }
    }
    //添加
    bucket.push([key,value])
    this.count += 1

    if(this.count > this.length * 0.75) {
      this.resize(this.limit * 2)
    }
  }

  //获取方法
  HashTable.prototype.get = function(key) {
    var index = this.hashFunc(key, this.limit)

    var bucket = this.storage[index]
    if(bucket == null) {
      return null
    }else {
      bucket.forEach(item => {
        var tuple = item
        if(tuple[0] == key) {
          return tuple[1]
        }
      });
      return null
    }
  }

  //删除
  HashTable.prototype.remove = function (key) {
    var index = this.hashFunc(key, this.limit)

    var bucket = this.storage[index]
    if(bucket == null) {
      return null
    }

    bucket.forEach( item => {
      if(item[0] == key) {
        bucket.splice(i, 1)
        this.count--
        return item[1]
      }
    })

    return null
  } 

  HashTable.prototype.resize = function (newLimit) {
    var oldStorage = this.storage

    this.storage = []
    this.count = 0
    this.limit = newLimit

    for(var i = 0; i<oldStorage.length; i++) {
      var bucket = oldStorage[i]
      if(bucket == null) {
        continue
      }
      for(var j = 0 ; j < bucket.length; j++) {
        var tuple = bucket[j]
        this.put(tuple[0], tuple[1])
      }
    }
  }
}


