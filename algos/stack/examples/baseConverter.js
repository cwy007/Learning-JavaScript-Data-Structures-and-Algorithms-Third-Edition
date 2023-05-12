const Stack = require('../stack-array');

/**
 * 将 10 进制转为 2 ～ 36 位进制
 * @param {*} decNumber 10进制数
 * @param {*} base 2 - 36
 */
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  // # ruby syntax
  // (0..9).to_a.concat(('A'..'Z').to_a).join() => "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base < 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

a = baseConverter(100345, 2)
b = baseConverter(100345, 8)
c = baseConverter(100345, 16)
d = baseConverter(100345, 35)

console.log('end-->')
