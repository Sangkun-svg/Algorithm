class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    // Separate Chaining
    const idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    const keyIndex = this._hash(key);
    if (!this.keyMap[keyIndex]) return undefined;
    return this.keyMap[keyIndex].length === 1
      ? this.keyMap[keyIndex]
      : this.keyMap[keyIndex].find(([_key, _]) => key === _key);
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!values.includes(this.keyMap[i][j][1])) {
            values.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return values;
  }
}
const hashTable = new HashTable(13);

hashTable.set("white", "#121212");
hashTable.set("pink", "#121212");
hashTable.set("cyan", "#020202");
hashTable.set("red", "#0303030");
hashTable.set("yellow", "#0400404");
hashTable.set("blue", "#0505050");
console.log(hashTable.keys());
console.log(hashTable.values());
