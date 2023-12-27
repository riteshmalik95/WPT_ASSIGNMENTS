
function f1(){
let a = parseInt(document.getElementById("id1").value);
let b = parseInt(document.getElementById("id2").value);
let op = document.getElementById("operation").value;

console.log(a);
console.log(b);
// console.log(op);


let result;
switch(op){
    case '+': result = a + b;
        break;
    case '-': result = a - b;
        break;
    case '*': result = a * b;
        break;
    case '/': result = a / b;
        break;
}
console.log(result);
let finalString = `${a} ${op} ${b} = ${result}`
document.getElementById("sp1").innerHTML = finalString;
}