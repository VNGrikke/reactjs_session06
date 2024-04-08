"use strict";
let firstName = "Vương";
let lastName = "Nguyễn";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
let fullName = firstName + " " + lastName;
console.log(fullName);
