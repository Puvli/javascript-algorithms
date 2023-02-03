/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  // Напишите код здесь
  if (str !== "" && str !== " ") {
    const newStr = str.split(" ");
    //   console.log(newStr);
    const arr = newStr.map(function (item) {
      if (item !== "") {
        return item[0].toUpperCase() + item.slice(1, item.length);
      }
    });
    return arr.join(" ");
  } else {
    return str;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"

