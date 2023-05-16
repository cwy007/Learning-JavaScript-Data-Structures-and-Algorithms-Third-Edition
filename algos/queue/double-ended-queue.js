// deque
/** 双端队列 double-ended queue */
class DoubleEndedQueue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /** 在双端队列的前端添加元素 */
  addFront(element) {
    // 为空时
    if (this.isEmpty()) {
      this.addBack(element);
    // 有元素被移除时
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    // 不为空，且没有元素被移除时
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]; // 类似数组，将整个元素右移
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  /** 在双端队列的后端添加元素 */
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 在队列的前端移除第一个元素 */
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  /** 从双端队列的后端移除第一个元素 */
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /** 返回双端队列前端的第一个元素 */
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /** 返回双端队列后端的第一个元素 */
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

module.exports = DoubleEndedQueue;

const deque = new DoubleEndedQueue();

const a = deque.isEmpty();

deque.addBack('John')
deque.addBack('Jack')

const b = deque.isEmpty();

const c = deque.toString()

deque.addBack('Camila')

const d = deque.toString()

const e = deque.size()

const f = deque.isEmpty()

deque.removeFront()

g = deque.toString()

deque.removeBack()

h = deque.toString()

deque.addFront('John')

i = deque.toString()

console.log('breakpoint-->')
