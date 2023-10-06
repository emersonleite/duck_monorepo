import { Node } from "./node";

export class SimplyLinkedList {
  first: null | Node;

  constructor() {
    this.first = null;
  }

  addToStart(value: number) {
    let newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
  }

  removeFromStart() {
    if (this.first === null) {
      console.log("Linked list is empty.");
      return;
    } else {
      let tempFirst = this.first;
      this.first = this.first?.next;
      return tempFirst;
    }
  }

  searchAtList(value: number) {
    let currentNode = this.first;
    while (currentNode?.value !== value) {
      if (currentNode?.next === null) {
        return currentNode?.next;
      }
      if (currentNode) {
        currentNode = currentNode?.next;
      }
    }
    return currentNode;
  }

  removeFromList(value: number) {
    if (this.first === null) {
      console.log("Linked list is empty.");
      return;
    }

    let current = this.first;
    let previous = this.first;

    while (current.value !== value) {
      if (current.next === null) {
        return current.next;
      } else {
        previous = current;
        current = current.next;
      }
    }

    if (current === this.first) {
      this.first = this.first.next;
    } else {
      previous.next = current.next;
    }
    console.log("current", current);
    return current;
  }

  showNodes() {
    if (this.first === null) {
      console.log("Linked list is empty.");
    }

    let current = this.first;

    while (current !== null) {
      current.showNode();
      current = current.next;
    }
  }
}

export class SimplyLinkedListHeadTail {
  first: null | Node;
  last: null | Node;

  constructor() {
    this.first = null;
    this.last = null;
  }

  private get isLinkedListEmpty() {
    return this.first === null;
  }

  addToStart(value: number) {
    let newNode = new Node(value);

    if (this.isLinkedListEmpty) {
      this.last = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
  }

  addToEnd(value: number) {
    let newNode = new Node(value);

    if (this.isLinkedListEmpty) {
      this.first = newNode;
    } else {
      if (this.last) {
        this.last.next = newNode;
      }
    }
    this.last = newNode;
  }

  removeFromStart() {
    if (this.isLinkedListEmpty) {
      console.log("Linked list is empty.");
      return;
    }
    let tempFirst = this.first;

    if (this.first?.next === null) {
      this.last = null;
    }
    if (this.first) this.first = this.first?.next;

    return tempFirst;
  }

  showNodes() {
    if (this.isLinkedListEmpty) {
      console.log("Linked list is empty.");
      return;
    }

    let current = this.first;

    while (current !== null) {
      current.showNode();
      current = current.next;
    }
  }
}

export class doublyLinkedList {}
