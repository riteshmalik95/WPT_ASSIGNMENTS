function func1(){
    var curr = document.getElementById("text1").value
    // console.log(curr)
    var first = document.getElementById("s1").value
    // console.log(first)
    var next = document.getElementById("s2").value
    // console.log(next)


if(first == "dollar" && next == "pound"){
    let result = 0.80 * curr
    let output = `${curr} Dollars = ${result} Pounds`
    document.getElementById("sp1").innerHTML = output
}
if(first == "dollar" && next == "euro"){
    let result = 0.93 * curr
    let output = `${curr} Dollars = ${result} Euro`
    document.getElementById("sp1").innerHTML = output
}
if(first == "dollar" && next == "rupee"){
    let result = (83.43) * curr
    let output = `${curr} Dollars = ${result} Rupees`
    document.getElementById("sp1").innerHTML = output
}
if(first == "pound" && next == "euro"){
    let result = 1.16  * curr
    let output = `${curr} Pounds = ${result} Euro`
    document.getElementById("sp1").innerHTML = output
}
if(first == "pound" && next == "dollar"){
    let result = 1.25 * curr
    let output = `${curr} Pounds = ${result} Dollars`
    document.getElementById("sp1").innerHTML = output
}
if(first == "pound" && next == "rupee"){
    let result = 104.69 * curr
    let output = `${curr} Pounds = ${result} Rupees`
    document.getElementById("sp1").innerHTML = output
}
if(first == "euro" && next == "rupee"){
    let result = 89.88 * curr
    let output = `${curr} Euro = ${result} Rupees`
    document.getElementById("sp1").innerHTML = output
}
if(first == "euro" && next == "pound"){
    let result = 0.86 * curr
    let output = `${curr} Euro = ${result} Pounds`
    document.getElementById("sp1").innerHTML = output
}
if(first == "euro" && next == "dollar"){
    let result = 1.08 * curr
    let output = `${curr} Euro = ${result} Dollars`
    document.getElementById("sp1").innerHTML = output
}
if(first == "rupee" && next == "dollar"){
    let result = 0.012 * curr
    let output = `${curr} Rupees = ${result} Dollars`
    document.getElementById("sp1").innerHTML = output
}
if(first == "rupee" && next == "euro"){
    let result = 0.011 * curr
    let output = `${curr} Rupees = ${result} Euro`
    document.getElementById("sp1").innerHTML = output
}
if(first == "rupee" && next == "pound"){
    let result = 0.0096 * curr
    let output = `${curr} Rupees = ${result} Pounds`
    document.getElementById("sp1").innerHTML = output
}
if(first == "rupee" && next == "rupee"){
    let result = 1 * curr
    let output = `${curr} Rupees`
    document.getElementById("sp1").innerHTML = output
}
if(first == "pound" && next == "pound"){
    let result = 1 * curr
    let output = `${curr} pounds`
    document.getElementById("sp1").innerHTML = output
}
if(first == "dollar" && next == "dollar"){
    let result = 1 * curr
    let output = `${curr} Dollars`
    document.getElementById("sp1").innerHTML = output
}
if(first == "euro" && next == "euro"){
    let result = 1 * curr
    let output = `${curr} Euro`
    document.getElementById("sp1").innerHTML = output
}
}