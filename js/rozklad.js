window.onload = (function(){
    let date = new Date();
    let days = document.getElementsByClassName("table__day");
    let weekDay = date.getDay();
    if (weekDay <6 & weekDay!=0){
        days[weekDay-1].classList.add("today");
        days[weekDay-1].scrollIntoView({block: "start", behavior: "smooth"});
    }


    // alert(date);
})