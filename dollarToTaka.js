function dollarToTaka(dollar){
    const taka = dollar*107.39;

    return taka;
}

const myDollar = 130;
const myTaka = dollarToTaka(myDollar);

console.log(myTaka);