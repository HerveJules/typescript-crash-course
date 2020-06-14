type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor
    ){
    if (typeof(input1)=== 'number' && typeof(input2) === 'number' && resultConversion === 'as-number') {  
        return input1 + input2;
    }
    if (resultConversion === 'as-text') {
        return input1.toString()+input2.toString()
    }
}
const input1 = 23, input2 = ' Years ago';
const result = combine(input1, input2, 'as-text');

console.log(result);