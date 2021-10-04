function encrypt(message) {
  const msg = message.toLowerCase();
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  let numbers;
  [numbers, chars] = toNumbers(msg, chars);

  let encrypted = '';
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 26) {
      numbers[i] += 5;
      if (numbers[i] > 25) {
        numbers[i] -= 26;
      }
    }
    encrypted += chars[numbers[i]];
  }

  return encrypted;
}

function toNumbers(msg, chars) {
  let numbers = [];

  for (let i = 0; i < msg.length; i++) {
    if (chars.indexOf(msg[i]) === -1) {
      chars += msg[i];
    }
    numbers.push(chars.indexOf(msg[i]));
  }

  return [numbers, chars];
}

export default encrypt;
