/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  // Напишите код здесь
  let newStr1 = [];
  let newStr2 = [];
  for (let i of str1.toLowerCase().split("")) {
    if (!newStr1.includes(i)) {
      newStr1.push(i);
    }
  }

  for (let j of str2.toLowerCase().split("")) {
    if (!newStr2.includes(j)) {
      newStr2.push(j);
    }
  }
  //   console.log(newStr1.sort().join(""), newStr2.sort().join(""));
  return newStr1.sort().join("") === newStr2.sort().join("");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("finder", "Friend")); // true
console.log(anagram("hello", "bye")); // false
