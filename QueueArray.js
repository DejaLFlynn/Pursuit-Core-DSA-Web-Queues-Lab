class QueueArray {
  constructor() {
    this.items = [];
  }

  /**
   * Adds a value to the end queue
   * @param {any} value the value to be added
   * @returns {undefined}
   */
  enqueue(value) {
    this.items.push(value);
  }

  /**
   * Remove an element from the front of the queue
   * @returns {any} the value removed
   */
  dequeue() {
   
    if(this.items.length){
       return this.items.shift();
    }
    return undefined
  }

  /**
   * Return the element in the front of the queue without
   * removing it
   * @returns {any} the value in the front of the queue
   */
  peek() {
    return this.items[0];
  }

  /**
   * Return whether the queue is empty
   * @returns {boolean} whether the queue is empty
   */
  isEmpty() {
    if (this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Return an arr with the contents of the queue
   * @returns {array} An array with the elements of queue
   */
  toArray(value) {
    let arr = [];

    while (!this.isEmpty()) {
      let result = this.dequeue();
      arr.push(result);
    }
    for (let element of arr) {
      this.enqueue(element);
    }

    return arr;
  }

  toString() {
  
    let inputString = this.toArray()
   return "< "  + inputString.join(", ") + " <=";
    
    // for (var i = 0; i < value.length; i++) 
      // str += value[i] + " ";
   
  }

  static fromArray(arr) {

  }
}

module.exports = QueueArray;

// JavaScript Classes:
// A blueprint for object.
// Has a constructor to create objects
// Create objects with custom methods
//  Create our own data structures.
// They have state/storage
// Methods that modify its state
