let num1: number = 10; // Khai báo biến num1 với kiểu dữ liệu number và gán giá trị là 10
let num2: number = 5; // Khai báo biến num2 với kiểu dữ liệu number và gán giá trị là 5
let num3: number; // Khai báo biến num3 với kiểu dữ liệu number

num3 = num1 + num2;
console.log("Phép cộng:", num3); 
num3 = num1 - num2;
console.log("Phép trừ:", num3); 
num3 = num1 * num2;
console.log("Phép nhân:", num3); 
num3 = num1 / num2;
console.log("Phép chia:", num3); 

num1 = "Hello"; // TypeScript sẽ báo lỗi vì không thể gán chuỗi cho một biến đã được khai báo với kiểu dữ liệu là number

// Thay đổi kiểu dữ liệu của biến num2 thành boolean
num2 = true; // TypeScript sẽ báo lỗi vì không thể gán giá trị boolean cho một biến đã được khai báo với kiểu dữ liệu là number
