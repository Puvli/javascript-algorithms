/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    // Напишите код здесь
    const newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr2.forEach(function(item) {
            if(item === arr1[i]) {
                if(!newArr.includes(item)) {
                    newArr.push(item);
                }
            }
        })
    }

    return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []