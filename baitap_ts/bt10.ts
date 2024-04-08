function addition(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }

    let numX: number = typeof x === 'string' ? parseFloat(x) : x as number;
    let numY: number = typeof y === 'string' ? parseFloat(y) : y as number;

    return numX + numY;
}

function subtraction(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }

    let numX: number = typeof x === 'string' ? parseFloat(x) : x as number;
    let numY: number = typeof y === 'string' ? parseFloat(y) : y as number;

    return numX - numY;
}

function multiplication(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }

    let numX: number = typeof x === 'string' ? parseFloat(x) : x as number;
    let numY: number = typeof y === 'string' ? parseFloat(y) : y as number;

    return numX * numY;
}

function division(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && isNaN(Number(x))) {
        return "Tham số x không hợp lệ";
    }
    if (typeof y === 'string' && isNaN(Number(y))) {
        return "Tham số y không hợp lệ";
    }

    let numX: number = typeof x === 'string' ? parseFloat(x) : x as number;
    let numY: number = typeof y === 'string' ? parseFloat(y) : y as number;

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
