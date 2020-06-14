function add(num1: number, num2: number):number{
    return num1 + num2;
}

function printResult(n1: number): void{
    ++n1;
    console.log(n1)
}

printResult(add(8,9))

function addHandle(num1: number, num2: number, done: (num: number)=> void){
    const result = num1 + num2;
    done( result );
}

addHandle(3, 4, (just)=>{
    console.log(just);
})


// console.log(add(3, 5))