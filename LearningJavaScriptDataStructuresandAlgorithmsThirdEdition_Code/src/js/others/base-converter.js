// @ts-check
import Stack from '../data-structures/stack';

/** 十进制转二进制 */
export function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber; // 十进制
  let rem; // 余数
  let binaryString = ''; // 二进制字符串

  // 十进制数大于0
  while (number > 0) {
    rem = Math.floor(number % 2); // 余数
    remStack.push(rem); // 将于数入栈
    number = Math.floor(number / 2); // 对商向下取整
  }

  // 栈不为空
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  } //

  return binaryString; // 二进制字符串
}

/**
 * 将十进制转换为 0..36 为基数的进制
 * @param {*} decNumber 10进制
 * @param {*} base 0..36
 * @returns string 对应进制 0..36 的字符串，大于10的数使用大写字母表示
 */
export function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 0 - 36
  let number = decNumber;
  let rem;
  let baseString = '';

  // 对基数范围进行限制
  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  // 获取余数
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  // 对应基数的字符串
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
