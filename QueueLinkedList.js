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
  enqueue(val){
    let newNode = new Node(val);
    if(!this.value){
      this.value = newNode
      this.next = newNode;
    }else{
      this.next.next = newNode;
      this.next = newNode;
    }

  }
  dequeue(){
    if(!this.value) return null
    const temp = this.value
    if(this.value===this.next){
      this.next = null
    }
    this.value = this.value.next;
    return temp.val
  }

  peek(){
    this.value = function(){
      if(head){
        return head.value
      }
    }
    return null
  }
   
  isEmpty(){
    this.val = function(){
      if(this.value.length == 0){

      }
    }
    return length === 0
  }

}

module.exports = QueueLinkedList;
