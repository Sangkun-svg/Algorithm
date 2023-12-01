class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.preb = null;
    }
    this.length -= 1;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length -= 1;
    return shiftedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    const originHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = originHead;
      originHead.prev = this.head;
    }
    this.length += 1;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var count, current;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, value) {
    const foundNode = this.get(idx);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    } else return false;
  }
  insert(idx, value) {
    const node = new Node(value);
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(node);
    if (idx === this.length) return !!this.push(node);
    let oldCurrent = this.get(idx - 1);
    let oldNext = oldCurrent.next();
    oldCurrent.next = node;
    oldNext.prev = node;
    node.prev = oldCurrent;
    node.next = oldNext;
    this.length += 1;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    removedNode.prev = null;
    prevNode.next = nextNode;
    removedNode.next = null;
    nextNode.prev = prevNode;
    this.length -= 1;
    return removedNode;
  }
}
