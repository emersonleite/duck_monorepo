export class CircularDeque {
  private dequeLength: number;
  private startIndex: number;
  private endIndex: number;
  private values: number[];

  constructor(dequeLength: number) {
    this.dequeLength = dequeLength;
    this.startIndex = -1;
    this.endIndex = 0;
    this.values = Array(dequeLength);
  }

  private get isDequeEmpty() {
    return this.startIndex === -1 || this.endIndex < 0;
  }

  private get isDequeFull() {
    return (
      (this.startIndex === 0 && this.endIndex === this.dequeLength - 1) ||
      this.startIndex === this.endIndex + 1
    );
  }

  addToStart(value: number) {
    if (this.isDequeFull) {
      console.log("The deque is full");
      return;
    }
    // Vazio
    if (this.startIndex === -1) {
      this.startIndex = 0;
      this.endIndex = 0;
    }
    if (this.startIndex === 0) {
      this.startIndex = this.dequeLength - 1;
    } else {
      this.startIndex -= 1;
    }
    this.values[this.startIndex] = value;
  }

  addToEnd(value: number) {
    if (this.isDequeFull) {
      console.log("The deque is full");
      return;
    }
    if (this.startIndex === -1) {
      this.startIndex = 0;
      this.endIndex = 0;
    } else {
      if (this.endIndex === this.dequeLength - 1) {
        this.endIndex = 0;
      } else {
        this.endIndex += 1;
      }
    }
    this.values[this.endIndex] = value;
  }

  removeFromStart() {
    if (this.isDequeEmpty) {
      console.log("The deque is already empty");
      return;
    }
    // Possui somente um elemento
    if (this.startIndex === this.endIndex) {
      this.startIndex = -1;
      this.endIndex = -1;
    } else {
      // Volta para a posição inicial
      if (this.startIndex === this.dequeLength - 1) {
        this.startIndex = 0;
      } else {
        // Incrementa início para remover o início atual
        this.startIndex += 1;
      }
    }
  }

  removeFromEnd() {
    if (this.isDequeEmpty) {
      console.log("The deque is already empty");
      return;
    }
    if (this.startIndex === this.endIndex) {
      this.startIndex = -1;
      this.endIndex = -1;
    }
    if (this.startIndex === 0) {
      this.endIndex = this.dequeLength - 1;
    } else {
      this.endIndex -= 1;
    }
  }

  startValue() {
    if (this.isDequeEmpty) {
      console.log("The deque is already empty");
      return;
    }
    return this.values[this.startIndex];
  }

  endValue(): any {
    if (this.isDequeEmpty) {
      console.log("The deque is already empty");
      return;
    }
    return this.values[this.endIndex];
  }
}
