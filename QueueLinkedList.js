/*
  Use the Node class for the nodes of your linked list
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
}

/*
  QueueLinkedList will be a linked list with head, tail and length and it will have
  the Queue API methods: .enqueue(), .dequeue(), .peek() and .isEmpty() etc.
*/
class QueueLinkedList {

  constructor(){
    this.length = 0;
    this.head = null;
  }

  enqueue(value){
    let node = new Node(value),
    current
    if(this.head === null){
      this.head = node
    }else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
      
    }
    this.length++

  }
  dequeue(){
    let current = this.head;
    if(current){
      let value = current.value;
      this.head = current.next;
      this.length--
      return value
    }
     return undefined;
  }

  peek(){
 
      if(this.head){
        return this.head.value
      }else{
        return null
      }
  
  }
   
  isEmpty(){
    if(this.length === 0){
      return true;
    }else{
      return false;
    }
   
  }

}

module.exports = QueueLinkedList;
