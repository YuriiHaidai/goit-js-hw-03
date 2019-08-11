"use strict";

function countProps(obj) {
  let counter = 0;
  for (const entri in obj) {
    counter += 1;
  }
  return counter;
}

// Вызовы функции для проверки работоспособности

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
