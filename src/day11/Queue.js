"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        var head = this.head;
        this.head = this.head.next;
        // free
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
exports.default = Queue;
var list = new Queue();
list.enqueue(5);
console.log(list);
list.enqueue(7);
list.enqueue(9);
console.log(list.deque());
console.log(list.length);
list.enqueue(11);
console.log(list.deque()); // 7
console.log(list.deque()); // 9
console.log(list.peek()); // 11
console.log(list.deque()); // 11
console.log(list.deque()); // undefined
console.log(list.length); // 0
// // just wanted to make sure that I could not blow up myself when i remove
// // everything
list.enqueue(69);
console.log(list);
console.log(list.peek()); // 69
console.log(list.length); // 1
// list.enqueue(69);
// expect(list.peek()).toEqual(69);
// expect(list.length).toEqual(1);
