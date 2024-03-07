

//no.1
let str="extravaganza";
let substring=str.substring(8 ,);
console.log(substring);

//no.2
let originString="The quick for jumped over the lazy dog";
let stringToAdd="eat";
let indexPosition=4;
newString=originString.slice(0,indexPosition)+ stringToAdd+ originString.slice(indexPosition);
console.log(newString);

//no.3
let flow="The quick brown fox jumps over the lazy dog";
console.log((flow.match("the")).length);
console.log((flow.match("brown")).length)

//no.4
let k="The pupils are reading in the library";
let q="are";
let a="sitting"
let n="the child was sitting on the table before it fell off";
console.log(k.includes(q));
console.log(n.includes(a));

//no.5
let x="wonderful";
let uppercase=x.toUpperCase();
console.log(uppercase);

let y="amazing";
let Lowercase=y.toLowerCase();
console.log(Lowercase);

let z="UndERneath";
let lowercase=z.toLowerCase();
console.log(lowercase);

const title="A wonderful world"
let titleCase="";
title.split("").forEach(word=>{
    const capitalizeWord=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    titleCase+=capitalizeWord+"";
})
console.log(titleCase);

