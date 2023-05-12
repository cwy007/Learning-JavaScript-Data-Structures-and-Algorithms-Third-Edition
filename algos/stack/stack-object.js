class Stack {
  constructor() {
    this.count = 0; // 栈的大小
    this.items = {}; // 使用对象存储栈元素
  }

  /** 向栈中插入元素 */
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  /** 从栈中弹出元素 */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count]; // 保存栈顶的值
    delete this.items[this.count]; // 删除栈顶属性
    return result; // 返回栈顶值
  }

  /** 查看栈顶的值 */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  /** 将栈清空 */
  clear() {
    this.items = {};
    this.count = 0;
  }

  /** 栈的大小 */
  size() {
    return this.count;
  }

  /** 是否为空 */
  isEmpty() {
    return this.count === 0;
  }

  /** 像数组一样打印栈的内容 */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}

const stack = new Stack();

stack.push(5)
stack.push(8)
stack.push(13)

console.log('stack.size-->', stack.size())

console.log('stack.pop-->', stack.pop())

console.log('stack.size-->', stack.size())

console.log('stack.peek-->', stack.peek())

console.log('stack-->', JSON.stringify(stack))

console.log('stack.toString-->', stack.toString())

console.log('Object.getOwnPropertyNames-->', Object.getOwnPropertyNames(stack))

console.log('Object.keys-->', Object.keys(stack))

console.log('stack.items-->', stack.items)

console.log('stack.count-->', stack.count)



console.log('stack-->', stack)
