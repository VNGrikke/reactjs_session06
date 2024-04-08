"use strict";
let x1 = 123;
// dù bên ts x1 được khai báo kiểu dữ liệu undefined nhưng nếu gán cho nó 1 giá trị thif sang 
// bên js nó vẫn lấy đucợ giá trị đó và không quan tâm kiểu giữ liệu đã đucợ khao báo bên ts
// và giá trị của nó được gán là 123
let x2 = 123;
//  là biến có kiểu dữ liệu là number và giá trị của nó được gán là 123.
let x3 = "vương";
// là biến mà không chỉ định kiểu dữ liệu, TypeScript sẽ suy luận kiểu dữ liệu của nó dựa trên giá trị 
// đầu tiên gán cho biến, trong trường hợp này là number.
console.log(x1);
console.log(x2);
console.log(x3);
