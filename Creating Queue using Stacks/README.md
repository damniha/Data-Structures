# Creating Queues Using Stacks (Single Link List)
The **idea** is to use a given stack and create a **queue** from it.
This can be done by 2 methods.

## Method 1: Pushing a new item:
Given a queue containing the following:
`1 --> 2`
### Push a new value 3:
We need two stacks to do this:
#### Elements inside the queue are moved to the first stack s1.

| Stack 1 | Stack 2 | 
|:-:|:-:|
| 1 | |
| 2 | |

#### s1 moves all his elements to the 2nd stack s2 but with different order.

| Stack 1 | Stack 2 | 
|:-:|:-:|
| | 2 |
| | 1 |

#### Now 3 comes to the first empty stack.

| Stack 1 | Stack 2 | 
|:-:|:-:|
| | 2 |
| 3 | 1 |

#### All values come from the 2nd stack and are added to s1.

| Stack 1 | Stack 2 | 
|:-:|:-:|
| 1 |  |
| 2 |  |
| 3 |  |

## Pushing Time Complexity:
***O(n)*** per operation.

### Popping:
Now popping is simple; just printing the value in the top of the stack 1. This means it returns 1 in this case and remove this value from top of the stack.

## Popping Time Complexity:
***O(1)*** per operation.

### Peek:
Retuning the top node is static.

## Popping Time Complexity:
***O(1)*** per operation.

**Note:** Those two stacks can be implemented using arrays instead of single link list. Implementing the queue using arrays is much easier.