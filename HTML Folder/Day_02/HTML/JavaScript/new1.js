function f1(){
    let a = document.getElementById("i1").value
    let u = document.getElementById("upper").checked
    let l = document.getElementById("lower").checked
    let t = document.getElementById("title").checked

    if(u){
        console.log(a.toUpperCase());
    }
    else if(l){
        console.log(a.toLowerCase())
    }
    else if(t){
        let x = a.charAt;
        console.log(x);
    }
    else{
        let x = a.charAt[0];
        console.log(x);
    }

    console.log(a)
    console.log(u)
    console.log(l)
    console.log(t)
}