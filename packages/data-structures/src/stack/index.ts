export class Stack {
  private stackLength: number;
  private indexTopValue: number;
  private values: number[];

  constructor(stackLength: number) {
    this.stackLength = stackLength;
    this.indexTopValue = -1;
    this.values = Array(stackLength);
  }

  private get isStackFull() {
    return this.indexTopValue === this.stackLength - 1;
  }

  private get isStackEmpty() {
    return this.indexTopValue === -1;
  }

  stackUp(value: number) {
    if (this.isStackFull) {
      console.log("The stack is full");
      return;
    }
    this.indexTopValue += 1;
    this.values[this.indexTopValue] = value;
  }

  unstack() {
    if (this.isStackEmpty) {
      console.log("The stack is empty");
      return;
    }
    this.indexTopValue -= 1;
  }

  showTopValue() {
    if (!this.isStackEmpty) {
      return this.values[this.indexTopValue];
    }
    return -1;
  }
}
