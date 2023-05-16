const Queue = require('../queue-object');

/**
 * 击鼓传花
 *
 * @elementsList 人员名单
 * @num 循环的次数
 */
function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedlist = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // 人员入队
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // 传花，将队头元素发到队尾
    }
    eliminatedlist.push(queue.dequeue()); // 被淘汰
  }

  return {
    eliminated: eliminatedlist,
    winner: queue.dequeue(),
  }
}

elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
num = 8;

a = hotPotato(elements, num);

chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
times = 9;

b = hotPotato(chars, times);


console.log('breakpoint-->')
