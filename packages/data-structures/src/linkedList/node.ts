export class Node {
  value: number;
  next: null | Node;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }

  showNode() {
    console.log(this.value);
  }
}
