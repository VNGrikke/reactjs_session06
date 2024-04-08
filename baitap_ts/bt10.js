"use strict";
function addition(x, y) {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }
    let numX = typeof x === 'string' ? parseFloat(x) : x;
    let numY = typeof y === 'string' ? parseFloat(y) : y;
    return numX + numY;
}
function subtraction(x, y) {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }
    let numX = typeof x === 'string' ? parseFloat(x) : x;
    let numY = typeof y === 'string' ? parseFloat(y) : y;
    return numX - numY;
}
function multiplication(x, y) {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }
    let numX = typeof x === 'string' ? parseFloat(x) : x;
    let numY = typeof y === 'string' ? parseFloat(y) : y;
    return numX * numY;
}
function division(x, y) {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }
    let numX = typeof x === 'string' ? parseFloat(x) : x;
    let numY = typeof y === 'string' ? parseFloat(y) : y;
    if (numY === 0) {
        return "Không thể chia cho 0";
    }
    return numX / numY;
}
console.log("cộng:", addition(5, 3));
console.log("trừ:", subtraction(5, 3));
console.log("nhân:", multiplication(5, 3));
console.log("chia:", division(5, 3));
console.log("cộng với kiểu dữ liệu string:", addition("5", "3"));
console.log("trừ với kiểu dữ liệu string:", subtraction("5", "3"));
console.log("nhân với kiểu dữ liệu string:", multiplication("5", "3"));
console.log("chia với kiểu dữ liệu string:", division("5", "3"));
console.log("phép tính không hợp lệ:", addition("abc", "3"));
console.log("phép tính không hợp lệ:", division(5, "0"));
