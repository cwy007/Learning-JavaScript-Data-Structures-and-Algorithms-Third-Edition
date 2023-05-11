/**
 * LIFO 后进先出
 */
class Stack {
  constructor() {
    this.items = [];
  }

  /** 添加一个或几个新元素到栈顶 */
  push(element) {
    this.items.push(element);
  }

  /** 移除栈顶的元素，同时返回被删除的元素 */
  pop() {
    return this.items.pop();
  }

  /** 返回栈顶的元素，不对栈做任何修改 */
  peek() {
    return this.items[this.items.length - 1];
  }

  /** 如何栈里没有任何元素就返回true，否则返回false */
  get isEmpty() {
    return this.items.length === 0;
  }

  /** 移除栈里的所有元素 */
  clear() {
    this.items = [];
  }

  /** 返回栈里的元素个数 */
  get size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log('stack-->', stack.peek());
console.log('stack.size-->', stack.size)
stack
