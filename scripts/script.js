var a = 10;
let b = 20;
const THHIS_IS_CONST = 30;

a = 100;
b = 200;
console.log(a);
console.log(b);


for (let index = 0; index < 10; index++) {
 var str ='hello';
 console.log(str);
 console.log(b);
    
}
console.log('-----');
console.log(str);

let nums = [1,23,12,45,214,51,25,2154,12];


console.log("" == false);

let age = 30;
let name = 'Sergei';

if(age > 18 && name == 'Boris'){
    console.log('welcome');
}else if (age > 18 ){
    console.log('1234');
}

let hello = ' hello world!!!';
for (let index = 0; index < hello.length; index++) {
    console.log(hello[index]);
}


for (let index = 0; index < 100; index+= 0.99) {
    console.log(index);
}