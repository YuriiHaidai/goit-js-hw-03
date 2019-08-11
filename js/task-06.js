"use strict";

function calculateTotalPrice(arr, productName) {
  let TotalPrice;

  for (const product of arr) {
    if (product.name === productName) {
      TotalPrice = product.price * product.quantity;
    }
  }
  return TotalPrice;
}

// Вызовы функции для проверки работоспособности

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
