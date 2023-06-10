function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}

function checkStringPalindrome (str) {
  let normalizedStr = str.replaceAll(' ', '');
  normalizedStr = normalizedStr.toLowerCase();

  let reverseStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reverseStr += normalizedStr[i];
  }

  return reverseStr === normalizedStr;
}

function extractDigits (value) {
// цикл — для перебора полученной строки,
  const str = value.toString();
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str[i], 10);
    if (!Number.isNaN(digit) && digit >= 0 && digit <= 9) {
      newStr += digit;
    }
  }

  if (newStr === '') {
    return NaN;
  }
  return parseInt(newStr, 10);
}
