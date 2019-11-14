# Creating Queues Using Stacks (Single Link List)
The **idea** is to use a given stack and create a **queue** from it.
This can be done by 2 methods.

## Method 2: Pushing a new item:
Given a queue containing the following:
`1 --> 2`
### Push a new value 3:
We need two stacks to do this:
#### All newly arrived values are pushed on top of the first stack s1.

| Stack 1 | Stack 2 | 
|:-:|:-:|
| 1 |  |
| 2 |  |
| 3 |  |


## Time Complexity:
***O(1)*** 

### Popping:

| Stack 1 | Stack 2 | 
|:-:|:-:|
| 3 |  |
| 2 |  |
| 1 |  |

## Now the values are moved to stack 2.

| Stack 1 | Stack 2 | 
|:-:|:-:|
|  | 1 |
|  | 2 |
|  | 3 |

## The first value is popped (1).

| Stack 1 | Stack 2 | 
|:-:|:-:|
|  | 2 |
|  | 3 |

## Time Complexity:
***O(n)*** 

### Peek:
Retuning the top node is static.