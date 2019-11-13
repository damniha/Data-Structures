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
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
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
  	console.log("\nTop stack value :",this.first.top.value,"\n");
  }

  enqueue(value){
    if(this.isEmpty(this.first)){
      this.first.push(value);
      return this.first;
    }
    while(!this.isEmpty(this.first)){
      this.last.push(this.first.pop());
      this.first.top = this.first.top.next;
      this.first.length--;
    }
    this.first.push(value);
    while(!this.isEmpty(this.last)){
      this.first.push(this.last.pop());
      this.last.top = this.last.top.next;
      this.last.length--;
    }
    this.last.bottom = null;
    return this.first;
  }

  dequeue(){
  	if(this.isEmpty(this.first)){
  		console.log("Empty Queue");
  		return this;
  	}
  	console.log(this.first.pop());
  	this.first.top = this.first.top.next;
    this.first.length --;
    if(this.first.length === 0)this.first.bottom = null;
  }

  isEmpty(stack){
  	return (stack.top === null);
  }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.peek();
myQueue.dequeue();
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
