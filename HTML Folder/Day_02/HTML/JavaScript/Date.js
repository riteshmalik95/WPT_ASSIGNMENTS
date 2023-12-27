function func1(){
    let newDate = document.getElementById("date1").value;

    let today = new Date(newDate);
    let date = today.getDate();
    let month = today.getMonth()+1;
    let year = today.getFullYear()
    
    let day1 = today.getDay()
    let day;
    switch(day1){
        case 0: day = "Sunday";break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "Wednesday";break;
        case 4: day = "Thursday";break;
        case 5: day = "Friday";break;
        case 6: day = "Saturday";break;
    }

    document.getElementById("sp1").innerHTML = `${date} / ${month} / ${year}`;
    document.getElementById("sp2").innerHTML = `${day}`;
    
    if(day1 == 0 || day1 == 6){
        document.getElementById("sp3").innerHTML = `Yes`;
    }
    else{
        document.getElementById("sp3").innerHTML = `No`;
    }
}

