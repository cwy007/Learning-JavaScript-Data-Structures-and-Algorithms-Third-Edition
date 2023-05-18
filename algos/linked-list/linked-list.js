function defaultEquals(a, b) {
  return a === b;
}

class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  /** 向链表尾部添加一个新元素 */
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node; // 添加的是第一个元素
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next; // 获取最后一个元素
      }
      // 将 next 赋值为 node，建立链接
      current.next = node;
    }
    this.count++;
  }

  /** 向链表的特定位置插入一个新元素 */
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++; // 更新链表长度
      return true;
    }
    return false;
  }

  /** 返回链表中特定位置的元素 */
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index && current != null; i++) {
        current = current.next;
      }
      return current; // 表示 index 处的元素
    }
    return undefined;
  }

  /** 从链表中移除一个元素 */
  remove(element) {}

  /** 返回元素在链表中的索引 */
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    rerurn -1;
  }

  /** 从链表的特定位置移除一个元素 */
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // 移除第一项
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next // index 处的节点
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  /** 链表中是否包含元素 */
  isEmpty() {}

  /** 链表包含的元素个数 */
  size() {}

  /** 整个链表的字符串 */
  toString() {}

}


const list = new LinkedList();

list.push(15)

list.push(10)

a = list.getElementAt(2)
b = list.getElementAt(1)
list.insert(14, 1)

c = list.indexOf(14)


console.log('breakpoint-->')
