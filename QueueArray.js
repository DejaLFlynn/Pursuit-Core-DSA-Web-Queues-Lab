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
    this.items.push(value)

  }

  /**
   * Remove an element from the front of the queue
   * @returns {any} the value removed
   */
  dequeue() {
    this.items.shift(value)

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
    return this.items.length == 0;

  }

  /**
   * Return an arr with the contents of the queue
   * @returns {array} An array with the elements of queue
   */
  toArray(value) {
    
      let arr = [];
      let value = head;
      while(value){
        arr.push(value.element);
        value = value.next;
      }
      
      return arr;
    
    

  }

  toString(value) {
    
    let value = "";
    for(let i = 0; i < value.length; i++)
        str += this.items[i] + "<"+ " " + "<=";
    return str;
    
  
  }
  //  // Lets create a string to add onto 
  //  let display = "";
  //  // We need a pointer variable that will start in the head and work its way down
  //  let pointer = this.head;

  //  // Keep traversing to the next as long as pointer isn't null
  //  while (pointer !== null) {
  //    // Update display string 
  //    display += pointer.value
  //    if (pointer.next !== null) {
  //      display += " -> ";
  //    }
  //    // Update pointer to the next Node
  //    pointer = pointer.next;
  //  }

  //  // Display result
  //  console.log(display);

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
