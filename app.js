// const obj = {a: 10, b: 12, c:"hello", d:{m:7}};
// const {b, c} = obj;
// const {m}=d;
// c = "hello world"
// console.log(b,c);
// console.log(obj);

// const ar =[1,2,3,4,5];
// const[a,b] = ar;
// let c1 = 10;
// let d1 =20;
// [c1,d1] -[d1,c1];
// console.log(c1,d1)

function f(){
    throw "exception thrown"
}
try{
    f();
    console.log(`after f call`);
}catch(e){
    console.log(e)
}
console.log("OK");

