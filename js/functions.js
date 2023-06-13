function checkStringLength (str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function checkStringPalindrome (str) {
  let normalizedStr = str.replaceAll(' ', '');
  normalizedStr = normalizedStr.toLowerCase();

  let reverseStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reverseStr += normalizedStr[i];
  }

  return reverseStr === normalizedStr;
}

checkStringPalindrome('топот');
checkStringPalindrome('ДовОд');
checkStringPalindrome('Кекс');
checkStringPalindrome('Лёша на полке клопа нашёл ');

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

extractDigits(2023);
extractDigits(-1);
extractDigits(1.5);
