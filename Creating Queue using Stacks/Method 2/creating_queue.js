class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
      
    }
    this.length++;
    return this;
  }
  pop(){
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }
}

class Queue {
  constructor(){
    this.first = new Stack();
    this.last = new Stack();
    this.length = 0;
  }
  peek() {
    if(!this.isEmpty(this.last))
      console.log("\nTop stack value :",this.last.top.value,"\n");
  }

  enqueue(value){
    this.first.push(value);
    return this.first;
  }

  dequeue(){
    while(!this.isEmpty(this.first)){
      this.last.push(this.first.pop());
      this.first.top = this.first.top.next;
      this.first.length--;
    }
    if(!this.isEmpty(this.last)){
      console.log(this.last.top.value);
    	this.last.top = this.last.top.next;
      this.last.length --;
    }
    else {
      console.log("Empty Queue");
      return this;
    }
  }

  isEmpty(stack){
  	return (stack.top === null);
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();