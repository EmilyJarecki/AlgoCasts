// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// TODO goes in, comes back out
class Queue {
    constructor() {
        this.data = [];
      }
    add(num){
        this.data.unshift(num)
    }
    remove(num){
        this.data.pop(num)
    }
}

module.exports = Queue;
