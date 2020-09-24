const str1 = 'Мама мыла раму';
const str2 = 'Собака друг человека';

function countLetters(str1, str2) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == 'а') {
      first++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (str2.charAt(i) == 'а') {
      second++;
    }
  }

  if (first > second) {
    return str1;
  } else {
    return str2;
  }
} 

console.log(countLetters(str1, str2));