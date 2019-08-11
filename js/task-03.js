"use strict";

function findBestEmployee(obj) {
  let maxTask = 0;
  let name;

  const keys = Object.keys(obj);
  for (let key of keys) {
    if (maxTask < obj[key]) {
      maxTask = obj[key];
      name = key;
    }
  }
  return name;
}

// Вызовы функции для проверки работоспособности

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
