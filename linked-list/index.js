class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length == 1) {
      const temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      while (currentNode.next !== null) {
        const tempNode = currentNode.next;
        prevNode = currentNode;
        currentNode = tempNode;
      }
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
      return currentNode;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.head.value;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      this.length++;
      return true;
    }
    return false;
  }

  insert(index, value) {
    const newNode = new Node(value);
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    if (index < 0 || index > this.length) return undefined;
    let prevNode = this.head;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();
    if (index < 0 || index > this.length) return undefined;
    let prevNode = this.head;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    currentNode.next = null;
    return currentNode;
    this.length--;
  }

  reverse() {
    if (!this.head) return false;
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = this.head.next;

    //swap head and tail
    this.head = this.tail;
    this.tail = currentNode;

    if (this.length == 2) return this;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }
  }
}
