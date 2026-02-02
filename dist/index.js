"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello ${person}, Good Morning.`;
}
const username = "Nazil Dhalwala";
// console.log(greet(username));
// Type Innotation
let name = "Musharraf Dhalwala";
let chaiOrder = 50;
// Type Inference
let name2 = "John Doe";
name2 = "Elon musk";
// name2 = 500; // Will give error as Ts have inferred that type of name2 is string
let num = 45;
num = 892;
// num = "Shahenaz Dhal"; // Will give error
let num2 = Math.random() > 0.50 ? 40 : '45';
// Now it is giving number or string
/* Union Type */
let subscriber = 10;
let subscriber2 = "1M";
let apiRequest = "pending";
// apiRequest = "done"; // Won't allow
apiRequest = "success";
const orders = ['12', '20', '28', '42'];
let currentOrder;
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
    }
}
console.log(currentOrder);
//# sourceMappingURL=index.js.map