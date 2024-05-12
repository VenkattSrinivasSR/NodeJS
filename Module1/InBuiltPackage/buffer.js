var buffer1=Buffer.from("1234567");
var buffer2=Buffer.from("Hello");
var result=buffer2.copy(buffer1,2);
console.log(result.toString());//Always gives output in bytes
console.log(buffer1.toString());

buffer1.toString();
buffer2.toString();

console.log(Buffer.concat([buffer1,buffer2]).toString())
console.log(buffer1.equals(buffer2));
console.log(Buffer.compare(buffer1,buffer2));

//
