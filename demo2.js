const num=[11,22,34,122,55,66,33];
const even=num.filter((i)=>(i%2==0))
console.log("num=",num);
console.log("even=",even);
const square=even.map((i)=>(i*i))
console.log("square",square);
const sum=square.reduce((i,s)=>(i+s))
console.log("sum=",sum);