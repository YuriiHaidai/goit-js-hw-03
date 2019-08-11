"use strict";

function countTotalSalary(obj) {
  const values = Object.values(obj);
  let total = 0;

  for (let value of values) {
    total += value;
  }
  return total;
}

// Вызовы функции для проверки работоспособности

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
