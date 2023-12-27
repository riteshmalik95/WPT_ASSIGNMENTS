function func1(){
    num1 = document.getElementById("sel_01").value;
    console.log(num1);
    let result;
    switch(num1){
        case '1': result ="January"; break;
        case '2': result = "February"; break;
        case '3': result = "March"; break;
        case '4': result = "April"; break;
        case '5': result = "May"; break;
        case '6': result = "June"; break;
        case '7': result = "July"; break;
        case '8': result = "August"; break;
        case '9': result = "September"; break;
        case '10': result = "October"; break;
        case '11': result = "November"; break;
        case '12': result = "December"; break;
    }
    console.log(result);
    document.getElementById("sp1").innerHTML = result
}
function func2(){
    let num1 = document.getElementById("sel_02").value;
    console.log(num1);
    let a
    switch (num1){
        case '1' : a = "Sunday"; break;
        case '2': a = "Monday"; break;
        case '3': a = "Tuesday"; break;
        case '4': a = "Wednesday"; break;
        case '5': a = "Thursday"; break;
        case '6': a = "Friday"; break;
        case '7': a = "Saturday"; break;
    }
    console.log(a)
    document.getElementById("sp2").innerHTML = a
}