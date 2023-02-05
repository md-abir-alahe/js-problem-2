function hourToMin(hour){
    const min = hour * 60;
    return min;
}

let myHour = 1;
let convertedHourToMin = hourToMin(myHour);
console.log(convertedHourToMin);