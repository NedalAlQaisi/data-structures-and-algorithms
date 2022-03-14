# Singly Linked List
A linked list is typically used for collecting sequences of objects requiring the need for efficient addition and removal of elements from the middle of the sequence.
## Challenge

### Linked-list
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node
Create Linked List class
Create insert function to insert data in node in linked list
Create include function to search about data in linked list
Create toString function to return string
## Approach & Efficiency

- insert --> Big O(1)
- include --> Big O(n)
- toString --> Big O(n)

## API

`insert` : it inserts a value to the beginning of the linked list if the linked list is empty it or not.

`include` : it checks if the value of each node is exist it will return true if it is not it will return false until it reaches the last node. aslo if the linked list was empty it will return false.

`toString` : it will check if each node has a value if it has it it will store the value in a variable as a for each node until the loop reaches the last node. when we rech the last node we add NULL to the variable which has the node values in a string.

### [Back to the HOME](../../README.md)