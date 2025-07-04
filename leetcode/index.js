function Node(val) {
    this.val = val;
    this.next = null;
}

var myLinkedList = function () {
    this.head = null;
    this.size = 0;
}

myLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

myLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head == null) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next
        }
        curr.next = newNode;
    }
    this.size++;
}

myLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }

    return curr.val
};

myLinkedList.prototype.addAtIndex = function (index, val) {
    let newNode = new Node(val);
    if (index == 0) {
        this.addAtHead(val); return;
    } else if (index == this.size) {
        this.addAtTail(val); return;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode
    }

    this.size++;
};

myLinkedList.prototype.removeAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;

    if (index == 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
}


myLinkedList.prototype.printList = function () {
    let curr = this.head;
    let result = '';
    while (curr) {
        result += curr.val + ' -> ';
        curr = curr.next;
    }
    result += 'null';
    console.log(result);
};


let list = new myLinkedList();

list.addAtHead(1);         // ! 1
list.printList();

list.addAtHead(2);         // ! 2 -> 1
list.printList();

list.addAtHead(3);         // ! 3 -> 2 -> 1
list.printList();

list.addAtHead(4);         // ! 4 -> 3 -> 2 -> 1
list.printList();

list.addAtTail(5);         // ! 4 -> 3 -> 2 -> 1 -> 5
list.printList();

console.log("Get index 1:", list.get(1));  // ! Should return 3

list.addAtIndex(2, 99);    // ! Insert 99 at index 2 → 4 -> 3 -> 99 -> 2 -> 1 -> 5
list.printList();

list.removeAtIndex(3);     // ! Remove index 3 → 4 -> 3 -> 99 -> 1 -> 5
list.printList();

list.removeAtIndex(0);     // ! Remove head → 3 -> 99 -> 1 -> 5
list.printList();

list.removeAtIndex(list.size - 1); // ! Remove tail → 3 -> 99 -> 1
list.printList();
