// Cache replacement algorithms are efficiently designed to replace the cache when the space is full. The Least Recently Used (LRU) is one of those algorithms. As the name suggests when the cache memory is full, LRU picks the data that is least recently used and removes it in order to make space for the new data. The priority of the data in the cache changes according to the need of that data i.e. if some data is fetched or updated recently then the priority of that data would be changed and assigned to the highest priority , and the priority of the data decreases if it remains unused operations after operations.
class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }
  get(key) {}
  put(key, value) {
    if (this.map.has(key)) {
    }
  }
}
