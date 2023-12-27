function display(){
    let name = document.getElementById("i1").value
    // console.log(name)
    let m = document.getElementById("male").checked
    // 
    var f = document.getElementById("female").checked
    if(m){
        // console.log("male")
        let name1 = titlecase(name)
        document.getElementById("p1").innerHTML = `Welcome Mr. ${name1}`
    }
    if(f){
        // console.log("female")
        let name1 = titlecase(name)
        document.getElementById("p1").innerHTML = `Welcome Ms. ${name1}`
    }
}

function titlecase(name){
    first = name.charAt(0);
    console.log(first)
    first1 = first.toUpperCase();
    last = name.substr(1);
    last1 = last.toLowerCase();
    name = first1+last1;
    return name;
}

