// Домашнее задание 2.29 "Нужно больше функций"
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function checkStringPalindrome(str) {
  let normalizedStr = str.replaceAll(' ', '');
  normalizedStr = normalizedStr.toLowerCase();

  let reverseStr = '';

  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reverseStr += normalizedStr[i];
  }

  return reverseStr === normalizedStr;
}

checkStringPalindrome('Лёша на полке клоПа нашёл ');

function extractDigits(value) {
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

extractDigits('Фестиваль -20.23');

// Домашнее задание 5.16. "Функции возвращаются"
const convertToMinutes = (time) => {

  const [hours, minutes] = time.split(':');

  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
};

const checkMeetingTime = (workDayStart, workDayEnd, meetingStartTime, meetingDuration) => {
  const meetingEndTime = convertToMinutes(meetingStartTime) + meetingDuration;

  return convertToMinutes(meetingStartTime) >= convertToMinutes(workDayStart) && meetingEndTime <= convertToMinutes(workDayEnd);
};

checkMeetingTime('08:00', '17:30', '14:00', 90);
checkMeetingTime('8:0', '10:0', '8:0', 120);
checkMeetingTime('08:00', '14:30', '14:00', 90);
checkMeetingTime('14:00', '17:30', '08:0', 90);
checkMeetingTime('8:00', '17:30', '08:00', 900);
