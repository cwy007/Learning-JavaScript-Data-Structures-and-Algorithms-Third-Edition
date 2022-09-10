// @ts-check

/**
 * 使用对象实现栈结构
 *
 * 比数组版本的栈高效
 *
 * 1.时间复杂度：数组取值的时候，需要遍历数组；对象可以直接获取对应的值
 *
 * 2.空间复杂度：数组是一个有序序列，需要更多的内存空间
 */
export default class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    // 两种实现方式
    // 1.使用循环移除栈中的值
    /* while (!this.isEmpty()) {
        this.pop();
      } */

    // 2.恢复到初始值
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
