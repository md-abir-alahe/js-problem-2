function milesToKm(miles){
    const kilometer = miles*1.609;

    return kilometer;
}

const myMiles = 60;
const myKilo = milesToKm(myMiles);

console.log(myKilo);