// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }
  add(elem) {
    this.data.push(elem);
  }
  remove() {
    this.data.pop();
    console.log(this.data);
  }
}

let stack = new Stack();
stack.add(5);
stack.add(5);
stack.add(4);
stack.add(4);
stack.add(3);
stack.remove();

module.exports = Stack;
