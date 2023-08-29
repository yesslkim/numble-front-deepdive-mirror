import { EXCHANGE_PRICE } from '@/constants/products';

function comma(value: number | string) {
  return Number(value).toLocaleString();
}

function dallarExchangeKRW(value: number | string) {
  return Number(value) * EXCHANGE_PRICE;
}

const hofConvertToKRW = (exchangeRate: number) => (amount: number) =>
  amount * exchangeRate;

function parseToDashPhoneNumber(value: string) {
  if (value) {
    return value.replace(/^(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
  return value;
}

function parserDateFormat(newDate: Date, option: '-' | '/') {
  const date = new Date(newDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay();

  const daysOfWeekNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeekName = daysOfWeekNames[dayOfWeek];
  if (option === '-') return `${year}-${month}-${day} (${dayOfWeekName})`;
  if (option === '/') return `${year}/${month}/${day} (${dayOfWeekName})`;
  return `${year} ${month} ${day} (${dayOfWeekName})`;
}

function parseKoreanCurrency(number: number) {
  const units = ['', '만', '억', '조', '경']; // 단위 배열
  const digitNames = [
    '영',
    '일',
    '이',
    '삼',
    '사',
    '오',
    '육',
    '칠',
    '팔',
    '구'
  ]; // 숫자 이름 배열

  if (number === 0) {
    return '영원';
  }

  const numStr = number.toString();
  const digitGroups = [];

  for (let i = numStr.length; i > 0; i -= 4) {
    digitGroups.push(numStr.slice(Math.max(0, i - 4), i));
  }

  const result = digitGroups.map((group, index) => {
    const parsedGroup = parseInt(group, 10);
    if (parsedGroup === 0) {
      return '';
    }

    const digitGroupString = group
      .split('')
      .map((digit) => digitNames[parseInt(digit)])
      .join('');
    return digitGroupString + units[index];
  });

  return result.reverse().join('');
}

export default {
  comma,
  dallarExchangeKRW,
  parseToDashPhoneNumber,
  parserDateFormat,
  parseKoreanCurrency,
  hofConvertToKRW
};
