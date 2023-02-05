function leapYearCalculartor(year){
    var remainder = year%4;
    if(remainder === 0){
       return console.log('leap year');
    }
        return console.log('not leap year');
}

const myYear = 2023;
const isLeapYear = leapYearCalculartor(myYear);
