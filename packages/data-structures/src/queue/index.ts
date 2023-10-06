export class CircularQueue {
  private queueLength: number;
  private startIndex: number;
  private endIndex: number;
  private numberOfElements: number;
  private values: number[];

  constructor(queueLength: number) {
    this.queueLength = queueLength;
    this.startIndex = 0;
    this.endIndex = -1;
    this.numberOfElements = 0;
    this.values = Array(queueLength);
  }

  private get isQueueEmpty() {
    return this.numberOfElements === 0;
  }

  private get isQueueFull() {
    return this.numberOfElements === this.queueLength;
  }

  // enfileirar
  enqueue(value: number) {
    if (this.isQueueFull) {
      console.log("The queue is full");
      return;
    }

    if (this.endIndex === this.queueLength - 1) {
      this.endIndex = -1;
    }

    this.endIndex += 1;
    this.values[this.endIndex] = value;
    this.numberOfElements += 1;
  }

  dequeue() {
    if (this.isQueueEmpty) {
      console.log("The queue is already empty");
      return;
    }
    let temp = this.values[this.startIndex];
    this.startIndex += 1;

    if (this.startIndex === this.queueLength - 1) {
      this.startIndex = 0;
    }

    this.numberOfElements -= 1;

    return temp;
  }

  get firstElement() {
    if (this.isQueueEmpty) {
      return -1;
    }
    return this.values[this.startIndex];
  }
}

export class PriorityQueue {
  private queueLength: number;
  private numberOfElements: number;
  private values: number[];

  constructor(queueLength: number) {
    this.queueLength = queueLength;
    this.numberOfElements = 0;
    this.values = Array(queueLength);
  }

  private get isQueueEmpty() {
    return this.numberOfElements === 0;
  }

  private get isQueueFull() {
    return this.numberOfElements === this.queueLength;
  }

  enqueue(value: number) {
    if (this.isQueueFull) {
      console.log("The queue is full");
      return;
    }
    if (this.isQueueEmpty) {
      // this.numberOfElements poderia ser substituido por 0
      this.values[this.numberOfElements] = value;
      this.numberOfElements += 1;
      return;
    }
    let x = this.numberOfElements - 1;
    while (x >= 0) {
      if (value > this.values[x]) {
        this.values[x + 1] = this.values[x];
      } else {
        break;
      }
      x -= 1;
    }
    this.values[x + 1] = value;
    this.numberOfElements += 1;
  }

  dequeue() {
    if (this.isQueueEmpty) {
      console.log("The queue is already empty");
      return;
    }
    let value = this.values[this.numberOfElements - 1];
    this.numberOfElements -= 1;
    return value;
  }

  get firstElement() {
    if (this.isQueueEmpty) {
      return -1;
    }
    return this.values[this.numberOfElements - 1];
  }
}
