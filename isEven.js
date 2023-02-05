function isEven(givenNumber){
    const remainder = givenNumber%2;

    switch(remainder){
        case 0:
            return true;
            

        default:
            return false;
            
    }

}

const myNumber = 10;
const checker = isEven(myNumber);

console.log(checker);