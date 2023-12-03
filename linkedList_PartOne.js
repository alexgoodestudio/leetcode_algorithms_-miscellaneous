class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //The get syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

    get length() {
        let result = 0; 
        let node = this.head;
        
        while(node){
            result++;
            node = node.next
        }
        return result;
    }
    insertAtHead(value){
        this.head = new Node(value, this.head)
    }
}

module.exports = LinkedList;