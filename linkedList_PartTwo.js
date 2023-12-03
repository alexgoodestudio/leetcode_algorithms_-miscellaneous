const LinkedList = require("./linkedList_PartOne");

const l1 = new LinkedList();
l1.insertAtHead(3);
l1.insertAtHead(1);


const l2 = new LinkedList();
l2.insertAtHead(5);
l2.insertAtHead(2);

console.log(l1, l2)

//-------------------------------------------------
var mergeTwoLists = function (node1, node2) {
    if (!node1) return node2;
    else if (!node2) return node1;
    else if (node1.value <= node2.value) {
        node1.next = mergeTwoLists(node1.next, node2);
        return node1;
    } else {
        node2.next = mergeTwoLists(node1, node2.next);
        return node2;
    }
};

console.log(mergeTwoLists(l1.head, l2.head));


