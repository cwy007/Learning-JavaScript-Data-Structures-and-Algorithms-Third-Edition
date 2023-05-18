const Deque = require('../double-ended-queue');
/**
 * 回文检查器
 *
 * 回文定义：
 * 正反都能读通的单词、词组、数或一系列字符的序列，eg: madam or racecar
 *
 *@aString string
 *@returns boolean
 */
function palindromeChecker(aString) {
  // 检查参数是否合法
  if (
    aString === undefined
    || aString === null
    || (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // 去除空格
  let isEqual = true; // 长度为1时为true
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront(); // 从队头取一个字符
    lastChar = deque.removeBack(); // 从队尾取一个字符
    if (firstChar !== lastChar) {
      isEqual = false; // 判断是否为回文
    }
  }

  return isEqual;
}

a = palindromeChecker('a')

b = palindromeChecker('aa')

c = palindromeChecker('kayak')

d = palindromeChecker('level')

e = palindromeChecker('Was it a car or a cat I saw')

f = palindromeChecker('Step on no pets')

console.log('breakpoint-->')

// 事件循环
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
