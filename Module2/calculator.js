var input1 = Number(process.argv[2])
var input2 = Number(process.argv[4])  // or + symbol before or parseInt()  can also be used
var operator= process.argv[3]

console.log(input1, operator, input2)

var result;

if(operator=="+"){
    result = input1+input2;
} else if(operator=="-"){
    result = input1-input2;
}else if(operator=="*"){
    result = input1*input2;
}
console.log(result)

