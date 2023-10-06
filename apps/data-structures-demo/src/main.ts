import {
  SortedArray,
  UnsortedArray,
  getTime,
  getData as getRandomData,
} from "data-structures";

import { Stack } from "../../../packages/data-structures/src/stack/index";

import {
  CircularQueue,
  PriorityQueue,
} from "../../../packages/data-structures/src/queue/index";

import { CircularDeque } from "../../../packages/data-structures/src/deque/index";

import {
  SimplyLinkedListHeadTail,
  SimplyLinkedList,
} from "../../../packages/data-structures/src/linkedList/index";

let dataLen = 9;

let data = getRandomData(dataLen);

let sortedArray = new SortedArray(dataLen);
let unsortedArray = new UnsortedArray(dataLen);
let stackList = new Stack(5);
let queueList = new CircularQueue(5);
let priorityQueueList = new PriorityQueue(5);
let circularDeque = new CircularDeque(5);

function addElementToUnsortedArray() {
  for (let i = 0; i <= dataLen - 1; i++) {
    unsortedArray.addItem(data[i]);
  }
}

function addElementToSortedArray() {
  for (let i = 0; i <= dataLen - 1; i++) {
    sortedArray.addItem(data[i]);
  }
}

console.log(data);

const getTimeSorted = getTime(addElementToSortedArray);
console.log(getTimeSorted, sortedArray);

const getTimeUnsorted = getTime(addElementToUnsortedArray);
console.log(getTimeUnsorted, unsortedArray);

console.log("Stack");
/* Stack */
stackList.stackUp(1);
stackList.stackUp(2);
stackList.stackUp(3);
stackList.stackUp(4);
stackList.stackUp(6);
stackList.stackUp(7);
/* stackList.stackUp(8); */

stackList.unstack();
stackList.unstack();
stackList.unstack();
stackList.unstack();
stackList.unstack();

console.log(stackList.showTopValue());

/* Stack */

/* CircularQueue */
console.log("CircularQueue");
queueList.enqueue(3);
queueList.enqueue(2);
queueList.enqueue(5);
queueList.enqueue(8);
queueList.enqueue(7);
queueList.enqueue(9);

console.log(queueList.firstElement);

queueList.dequeue();
console.log(queueList.firstElement);

queueList.dequeue();
console.log(queueList.firstElement);

queueList.dequeue();
console.log(queueList.firstElement);

/* CircularQueue */

priorityQueueList.enqueue(30);
priorityQueueList.enqueue(50);
priorityQueueList.enqueue(10);
priorityQueueList.enqueue(40);
priorityQueueList.enqueue(20);

console.log(priorityQueueList.firstElement);

priorityQueueList.dequeue();
priorityQueueList.dequeue();
priorityQueueList.dequeue();

priorityQueueList.enqueue(5);

console.log(priorityQueueList.values);

console.log(priorityQueueList.firstElement);

/* Circular Deque */

console.log("Circular Deque");

circularDeque.addToEnd(5);

circularDeque.addToEnd(10);

circularDeque.addToStart(3);

circularDeque.addToStart(2);

circularDeque.addToEnd(11);

circularDeque.removeFromStart();
circularDeque.removeFromEnd();

console.log(circularDeque.startValue(), circularDeque.endValue());

console.log(circularDeque.startIndex);
console.log(circularDeque.endIndex);

console.log(circularDeque.values);

/* Linked List ---> */
let linkedList = new SimplyLinkedList();
linkedList.addToStart(1);
linkedList.addToStart(2);
linkedList.addToStart(3);
linkedList.addToStart(4);
linkedList.addToStart(5);

let searchAtList = linkedList.searchAtList(3);
console.log("Encontrado " + searchAtList?.value);

linkedList.removeFromStart();
linkedList.removeFromList(4);

linkedList.showNodes();

/* <--- Linked List */

/* Doubly Linked List ---> */
console.log("SimplyLinkedListHeadTail");

let doublyLinkedList = new SimplyLinkedListHeadTail();

doublyLinkedList.addToStart(1);

console.log(doublyLinkedList.first, doublyLinkedList.last);

doublyLinkedList.showNodes();

doublyLinkedList.addToStart(2);
doublyLinkedList.addToStart(3);
doublyLinkedList.addToStart(4);
doublyLinkedList.addToStart(5);

console.log(doublyLinkedList.first, doublyLinkedList.last);

doublyLinkedList.showNodes();

console.log("doublyLinkedListEnd");
let doublyLinkedListEnd = new SimplyLinkedListHeadTail();

doublyLinkedListEnd.addToEnd(1);
doublyLinkedListEnd.addToEnd(2);
doublyLinkedListEnd.addToEnd(3);

doublyLinkedListEnd.showNodes();

doublyLinkedListEnd.addToStart(0);
doublyLinkedListEnd.addToEnd(4);

doublyLinkedListEnd.showNodes();

console.log("doublyLinkedListRemoveEnd");
let doublyLinkedListRemoveEnd = new SimplyLinkedListHeadTail();

doublyLinkedListRemoveEnd.addToStart(1);
doublyLinkedListRemoveEnd.addToEnd(3);

doublyLinkedListRemoveEnd.showNodes();

doublyLinkedListRemoveEnd.removeFromStart();
doublyLinkedListRemoveEnd.removeFromStart();

// doublyLinkedListRemoveEnd.addToEnd(4);
// doublyLinkedListRemoveEnd.addToStart(1);

doublyLinkedListRemoveEnd.showNodes();

/* <--- Doubly Linked List */
