function add( n1: number, n2: number, showResult: boolean, phraseResult: string){
    if (showResult) {
        console.log( phraseResult + n1 + n2)
    }else{
        return n1 +n2;
    }
}
const number1 = 23, number2 = +'4'
const printResult = true;
const result = add(number1, number2, printResult,'Result is:');