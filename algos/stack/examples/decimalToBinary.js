const StackArray = require('../stack-array')

/** 10进制转2进制 */
function decimalToBinary(decNumber) {
  const remStack = new StackArray()
  let number = decNumber; // 十进制数
  let rem; // 余数
  let binaryString = ''; // 二进制字符串

  while (number > 0) { // number/2 商不为零
    rem = Math.floor(number % 2); // 获取余数
    remStack.push(rem); // 余数入栈
    number = Math.floor(number / 2); // 获取新的十进制商
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString(); // 拼接二进制字符串
  }

  return binaryString;
}

let a = decimalToBinary(233);
let b = decimalToBinary(10);
let c = decimalToBinary(1000);
let d = decimalToBinary(100345);

console.log('end-->')

// 使用 vscode编辑器进行调试，可以在这个位置打断点，查看本地变量的值
decimalToBinary(666);

// 10

// rem = 0
// d = 5

// rem = 1
// d = 2

// rem = 0
// d = 1

// rem = 1
// d = 0

// // 二进制：低位 -> 高位； eg：可以借助10进制来理解 100/10
// s = [0, 1, 0, 1]
// b = 1010 // 二进制结果
