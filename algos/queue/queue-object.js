/** FIFO 先进先出 */
class Queue {
  constructor() {
    /** 控制队列的大小; 下一个新元素对应的key */
    this.count = 0;
    /** 追踪第一个元素 */
    this.lowestCount = 0;
    /** 使用对象存储元素，可以更高效获取元素 */
    this.items = {};
  }

  /** 向队列尾部添加一个或多个新的项 */
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 移除队列的第一项，并返回被移除的元素 */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    /** result 暂存队列头部的值，以便该元素被移除后将它返回 */
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  /** 返回队列中第一个元素 */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /** 是否为空 */
  isEmpty() {
    return this.size() === 0;
  }

  /** 元素个数 */
  size() {
    return this.count - this.lowestCount;
  }

  /** 清空队列 */
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  /** 覆盖默认的 toString 方法 - q: Queue {} -> '' */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    // 第一个索引的值不一定为0，所以使用 this.lowestCount + 1
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}

module.exports = Queue;

const q = new Queue()
q.enqueue(5);
q.enqueue(8);

q.dequeue();

e = q.isEmpty()

console.log('this is a breakpoint-->')

