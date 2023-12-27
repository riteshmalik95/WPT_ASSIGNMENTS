console.log("Yashika")
console.log("Manjushree")
x = 43;
console.log(x)
x = 56;
console.log(x)
x = "Hey!!"
console.log(x)
if(x%2==0){
    console.log("Even")
}
else{
    console.log("Odd")

}

// while(x<=100){
//     console.log(x);
//     x++;
// }

switch(x){
    case 56: console.log("Number is 56")
        break;
    default: console.log("Not 56");
    // break;
}

function add(x, y){
    return x+y
}

result = add();
console.log("add()", result)
result = add(1);
console.log("add(1)", result)
result = add(10, 20);
console.log("add(10, 20)", result)
result = add(10, 20, 30);
console.log("add(10, 20, 30)", result)
result = add("Yashika", " Manjushree");
console.log("add('Yashika", " Manjushree')", result)
result = add("Yashika ", 22);
console.log("add('Yashika ', 22)", result)

a = [10, 20, 30, 40];
console.log(a)

console.log(x, typeof(x), a, typeof(a))