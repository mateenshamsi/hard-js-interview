// Cache replacement algorithms are efficiently designed to replace the cache when the space is full. The Least Recently Used (LRU) is one of those algorithms. As the name suggests when the cache memory is full, LRU picks the data that is least recently used and removes it in order to make space for the new data. The priority of the data in the cache changes according to the need of that data i.e. if some data is fetched or updated recently then the priority of that data would be changed and assigned to the highest priority , and the priority of the data decreases if it remains unused operations after operations.
class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.length +=1 
  }
  get(key) {}
  removeNode(node){ 
    if(node==null) return 
    if(node.prev){
      node.prev.next = node.next 
    }
    if(node.next) {
      node.next.prev = node.prev 
    }
    if(node==this.head) 
    { 
      this.head = node.next 
    } 
    if(node==this.tail) 
    {
      this.tail = node.next  
    }
  }
  put(key, value) {
    // check if we have capacity
    if(this.length==this.capacity) { 
      if(this.map.has(key))
      { 
        this.removeNode(this.tail) 
      }
    }
    if (this.map.has(key)) {
      this.removeNode(this.map.get(key)) 
    }
    const node = { 
      next:this.head, 
      value:value ,
      key ,
      prev:null 

    }
    this.map.set(key,node) 
    this.head = node 
    if(this.tail==null)
    { 
      this.tail = node 
    }
    this.length+=1 
    
  }
  debug(){
    const temp= this.head 
    const arr = []
    while(curr!=null)
    { 
      arr.push(temp) 
      curr = this.head.next
    }
    arr.reduce((acc='',curr)=>acc,'')
  }
}
