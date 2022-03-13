'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  include(value) {
    let current = this.head;
    if (current.value === value) return true;
    while (current.next !== null) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }
    return false;
  }

  toString() {
    let result = '';
    if (!this.head) return 'Empty';
    let currentNode = this.head;
    while (currentNode) {
      let nodeValue = currentNode.value;
      currentNode = currentNode.next;
      result += (`{${nodeValue}} ->`);
    }
    result += (`Null`);
    return result;
  }

}

append(value) {
  let current = this.head;
  if (current.value === value) return true;
  while (current.next !== null) {
    current = current.next;
    if (current.value === value) {
      return true;
    }
  }
  return false;
} insertBefore(value, newvalue) {
  let current = this.head;
  if (current.value === value) return true;
  while (current.next !== null) {
    current = current.next;
    if (current.value === value) {
      return true;
    }
  }
  return false;
} insertAfter(value, newvalue) {
  let current = this.head;
  if (current.value === value) return true;
  while (current.next !== null) {
    current = current.next;
    if (current.value === value) {
      return true;
    }
  }
  return false;
}

kthFromEnd(k) {

  let current = this.head;
  let length = 0;

  while (current != null) {
    current = current.next;
    length++;
  }



  if (k < 0 || k > length) return 'Exception';

  length = length - 1 - k;
  current = this.head;


  while (length != 0) {
    current = current.next;
    length--;
  }
  return current.value;


  zipList(link1, link2) {

    let l1 = link1.head;
    let l2 = link2.head;

    while (l1 || l2) {
      if (l1) {
        this.append(l1.value);
        l1 = l1.next;
      }
      if (l2) {
        this.append(l2.value);
        l2 = l2.next;
      }
    }
  }

}

module.exports = LinkedList;