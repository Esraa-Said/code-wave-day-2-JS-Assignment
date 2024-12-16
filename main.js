// Question-1
let num1 = Number(prompt("Enter The First Number: "));
let num2 = Number(prompt("Enter The Second Number: "));
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
console.log("Question-1 Output Arithmetic Operations");
console.log("Sum = ", sum);
console.log("Sub = ", sub);
console.log("Mult = ", mul);
console.log("Div = ", div);
console.log("mod = ", mod);
console.log("-------------------------------------------");


// Question-2
let length = Number(prompt("Enter The Length: "));
let width = Number(prompt("Enter The Width: "));
console.log("Question-2 Output Area of Rectangle");
let area = length * width;
console.log("Area: ", area);
console.log("-------------------------------------------");


// Question-3
let radius = Number(prompt("Enter The Radius: "));
console.log("Question-3 Output Circle");
let diameter = radius * 2;
let circumference = Math.PI * diameter;
let areaC = Math.PI * radius * radius;
console.log("Diameter: ", diameter);
console.log("Circumference: ", circumference);
console.log("Area: ", areaC);
console.log("-------------------------------------------");
