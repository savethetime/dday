let now = new Date();
let firstDay = new Date("2022-07-15");
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(1000*60*60*24));
document.querySelector("#accent").innerText = passedDay + "Days";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);



function calcDate(days) {
    let future = toFirst + days * (1000 * 60 * 60 *24);
let someday = new Date(future);
let year = someday.getFullYear();
let month = someday.getMonth() + 1;
let date = someday.getDate();
document.querySelector("#date" + days).innerText = year+"." + month +"."+ date +" ";
}

