function findLeapYear(myYears){
    const leapYearArray = [];
    for(let i=0; i<myYears.length; i++){
        const index = i;
        const element = myYears[index];
        
        if((element%4===0 && element%100!==00) || element%400===0){
            console.log(index, element);
            leapYearArray.push(element);
        }
    }
    return leapYearArray;
    console.log(leapYearArray)
}




const myYears = [2023, 2024, 2025, 2028, 2030, 1900, 1600];
console.log('My years array',myYears);
findLeapYear(myYears);

