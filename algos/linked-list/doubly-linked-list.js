import { Node, LinkedList } from './linked-list'

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined;
  }

  insert(element, index) {}

}


const doublyLinkedList = new DoublyLinkedList();


console.log('breakpoint--->')
